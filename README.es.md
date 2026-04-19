# openemis-mcp

**Puente MCP gratuito de solo lectura entre agentes de IA y cualquier instancia de OpenEMIS.**

Construido sobre la **API Central de OpenEMIS** publicada (referencia: [api.openemis.org/core](https://api.openemis.org/core)) y verificado contra la demostración pública en [demo.openemis.org/core](https://demo.openemis.org/core).

Pregunte en inglés sencillo:

> *"How many current students are at Avory Primary?"*

El agente planifica las llamadas, este MCP entrega los datos:

> *"Avory Primary School (code P1002) has 553 currently enrolled students."*

Sin código. Sin JSON. Solo pregunte.

---

## Qué incluye (gratuito, MIT)

| Tool | Lo que hace |
|---|---|
| `openemis_health` | Pinguee la instancia configurada — ida y vuelta de inicio de sesión real |
| `openemis_list_domains` | Enumere los 9 dominios seleccionados (Asistencia, Evaluación, Personal, Estudiante…) |
| `openemis_discover` | Tema $\rightarrow$ hasta 30 endpoints delimitados. Mantiene las conversaciones concisas |
| `openemis_list_playbooks` | Enumere los 22 guías de flujo de trabajo seleccionadas |
| `openemis_get_playbook` | Cargue un playbook por id — pasos completos, recursos, notas importantes |
| `openemis_get` | Lectura unificada: lista o único, cualquier recurso, cualquier filtro |

**22 playbooks seleccionados** que cubren asistencia, evaluación, perfiles de estudiantes, perfiles de personal, infraestructura, comidas, informes de clase, horarios y más, cada uno verificado contra el manifiesto v5 con cobertura de recursos del 100%.

## Qué hay en Pro

`openemis-mcp-pro` añade herramientas de escritura (`openemis_create`, `openemis_update`, `openemis_delete`), ejecución de playbooks de flujo de trabajo, registro de auditoría, autenticación por navegador y soporte prioritario.
→ **Licencia comercial:** khindol.madraimov@gmail.com

---

## Instalación

Requiere **Node 22+**.

```bash
git clone https://github.com/tixuz/openemis-mcp.git
cd openemis-mcp
npm install
npm run build
cp .env.example .env
$EDITOR .env
```

### Configurar

```env
OPENEMIS_BASE_URL=https://demo.openemis.org/core
OPENEMIS_USERNAME=admin
OPENEMIS_PASSWORD=your_password
OPENEMIS_API_KEY=your_api_key
```

### Prueba de humo (Smoke test)

```bash
set -a && source .env && set +a
node scripts/smoke-login.mjs
```

### Registrar con Claude Code

```bash
claude mcp add openemis \
  --env OPENEMIS_BASE_URL="https://your-instance/core" \
  --env OPENEMIS_USERNAME="…" \
  --env OPENEMIS_PASSWORD="…" \
  --env OPENEMIS_API_KEY="…" \
  -- node "$(pwd)/dist/server.js"
```

Funciona con cualquier cliente compatible con MCP: Claude Code, Cursor, Cline, Codex (vía [gemmy-and-qwenny](https://github.com/tixuz/gemmy-and-qwenny)), o cualquier cliente MCP stdio.

---

## Playbooks

22 guías de flujo de trabajo seleccionadas — consulte [docs/playbooks/](docs/playbooks/):

| # | Playbook | Dominio |
|---|---|---|
| 1 | [Count Vacant Positions](docs/playbooks/count-vacant-positions.md) | Staff |
| 2 | [Mark Student Attendance](docs/playbooks/mark-student-attendance.md) | Attendance |
| 3 | [Mark Staff Attendance](docs/playbooks/mark-staff-attendance.md) | Staff |
| 4 | [View Student Timetable](docs/playbooks/view-student-timetable.md) | Schedule |
| 5 | [Student Dashboard](docs/playbooks/student-dashboard.md) | Student |
| 6 | [Generate Student Report Card PDF](docs/playbooks/generate-student-report-card-pdf.md) | Report |
| 7 | [Enrol a New Student](docs/playbooks/enroll-new-student.md) | Student |
| 8 | [Record a Behaviour Incident](docs/playbooks/record-behavior-incident.md) | Student |
| 9 | [Submit Exam Marks](docs/playbooks/submit-exam-marks.md) | Assessment |
| 10 | [Institution Summary](docs/playbooks/institution-summary.md) | Institution |
| 11 | [Generate Institution Statistics PDF](docs/playbooks/generate-institution-statistics-pdf.md) | Report |
| 12 | [View Latest Attendance](docs/playbooks/view-latest-attendance.md) | Attendance |
| 13 | [View Student Profile](docs/playbooks/view-student-profile.md) | Student |
| 14 | [View Student Marks](docs/playbooks/view-student-marks.md) | Assessment |
| 15 | [View Class Report](docs/playbooks/view-class-report.md) | Report |
| 16 | [View Timetable](docs/playbooks/view-timetable.md) | Schedule |
| 17 | [View Full Institution Profile](docs/playbooks/view-institution-profile.md) | Institution |
| 18 | [View Full Class Profile](docs/playbooks/view-class-profile.md) | Student |
| 19 | [View a Staff Member's Full Profile](docs/playbooks/view-staff-profile.md) | Staff |
| 20 | [Enhance Student Profile](docs/playbooks/enhance-student-profile.md) | Student |
| 21 | [View Institution Infrastructure](docs/playbooks/view-institution-infrastructure.md) | Institution |
| 22 | [View Institution Meals](docs/playbooks/view-institution-meals.md) | Institution |

---

## Arquitectura

```
Agent (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 herramientas de lectura + 22 playbooks
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{resource}
```

El descubrimiento delimitado por dominio mantiene las conversaciones concisas: `openemis_discover("attendance")` devuelve los 20–30 endpoints relevantes para la asistencia, no los 1.350.

---

## Documentación

- [Resource Reference](docs/resources.md) — todos los 645 recursos con disponibilidad de métodos
- [Playbooks](docs/playbooks/) — 22 guías de flujo de trabajo
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — el equipo de IA que construyó esto

---

## Licencia

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*No afiliado con OpenEMIS ni sus mantenedores. Puente de terceros a la API Central pública. Las credenciales permanecen en su máquina.*