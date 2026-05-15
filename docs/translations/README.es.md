<p align="center">
  <img src="assets/logo.png" alt="openemis-mcp logo" width="320">
</p>

# openemis-mcp

**Puente MCP gratuito y de solo lectura entre agentes de IA y cualquier instancia de OpenEMIS.**

OpenEMIS es un sistema de gestión escolar (SGE) gratuito y de código abierto desarrollado por UNESCO y KORDIT, utilizado desde jardines de infancia hasta universidades y centros de formación profesional.

Construido sobre la **API pública de OpenEMIS Core** (referencia: [api.openemis.org/core](https://api.openemis.org/core)) y verificado contra la demo pública en [demo.openemis.org/core](https://demo.openemis.org/core).

Pregunte en español sencillo:

> *"¿Cuántos estudiantes actuales hay en la Escuela Primaria Avory?"*

El agente planifica las llamadas, este MCP entrega los datos:

> *"La Escuela Primaria Avory tiene 97 estudiantes matriculados actualmente en 6 clases."*

Sin código. Sin JSON. Solo pregunte.

---

## Qué incluye (gratuito, MIT)

| Herramienta | Qué hace |
|---|---|
| `openemis_health` | Hacer ping a la instancia configurada — ciclo completo de inicio de sesión real |
| `openemis_list_domains` | Listar los 9 dominios curados (Asistencia, Evaluación, Personal, Estudiante…) |
| `openemis_discover` | Tema → hasta 30 endpoints delimitados. Mantiene las conversaciones pequeñas |
| `openemis_list_playbooks` | Listar los 40 playbooks — 26 de solo lectura aquí, 14 stubs que redirigen a mcp-pro |
| `openemis_get_playbook` | Cargar un playbook por id — pasos completos, recursos, notas importantes |
| `openemis_get` | Lectura unificada: lista o registro único, cualquier recurso, cualquier filtro |

**26 playbooks de solo lectura (+ 14 stubs)** cubren asistencia, evaluación, perfiles de estudiantes y personal, infraestructura, comidas, paneles de riesgo, informes de clase, horarios, registros de auditoría, acreditación y registro escolar, estado de la cola de admisión / matrícula, y una introducción al sistema de workflow de OpenEMIS — cada uno verificado contra el manifiesto v5 con cobertura del 100% de recursos. **14 stubs de playbooks de escritura / auth** son descubribles aquí pero redirigen a **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

**Traducciones disponibles:** Ruso · Español · Hindi · Árabe — los 17 playbooks de visualización originales traducidos en los cuatro idiomas; 9 playbooks nuevos (añadidos en v1.1.0 para Core 5.10.0, más los dos playbooks de workflow) están actualmente sólo en inglés.

> ✏️ **Las operaciones de escritura** (crear/actualizar registros en OpenEMIS) requieren **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. Este servidor gratuito es intencionalmente de solo lectura — `post`, `put` y `delete` no están disponibles.

## Qué incluye Pro

`openemis-mcp-pro` añade herramientas de escritura, alojamiento remoto y compatibilidad con ChatGPT además de este servidor gratuito de solo lectura.

| | **Gratuito** | **Pro Individual** | **Pro Institución** | **Pro País** |
|---|---|---|---|---|
| Herramientas de lectura (los 675 recursos, Core 5.10.0) | ✅ | ✅ | ✅ | ✅ |
| 26 playbooks de lectura (17 × 5 idiomas + 9 EN) | ✅ | ✅ | ✅ | ✅ |
| 14 playbooks de escritura / auth (mark-attendance, enrol, set-accreditation…) | stub | ✅ | ✅ | ✅ |
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

26 guías de flujo de trabajo de solo lectura — vea [docs/playbooks/](docs/playbooks/). Los playbooks de escritura (marcar asistencia, matricular, acreditación, etc.) son descubribles aquí como stubs que apuntan a **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

> **Nuevo en v1.1.0:** se añadieron 9 nuevos playbooks para OpenEMIS Core 5.10.0 — acreditación / registro escolar, presupuesto de institución, historial de ausencias de estudiantes, registro de auditoría de actividad del usuario, lista de clase, estado de la cola de admisión / matrícula y explicación general del sistema de workflow. IDs: `diagnose-alert-delivery`, `view-school-accreditation`, `view-school-registration`, `view-institution-budget`, `query-student-absence-history`, `query-user-activity-audit-log`, `view-class-roster`, `view-admission-and-enrolment-queue-state`, `explain-workflow-system`. Accesibles vía `openemis_get_playbook` — actualmente sólo en inglés.

| # | Playbook | Dominio | Traducciones |
|---|---|---|---|
| 1 | [Contar Puestos Vacantes](docs/playbooks/count-vacant-positions.md) | Personal | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [Ver Horario del Estudiante](docs/playbooks/view-student-timetable.md) | Horario | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 3 | [Panel del Estudiante](docs/playbooks/student-dashboard.md) | Estudiante | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 4 | [Resumen de la Institución](docs/playbooks/institution-summary.md) | Institución | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 5 | [Ver Última Asistencia](docs/playbooks/view-latest-attendance.md) | Asistencia | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 6 | [Ver Perfil del Estudiante](docs/playbooks/view-student-profile.md) | Estudiante | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 7 | [Ver Calificaciones del Estudiante](docs/playbooks/view-student-marks.md) | Evaluación | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 8 | [Ver Informe de Clase](docs/playbooks/view-class-report.md) | Informe | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 9 | [Ver Horario](docs/playbooks/view-timetable.md) | Horario | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 10 | [Ver Perfil Completo de la Institución](docs/playbooks/view-institution-profile.md) | Institución | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 11 | [Ver Perfil Completo de la Clase](docs/playbooks/view-class-profile.md) | Estudiante | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 12 | [Ver Perfil Completo de un Miembro del Personal](docs/playbooks/view-staff-profile.md) | Personal | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 13 | [Mejorar Perfil del Estudiante](docs/playbooks/enhance-student-profile.md) | Estudiante | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 14 | [Ver Infraestructura de la Institución](docs/playbooks/view-institution-infrastructure.md) | Institución | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 15 | [Ver Comidas de la Institución](docs/playbooks/view-institution-meals.md) | Institución | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 16 | [Ver Perfil de Riesgo del Estudiante y Casos de Bienestar](docs/playbooks/view-student-risks.md) | Estudiante | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 17 | [Ver Resumen de Riesgos de la Institución y Reglas de Alerta](docs/playbooks/view-institution-risks.md) | Institución | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
---

## Arquitectura

```
Agente (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 herramientas de lectura + 26 playbooks + 14 stubs
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{resource}   (3 355 endpoints / 675 recursos, Core 5.10.0)
```

El descubrimiento delimitado por dominio mantiene las conversaciones pequeñas — `openemis_discover("attendance")` devuelve los 20–30 endpoints relevantes para asistencia, no los 3 355.

> 🖥️ **El modo servidor / HTTP** (instalar una vez en Oracle, conectarse desde cualquier lugar incluyendo ChatGPT) está disponible en **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## Documentación

- [Referencia de Recursos](docs/resources.md) — los 675 recursos con disponibilidad de métodos (Core 5.10.0)
- [Playbooks](docs/playbooks/) — 17 playbooks de visualización en 5 idiomas + 9 nuevos sólo en inglés (traducciones a continuación)
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — el equipo de IA que construyó esto

---

## Licencia

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*No afiliado a OpenEMIS o sus mantenedores. Puente de terceros a la API Core pública. Las credenciales permanecen en su máquina.*