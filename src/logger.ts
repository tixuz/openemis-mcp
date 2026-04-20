/**
 * Verbose tool-call logger for openemis-mcp.
 *
 * OFF by default. Enabled via OPENEMIS_LOG_VERBOSE=1.
 * Output is JSONL — one entry per line — to a file (OPENEMIS_LOG_FILE) or stderr.
 *
 * Privacy: tool results contain real tenant data (student/staff names, IDs, etc.).
 * Enable only on instances you own, or with explicit user consent.
 * Secret-looking keys (password, authorization, api_key, token, secret) are
 * redacted from logged payloads, but domain PII is NOT redacted — that would
 * defeat the point of capturing answers for tuning.
 */

import { appendFileSync } from "fs";

export interface LogEntry {
  [key: string]: unknown;
}

export interface Logger {
  readonly enabled: boolean;
  log(entry: LogEntry): void;
}

const SECRET_KEY = /^(password|authorization|api[_-]?key|apikey|token|secret|bearer)$/i;

/**
 * Recursively copy a value, replacing values under obviously-secret keys
 * with "[redacted]". Does NOT redact domain data — only credential-shaped keys.
 */
function redact(value: unknown, depth = 0): unknown {
  if (depth > 8) return value;
  if (Array.isArray(value)) return value.map((v) => redact(v, depth + 1));
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = SECRET_KEY.test(k) ? "[redacted]" : redact(v, depth + 1);
    }
    return out;
  }
  return value;
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value);
  } catch {
    return JSON.stringify({ _unserializable: String(value) });
  }
}

export function createLogger(opts: {
  verbose: boolean;
  file: string;
}): Logger {
  if (!opts.verbose) {
    return { enabled: false, log: () => {} };
  }

  const writeLine = opts.file
    ? (line: string) => {
        try {
          appendFileSync(opts.file, line + "\n", "utf8");
        } catch {
          process.stderr.write(line + "\n");
        }
      }
    : (line: string) => process.stderr.write(line + "\n");

  if (opts.file) {
    process.stderr.write(
      `[openemis-mcp] verbose logging enabled → ${opts.file}\n`
    );
  } else {
    process.stderr.write("[openemis-mcp] verbose logging enabled → stderr\n");
  }

  return {
    enabled: true,
    log(entry) {
      const line = safeStringify({
        ts: new Date().toISOString(),
        ...(redact(entry) as LogEntry),
      });
      writeLine(line);
    },
  };
}

/**
 * Wrap a tool handler so each call logs a tool_call entry on entry,
 * a tool_result entry on resolve, and a tool_error entry on throw.
 * Latency is measured at the wrapper boundary.
 */
export function instrumented<A, R>(
  logger: Logger,
  tool: string,
  handler: (args: A) => Promise<R>
): (args: A) => Promise<R> {
  if (!logger.enabled) return handler;

  return async (args: A) => {
    const start = Date.now();
    logger.log({ type: "tool_call", tool, args });
    try {
      const result = await handler(args);
      logger.log({
        type: "tool_result",
        tool,
        ok: true,
        latency_ms: Date.now() - start,
        result,
      });
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      logger.log({
        type: "tool_error",
        tool,
        ok: false,
        latency_ms: Date.now() - start,
        error: message,
      });
      throw err;
    }
  };
}
