/**
 * Tests for the free repo's secret-scrubbing layer.
 *
 * Mirrors openemis-mcp-pro/src/auth/redact.test.ts so a divergence between
 * the two masks is immediately visible on review. Both repos MUST mask
 * identical shapes — otherwise a user migrating from free to pro (or vice
 * versa) would see different redaction behavior for the same record.
 */

import { describe, it, expect } from "vitest";
import { redact, scrubSecrets, REDACTED } from "./redact.js";

describe("redact — key-based deep clone", () => {
  it("redacts known credential keys case-insensitively at any depth", () => {
    const input = {
      Password: "hunter2",
      API_KEY: "sk_live_xxx",
      nested: { JWT: "eyJhbGci.payload.sig", token: "t-1" },
      list: [{ authorization: "Bearer abc" }, { harmless: "ok" }],
    };
    const out = redact(input) as Record<string, unknown>;

    expect(out.Password).toBe(REDACTED);
    expect(out.API_KEY).toBe(REDACTED);
    const nested = out.nested as Record<string, unknown>;
    expect(nested.JWT).toBe(REDACTED);
    expect(nested.token).toBe(REDACTED);
    const list = out.list as Record<string, unknown>[];
    expect(list[0].authorization).toBe(REDACTED);
    expect(list[1].harmless).toBe("ok");
  });

  it("leaves primitives, null and undefined untouched", () => {
    expect(redact(42)).toBe(42);
    expect(redact(true)).toBe(true);
    expect(redact(null)).toBe(null);
    expect(redact(undefined)).toBe(undefined);
  });

  it("does not mutate the input object", () => {
    const input = { password: "secret", keep: "ok" };
    const before = JSON.stringify(input);
    redact(input);
    expect(JSON.stringify(input)).toBe(before);
  });

  it("catches all credential key variants we care about", () => {
    const input: Record<string, string> = {};
    for (const k of [
      "password", "pwd", "passwd", "pass",
      "secret", "api_key", "apikey", "api-key", "client_secret", "client-secret",
      "jwt", "token", "access_token", "refresh_token", "id_token",
      "bearer", "authorization", "auth", "cookie", "set-cookie",
      "session", "session_id", "sessionid",
      "credentials", "credential",
    ]) {
      input[k] = "SENSITIVE";
    }
    const out = redact(input) as Record<string, string>;
    for (const [k, v] of Object.entries(out)) {
      expect(v, `key=${k}`).toBe(REDACTED);
    }
  });
});

describe("scrubSecrets — regex mask on free text", () => {
  it("masks a JWT anywhere in the text", () => {
    const s =
      "Upstream said: token was eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.AAAAAAA.BBBBBBB and expired";
    const out = scrubSecrets(s);
    expect(out).not.toContain("eyJhbGci");
    expect(out).toContain(REDACTED);
    expect(out).toContain("expired");
  });

  it("masks Authorization: Bearer <token> in error dumps", () => {
    const s = "Headers: {Authorization: Bearer abcdef-xyz-123}";
    const out = scrubSecrets(s);
    expect(out).toMatch(/Authorization: Bearer \[redacted\]/i);
  });

  it("masks bare Bearer <token> preamble", () => {
    const s = "auth header was bearer eyJaaaa.bbbbb.ccccc or similar";
    const out = scrubSecrets(s);
    expect(out.toLowerCase()).toContain("bearer [redacted]");
  });

  it("leaves non-token text untouched", () => {
    const s = "Nothing sensitive here — just a normal error.";
    expect(scrubSecrets(s)).toBe(s);
  });

  it("masks multiple JWTs in one string", () => {
    const s =
      "first eyJAAAAA.BBBBBB.CCCCCC then eyJDDDDD.EEEEEE.FFFFFF done";
    const out = scrubSecrets(s);
    expect(out).not.toContain("eyJAAAAA");
    expect(out).not.toContain("eyJDDDDD");
    const count = (out.match(new RegExp(REDACTED.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
