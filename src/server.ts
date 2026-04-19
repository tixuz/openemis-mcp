#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { loadConfig } from "./config.js";
import { OpenemisClientImpl } from "./openemis.js";
import {
  OPENEMIS_GET_TOOL,
  openemisGetInputSchema,
  createOpenemisGetHandler,
} from "./tools/crud.js";
import {
  openemisListDomainsSpec,
  openemisListDomainsInputSchema,
  openemisListDomainsHandler,
  openemisDiscoverSpec,
  openemisDiscoverInputSchema,
  openemisDiscoverHandler,
  openemisListPlaybooksSpec,
  openemisListPlaybooksInputSchema,
  openemisListPlaybooksHandler,
  openemisGetPlaybookSpec,
  openemisGetPlaybookInputSchema,
  openemisGetPlaybookHandler,
} from "./tools/describe.js";

const config = loadConfig();
const client = new OpenemisClientImpl(config);

const server = new McpServer({
  name: "openemis-mcp",
  version: "0.3.0",
});

// ─── Health ────────────────────────────────────────────────────────────────

server.tool(
  "openemis_health",
  "Check whether the configured OpenEMIS API endpoint is reachable and credentials are valid. Does a real login round-trip.",
  {},
  async () => {
    try {
      await client.getToken();
      return {
        content: [{ type: "text", text: `OpenEMIS is reachable at ${config.baseUrl} — login succeeded.` }],
        structuredContent: { ok: true, baseUrl: config.baseUrl, login: "ok" },
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return {
        content: [{ type: "text", text: `OpenEMIS health check failed at ${config.baseUrl}: ${message}` }],
        structuredContent: { ok: false, baseUrl: config.baseUrl, error: message },
      };
    }
  }
);

// ─── Main: register read tools ─────────────────────────────────────────────

async function main(): Promise<void> {
  // Read tool
  server.tool(
    OPENEMIS_GET_TOOL.name,
    OPENEMIS_GET_TOOL.description,
    openemisGetInputSchema.shape,
    createOpenemisGetHandler(client)
  );

  // Discovery tools
  server.tool(
    openemisListDomainsSpec.name,
    openemisListDomainsSpec.description,
    openemisListDomainsInputSchema.shape,
    async () => ({ content: await openemisListDomainsHandler() })
  );

  server.tool(
    openemisDiscoverSpec.name,
    openemisDiscoverSpec.description,
    openemisDiscoverInputSchema.shape,
    async (args: { topic: string }) => ({ content: await openemisDiscoverHandler(args) })
  );

  server.tool(
    openemisListPlaybooksSpec.name,
    openemisListPlaybooksSpec.description,
    openemisListPlaybooksInputSchema.shape,
    async () => ({ content: await openemisListPlaybooksHandler() })
  );

  server.tool(
    openemisGetPlaybookSpec.name,
    openemisGetPlaybookSpec.description,
    openemisGetPlaybookInputSchema.shape,
    async (args: { id: string }) => ({ content: await openemisGetPlaybookHandler(args) })
  );

  // ── Extension point ──────────────────────────────────────────────────────
  // openemis-mcp-pro registers write tools here:
  //   import { registerWriteTools } from 'openemis-mcp-pro';
  //   registerWriteTools(server, client, config);
  // ────────────────────────────────────────────────────────────────────────

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("[openemis-mcp] Fatal error:", err);
  process.exit(1);
});
