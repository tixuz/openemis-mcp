---
title: "OpenEMIS Glossary — Key Terms for School Management and MCP"
description: "Definitions of key terms used in OpenEMIS school management and the openemis-mcp server: attendance, risks, workflows, institutions, and more."
keywords:
  - OpenEMIS
  - school management system
  - education management
  - student attendance
  - student risks
  - MCP
---

# OpenEMIS Glossary — Key Terms for School Management and MCP

This glossary defines the core terms you encounter when using OpenEMIS or the openemis-mcp server. Each entry names the term, explains how it surfaces in the OpenEMIS school management system, and links to a relevant playbook or resource.

---

### OpenEMIS

OpenEMIS (Open Education Management Information System) is a free, open-source school management information system developed by UNESCO and KORDIT. It manages students, staff, attendance, assessment, infrastructure, meals, scholarships, and ministry-level reporting across kindergartens, primary schools, secondary schools, vocational institutions, and universities. The public demo runs at [demo.openemis.org/core](https://demo.openemis.org/core).

### OpenEMIS Core

OpenEMIS Core is the server-side application that powers the REST API at `/api/v5/{resource}`. This MCP server targets Core 5.13.0, which exposes 678 resources across 3,361 endpoints. Older Core builds (5.7 – 5.12) are also supported — the public REST surface is backwards-compatible.

### MCP (Model Context Protocol)

MCP is an open protocol from Anthropic that lets AI assistants (Claude, Cursor, Codex, Cline) call external tools in a structured, typed way. openemis-mcp is an MCP server: it exposes 6 tools that translate AI questions into OpenEMIS API calls and return structured answers. See the [README](../README.md) for install instructions.

### School management information system (SMIS)

A school management information system (also called a school MIS or EMIS) is software that centralises administrative data for one or more educational institutions — enrolment, attendance, grades, staff, infrastructure, and reporting. OpenEMIS is the UNESCO-backed SMIS used in multiple countries. openemis-mcp makes that data queryable from an AI assistant.

### Education management

Education management refers to the administrative oversight of educational institutions — tracking students, staff, resources, and outcomes. OpenEMIS supports education management at the school, district, and ministry level. The openemis-mcp server exposes education management data through its MCP tools.

### Student attendance

In OpenEMIS, student attendance is recorded by exception: only absence and late-arrival events are stored. A student with no row on a marked day is implicitly present. The `student-attendance-marked-records` and `institution-class-attendance-records` resources hold this data. See the [View Latest Attendance playbook](playbooks/view-latest-attendance.md).

### Staff attendance

Staff attendance in OpenEMIS is tracked via `institution-staff-attendances` and `institution-staff-attendance-activities`. Staff leave records live in `institution-staff-leave`. See the [View Staff Profile playbook](playbooks/view-staff-profile.md).

### Student risk / early-warning

OpenEMIS calculates a composite risk score per student per academic period, based on configurable criteria (attendance rate, academic performance, behaviour). Scores and per-criterion breakdowns are in `institution-student-risks` and `student-risks-criterias`. See the [View Student Risks playbook](playbooks/view-student-risks.md).

### Behavior incident

A behavior incident is a logged record of a student's conduct — positive or negative — stored in `student-behaviours`. Incidents have a category, classification, date, and optional attachment. They appear in the [Student Dashboard playbook](playbooks/student-dashboard.md).

### Workflow / admission queue / enrolment queue

OpenEMIS uses a configurable workflow plugin to manage multi-step approval chains — admission, enrolment, staff transfers, and more. Each workflow has models, steps, statuses, transitions, and role-based assignees. Use the `explain-workflow-system` playbook to understand the model, and `view-admission-and-enrolment-queue-state` to check a student's position in the queue.

### Institution (kindergarten, primary, secondary, vocational, university)

An institution in OpenEMIS is any educational establishment — kindergarten, primary school, secondary school, secondary vocational institution, technical college, or university — registered in the system. Each institution has a unique `institution_id` and `code`. See the [View Institution Profile playbook](playbooks/view-institution-profile.md).

### Academic period

An academic period is a defined time window (year, semester, term) that scopes most data in OpenEMIS — attendance, marks, enrolment, and risk scores. Most API resources require `academic_period_id` as a mandatory filter. Reference data lives in `academic-periods`.

### Education grade

An education grade (e.g., Grade 1, Grade 9, Year 12) is a level within an education programme. OpenEMIS stores grades in `education-grades`. An institution offering specific grades is recorded in `institution-grades`. See the [Institution Summary playbook](playbooks/institution-summary.md).

### Section / class

A class (or section) in OpenEMIS is a named group of students assigned to a homeroom teacher within an institution and academic period — stored in `institution-classes`. It has a grade level, a roster of students, and a timetable. See the [View Class Profile playbook](playbooks/view-class-profile.md).

### Exam mark / report card

Exam marks are scored results stored in `assessment-item-results`, one row per student per assessment item. A report card aggregates marks across subjects for a period. See the [View Student Marks playbook](playbooks/view-student-marks.md) and the [View Class Report playbook](playbooks/view-class-report.md).

### Subject / curriculum

A subject is a taught discipline (Mathematics, English, Science, etc.) defined in `education-subjects` at the system level and linked to a class via `institution-class-subjects`. Curriculum refers to the full set of subjects taught in a grade or programme.

### Playbook

In openemis-mcp, a playbook is a step-by-step guide that tells an AI agent how to answer a specific school management question using a sequence of `openemis_get` calls. Playbooks are stored in `data/playbooks.json` and retrieved by the `openemis_get_playbook` tool. Markdown documentation lives in [docs/playbooks/](playbooks/).

### Resource (in MCP terms)

In openemis-mcp, a resource is any API endpoint available via `GET /api/v5/{resource}`. OpenEMIS Core 5.13.0 exposes 678 resources across domains like Institution, Student, Staff, Assessment, Attendance, and Workflow. The `openemis_get` tool fetches any resource by name. See the full [Resource Reference](resources.md).

---

## Related docs

- [README](../README.md) — overview and install guide
- [FAQ](FAQ.md) — common questions about OpenEMIS and this MCP server
- [Playbooks](playbooks/) — step-by-step school data query guides
- [Resource Reference](resources.md) — all 678 OpenEMIS resources
