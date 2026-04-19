# openemis-mcp

**Free, read-only MCP bridge between AI agents and any OpenEMIS instance.**

Built on the published **OpenEMIS Core API** (reference: [api.openemis.org/core](https://api.openemis.org/core)) and verified against the public demo at [demo.openemis.org/core](https://demo.openemis.org/core).

Ask in plain English:

> *"How many current students are at Avory Primary?"*

The agent plans the calls, this MCP delivers the data:

> *"Avory Primary School (code P1002) has 553 currently enrolled students."*

No code. No JSON. Just ask.

---

## What's included (free, MIT)

| Tool | What it does |
|---|---|
| `openemis_health` | Ping the configured instance — real login round-trip |
| `openemis_list_domains` | List the 9 curated domains (Attendance, Assessment, Staff, Student…) |
| `openemis_discover` | Topic → up to 30 scoped endpoints. Keeps conversations small |
| `openemis_list_playbooks` | List all 24 curated workflow guides |
| `openemis_get_playbook` | Load a playbook by id — full steps, resources, gotcha notes |
| `openemis_get` | Unified read: list or singleton, any resource, any filter |

**24 curated playbooks** covering attendance, assessment, student profiles, staff profiles, infrastructure, meals, risk dashboards, class reports, timetables, and more — each verified against the v5 manifest at 100% resource coverage.

**Translations available:** Russian (11 of 24 playbooks). Spanish, Arabic, and Hindi in progress.

> ✏️ **Write operations** (creating/updating records in OpenEMIS) require **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. This free server is intentionally read-only — `post`, `put`, and `delete` are not available.

## What's in Pro

`openemis-mcp-pro` adds write tools (`openemis_create`, `openemis_update`, `openemis_delete`), workflow playbook execution, audit logging, browser auth (auto-captures credentials and base URL from active browser session), and priority support.  
→ **Commercial licence:** khindol.madraimov@gmail.com

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

---

## Playbooks

24 curated workflow guides — see [docs/playbooks/](docs/playbooks/):

| # | Playbook | Domain | Translations |
|---|---|---|---|
| 1 | [Count Vacant Positions](docs/playbooks/count-vacant-positions.md) | Staff | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) |
| 2 | [Mark Student Attendance](docs/playbooks/mark-student-attendance.md) | Attendance | [RU](docs/playbooks/mark-student-attendance.ru.md) · [ES](docs/playbooks/mark-student-attendance.es.md) |
| 3 | [Mark Staff Attendance](docs/playbooks/mark-staff-attendance.md) | Staff | [RU](docs/playbooks/mark-staff-attendance.ru.md) · [ES](docs/playbooks/mark-staff-attendance.es.md) |
| 4 | [View Student Timetable](docs/playbooks/view-student-timetable.md) | Schedule | [RU](docs/playbooks/view-student-timetable.ru.md) |
| 5 | [Student Dashboard](docs/playbooks/student-dashboard.md) | Student | [RU](docs/playbooks/student-dashboard.ru.md) |
| 6 | [Generate Student Report Card PDF](docs/playbooks/generate-student-report-card-pdf.md) | Report | [RU](docs/playbooks/generate-student-report-card-pdf.ru.md) · [ES](docs/playbooks/generate-student-report-card-pdf.es.md) |
| 7 | [Enrol a New Student](docs/playbooks/enroll-new-student.md) | Student | [RU](docs/playbooks/enroll-new-student.ru.md) · [ES](docs/playbooks/enroll-new-student.es.md) |
| 8 | [Record a Behaviour Incident](docs/playbooks/record-behavior-incident.md) | Student | [RU](docs/playbooks/record-behavior-incident.ru.md) · [ES](docs/playbooks/record-behavior-incident.es.md) |
| 9 | [Submit Exam Marks](docs/playbooks/submit-exam-marks.md) | Assessment | [RU](docs/playbooks/submit-exam-marks.ru.md) |
| 10 | [Institution Summary](docs/playbooks/institution-summary.md) | Institution | [RU](docs/playbooks/institution-summary.ru.md) |
| 11 | [Generate Institution Statistics PDF](docs/playbooks/generate-institution-statistics-pdf.md) | Report | [RU](docs/playbooks/generate-institution-statistics-pdf.ru.md) · [ES](docs/playbooks/generate-institution-statistics-pdf.es.md) |
| 12 | [View Latest Attendance](docs/playbooks/view-latest-attendance.md) | Attendance | |
| 13 | [View Student Profile](docs/playbooks/view-student-profile.md) | Student | [RU](docs/playbooks/view-student-profile.ru.md) |
| 14 | [View Student Marks](docs/playbooks/view-student-marks.md) | Assessment | [RU](docs/playbooks/view-student-marks.ru.md) |
| 15 | [View Class Report](docs/playbooks/view-class-report.md) | Report | [RU](docs/playbooks/view-class-report.ru.md) |
| 16 | [View Timetable](docs/playbooks/view-timetable.md) | Schedule | [RU](docs/playbooks/view-timetable.ru.md) |
| 17 | [View Full Institution Profile](docs/playbooks/view-institution-profile.md) | Institution | |
| 18 | [View Full Class Profile](docs/playbooks/view-class-profile.md) | Student | |
| 19 | [View a Staff Member's Full Profile](docs/playbooks/view-staff-profile.md) | Staff | [RU](docs/playbooks/view-staff-profile.ru.md) |
| 20 | [Enhance Student Profile](docs/playbooks/enhance-student-profile.md) | Student | [ES](docs/playbooks/enhance-student-profile.es.md) |
| 21 | [View Institution Infrastructure](docs/playbooks/view-institution-infrastructure.md) | Institution | |
| 22 | [View Institution Meals](docs/playbooks/view-institution-meals.md) | Institution | |
| 23 | [View Student Risk Profile and Welfare Cases](docs/playbooks/view-student-risks.md) | Student | |
| 24 | [View Institution Risk Summary and Alert Rules](docs/playbooks/view-institution-risks.md) | Institution | |

---

## Architecture

```
Agent (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 read tools + 24 playbooks
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{resource}
```

Domain-scoped discovery keeps conversations small — `openemis_discover("attendance")` returns the 20–30 endpoints relevant to attendance, not all 1,350.

---

## Docs

- [Resource Reference](docs/resources.md) — all 645 resources with method availability
- [Playbooks](docs/playbooks/) — 24 workflow guides (Russian translations available for 11)
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — the AI team that built this

---

## Licence

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*Not affiliated with OpenEMIS or its maintainers. Third-party bridge to the public Core API. Credentials stay on your machine.*
