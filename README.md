---
title: "openemis-mcp — AI bridge for OpenEMIS school management"
description: "Free, read-only MCP server that connects AI assistants to OpenEMIS school management. Query student attendance, risks, staff, and 678 resources."
keywords:
  - OpenEMIS
  - school management system
  - education management
  - student attendance
  - student risks
  - MCP server
---

<p align="center">
  <img src="assets/logo.png" alt="openemis-mcp logo — AI bridge for OpenEMIS school management" width="320">
</p>

# openemis-mcp — AI bridge for OpenEMIS school management

**Free, read-only MCP bridge between AI agents and any OpenEMIS school.**

[**OpenEMIS**](https://www.openemis.org) is a free, open-source **school management information system** developed by UNESCO and KORDIT. It runs the day-to-day administration of every kind of educational institution — kindergartens, primary schools, secondary schools, secondary vocational institutions, technical colleges, and universities — managing students, staff, attendance, assessment, infrastructure, meals, scholarships, examinations, training, and ministry-level reporting. This MCP gives AI agents read-only access to the data in any OpenEMIS school so you can ask questions in plain English and get answers in seconds.

Built on the published **OpenEMIS Core API** (reference: [api.openemis.org/core](https://api.openemis.org/core)) and verified against the public demo at [demo.openemis.org/core](https://demo.openemis.org/core).

> **What this is:** openemis-mcp is a free MCP server that connects AI assistants (Claude, Cursor, Codex) to the OpenEMIS school management system. It exposes 678 resources — students, student attendance, student risks, staff, exams, infrastructure — across 26 curated read-only playbooks, plus 14 redirect stubs for write operations.

Ask in plain English:

> *"How many current students are at Avory Primary?"*

The agent plans the calls, this MCP delivers the data:

> *"Avory Primary School has 97 currently enrolled students across 6 classes."*

No code. No JSON. Just ask.

---

## What's included (free, MIT)

| Tool | What it does |
|---|---|
| `openemis_health` | Ping the configured instance — real login round-trip |
| `openemis_list_domains` | List the 9 curated domains (Attendance, Assessment, Staff, Student…) |
| `openemis_discover` | Topic → up to 30 scoped endpoints. Keeps conversations small |
| `openemis_list_playbooks` | List all 40 playbooks — 26 read-only here, 14 stubs that redirect to mcp-pro |
| `openemis_get_playbook` | Load a playbook by id — full steps, resources, gotcha notes |
| `openemis_get` | Unified read: list or singleton, any resource, any filter |

**26 read-only playbooks** covering attendance, assessment, student profiles, staff profiles, infrastructure, meals, risk dashboards, class reports, timetables, audit logs, school accreditation / registration, **admission and enrolment queue state**, and a primer on how the OpenEMIS workflow plugin powers every multi-step approval — each verified against the v5 manifest at 100% resource coverage. **14 additional playbook stubs** are discoverable here but redirect to **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)** for the actual write/auth steps.

**Translations:** [Русский](docs/translations/README.ru.md) · [Español](docs/translations/README.es.md) · [हिन्दी](docs/translations/README.hi.md) · [العربية](docs/translations/README.ar.md) — the original 17 view playbooks also translated in all four languages; 9 newer playbooks (added in v1.1.0 for Core 5.10.0, plus the two workflow playbooks) are English-only for now.

> ✏️ **Write operations** (creating/updating records in OpenEMIS) require **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. This free server is intentionally read-only — `post`, `put`, and `delete` are not available.

## What's in Pro

`openemis-mcp-pro` adds write tools, remote hosting, and ChatGPT compatibility on top of this free read-only server.

| | **Free** | **Individual Pro** | **Institution Pro** | **Country Pro** |
|---|---|---|---|---|
| Read tools (all 678 resources, Core 5.13.0) | ✅ | ✅ | ✅ | ✅ |
| 26 read playbooks (17 × 5 languages + 9 EN) | ✅ | ✅ | ✅ | ✅ |
| 14 write / auth playbooks (mark-attendance, enrol, set-accreditation…) | stub | ✅ | ✅ | ✅ |
| stdio mode (Claude Code, Cursor, Cline) | ✅ | ✅ | ✅ | ✅ |
| **HTTP server mode** (Oracle / VPS — install once, connect by URL) | — | ✅ | ✅ | ✅ |
| **OpenAPI adapter** (ChatGPT Custom GPT, any REST client) | — | ✅ | ✅ | ✅ |
| Direct write — single record | — | ✅ | ✅ | ✅ |
| Institution audit trail | — | — | ✅ | ✅ |
| Workflow route execution | — | — | ✅ | ✅ |
| Institution-admin approval gate | — | — | ✅ | ✅ |
| Batch ops within one institution | — | — | ✅ | ✅ |
| Multi-institution batch ops | — | — | — | ✅ |
| Ministry approval gates | — | — | — | ✅ |
| Cross-institution oversight | — | — | — | ✅ |

**HTTP server mode** lets you install Pro once on an [Oracle Always Free](https://www.oracle.com/cloud/free/) ARM instance and connect from any device — no per-machine setup. The built-in OpenAPI adapter means teachers can use **ChatGPT** (or any AI assistant) to mark attendance and look up student records by importing a single schema URL. See the [ChatGPT Teacher Guide](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) for step-by-step setup.

→ **Pricing:** khindol.madraimov@gmail.com

---

## Install

Requires **Node 22+**.

```bash
git clone https://github.com/tixuz/openemis-mcp.git
cd openemis-mcp
npm install
npm run build
cp .env.example .env
$EDITOR .env
```

### Configure

```env
OPENEMIS_BASE_URL=https://demo.openemis.org/core
OPENEMIS_USERNAME=admin
OPENEMIS_PASSWORD=your_password
OPENEMIS_API_KEY=your_api_key
```

### Smoke test

```bash
set -a && source .env && set +a
node scripts/smoke-login.mjs
```

### Register with Claude Code

```bash
claude mcp add openemis \
  --env OPENEMIS_BASE_URL="https://your-instance/core" \
  --env OPENEMIS_USERNAME="…" \
  --env OPENEMIS_PASSWORD="…" \
  --env OPENEMIS_API_KEY="…" \
  -- node "$(pwd)/dist/server.js"
```

Works with any MCP-compatible client: Claude Code, Cursor, Cline, Codex (via [gemmy-and-qwenny](https://github.com/tixuz/gemmy-and-qwenny)), or any stdio MCP client.

### Verbose logging (optional)

Capture every tool call and its response as JSONL — useful for debugging, tuning playbooks, or sharing a bug report.

```bash
# stderr (visible in your MCP client's log panel)
OPENEMIS_LOG_VERBOSE=1 node dist/server.js

# write to a file
OPENEMIS_LOG_VERBOSE=1 OPENEMIS_LOG_FILE=/tmp/openemis.jsonl node dist/server.js
```

Each line is a JSON object: `{ts, type:"tool_call"|"tool_result"|"tool_error", tool, args?, result?, latency_ms, ...}`. Credential-shaped keys (`password`, `authorization`, `api_key`, `token`, `secret`) are redacted automatically.

> ⚠️ **Privacy:** `tool_result` entries contain the actual OpenEMIS data returned to the agent — student names, staff IDs, enrollment details. Enable only on instances you own, or with explicit consent. Default is OFF.

> 🌐 **Remote / server install:** [openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro) adds an HTTP server mode — install once on Oracle Always Free and every AI assistant (Claude Code, Cursor, **ChatGPT**) connects by URL with no per-machine setup. See the [ChatGPT Teacher Guide](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) for how to let teachers mark attendance via ChatGPT.

---

## Playbooks

24 read-only workflow guides — see [docs/playbooks/](docs/playbooks/). Write-side playbooks (mark attendance, enrol a student, set school accreditation, etc.) are discoverable here as stubs that point at **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

### Read playbooks (school data lookups)

| # | Playbook | Domain | Translations |
|---|---|---|---|
| 1 | [Count Vacant Positions](docs/playbooks/count-vacant-positions.md) | Staff | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [View Student Timetable](docs/playbooks/view-student-timetable.md) | Schedule | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 3 | [Student Dashboard](docs/playbooks/student-dashboard.md) | Student | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 4 | [Institution Summary](docs/playbooks/institution-summary.md) | Institution | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 5 | [View Latest Attendance](docs/playbooks/view-latest-attendance.md) | Attendance | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 6 | [View Student Profile](docs/playbooks/view-student-profile.md) | Student | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 7 | [View Student Marks](docs/playbooks/view-student-marks.md) | Assessment | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 8 | [View Class Report](docs/playbooks/view-class-report.md) | Report | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 9 | [View Timetable](docs/playbooks/view-timetable.md) | Schedule | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 10 | [View Full Institution Profile](docs/playbooks/view-institution-profile.md) | Institution | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 11 | [View Full Class Profile](docs/playbooks/view-class-profile.md) | Student | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 12 | [View a Staff Member's Full Profile](docs/playbooks/view-staff-profile.md) | Staff | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 13 | [Enhance Student Profile](docs/playbooks/enhance-student-profile.md) | Student | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 14 | [View Institution Infrastructure](docs/playbooks/view-institution-infrastructure.md) | Institution | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 15 | [View Institution Meals](docs/playbooks/view-institution-meals.md) | Institution | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 16 | [View Student Risk Profile and Welfare Cases](docs/playbooks/view-student-risks.md) | Student | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 17 | [View Institution Risk Summary and Alert Rules](docs/playbooks/view-institution-risks.md) | Institution | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |

### New in v1.2.0 (OpenEMIS Core 5.13.0)

- **List-filtering via the native `IN` operator (POCOR-9660).** `_conditions=<field>:IN(1,2,3)` filters any field by a value list — including non-PK and composite-PK resources — so a class roster is one call: query `institution-class-students` by `institution_class_id`, then `security-users` with `_conditions=id:IN(101,102,103)`. `params.ids="1,2,3"` now collapses to a single `?id=1,2,3` round-trip **by default** (set `OPENEMIS_CORE_IN_OPERATOR=off` only for pre-5.10 cores).
- **Stricter filter validation (POCOR-9697).** Filtering on a field that does not exist on a resource now returns HTTP 400 instead of being silently ignored — use exact field names from the [Resource Reference](docs/resources.md).
- **3 new read-only Runtime resources (POCOR-9694):** `tasks`, `task-jobs`, `task-failures` — the OpenEMIS Runtime queue / job / failure projection. **678 resources · 3,361 endpoints** total.

### New in v1.1.0 (OpenEMIS Core 5.10.0)

Loaded via `openemis_get_playbook` — full English content in `data/playbooks.json`. Translations and per-playbook markdown docs land in a follow-up release.

| # | Playbook | Domain | What it does |
|---|---|---|---|
| 18 | `diagnose-alert-delivery` | Alerts | Answer "did this alert actually go out?" — walks the POCOR-9509 dispatch pipeline. |
| 19 | `view-school-accreditation` | Institution | Read institution-accreditations records (POCOR-9610), derive Active/Expired/Future status. |
| 20 | `view-school-registration` | Institution | Read institution-registrations history with valid_from..valid_to windows. |
| 21 | `view-institution-budget` | Institution | List institution-budgets per academic period, resolve budget types. |
| 22 | `query-student-absence-history` | Attendance | Aggregate absences via institution-student-absences + absence-days. |
| 23 | `query-user-activity-audit-log` | Security | Query the POCOR-9697 user_activities per-field audit trail. |
| 24 | `view-class-roster` | Institution | Walk institution-classes → institution-class-students → student details. |
| 25 | `view-admission-and-enrolment-queue-state` | Workflow | Answer "where is this future student in the admission/enrolment queue?" — resolves status_id → workflow_step name, current assignee, full transition history. |
| 26 | `explain-workflow-system` | Workflow | Primer for "why does this approval take 4 steps?" — explains workflow_models, steps, statuses, transitions, role-based assignees, and why the plugin makes approval chains configurable per tenant. |

### Write / auth playbooks (stubs — install [mcp-pro](https://github.com/tixuz/openemis-mcp-pro))

`mark-student-attendance`, `mark-staff-attendance`, `enroll-new-student`, `record-behavior-incident`, `submit-exam-marks`, `generate-student-report-card-pdf`, `generate-institution-statistics-pdf`, `add-institution-asset`, `record-infrastructure-repair`, `add-meal-programme`, `resolve-my-identity`, `set-school-accreditation`, `set-school-registration`, `mark-student-meal-participation` — all redirect agents to **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**, which ships `openemis_create` / `openemis_update` / `openemis_delete` and per-user authentication.
---

## Core compatibility

Tested against **OpenEMIS Core 5.13.0** (master, June 2026). 5.7 – 5.12 deployments are also supported — the public REST surface is backwards-compatible.

### Capability flag — POCOR-9660 multi-id GET

`openemis_get` accepts `params.ids = "1,2,3"` for batch lookups. Core 5.10+ carries POCOR-9660 (`?id=1,2,3` support in `CrudApiController`), so the handler collapses the batch into a single round-trip **by default**. Pointing at an older Core (5.7 – 5.9) that lacks the native operator? Force the legacy parallel fan-out:

```bash
OPENEMIS_CORE_IN_OPERATOR=off
```

For composite-PK or view resources — where `ids` does not apply — use `_conditions=<field>:IN(1,2,3)` instead; it filters any field by a value list and works regardless of this flag.

## Architecture

```
Agent (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 read tools + 26 read playbooks + 14 redirect stubs
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{resource}   (3,361 endpoints across 678 resources)
```

Domain-scoped discovery keeps conversations small — `openemis_discover("attendance")` returns the 20–30 endpoints relevant to attendance, not all 3,361.

> 🖥️ **Server / HTTP mode** (install once on Oracle, connect from anywhere including ChatGPT) is available in **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## Docs

- [Resource Reference](docs/resources.md) — all 678 resources with method availability (Core 5.13.0)
- [Playbooks](docs/playbooks/) — 17 view playbooks in 5 languages + 9 newer English-only playbooks (translations follow)
- [GLOSSARY.md](docs/GLOSSARY.md) — key terms: OpenEMIS, MCP, attendance, student risks, and more
- [FAQ.md](docs/FAQ.md) — common questions about school management with OpenEMIS MCP
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — the AI team that built this

---

## Licence

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*Not affiliated with OpenEMIS or its maintainers. Third-party bridge to the public Core API. Credentials stay on your machine.*
