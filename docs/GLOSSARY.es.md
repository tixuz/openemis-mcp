---
title: "Glosario OpenEMIS — Términos Clave para Gestión Escolar y MCP"
description: "Definiciones de los términos clave de OpenEMIS: asistencia de estudiantes, riesgos, flujos de trabajo, instituciones y el servidor MCP."
keywords:
  - OpenEMIS
  - sistema de gestión escolar
  - gestión educativa
  - asistencia de estudiantes
  - riesgos de estudiantes
  - MCP
---

# Glosario OpenEMIS — Términos Clave para Gestión Escolar y MCP

Este glosario define los términos fundamentales que encontrará al usar OpenEMIS o el servidor openemis-mcp. Cada entrada nombra el término, explica cómo aparece en el sistema de gestión escolar OpenEMIS y enlaza a un playbook o recurso relevante.

---

### OpenEMIS

OpenEMIS (Open Education Management Information System) es un sistema de gestión escolar gratuito y de código abierto desarrollado por UNESCO y KORDIT. Gestiona estudiantes, personal, asistencia, evaluación, infraestructura, comidas, becas y reportes ministeriales en jardines de infancia, escuelas primarias, secundarias, instituciones de formación profesional y universidades.

### OpenEMIS Core

OpenEMIS Core es la aplicación servidor que alimenta la API REST en `/api/v5/{resource}`. Este servidor MCP apunta a Core 5.13.0, que expone 678 recursos y 3.361 endpoints.

### MCP (Model Context Protocol)

MCP es un protocolo abierto de Anthropic que permite a los asistentes de IA (Claude, Cursor, Codex, Cline) llamar herramientas externas de forma estructurada. openemis-mcp es un servidor MCP que expone 6 herramientas para consultar datos de OpenEMIS. Ver [README](../README.md) para instrucciones de instalación.

### Sistema de gestión escolar (SMIS)

Un sistema de gestión escolar (también llamado SMIS o EMIS) centraliza los datos administrativos de las instituciones educativas: matrícula, asistencia de estudiantes, calificaciones, personal, infraestructura e informes. OpenEMIS es el SMIS respaldado por UNESCO utilizado en múltiples países.

### Gestión educativa

La gestión educativa se refiere a la supervisión administrativa de las instituciones educativas — seguimiento de estudiantes, personal, recursos y resultados. OpenEMIS apoya la gestión educativa a nivel de escuela, distrito y ministerio.

### Asistencia de estudiantes

En OpenEMIS, la asistencia de estudiantes se registra por excepción: solo se almacenan los eventos de ausencia y llegada tardía. Un estudiante sin registro en un día marcado está implícitamente presente. Los datos están en `student-attendance-marked-records` e `institution-class-attendance-records`. Ver el [playbook Ver Última Asistencia](playbooks/view-latest-attendance.md).

### Asistencia del personal

La asistencia del personal se rastrea a través de `institution-staff-attendances`. Los registros de licencias están en `institution-staff-leave`. Ver el [playbook Ver Perfil del Personal](playbooks/view-staff-profile.md).

### Riesgos de estudiantes / alerta temprana

OpenEMIS calcula una puntuación de riesgo compuesta por estudiante y período académico usando criterios configurables (asistencia, rendimiento académico, comportamiento). Las puntuaciones están en `institution-student-risks`. Ver el [playbook Ver Riesgos del Estudiante](playbooks/view-student-risks.md).

### Incidente de comportamiento

Un incidente de comportamiento es un registro de la conducta de un estudiante, almacenado en `student-behaviours`. Los incidentes tienen categoría, clasificación, fecha y adjunto opcional. Aparecen en el [playbook Panel del Estudiante](playbooks/student-dashboard.md).

### Flujo de trabajo / cola de admisión / cola de matrícula

OpenEMIS usa un plugin de flujo de trabajo configurable para gestionar cadenas de aprobación en múltiples pasos: admisión, matrícula, transferencias de personal y más. Cada flujo de trabajo tiene modelos, pasos, estados, transiciones y responsables por rol.

### Institución (jardín, primaria, secundaria, vocacional, universidad)

Una institución en OpenEMIS es cualquier establecimiento educativo registrado en el sistema: jardín de infancia, escuela primaria, secundaria, institución vocacional, colegio técnico o universidad. Cada institución tiene un `institution_id` único. Ver el [playbook Ver Perfil de la Institución](playbooks/view-institution-profile.md).

### Período académico

Un período académico es un intervalo de tiempo definido (año, semestre, trimestre) que delimita la mayoría de los datos en OpenEMIS: asistencia, calificaciones, matrícula y puntuaciones de riesgo. La mayoría de los recursos de la API requieren `academic_period_id` como filtro obligatorio.

### Grado educativo

Un grado educativo (por ejemplo, Grado 1, Grado 9) es un nivel dentro de un programa educativo. OpenEMIS almacena los grados en `education-grades`. Los grados ofrecidos por una institución están en `institution-grades`.

### Sección / clase

Una clase en OpenEMIS es un grupo de estudiantes asignados a un tutor de clase, almacenado en `institution-classes`. Tiene nivel de grado, lista de estudiantes y horario. Ver el [playbook Ver Perfil de la Clase](playbooks/view-class-profile.md).

### Calificación de examen / boletín

Las calificaciones de examen se almacenan en `assessment-item-results` — una fila por estudiante por ítem de evaluación. Un boletín agrega calificaciones por materia para un período. Ver el [playbook Ver Calificaciones](playbooks/view-student-marks.md) y el [playbook Ver Informe de Clase](playbooks/view-class-report.md).

### Materia / currículo

Una materia (Matemáticas, Inglés, Ciencias, etc.) se define en `education-subjects` a nivel del sistema y se vincula a una clase a través de `institution-class-subjects`.

### Playbook

En openemis-mcp, un playbook es una guía paso a paso que indica al agente de IA cómo responder una pregunta de gestión escolar usando secuencias de llamadas `openemis_get`. Los playbooks están en `data/playbooks.json` y se recuperan con `openemis_get_playbook`. Ver [docs/playbooks/](playbooks/).

### Recurso (en términos de MCP)

En openemis-mcp, un recurso es cualquier endpoint de API disponible mediante `GET /api/v5/{resource}`. OpenEMIS Core 5.13.0 expone 678 recursos en dominios como Institución, Estudiante, Personal, Evaluación, Asistencia y Flujo de Trabajo. Ver [Referencia de Recursos](resources.md).

---

## Documentación relacionada

- [README](../README.md) — visión general e instalación
- [FAQ](FAQ.es.md) — preguntas frecuentes
- [Playbooks](playbooks/) — guías de consulta de datos escolares
- [Referencia de Recursos](resources.md) — los 678 recursos de OpenEMIS
