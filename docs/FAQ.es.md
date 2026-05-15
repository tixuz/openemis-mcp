---
title: "OpenEMIS MCP — Preguntas Frecuentes"
description: "Preguntas frecuentes sobre OpenEMIS y el servidor MCP: gestión escolar, asistencia de estudiantes, riesgos, datos del personal y más."
keywords:
  - OpenEMIS
  - sistema de gestión escolar
  - gestión educativa
  - asistencia de estudiantes
  - riesgos de estudiantes
  - MCP
---

# OpenEMIS MCP — Preguntas Frecuentes

Este FAQ responde las preguntas más comunes sobre OpenEMIS y el servidor openemis-mcp. Para definiciones detalladas, consulte el [GLOSARIO](GLOSSARY.es.md). Para instrucciones de instalación, consulte el [README](../README.md).

---

## ¿Qué es OpenEMIS?

OpenEMIS (Open Education Management Information System) es un sistema de gestión escolar gratuito y de código abierto desarrollado por UNESCO y KORDIT. Se utiliza en jardines de infancia, escuelas primarias y secundarias, instituciones de formación profesional y universidades de múltiples países para gestionar estudiantes, personal, asistencia, evaluaciones, infraestructura, comidas, becas e informes ministeriales. La demo pública está en [demo.openemis.org/core](https://demo.openemis.org/core).

## ¿Qué es el servidor MCP de OpenEMIS?

openemis-mcp es un servidor MCP (Model Context Protocol) gratuito y de código abierto que conecta asistentes de IA — Claude, Cursor, Codex, Cline — a cualquier instancia del sistema de gestión escolar OpenEMIS. Expone 6 herramientas de lectura y 26 playbooks de solo lectura que permiten al agente de IA responder preguntas sobre estudiantes, personal, asistencia de estudiantes, calificaciones, infraestructura y riesgos en lenguaje sencillo.

## ¿Sobre qué puedo preguntar con este MCP?

Puede preguntar sobre cualquier dato de su instancia de OpenEMIS dentro de los 675 recursos que expone el servidor. Preguntas comunes incluyen: conteos de matriculación de estudiantes, registros de asistencia de estudiantes, calificaciones y boletines, puestos del personal y vacantes, infraestructura escolar, programas de alimentación, puntuaciones de riesgos de estudiantes y alertas tempranas, horarios de clase y perfiles institucionales.

## ¿Cómo ayuda en la gestión escolar?

En lugar de abrir un navegador, navegar por la interfaz de OpenEMIS y exportar datos manualmente, usted hace una pregunta en lenguaje sencillo y el servidor MCP gestiona las llamadas a la API. Por ejemplo: *"¿Cuántos estudiantes de Grado 5 faltaron más de 10 días este trimestre?"* — el agente encuentra el playbook correcto, ejecuta las consultas y devuelve la respuesta en segundos.

## ¿Cómo se rastrea la asistencia de estudiantes?

OpenEMIS rastrea la asistencia de estudiantes por excepción — solo se almacenan los eventos de ausencia y llegada tardía en `student-attendance-marked-records`. Un estudiante sin registro en un día marcado está implícitamente presente. El recurso `institution-class-attendance-records` muestra qué días se tomó asistencia (MARKED, PARTIAL_MARKED o NOT_MARKED). El [playbook Ver Última Asistencia](playbooks/view-latest-attendance.md) explica la lógica completa de lectura.

## ¿Cómo se identifican los riesgos de estudiantes?

OpenEMIS calcula una puntuación de riesgo compuesta por estudiante y período académico usando criterios configurables — generalmente tasa de asistencia, rendimiento académico e incidentes de comportamiento. Cada criterio tiene un umbral y un peso. La puntuación agregada está en `institution-student-risks`; el desglose por criterio en `student-risks-criterias`. Ver el [playbook Riesgos del Estudiante](playbooks/view-student-risks.md).

## ¿Cuál es la diferencia entre admisión y matrícula?

En OpenEMIS, la **admisión** es el proceso por el que un estudiante prospecto solicita y es aceptado por una escuela — gestionado a través de `institution-student-admission` y una cadena de aprobación de flujo de trabajo. La **matrícula** es el registro formal del estudiante aceptado en una clase para un período académico específico — almacenado en `institution-student-enrolment`. Ambos son controlados por flujo de trabajo con aprobadores asignados por rol.

## ¿Qué niveles educativos admite OpenEMIS?

OpenEMIS admite todos los niveles educativos: **jardín de infancia** (preescolar), **escuela primaria**, **escuela secundaria**, **instituciones de formación profesional secundaria**, **colegios técnicos** y **universidades**. A cada institución se le asigna un tipo y niveles educativos en el sistema.

## ¿Es gratuito?

Sí — tanto OpenEMIS (el sistema de gestión escolar) como openemis-mcp (este servidor MCP) son gratuitos y de código abierto bajo la licencia MIT. Este servidor es intencionalmente de solo lectura: las operaciones POST, PUT y DELETE no están disponibles. Las operaciones de escritura requieren **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**, que también añade el modo servidor HTTP para compatibilidad con ChatGPT.

## ¿Qué tipos de datos del personal puedo consultar?

Puede consultar los puestos actuales e históricos de un miembro del personal (FTE, título, estado), registros de licencias, posiciones históricas en otras instituciones y datos de contacto directos. Las vacantes del personal pueden contarse por institución o en todo el sistema, opcionalmente filtradas por título del puesto. Ver los playbooks [Ver Perfil del Personal](playbooks/view-staff-profile.md) y [Contar Puestos Vacantes](playbooks/count-vacant-positions.md).

---

## Documentación relacionada

- [Glosario](GLOSSARY.es.md) — definiciones de términos clave de OpenEMIS y MCP
- [README](../README.md) — visión general, instalación e índice de playbooks
- [Playbooks](playbooks/) — guías paso a paso para consultar datos escolares
- [Referencia de Recursos](resources.md) — los 675 recursos de OpenEMIS
