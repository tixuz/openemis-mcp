/**
 * Secret scrubbing utilities — the single source of truth for redaction.
 *
 * This free read-only MCP doesn't store JWTs (openemis-mcp-pro does), but an
 * upstream error body can still echo the bearer token we sent, or a record
 * field can legitimately contain a pasted token that an admin left in a note.
 * Either way, that text can reach the model via tool output and — via a
 * hostile follow-up prompt — get exfiltrated.
 *
 * Two layers:
 *
 *   1. `redact(value)` — deep-clone an object/array with sensitive KEYS
 *      replaced by "[redacted]". Catches the obvious case: "the payload has a
 *      password/token field".
 *
 *   2. `scrubSecrets(text)` — regex-mask JWT-shaped strings and common
 *      bearer-token preambles inside arbitrary text. Catches the leaky case:
 *      "an upstream error message or a free-text record field echoes a token".
 *
 * Mirrors openemis-mcp-pro/src/auth/redact.ts so both repos share identical
 * masking rules — any future tweak lands in both.
 */

/**
 * Keys that must NEVER appear in any user-facing surface. Matched case-
 * INSENSITIVELY, so `JWT`, `Jwt`, `Authorization` all redact. The list
 * intentionally over-covers — false positives cost nothing, false negatives
 * leak credentials.
 */
const REDACT_KEYS_LOWER = new Set([
  // passwords
  "password",
  "pwd",
  "passwd",
  "pass",
  // raw secrets / keys
  "secret",
  "api_key",
  "apikey",
  "api-key",
  "client_secret",
  "client-secret",
  // bearer tokens — the JWT path
  "jwt",
  "token",
  "access_token",
  "refresh_token",
  "id_token",
  "bearer",
  "authorization",
  "auth",
  "cookie",
  "set-cookie",
  // session handles
  "session",
  "session_id",
  "sessionid",
  // generic credential envelopes
  "credentials",
  "credential",
]);

/** Placeholder that appears in redacted output. Short, unmistakable. */
export const REDACTED = "[redacted]";

/**
 * Deep-clone `value` replacing any entry whose key matches REDACT_KEYS_LOWER
 * (case-insensitively) with the REDACTED sentinel. Also recurses into any
 * string value via `scrubSecrets` so a JWT embedded inside a free-text field
 * (e.g. a note pasted into `description`) still gets masked.
 *
 * Leaves primitives, null, and undefined as-is (aside from string scrubbing).
 */
export function redact(value: unknown): unknown {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") return scrubSecrets(value);
  if (typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(redact);

  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    if (REDACT_KEYS_LOWER.has(k.toLowerCase())) {
      out[k] = REDACTED;
    } else {
      out[k] = redact(v);
    }
  }
  return out;
}

/**
 * Mask token-shaped substrings inside a free-text string. Covers:
 *   - JWT "xxx.yyy.zzz" where each segment is base64url and the first segment
 *     starts with `eyJ` (the literal JSON `{"` in base64url). This is the
 *     pattern OpenEMIS returns.
 *   - `Authorization: Bearer <anything long>` in headers/error messages.
 *   - `Bearer <token>` on its own.
 *
 * Returns the input verbatim when it contains none of these patterns, so
 * it's cheap to apply everywhere.
 *
 * Why regex and not parse-then-serialize: upstream errors arrive as opaque
 * strings (`HTTP 401 body text`), response bodies for error endpoints are
 * not guaranteed to be JSON, and we want one function that works on both
 * "thrown error messages" and "dumped response bodies".
 */
export function scrubSecrets(text: string): string {
  if (!text) return text;

  let out = text;

  // JWT: eyJ<base64url>.<base64url>.<base64url>
  //
  // A JWT is three base64url segments joined by dots. The first segment
  // always starts with `eyJ` because its decoded form is `{"...` (JSON
  // header). We require at least a few chars per segment to avoid false
  // positives on things like "eyJ.a.b".
  out = out.replace(
    /eyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}/g,
    REDACTED
  );

  // Authorization: Bearer <anything>
  out = out.replace(
    /(authorization\s*[:=]\s*bearer\s+)[^\s"']+/gi,
    `$1${REDACTED}`
  );

  // Bare "Bearer <token>" preamble
  out = out.replace(/(bearer\s+)[A-Za-z0-9_.\-]{16,}/gi, `$1${REDACTED}`);

  return out;
}
