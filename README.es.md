# openemis-mcp

**Puente MCP gratuito y de solo lectura entre agentes de IA y cualquier instancia de OpenEMIS.**

Construido sobre la **API pública de OpenEMIS Core** (referencia: [api.openemis.org/core](https://api.openemis.org/core)) y verificado contra la demo pública en [demo.openemis.org/core](https://demo.openemis.org/core).

Pregunte en español sencillo:

> *"¿Cuántos estudiantes actuales hay en la Escuela Primaria Avory?"*

El agente planifica las llamadas, este MCP entrega los datos:

> *"La Escuela Primaria Avory (código P1002) tiene 553 estudiantes matriculados actualmente."*

Sin código. Sin JSON. Solo pregunte.

---

## Qué incluye (gratuito, MIT)

| Herramienta | Qué hace |
|---|---|
| `openemis_health` | Hacer ping a la instancia configurada — ciclo completo de inicio de sesión real |
| `openemis_list_domains` | Listar los 9 dominios curados (Asistencia, Evaluación, Personal, Estudiante…) |
| `openemis_discover` | Tema → hasta 30 endpoints delimitados. Mantiene las conversaciones pequeñas |
| `openemis_list_playbooks` | Listar las 24 guías de flujo de trabajo curadas |
| `openemis_get_playbook` | Cargar un playbook por id — pasos completos, recursos, notas importantes |
| `openemis_get` | Lectura unificada: lista o registro único, cualquier recurso, cualquier filtro |

**24 playbooks curados** que cubren asistencia, evaluación, perfiles de estudiantes, perfiles de personal, infraestructura, comidas, paneles de riesgo, informes de clase, horarios y más — cada uno verificado contra el manifiesto v5 con cobertura del 100% de recursos.

**Traducciones disponibles:** Ruso · Español · Hindi · Árabe — los 24 playbooks en los cuatro idiomas.

> ✏️ **Las operaciones de escritura** (crear/actualizar registros en OpenEMIS) requieren **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. Este servidor gratuito es intencionalmente de solo lectura — `post`, `put` y `delete` no están disponibles.

## Qué incluye Pro

`openemis-mcp-pro` añade herramientas de escritura, alojamiento remoto y compatibilidad con ChatGPT además de este servidor gratuito de solo lectura.

| | **Gratuito** | **Pro Individual** | **Pro Institución** | **Pro País** |
|---|---|---|---|---|
| Herramientas de lectura (todos los 645 recursos) | ✅ | ✅ | ✅ | ✅ |
| 27 playbooks curados + traducciones | ✅ | ✅ | ✅ | ✅ |
| Modo stdio (Claude Code, Cursor, Cline) | ✅ | ✅ | ✅ | ✅ |
| **Modo servidor HTTP** (Oracle / VPS — instalar una vez, conectar por URL) | — | ✅ | ✅ | ✅ |
| **Adaptador OpenAPI** (ChatGPT Custom GPT, cualquier cliente REST) | — | ✅ | ✅ | ✅ |
| Escritura directa — registro único | — | ✅ | ✅ | ✅ |
| Traza de auditoría de institución | — | — | ✅ | ✅ |
| Ejecución de rutas de flujo de trabajo | — | — | ✅ | ✅ |
| Puerta de aprobación de administrador de institución | — | — | ✅ | ✅ |
| Operaciones por lotes dentro de una institución | — | — | ✅ | ✅ |
| Operaciones por lotes multi-institución | — | — | — | ✅ |
| Puertas de aprobación del ministerio | — | — | — | ✅ |
| Supervisión entre instituciones | — | — | — | ✅ |

**El modo servidor HTTP** le permite instalar Pro una vez en una instancia ARM [Oracle Always Free](https://www.oracle.com/cloud/free/) y conectarse desde cualquier dispositivo — sin configuración por máquina. El adaptador OpenAPI integrado significa que los profesores pueden usar **ChatGPT** (o cualquier asistente de IA) para marcar asistencia y buscar registros de estudiantes importando una sola URL de esquema. Consulte la [Guía para Profesores de ChatGPT](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) para la configuración paso a paso.

→ **Precios:** khindol.madraimov@gmail.com

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

### Prueba de humo

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

> 🌐 **Instalación remota / en servidor:** [openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro) añade un modo servidor HTTP — instale una vez en Oracle Always Free y cada asistente de IA (Claude Code, Cursor, **ChatGPT**) se conecta por URL sin configuración por máquina. Vea la [Guía para Profesores de ChatGPT](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) para saber cómo permitir que los profesores marquen asistencia vía ChatGPT.

---

## Playbooks

24 guías de flujo de trabajo curadas — vea [docs/playbooks/](docs/playbooks/):

| # | Playbook | Dominio | Traducciones |
|---|---|---|---|
| 1 | [Contar Puestos Vacantes](docs/playbooks/count-vacant-positions.md) | Personal | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [Marcar Asistencia de Estudiante](docs/playbooks/mark-student-attendance.md) | Asistencia | [RU](docs/playbooks/mark-student-attendance.ru.md) · [ES](docs/playbooks/mark-student-attendance.es.md) · [HI](docs/playbooks/mark-student-attendance.hi.md) · [AR](docs/playbooks/mark-student-attendance.ar.md) |
| 3 | [Marcar Asistencia de Personal](docs/playbooks/mark-staff-attendance.md) | Personal | [RU](docs/playbooks/mark-staff-attendance.ru.md) · [ES](docs/playbooks/mark-staff-attendance.es.md) · [HI](docs/playbooks/mark-staff-attendance.hi.md) · [AR](docs/playbooks/mark-staff-attendance.ar.md) |
| 4 | [Ver Horario del Estudiante](docs/playbooks/view-student-timetable.md) | Horario | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 5 | [Panel del Estudiante](docs/playbooks/student-dashboard.md) | Estudiante | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 6 | [Generar PDF de Boletín de Calificaciones del Estudiante](docs/playbooks/generate-student-report-card-pdf.md) | Informe | [RU](docs/playbooks/generate-student-report-card-pdf.ru.md) · [ES](docs/playbooks/generate-student-report-card-pdf.es.md) · [HI](docs/playbooks/generate-student-report-card-pdf.hi.md) · [AR](docs/playbooks/generate-student-report-card-pdf.ar.md) |
| 7 | [Matricular un Nuevo Estudiante](docs/playbooks/enroll-new-student.md) | Estudiante | [RU](docs/playbooks/enroll-new-student.ru.md) · [ES](docs/playbooks/enroll-new-student.es.md) · [HI](docs/playbooks/enroll-new-student.hi.md) · [AR](docs/playbooks/enroll-new-student.ar.md) |
| 8 | [Registrar un Incidente de Conducta](docs/playbooks/record-behavior-incident.md) | Estudiante | [RU](docs/playbooks/record-behavior-incident.ru.md) · [ES](docs/playbooks/record-behavior-incident.es.md) · [HI](docs/playbooks/record-behavior-incident.hi.md) · [AR](docs/playbooks/record-behavior-incident.ar.md) |
| 9 | [Enviar Calificaciones de Examen](docs/playbooks/submit-exam-marks.md) | Evaluación | [RU](docs/playbooks/submit-exam-marks.ru.md) · [ES](docs/playbooks/submit-exam-marks.es.md) · [HI](docs/playbooks/submit-exam-marks.hi.md) · [AR](docs/playbooks/submit-exam-marks.ar.md) |
| 10 | [Resumen de la Institución](docs/playbooks/institution-summary.md) | Institución | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 11 | [Generar PDF de Estadísticas de la Institución](docs/playbooks/generate-institution-statistics-pdf.md) | Informe | [RU](docs/playbooks/generate-institution-statistics-pdf.ru.md) · [ES](docs/playbooks/generate-institution-statistics-pdf.es.md) · [HI](docs/playbooks/generate-institution-statistics-pdf.hi.md) · [AR](docs/playbooks/generate-institution-statistics-pdf.ar.md) |
| 12 | [Ver Última Asistencia](docs/playbooks/view-latest-attendance.md) | Asistencia | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 13 | [Ver Perfil del Estudiante](docs/playbooks/view-student-profile.md) | Estudiante | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 14 | [Ver Calificaciones del Estudiante](docs/playbooks/view-student-marks.md) | Evaluación | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 15 | [Ver Informe de Clase](docs/playbooks/view-class-report.md) | Informe | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 16 | [Ver Horario](docs/playbooks/view-timetable.md) | Horario | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 17 | [Ver Perfil Completo de la Institución](docs/playbooks/view-institution-profile.md) | Institución | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 18 | [Ver Perfil Completo de la Clase](docs/playbooks/view-class-profile.md) | Estudiante | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 19 | [Ver Perfil Completo de un Miembro del Personal](docs/playbooks/view-staff-profile.md) | Personal | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 20 | [Mejorar Perfil del Estudiante](docs/playbooks/enhance-student-profile.md) | Estudiante | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 21 | [Ver Infraestructura de la Institución](docs/playbooks/view-institution-infrastructure.md) | Institución | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 22 | [Ver Comidas de la Institución](docs/playbooks/view-institution-meals.md) | Institución | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 23 | [Ver Perfil de Riesgo del Estudiante y Casos de Bienestar](docs/playbooks/view-student-risks.md) | Estudiante | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 24 | [Ver Resumen de Riesgos de la Institución y Reglas de Alerta](docs/playbooks/view-institution-risks.md) | Institución | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
---

## Arquitectura

```
Agente (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 herramientas de lectura + 24 playbooks
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{resource}
```

El descubrimiento delimitado por dominio mantiene las conversaciones pequeñas — `openemis_discover("attendance")` devuelve los 20–30 endpoints relevantes para asistencia, no los 1,350.

> 🖥️ **El modo servidor / HTTP** (instalar una vez en Oracle, conectarse desde cualquier lugar incluyendo ChatGPT) está disponible en **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## Documentación

- [Referencia de Recursos](docs/resources.md) — los 645 recursos con disponibilidad de métodos
- [Playbooks](docs/playbooks/) — 24 guías de flujo de trabajo en inglés, ruso, español, hindi y árabe
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — el equipo de IA que construyó esto

---

## Licencia

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*No afiliado a OpenEMIS o sus mantenedores. Puente de terceros a la API Core pública. Las credenciales permanecen en su máquina.*