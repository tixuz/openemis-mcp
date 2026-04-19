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

**Translations available:** Russian · Spanish · Hindi · Arabic — all 24 playbooks in all four languages.

> ✏️ **Write operations** (creating/updating records in OpenEMIS) require **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. This free server is intentionally read-only — `post`, `put`, and `delete` are not available.

## What's in Pro

`openemis-mcp-pro` adds write tools, remote hosting, and ChatGPT compatibility on top of this free read-only server.

| | **Free** | **Individual Pro** | **Institution Pro** | **Country Pro** |
|---|---|---|---|---|
| Read tools (all 645 resources) | ✅ | ✅ | ✅ | ✅ |
| 27 curated playbooks + translations | ✅ | ✅ | ✅ | ✅ |
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

> 🌐 **Remote / server install:** [openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro) adds an HTTP server mode — install once on Oracle Always Free and every AI assistant (Claude Code, Cursor, **ChatGPT**) connects by URL with no per-machine setup. See the [ChatGPT Teacher Guide](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) for how to let teachers mark attendance via ChatGPT.

---

## Playbooks

24 curated workflow guides — see [docs/playbooks/](docs/playbooks/):

| # | Playbook | Domain | Translations |
|---|---|---|---|
| 1 | [Count Vacant Positions](docs/playbooks/count-vacant-positions.md) | Staff | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [Mark Student Attendance](docs/playbooks/mark-student-attendance.md) | Attendance | [RU](docs/playbooks/mark-student-attendance.ru.md) · [ES](docs/playbooks/mark-student-attendance.es.md) · [HI](docs/playbooks/mark-student-attendance.hi.md) · [AR](docs/playbooks/mark-student-attendance.ar.md) |
| 3 | [Mark Staff Attendance](docs/playbooks/mark-staff-attendance.md) | Staff | [RU](docs/playbooks/mark-staff-attendance.ru.md) · [ES](docs/playbooks/mark-staff-attendance.es.md) · [HI](docs/playbooks/mark-staff-attendance.hi.md) · [AR](docs/playbooks/mark-staff-attendance.ar.md) |
| 4 | [View Student Timetable](docs/playbooks/view-student-timetable.md) | Schedule | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 5 | [Student Dashboard](docs/playbooks/student-dashboard.md) | Student | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 6 | [Generate Student Report Card PDF](docs/playbooks/generate-student-report-card-pdf.md) | Report | [RU](docs/playbooks/generate-student-report-card-pdf.ru.md) · [ES](docs/playbooks/generate-student-report-card-pdf.es.md) · [HI](docs/playbooks/generate-student-report-card-pdf.hi.md) · [AR](docs/playbooks/generate-student-report-card-pdf.ar.md) |
| 7 | [Enrol a New Student](docs/playbooks/enroll-new-student.md) | Student | [RU](docs/playbooks/enroll-new-student.ru.md) · [ES](docs/playbooks/enroll-new-student.es.md) · [HI](docs/playbooks/enroll-new-student.hi.md) · [AR](docs/playbooks/enroll-new-student.ar.md) |
| 8 | [Record a Behaviour Incident](docs/playbooks/record-behavior-incident.md) | Student | [RU](docs/playbooks/record-behavior-incident.ru.md) · [ES](docs/playbooks/record-behavior-incident.es.md) · [HI](docs/playbooks/record-behavior-incident.hi.md) · [AR](docs/playbooks/record-behavior-incident.ar.md) |
| 9 | [Submit Exam Marks](docs/playbooks/submit-exam-marks.md) | Assessment | [RU](docs/playbooks/submit-exam-marks.ru.md) · [ES](docs/playbooks/submit-exam-marks.es.md) · [HI](docs/playbooks/submit-exam-marks.hi.md) · [AR](docs/playbooks/submit-exam-marks.ar.md) |
| 10 | [Institution Summary](docs/playbooks/institution-summary.md) | Institution | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 11 | [Generate Institution Statistics PDF](docs/playbooks/generate-institution-statistics-pdf.md) | Report | [RU](docs/playbooks/generate-institution-statistics-pdf.ru.md) · [ES](docs/playbooks/generate-institution-statistics-pdf.es.md) · [HI](docs/playbooks/generate-institution-statistics-pdf.hi.md) · [AR](docs/playbooks/generate-institution-statistics-pdf.ar.md) |
| 12 | [View Latest Attendance](docs/playbooks/view-latest-attendance.md) | Attendance | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 13 | [View Student Profile](docs/playbooks/view-student-profile.md) | Student | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 14 | [View Student Marks](docs/playbooks/view-student-marks.md) | Assessment | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 15 | [View Class Report](docs/playbooks/view-class-report.md) | Report | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 16 | [View Timetable](docs/playbooks/view-timetable.md) | Schedule | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 17 | [View Full Institution Profile](docs/playbooks/view-institution-profile.md) | Institution | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 18 | [View Full Class Profile](docs/playbooks/view-class-profile.md) | Student | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 19 | [View a Staff Member's Full Profile](docs/playbooks/view-staff-profile.md) | Staff | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 20 | [Enhance Student Profile](docs/playbooks/enhance-student-profile.md) | Student | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 21 | [View Institution Infrastructure](docs/playbooks/view-institution-infrastructure.md) | Institution | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 22 | [View Institution Meals](docs/playbooks/view-institution-meals.md) | Institution | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 23 | [View Student Risk Profile and Welfare Cases](docs/playbooks/view-student-risks.md) | Student | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 24 | [View Institution Risk Summary and Alert Rules](docs/playbooks/view-institution-risks.md) | Institution | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
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

> 🖥️ **Server / HTTP mode** (install once on Oracle, connect from anywhere including ChatGPT) is available in **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## Docs

- [Resource Reference](docs/resources.md) — all 645 resources with method availability
- [Playbooks](docs/playbooks/) — 24 workflow guides in English, Russian, Spanish, Hindi, and Arabic
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — the AI team that built this

---

## Licence

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*Not affiliated with OpenEMIS or its maintainers. Third-party bridge to the public Core API. Credentials stay on your machine.*
