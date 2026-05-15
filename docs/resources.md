---
title: "OpenEMIS MCP — Resource Reference for School Management"
description: "Complete reference for all 675 OpenEMIS resources (Core 5.10.0). Students, attendance, staff, risks, exams — GET endpoints for every school management domain."
keywords:
  - OpenEMIS
  - school management system
  - education management
  - student attendance
  - student risks
  - MCP server
  - resource reference
---

# OpenEMIS MCP — Resource Reference for School Management

> **675 resources** · **3355 endpoints** · v1.1.0 · OpenEMIS Core 5.10.0
>
> This is the FREE distribution — read-only. Writes (POST/PUT/DELETE) live in [openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro).
>
> The MCP does **not** load this table into AI context. It uses a compact
> `grouped-manifest.json` (~210 KB) with domain buckets + playbooks.
> The agent navigates by domain/playbook and pulls endpoint details on demand.

## Legend

| Symbol | Meaning |
|---|---|
| ✅ | Available |
| 🔒 | Workflow-only — use the appropriate playbook, not a direct write |
| — | Not available for this resource |

## Resources
| Resource | Domain | GET | POST | PUT | DELETE | Write Status |
|---|---|:---:|:---:|:---:|:---:|---|
| **── Institution* ──** | | | | | | |
| `institution-accreditations` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-activities` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-assets` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-associations` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-association-staff` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-association-student` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-attachments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-attachment-types` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-bank-accounts` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-budgets` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-buildings` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-buses` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-buses-transport-features` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-case-comments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-case-links` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-case-records` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-cases` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-class-attendance-records` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-classes` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-classes-custom-field-values` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-classes-secondary-staff` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-class-grades` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-class-students` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-class-subjects` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-committee-attachments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-committee-meeting` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-committees` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-committee-types` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-competency-item-comments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-competency-period-comments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-competency-results` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-contact-persons` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-courses` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-curriculars` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-curricular-staff` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-curricular-students` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-field-options` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-fields` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-field-values` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-forms` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-forms-fields` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-forms-filters` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-table-cells` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-table-columns` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-custom-table-rows` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-departments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-expenditures` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-fees` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-fee-types` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-floors` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-genders` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-grades` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-incomes` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-infrastructure-attachments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-lands` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-localities` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-meal-programmes` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-meal-students` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-outcome-results` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-outcome-subject-comments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-ownerships` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-positions` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-program-grade-subjects` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-providers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-quality-rubric-answers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-quality-rubrics` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-quality-visits` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-registrations` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-repeater-survey-answers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-repeater-surveys` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-repeater-survey-table-cells` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-report-card-processes` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-report-cards` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-risks` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-rooms` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-scanned` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-curriculum-lessons` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-intervals` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-lesson-details` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-lesson-rooms` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-lessons` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-non-curriculum-lessons` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-terms` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-timeslots` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-timetable-customizes` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-schedule-timetables` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-sectors` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-shift-periods` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-shifts` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-appraisals` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-attendance-activities` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-attendances` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-duties` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-leave` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-leave-archived` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-position-profiles` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-releases` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-shifts` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-survey-answers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-surveys` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-survey-table-cells` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-staff-transfers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-statistics` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-statuses` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-absence-days` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-absence-details` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-absences` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-admission` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-enrolment` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-risks` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-students` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-students-gpa` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-students-report-cards` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-students-report-cards-comments` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-students-tmp` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-survey-answers` | Institution* | ✅ | — | — | — | — |
| `institution-student-surveys` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-survey-table-cells` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-transfers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-visit-requests` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-visits` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-student-withdraw` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-subjects` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-subjects-rooms` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-subject-staff` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-subject-students` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-survey-answers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-surveys` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-survey-table-cells` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-textbooks` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-transport-providers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-trip-days` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-trip-passengers` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-trips` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-types` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-units` | Institution* | ✅ | — | — | — | — (pro) |
| `institution-visit-requests` | Institution* | ✅ | — | — | — | — (pro) |
| **── Staff* ──** | | | | | | |
| `staff-attachment-types` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-behaviour-attachments` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-behaviour-categories` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-behaviours` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-change-types` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-field-options` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-fields` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-field-values` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-forms` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-forms-fields` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-table-cells` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-table-columns` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-custom-table-rows` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-duties` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-employment-statuses` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-extracurriculars` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-leave-entitlements` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-leave-policies` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-leave-policy-types` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-leave-types` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-licenses` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-licenses-classifications` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-memberships` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-payslips` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-position-categories` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-position-grades` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-position-titles` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-position-titles-grades` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-profile-templates` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-qualifications` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-qualifications-specialisations` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-qualifications-subjects` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-report-card-email-processes` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-report-card-processes` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-report-cards` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-salaries` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-salary-transactions` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-statuses` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-training-applications` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-training-categories` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-training-needs` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-trainings` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-training-self-studies` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-training-self-study-attachments` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-training-self-study-results` | Staff* | ✅ | — | — | — | — (pro) |
| `staff-types` | Staff* | ✅ | — | — | — | — (pro) |
| **── Infrastructure* ──** | | | | | | |
| `infrastructure-attachment-types` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-conditions` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-custom-field-options` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-custom-fields` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-custom-forms` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-custom-forms-fields` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-custom-forms-filters` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-levels` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-needs` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-need-types` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-ownerships` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-project-funding-sources` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-projects` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-projects-needs` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-statuses` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-utility-electricities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-utility-internets` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-utility-telephones` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-hygiene-educations` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-hygiene-quantities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-hygienes` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-hygiene-soapash-availabilities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-hygiene-types` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sanitation-accessibilities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sanitation-qualities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sanitation-quantities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sanitations` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sanitation-types` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sanitation-uses` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sewage-functionalities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sewages` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-sewage-types` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-waste-functionalities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-wastes` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-waste-types` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-water-accessibilities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-water-functionalities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-water-proximities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-water-qualities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-water-quantities` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-waters` | Infrastructure* | ✅ | — | — | — | — (pro) |
| `infrastructure-wash-water-types` | Infrastructure* | ✅ | — | — | — | — (pro) |
| **── Student* ──** | | | | | | |
| `student-absence-reasons` | Student* | ✅ | — | — | — | — (pro) |
| `student-admission-custom-field-values` | Student* | ✅ | — | — | — | — (pro) |
| `student-attachment-types` | Student* | ✅ | — | — | — | — (pro) |
| `student-attendance-marked-records` | Student* | ✅ | — | — | — | — (pro) |
| `student-attendance-mark-types` | Student* | ✅ | — | — | — | — (pro) |
| `student-attendance-per-day-periods` | Student* | ✅ | — | — | — | — (pro) |
| `student-attendance-types` | Student* | ✅ | — | — | — | — (pro) |
| `student-behaviour-attachments` | Student* | ✅ | — | — | — | — (pro) |
| `student-behaviour-categories` | Student* | ✅ | — | — | — | — (pro) |
| `student-behaviour-classifications` | Student* | ✅ | — | — | — | — (pro) |
| `student-behaviours` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-field-options` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-fields` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-field-values` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-filters` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-forms` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-forms-fields` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-table-cells` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-table-columns` | Student* | ✅ | — | — | — | — (pro) |
| `student-custom-table-rows` | Student* | ✅ | — | — | — | — (pro) |
| `student-extracurriculars` | Student* | ✅ | — | — | — | — (pro) |
| `student-fees` | Student* | ✅ | — | — | — | — (pro) |
| `student-guardians` | Student* | ✅ | — | — | — | — (pro) |
| `student-mark-type-statuses` | Student* | ✅ | — | — | — | — (pro) |
| `student-mark-type-status-grades` | Student* | ✅ | — | — | — | — (pro) |
| `student-meal-marked-records` | Student* | ✅ | — | — | — | — (pro) |
| `student-profile-security-roles` | Student* | ✅ | — | — | — | — (pro) |
| `student-profile-templates` | Student* | ✅ | — | — | — | — (pro) |
| `student-report-card-email-processes` | Student* | ✅ | — | — | — | — (pro) |
| `student-report-card-processes` | Student* | ✅ | — | — | — | — (pro) |
| `student-report-cards` | Student* | ✅ | — | — | — | — (pro) |
| `student-risks-criterias` | Student* | ✅ | — | — | — | — (pro) |
| `student-statuses` | Student* | ✅ | — | — | — | — (pro) |
| `student-status-updates` | Student* | ✅ | — | — | — | — (pro) |
| `student-transfer-reasons` | Student* | ✅ | — | — | — | — (pro) |
| `student-visit-purpose-types` | Student* | ✅ | — | — | — | — (pro) |
| `student-visit-types` | Student* | ✅ | — | — | — | — (pro) |
| `student-withdraw-reasons` | Student* | ✅ | — | — | — | — (pro) |
| **── User* ──** | | | | | | |
| `user-activities` | User* | ✅ | — | — | — | — (pro) |
| `user-attachments` | User* | ✅ | — | — | — | — (pro) |
| `user-attachments-roles` | User* | ✅ | — | — | — | — (pro) |
| `user-awards` | User* | ✅ | — | — | — | — (pro) |
| `user-bank-accounts` | User* | ✅ | — | — | — | — (pro) |
| `user-body-masses` | User* | ✅ | — | — | — | — (pro) |
| `user-comments` | User* | ✅ | — | — | — | — (pro) |
| `user-contacts` | User* | ✅ | — | — | — | — (pro) |
| `user-demographics` | User* | ✅ | — | — | — | — (pro) |
| `user-employments` | User* | ✅ | — | — | — | — (pro) |
| `user-health-allergies` | User* | ✅ | — | — | — | — (pro) |
| `user-health-consultations` | User* | ✅ | — | — | — | — (pro) |
| `user-health-families` | User* | ✅ | — | — | — | — (pro) |
| `user-health-histories` | User* | ✅ | — | — | — | — (pro) |
| `user-health-immunizations` | User* | ✅ | — | — | — | — (pro) |
| `user-health-medications` | User* | ✅ | — | — | — | — (pro) |
| `user-healths` | User* | ✅ | — | — | — | — (pro) |
| `user-health-tests` | User* | ✅ | — | — | — | — (pro) |
| `user-identities` | User* | ✅ | — | — | — | — (pro) |
| `user-insurances` | User* | ✅ | — | — | — | — (pro) |
| `user-languages` | User* | ✅ | — | — | — | — (pro) |
| `user-nationalities` | User* | ✅ | — | — | — | — (pro) |
| `user-special-needs-assessments` | User* | ✅ | — | — | — | — (pro) |
| `user-special-needs-devices` | User* | ✅ | — | — | — | — (pro) |
| `user-special-needs-diagnostics` | User* | ✅ | — | — | — | — (pro) |
| `user-special-needs-plans` | User* | ✅ | — | — | — | — (pro) |
| `user-special-needs-referrals` | User* | ✅ | — | — | — | — (pro) |
| `user-special-needs-services` | User* | ✅ | — | — | — | — (pro) |
| **── Training* ──** | | | | | | |
| `training-course-categories` | Training* | ✅ | — | — | — | — (pro) |
| `training-courses` | Training* | ✅ | — | — | — | — (pro) |
| `training-courses-prerequisites` | Training* | ✅ | — | — | — | — (pro) |
| `training-courses-providers` | Training* | ✅ | — | — | — | — (pro) |
| `training-courses-result-types` | Training* | ✅ | — | — | — | — (pro) |
| `training-courses-specialisations` | Training* | ✅ | — | — | — | — (pro) |
| `training-courses-target-populations` | Training* | ✅ | — | — | — | — (pro) |
| `training-course-types` | Training* | ✅ | — | — | — | — (pro) |
| `training-field-of-studies` | Training* | ✅ | — | — | — | — (pro) |
| `training-levels` | Training* | ✅ | — | — | — | — (pro) |
| `training-mode-deliveries` | Training* | ✅ | — | — | — | — (pro) |
| `training-need-categories` | Training* | ✅ | — | — | — | — (pro) |
| `training-need-competencies` | Training* | ✅ | — | — | — | — (pro) |
| `training-need-standards` | Training* | ✅ | — | — | — | — (pro) |
| `training-need-sub-standards` | Training* | ✅ | — | — | — | — (pro) |
| `training-priorities` | Training* | ✅ | — | — | — | — (pro) |
| `training-providers` | Training* | ✅ | — | — | — | — (pro) |
| `training-requirements` | Training* | ✅ | — | — | — | — (pro) |
| `training-result-types` | Training* | ✅ | — | — | — | — (pro) |
| `training-session-evaluators` | Training* | ✅ | — | — | — | — (pro) |
| `training-session-results` | Training* | ✅ | — | — | — | — (pro) |
| `training-sessions` | Training* | ✅ | — | — | — | — (pro) |
| `training-sessions-trainees` | Training* | ✅ | — | — | — | — (pro) |
| `training-session-trainee-results` | Training* | ✅ | — | — | — | — (pro) |
| `training-session-trainers` | Training* | ✅ | — | — | — | — (pro) |
| `training-specialisations` | Training* | ✅ | — | — | — | — (pro) |
| **── Scholarship* ──** | | | | | | |
| `scholarship-application-attachments` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-application-institution-choices` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-applications` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-attachment-types` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-disbursement-categories` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-financial-assistances` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-financial-assistance-types` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-funding-sources` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-institution-choice-statuses` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-institution-choice-types` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-loans` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-payment-frequencies` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipient-academic-standings` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipient-activities` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipient-activity-statuses` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipient-collections` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipient-disbursements` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipient-payment-structure-estimates` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipient-payment-structures` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-recipients` | Scholarship* | ✅ | — | — | — | — (pro) |
| `scholarship-semesters` | Scholarship* | ✅ | — | — | — | — (pro) |
| **── Summary* ──** | | | | | | |
| `summary-area-institution-grade-attendances` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-area-provider-grade-subject-results` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-assessment-item-results` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-grade-gender-ages` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-grade-status-genders` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-institution-grade-nationalities` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-institution-grades` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-institution-nationalities` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-institution-room-types` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-institutions` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-institution-student-absences` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-institution-student-subject-results` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-isced-sectors` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-programme-sector-genders` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-programme-sector-qualification-genders` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-programme-sector-specialization-genders` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-student-assessments` | Summary* | ✅ | — | — | — | — (pro) |
| `summary-student-attendances` | Summary* | ✅ | — | — | — | — (pro) |
| **── Examination* ──** | | | | | | |
| `examination-centre-rooms` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centre-rooms-examinations` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centre-rooms-examinations-invigilators` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centre-rooms-examinations-students` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centres` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centres-examinations` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centres-examinations-institutions` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centres-examinations-invigilators` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centres-examinations-students` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centres-examinations-subjects` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centres-examinations-subjects-students` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-centre-special-needs` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-grading-options` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-grading-types` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-student-subject-results` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-student-subjects` | Examination* | ✅ | — | — | — | — (pro) |
| `examination-subjects` | Examination* | ✅ | — | — | — | — (pro) |
| **── Appraisal* ──** | | | | | | |
| `appraisal-criterias` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-dropdown-answers` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-dropdown-options` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-forms` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-forms-criterias` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-forms-criterias-scores` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-forms-criterias-scores-links` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-number-answers` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-numbers` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-periods` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-periods-types` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-score-answers` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-slider-answers` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-sliders` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-text-answers` | Appraisal* | ✅ | — | — | — | — (pro) |
| `appraisal-types` | Appraisal* | ✅ | — | — | — | — (pro) |
| **── Education* ──** | | | | | | |
| `education-certifications` | Education* | ✅ | — | — | — | — (pro) |
| `education-cycles` | Education* | ✅ | — | — | — | — (pro) |
| `education-field-of-studies` | Education* | ✅ | — | — | — | — (pro) |
| `education-grades` | Education* | ✅ | — | — | — | — (pro) |
| `education-grades-cumulative-gpa` | Education* | ✅ | — | — | — | — (pro) |
| `education-grades-gpa` | Education* | ✅ | — | — | — | — (pro) |
| `education-grades-subjects` | Education* | ✅ | — | — | — | — (pro) |
| `education-level-isced` | Education* | ✅ | — | — | — | — (pro) |
| `education-levels` | Education* | ✅ | — | — | — | — (pro) |
| `education-programme-orientations` | Education* | ✅ | — | — | — | — (pro) |
| `education-programmes` | Education* | ✅ | — | — | — | — (pro) |
| `education-programmes-next-programmes` | Education* | ✅ | — | — | — | — (pro) |
| `education-stages` | Education* | ✅ | — | — | — | — (pro) |
| `education-subjects` | Education* | ✅ | — | — | — | — (pro) |
| `education-subjects-field-of-studies` | Education* | ✅ | — | — | — | — (pro) |
| `education-systems` | Education* | ✅ | — | — | — | — (pro) |
| **── Survey* ──** | | | | | | |
| `survey-filter-areas` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-filter-institution-providers` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-filter-institution-types` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-forms` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-forms-filters` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-forms-questions` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-question-choices` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-questions` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-responses` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-rules` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-statuses` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-status-periods` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-table-columns` | Survey* | ✅ | — | — | — | — (pro) |
| `survey-table-rows` | Survey* | ✅ | — | — | — | — (pro) |
| **── Security* ──** | | | | | | |
| `security-functions` | Security* | ✅ | — | — | — | — (pro) |
| `security-group-areas` | Security* | ✅ | — | — | — | — (pro) |
| `security-group-institutions` | Security* | ✅ | — | — | — | — (pro) |
| `security-groups` | Security* | ✅ | — | — | — | — (pro) |
| `security-group-users` | Security* | ✅ | — | — | — | — (pro) |
| `security-rest-sessions` | Security* | ✅ | — | — | — | — (pro) |
| `security-role-functions` | Security* | ✅ | — | — | — | — (pro) |
| `security-roles` | Security* | ✅ | — | — | — | — (pro) |
| `security-user-codes` | Security* | ✅ | — | — | — | — (pro) |
| `security-user-logins` | Security* | ✅ | — | — | — | — (pro) |
| `security-user-password-requests` | Security* | ✅ | — | — | — | — (pro) |
| `security-users` | Security* | ✅ | — | — | — | — (pro) |
| `security-user-sessions` | Security* | ✅ | — | — | — | — (pro) |
| **── Custom* ──** | | | | | | |
| `custom-field-options` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-fields` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-field-types` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-field-values` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-forms` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-forms-fields` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-forms-filters` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-modules` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-records` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-table-cells` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-table-columns` | Custom* | ✅ | — | — | — | — (pro) |
| `custom-table-rows` | Custom* | ✅ | — | — | — | — (pro) |
| **── Meal* ──** | | | | | | |
| `meal-benefits` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-food-records` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-implementers` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-institution-programmes` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-nutritional-records` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-nutritions` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-programmes` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-programme-types` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-ratings` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-received` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-status-types` | Meal* | ✅ | — | — | — | — (pro) |
| `meal-target-types` | Meal* | ✅ | — | — | — | — (pro) |
| **── Workflow* ──** | | | | | | |
| `workflow-actions` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-comments` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-models` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-rule-events` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-rules` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-statuses` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-statuses-steps` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-steps` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-steps-params` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-steps-roles` | Workflow* | ✅ | — | — | — | — (pro) |
| `workflow-transitions` | Workflow* | ✅ | — | — | — | — (pro) |
| **── Assessment* ──** | | | | | | |
| `assessment-grading-options` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-grading-types` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-item-results` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-item-results-archived` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-items` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-items-grading-types` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-item-student-exemptions` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-period-excluded-security-roles` | Assessment* | ✅ | — | — | — | — (pro) |
| `assessment-periods` | Assessment* | ✅ | — | — | — | — (pro) |
| **── Rubric* ──** | | | | | | |
| `rubric-criteria-options` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-criterias` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-sections` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-statuses` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-status-periods` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-status-programmes` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-status-roles` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-template-options` | Rubric* | ✅ | — | — | — | — (pro) |
| `rubric-templates` | Rubric* | ✅ | — | — | — | — (pro) |
| **── Special* ──** | | | | | | |
| `special-need-difficulties` | Special* | ✅ | — | — | — | — (pro) |
| `special-needs-device-types` | Special* | ✅ | — | — | — | — (pro) |
| `special-needs-diagnostics-degree` | Special* | ✅ | — | — | — | — (pro) |
| `special-needs-diagnostics-types` | Special* | ✅ | — | — | — | — (pro) |
| `special-needs-plan-types` | Special* | ✅ | — | — | — | — (pro) |
| `special-needs-referrer-types` | Special* | ✅ | — | — | — | — (pro) |
| `special-needs-service-classification` | Special* | ✅ | — | — | — | — (pro) |
| `special-needs-service-types` | Special* | ✅ | — | — | — | — (pro) |
| `special-need-types` | Special* | ✅ | — | — | — | — (pro) |
| **── Report* ──** | | | | | | |
| `report-card-comment-codes` | Report* | ✅ | — | — | — | — (pro) |
| `report-card-email-processes` | Report* | ✅ | — | — | — | — (pro) |
| `report-card-excluded-security-roles` | Report* | ✅ | — | — | — | — (pro) |
| `report-card-processes` | Report* | ✅ | — | — | — | — (pro) |
| `report-cards` | Report* | ✅ | — | — | — | — (pro) |
| `report-card-subjects` | Report* | ✅ | — | — | — | — (pro) |
| `report-progress` | Report* | ✅ | — | — | — | — (pro) |
| `report-queries` | Report* | ✅ | — | — | — | — (pro) |
| **── Competency* ──** | | | | | | |
| `competency-criterias` | Competency* | ✅ | — | — | — | — (pro) |
| `competency-grading-options` | Competency* | ✅ | — | — | — | — (pro) |
| `competency-grading-types` | Competency* | ✅ | — | — | — | — (pro) |
| `competency-items` | Competency* | ✅ | — | — | — | — (pro) |
| `competency-items-periods` | Competency* | ✅ | — | — | — | — (pro) |
| `competency-periods` | Competency* | ✅ | — | — | — | — (pro) |
| `competency-templates` | Competency* | ✅ | — | — | — | — (pro) |
| **── Utility* ──** | | | | | | |
| `utility-electricity-conditions` | Utility* | ✅ | — | — | — | — (pro) |
| `utility-electricity-types` | Utility* | ✅ | — | — | — | — (pro) |
| `utility-internet-bandwidths` | Utility* | ✅ | — | — | — | — (pro) |
| `utility-internet-conditions` | Utility* | ✅ | — | — | — | — (pro) |
| `utility-internet-types` | Utility* | ✅ | — | — | — | — (pro) |
| `utility-telephone-conditions` | Utility* | ✅ | — | — | — | — (pro) |
| `utility-telephone-types` | Utility* | ✅ | — | — | — | — (pro) |
| **── Api* ──** | | | | | | |
| `api-authorizations` | Api* | ✅ | — | — | — | — (pro) |
| `api-credentials` | Api* | ✅ | — | — | — | — (pro) |
| `api-credentials-scopes` | Api* | ✅ | — | — | — | — (pro) |
| `api-scopes` | Api* | ✅ | — | — | — | — (pro) |
| `api-securities` | Api* | ✅ | — | — | — | — (pro) |
| `api-securities-scopes` | Api* | ✅ | — | — | — | — (pro) |
| **── Health* ──** | | | | | | |
| `health-allergy-types` | Health* | ✅ | — | — | — | — (pro) |
| `health-conditions` | Health* | ✅ | — | — | — | — (pro) |
| `health-consultation-types` | Health* | ✅ | — | — | — | — (pro) |
| `health-immunization-types` | Health* | ✅ | — | — | — | — (pro) |
| `health-relationships` | Health* | ✅ | — | — | — | — (pro) |
| `health-test-types` | Health* | ✅ | — | — | — | — (pro) |
| **── Asset* ──** | | | | | | |
| `asset-conditions` | Asset* | ✅ | — | — | — | — (pro) |
| `asset-makes` | Asset* | ✅ | — | — | — | — (pro) |
| `asset-models` | Asset* | ✅ | — | — | — | — (pro) |
| `asset-statuses` | Asset* | ✅ | — | — | — | — (pro) |
| `asset-types` | Asset* | ✅ | — | — | — | — (pro) |
| **── Outcome* ──** | | | | | | |
| `outcome-criterias` | Outcome* | ✅ | — | — | — | — (pro) |
| `outcome-grading-options` | Outcome* | ✅ | — | — | — | — (pro) |
| `outcome-grading-types` | Outcome* | ✅ | — | — | — | — (pro) |
| `outcome-periods` | Outcome* | ✅ | — | — | — | — (pro) |
| `outcome-templates` | Outcome* | ✅ | — | — | — | — (pro) |
| **── System* ──** | | | | | | |
| `system-authentications` | System* | ✅ | — | — | — | — (pro) |
| `system-errors` | System* | ✅ | — | — | — | — (pro) |
| `system-patches` | System* | ✅ | — | — | — | — (pro) |
| `system-processes` | System* | ✅ | — | — | — | — (pro) |
| `system-updates` | System* | ✅ | — | — | — | — (pro) |
| **── Config* ──** | | | | | | |
| `config-attachments` | Config* | ✅ | — | — | — | — (pro) |
| `config-item-options` | Config* | ✅ | — | — | — | — (pro) |
| `config-items` | Config* | ✅ | — | — | — | — (pro) |
| `config-product-lists` | Config* | ✅ | — | — | — | — (pro) |
| **── Data* ──** | | | | | | |
| `data-dictionary` | Data* | ✅ | — | — | — | — (pro) |
| `data-management-connections` | Data* | ✅ | — | — | — | — (pro) |
| `data-management-copy` | Data* | ✅ | — | — | — | — (pro) |
| `data-management-logs` | Data* | ✅ | — | — | — | — (pro) |
| **── Area* ──** | | | | | | |
| `area-administrative-levels` | Area* | ✅ | — | — | — | — (pro) |
| `area-administratives` | Area* | ✅ | — | — | — | — (pro) |
| `area-levels` | Area* | ✅ | — | — | — | — (pro) |
| **── Calendar* ──** | | | | | | |
| `calendar-event-dates` | Calendar* | ✅ | — | — | — | — (pro) |
| `calendar-events` | Calendar* | ✅ | — | — | — | — (pro) |
| `calendar-types` | Calendar* | ✅ | — | — | — | — (pro) |
| **── Class* ──** | | | | | | |
| `class-profile-processes` | Class* | ✅ | — | — | — | — (pro) |
| `class-profiles` | Class* | ✅ | — | — | — | — (pro) |
| `class-profile-templates` | Class* | ✅ | — | — | — | — (pro) |
| **── Email* ──** | | | | | | |
| `email-process-attachments` | Email* | ✅ | — | — | — | — (pro) |
| `email-processes` | Email* | ✅ | — | — | — | — (pro) |
| `email-templates` | Email* | ✅ | — | — | — | — (pro) |
| **── Idp* ──** | | | | | | |
| `idp-google` | Idp* | ✅ | — | — | — | — (pro) |
| `idp-oauth` | Idp* | ✅ | — | — | — | — (pro) |
| `idp-saml` | Idp* | ✅ | — | — | — | — (pro) |
| **── Qualification* ──** | | | | | | |
| `qualification-levels` | Qualification* | ✅ | — | — | — | — (pro) |
| `qualification-specialisations` | Qualification* | ✅ | — | — | — | — (pro) |
| `qualification-titles` | Qualification* | ✅ | — | — | — | — (pro) |
| **── Scholarships* ──** | | | | | | |
| `scholarships` | Scholarships* | ✅ | — | — | — | — (pro) |
| `scholarships-field-of-studies` | Scholarships* | ✅ | — | — | — | — (pro) |
| `scholarships-scholarship-attachment-types` | Scholarships* | ✅ | — | — | — | — (pro) |
| **── Textbook* ──** | | | | | | |
| `textbook-conditions` | Textbook* | ✅ | — | — | — | — (pro) |
| `textbook-dimensions` | Textbook* | ✅ | — | — | — | — (pro) |
| `textbook-statuses` | Textbook* | ✅ | — | — | — | — (pro) |
| **── Academic* ──** | | | | | | |
| `academic-period-levels` | Academic* | ✅ | — | — | — | — (pro) |
| `academic-periods` | Academic* | ✅ | — | — | — | — (pro) |
| **── Alert* ──** | | | | | | |
| `alert-logs` | Alert* | ✅ | — | — | — | — (pro) |
| `alert-rules` | Alert* | ✅ | — | — | — | — (pro) |
| **── Alerts* ──** | | | | | | |
| `alerts` | Alerts* | ✅ | — | — | — | — (pro) |
| `alerts-roles` | Alerts* | ✅ | — | — | — | — (pro) |
| **── Building* ──** | | | | | | |
| `building-custom-field-values` | Building* | ✅ | — | — | — | — (pro) |
| `building-types` | Building* | ✅ | — | — | — | — (pro) |
| **── Case* ──** | | | | | | |
| `case-priorities` | Case* | ✅ | — | — | — | — (pro) |
| `case-types` | Case* | ✅ | — | — | — | — (pro) |
| **── Contact* ──** | | | | | | |
| `contact-options` | Contact* | ✅ | — | — | — | — (pro) |
| `contact-types` | Contact* | ✅ | — | — | — | — (pro) |
| **── Curricular* ──** | | | | | | |
| `curricular-positions` | Curricular* | ✅ | — | — | — | — (pro) |
| `curricular-types` | Curricular* | ✅ | — | — | — | — (pro) |
| **── Field* ──** | | | | | | |
| `field-options` | Field* | ✅ | — | — | — | — (pro) |
| `field-types` | Field* | ✅ | — | — | — | — (pro) |
| **── Floor* ──** | | | | | | |
| `floor-custom-field-values` | Floor* | ✅ | — | — | — | — (pro) |
| `floor-types` | Floor* | ✅ | — | — | — | — (pro) |
| **── Gpa* ──** | | | | | | |
| `gpa-grading-options` | Gpa* | ✅ | — | — | — | — (pro) |
| `gpa-grading-types` | Gpa* | ✅ | — | — | — | — (pro) |
| **── Historical* ──** | | | | | | |
| `historical-staff-leave` | Historical* | ✅ | — | — | — | — (pro) |
| `historical-staff-positions` | Historical* | ✅ | — | — | — | — (pro) |
| **── Income* ──** | | | | | | |
| `income-sources` | Income* | ✅ | — | — | — | — (pro) |
| `income-types` | Income* | ✅ | — | — | — | — (pro) |
| **── Insurance* ──** | | | | | | |
| `insurance-providers` | Insurance* | ✅ | — | — | — | — (pro) |
| `insurance-types` | Insurance* | ✅ | — | — | — | — (pro) |
| **── Land* ──** | | | | | | |
| `land-custom-field-values` | Land* | ✅ | — | — | — | — (pro) |
| `land-types` | Land* | ✅ | — | — | — | — (pro) |
| **── License* ──** | | | | | | |
| `license-classifications` | License* | ✅ | — | — | — | — (pro) |
| `license-types` | License* | ✅ | — | — | — | — (pro) |
| **── Locale* ──** | | | | | | |
| `locale-contents` | Locale* | ✅ | — | — | — | — (pro) |
| `locale-content-translations` | Locale* | ✅ | — | — | — | — (pro) |
| **── Messaging* ──** | | | | | | |
| `messaging` | Messaging* | ✅ | — | — | — | — (pro) |
| `messaging-security-roles` | Messaging* | ✅ | — | — | — | — (pro) |
| **── Moodle* ──** | | | | | | |
| `moodle-api-created-users` | Moodle* | ✅ | — | — | — | — (pro) |
| `moodle-api-log` | Moodle* | ✅ | — | — | — | — (pro) |
| **── Room* ──** | | | | | | |
| `room-custom-field-values` | Room* | ✅ | — | — | — | — (pro) |
| `room-types` | Room* | ✅ | — | — | — | — (pro) |
| **── Salary* ──** | | | | | | |
| `salary-addition-types` | Salary* | ✅ | — | — | — | — (pro) |
| `salary-deduction-types` | Salary* | ✅ | — | — | — | — (pro) |
| **── Transport* ──** | | | | | | |
| `transport-features` | Transport* | ✅ | — | — | — | — (pro) |
| `transport-statuses` | Transport* | ✅ | — | — | — | — (pro) |
| **── Workflows* ──** | | | | | | |
| `workflows` | Workflows* | ✅ | — | — | — | — (pro) |
| `workflows-filters` | Workflows* | ✅ | — | — | — | — (pro) |
| **── singletons ──** | | | | | | |
| `absence-types` | — | ✅ | — | — | — | — (pro) |
| `areas` | — | ✅ | — | — | — | — (pro) |
| `assessments` | — | ✅ | — | — | — | — (pro) |
| `authentication-types` | — | ✅ | — | — | — | — (pro) |
| `backup-logs` | — | ✅ | — | — | — | — (pro) |
| `bank-branches` | — | ✅ | — | — | — | — (pro) |
| `banks` | — | ✅ | — | — | — | — (pro) |
| `behaviour-classifications` | — | ✅ | — | — | — | — (pro) |
| `budget-types` | — | ✅ | — | — | — | — (pro) |
| `bus-types` | — | ✅ | — | — | — | — (pro) |
| `comment-types` | — | ✅ | — | — | — | — (pro) |
| `counsellings` | — | ✅ | — | — | — | — (pro) |
| `countries` | — | ✅ | — | — | — | — (pro) |
| `deleted-records` | — | ✅ | — | — | — | — (pro) |
| `demographic-types` | — | ✅ | — | — | — | — (pro) |
| `department-staff` | — | ✅ | — | — | — | — (pro) |
| `employment-status-types` | — | ✅ | — | — | — | — (pro) |
| `examinations` | — | ✅ | — | — | — | — (pro) |
| `expenditure-types` | — | ✅ | — | — | — | — (pro) |
| `external-data-source-attributes` | — | ✅ | — | — | — | — (pro) |
| `extracurricular-types` | — | ✅ | — | — | — | — (pro) |
| `feeders-institutions` | — | ✅ | — | — | — | — (pro) |
| `fee-types` | — | ✅ | — | — | — | — (pro) |
| `food-types` | — | ✅ | — | — | — | — (pro) |
| `genders` | — | ✅ | — | — | — | — (pro) |
| `guardian-relations` | — | ✅ | — | — | — | — (pro) |
| `guidance-types` | — | ✅ | — | — | — | — (pro) |
| `identity-types` | — | ✅ | — | — | — | — (pro) |
| `import-mapping` | — | ✅ | — | — | — | — (pro) |
| `industries` | — | ✅ | — | — | — | — (pro) |
| `inserted-records` | — | ✅ | — | — | — | — (pro) |
| `institutions` | — | ✅ | — | — | — | — (pro) |
| `labels` | — | ✅ | — | — | — | — (pro) |
| `language-proficiencies` | — | ✅ | — | — | — | — (pro) |
| `languages` | — | ✅ | — | — | — | — (pro) |
| `locales` | — | ✅ | — | — | — | — (pro) |
| `manuals` | — | ✅ | — | — | — | — (pro) |
| `message-recipients` | — | ✅ | — | — | — | — (pro) |
| `nationalities` | — | ✅ | — | — | — | — (pro) |
| `notices` | — | ✅ | — | — | — | — (pro) |
| `openemis-temps` | — | ✅ | — | — | — | — (pro) |
| `phinxlog` | — | ✅ | — | — | — | — (pro) |
| `profile-templates` | — | ✅ | — | — | — | — (pro) |
| `quality-visit-types` | — | ✅ | — | — | — | — (pro) |
| `reports` | — | ✅ | — | — | — | — (pro) |
| `risk-criterias` | — | ✅ | — | — | — | — (pro) |
| `risks` | — | ✅ | — | — | — | — (pro) |
| `shift-options` | — | ✅ | — | — | — | — (pro) |
| `single-logout` | — | ✅ | — | — | — | — (pro) |
| `textbooks` | — | ✅ | — | — | — | — (pro) |
| `themes` | — | ✅ | — | — | — | — (pro) |
| `transfer-logs` | — | ✅ | — | — | — | — (pro) |
| `trip-types` | — | ✅ | — | — | — | — (pro) |
| `webhook-events` | — | ✅ | — | — | — | — (pro) |
| `webhooks` | — | ✅ | — | — | — | — (pro) |

---

## Related docs

- [README](../README.md) — overview and install guide for the OpenEMIS MCP server
- [Playbooks](playbooks/) — 26 step-by-step school data query guides (attendance, students, staff, risks, and more)
- [GLOSSARY.md](GLOSSARY.md) — definitions for OpenEMIS and education management terms
- [FAQ.md](FAQ.md) — common questions about using this school management MCP
