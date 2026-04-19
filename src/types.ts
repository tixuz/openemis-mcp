/**
 * OpenemisClient interface for HTTP communication with OpenEMIS v5 API.
 * All methods handle automatic API versioning and authentication.
 */
/**
 * Read-only HTTP client for OpenEMIS v5 API.
 * Only GET is exposed — write methods (post/put/delete) are not available
 * in the free version. Use openemis-mcp-pro for write access.
 */
export interface OpenemisClient {
  get(path: string, query?: Record<string, unknown>): Promise<unknown>;
  getToken(): Promise<string>;
}

/**
 * Standard query parameters for OpenEMIS API list/filter operations.
 * Nested or advanced filters use the `conditions` object with _conditions syntax.
 */
export interface QueryParams {
  /** Comma-separated list of fields to include in response */
  fields?: string[];

  /** Complex filter conditions (typically serialized as JSON for _conditions param) */
  conditions?: Record<string, unknown>;

  /** Query scope for multi-tenancy or context filtering */
  scope?: string;

  /** Field name to sort by */
  orderby?: string;

  /** Sort direction: ascending or descending */
  order?: "asc" | "desc";

  /** Page number for pagination (1-indexed) */
  page?: number;

  /** Records per page limit */
  limit?: number;

  /** Additional parameters passed through to the API */
  [extra: string]: unknown;
}

/**
 * Manifest row describing an OpenEMIS API endpoint.
 * Parsed from manifest.jsonl to understand available operations.
 */
export interface ManifestRow {
  /** Resource name or domain (e.g., 'Student', 'Institution') */
  resource: string;

  /** HTTP method */
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

  /** API path template (may contain {id} placeholders) */
  path: string;

  /** Human-readable description of the operation */
  summary: string;

  /** Operation category for tool routing */
  kind: "LIST" | "GET" | "CREATE" | "UPDATE" | "DELETE" | "CUSTOM";

  /** Source file path in OpenEMIS codebase */
  source_file: string;
}

/**
 * Error response structure from OpenEMIS API.
 * HTTP 4xx/5xx responses are parsed into this shape.
 */
export interface OpenemisErrorPayload {
  /** High-level error key */
  error?: string;

  /** Human-readable error message */
  message?: string;

  /** Detailed description or validation errors */
  description?: string;

  /** Additional context or nested error data */
  data?: unknown;

  /** HTTP status code */
  status: number;
}
