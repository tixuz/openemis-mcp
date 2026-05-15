---
title: "OpenEMIS MCP — Frequently Asked Questions"
description: "Common questions about OpenEMIS and the openemis-mcp server: school management, student attendance, student risks, staff data, and more."
keywords:
  - OpenEMIS
  - school management system
  - education management
  - student attendance
  - student risks
  - MCP server
---

# OpenEMIS MCP — Frequently Asked Questions

This FAQ answers common questions about OpenEMIS and the openemis-mcp server. For deeper definitions, see the [GLOSSARY](GLOSSARY.md). For install instructions, see the [README](../README.md).

---

## What is OpenEMIS?

OpenEMIS (Open Education Management Information System) is a free, open-source school management information system developed by UNESCO and KORDIT. It is used in kindergartens, primary schools, secondary schools, vocational institutions, and universities across multiple countries to manage students, staff, attendance, assessment, infrastructure, meals, scholarships, and ministry-level reporting. The system is available at [openemis.org](https://www.openemis.org) and the public API reference is at [api.openemis.org/core](https://api.openemis.org/core).

## What is the OpenEMIS MCP server?

openemis-mcp is a free, open-source MCP (Model Context Protocol) server that connects AI assistants — Claude, Cursor, Codex, Cline — to any OpenEMIS school management instance. It exposes 6 read tools and 26 read-only playbooks that let an AI agent answer questions about students, staff, attendance, marks, infrastructure, and risks in plain English — no code or JSON required. Install instructions are in the [README](../README.md).

## What does this MCP let me ask about?

You can ask about any data in your OpenEMIS instance that falls under the 675 resources the server exposes. Common questions include: student enrolment counts, student attendance records, exam marks and report cards, staff positions and vacancies, school infrastructure (buildings, WASH), meal programmes, student risk scores and early-warning alerts, class timetables, and institutional profiles. Run `openemis_list_playbooks` to see all available guided workflows.

## How does it help with school management?

Instead of opening a browser, navigating the OpenEMIS UI, and exporting data manually, you ask a question in plain English and the MCP server handles the API calls. For example: *"How many students in Grade 5 were absent more than 10 days this term?"* — the agent finds the right playbook, runs the queries, and returns the answer in seconds. This speeds up school management reporting, parent queries, and data checks.

## How is student attendance tracked?

OpenEMIS tracks student attendance by exception — only absence and late-arrival events are stored in `student-attendance-marked-records`. A student with no row on a marked day is implicitly present. The `institution-class-attendance-records` resource shows which days had roll taken (MARKED, PARTIAL_MARKED, or NOT_MARKED). The [View Latest Attendance playbook](playbooks/view-latest-attendance.md) walks through the full reading logic including holiday exclusions.

## How are student risks identified?

OpenEMIS calculates a composite risk score per student per academic period using configurable criteria — typically attendance rate, academic marks, and behaviour incidents. Each criterion has a threshold and weight. The `institution-student-risks` resource holds the aggregate score; `student-risks-criterias` holds the per-criterion breakdown. Administrators can configure alert rules that automatically notify staff when a student's risk exceeds a threshold. See the [View Student Risks playbook](playbooks/view-student-risks.md).

## What is the difference between admission and enrolment?

In OpenEMIS, **admission** is the process of a prospective student applying to and being accepted by a school — managed through `institution-student-admission` and a workflow approval chain. **Enrolment** is the formal registration of an accepted student in a class for a specific academic period — stored in `institution-student-enrolment`. Both are workflow-controlled: the status moves through steps (Pending → Approved → Enrolled) with role-based approvers. See the `view-admission-and-enrolment-queue-state` playbook for how to check where a student is in this process.

## Which education levels does OpenEMIS support?

OpenEMIS supports the full range of education levels: **kindergarten** (pre-primary), **primary school**, **secondary school**, **secondary vocational institutions**, **technical colleges**, and **universities**. Each institution is assigned an institution type and education levels in the system. The [Institution Summary playbook](playbooks/institution-summary.md) shows how to retrieve a school's active grades and type.

## Is this free?

Yes — both OpenEMIS (the school management system) and openemis-mcp (this MCP server) are free and open-source under the MIT licence. This server is intentionally read-only: POST, PUT, and DELETE operations are not available. Write operations (marking attendance, enrolling students, recording behaviour incidents, etc.) require **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**, which also adds HTTP server mode for ChatGPT compatibility.

## What kinds of staff data can I query?

You can query a staff member's current and historical position assignments (FTE, title, status), leave records, historical positions at other institutions, and direct contact details. Staff vacancies can be counted by institution or system-wide, optionally filtered by position title (e.g., teacher). See the [View Staff Profile playbook](playbooks/view-staff-profile.md) and the [Count Vacant Positions playbook](playbooks/count-vacant-positions.md).

---

## Related docs

- [GLOSSARY](GLOSSARY.md) — definitions of key OpenEMIS and MCP terms
- [README](../README.md) — overview, install, and playbook index
- [Playbooks](playbooks/) — step-by-step school data query guides
- [Resource Reference](resources.md) — all 675 OpenEMIS resources
