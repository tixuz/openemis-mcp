---
title: "openemis-mcp — AI-мост для управления образованием OpenEMIS"
description: "Бесплатный MCP-сервер для подключения AI-ассистентов к OpenEMIS — школьной информационной системе. Запрашивайте посещаемость учеников, риски и 678 ресурсов."
keywords:
  - OpenEMIS
  - школьная информационная система
  - управление образованием
  - посещаемость учеников
  - риски учеников
  - MCP
---

<p align="center">
  <img src="assets/logo.png" alt="openemis-mcp logo — AI-мост для школьной информационной системы OpenEMIS" width="320">
</p>

# openemis-mcp — AI-мост для школьной информационной системы OpenEMIS

**Бесплатный, только для чтения MCP-мост между AI-агентами и любым экземпляром OpenEMIS.**

OpenEMIS — бесплатная открытая школьная информационная система от ЮНЕСКО и KORDIT, используется в детских садах, школах, средних профессиональных и высших учебных заведениях.

> **Что это такое:** openemis-mcp — бесплатный MCP-сервер, который подключает AI-ассистентов к OpenEMIS — школьной информационной системе. Открывает доступ к 678 ресурсам (посещаемость учеников, риски учеников, персонал, экзамены) через 26 руководств только для чтения.

Построен на основе опубликованного **OpenEMIS Core API** (справочник: [api.openemis.org/core](https://api.openemis.org/core)) и проверен на публичном демо-сайте [demo.openemis.org/core](https://demo.openemis.org/core).

Задавайте вопросы простым языком:

> *"Сколько учеников сейчас учится в начальной школе Эвори?"*

Агент планирует вызовы, этот MCP предоставляет данные:

> *"В начальной школе Эвори в настоящее время зачислено 97 учеников в 6 классах."*

Никакого кода. Никакого JSON. Просто спросите.

---

## Что включено (бесплатно, MIT)

| Инструмент | Что делает |
|---|---|
| `openemis_health` | Проверить доступность настроенного экземпляра — реальный цикл входа в систему |
| `openemis_list_domains` | Список 9 курируемых доменов (Посещаемость, Оценивание, Персонал, Ученики…) |
| `openemis_discover` | Тема → до 30 ограниченных эндпоинтов. Поддерживает диалоги компактными |
| `openemis_list_playbooks` | Список всех 40 руководств — 26 для чтения здесь, 14 заглушек с перенаправлением на mcp-pro |
| `openemis_get_playbook` | Загрузить руководство по id — полные шаги, ресурсы, важные примечания |
| `openemis_get` | Унифицированное чтение: список или отдельная запись, любой ресурс, любые фильтры |

**26 руководств только для чтения (+ 14 заглушек)** охватывают посещаемость, оценивание, профили учеников и сотрудников, инфраструктуру, питание, панели управления рисками, отчёты по классам, расписания, журналы аудита, аккредитацию и регистрацию школ, состояние очереди приёма/зачисления, а также объяснение того, как плагин workflow OpenEMIS управляет всеми многоэтапными согласованиями — каждое проверено на соответствие манифесту v5 при 100% покрытии ресурсов. **14 заглушек руководств для записи/auth** доступны для обнаружения здесь, но перенаправляют на **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

**Доступны переводы:** Русский · Испанский · Хинди · Арабский — первоначальные 17 руководств для просмотра переведены на все четыре языка; 9 новых руководств (добавлены в v1.1.0 для Core 5.10.0, плюс два руководства по workflow) пока только на английском.

> ✏️ **Операции записи** (создание/обновление записей в OpenEMIS) требуют **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. Этот бесплатный сервер намеренно работает только в режиме чтения — `post`, `put` и `delete` недоступны.

## Что входит в Pro

`openemis-mcp-pro` добавляет инструменты записи, удалённый хостинг и совместимость с ChatGPT поверх этого бесплатного сервера только для чтения.

| | **Бесплатно** | **Индивидуальный Pro** | **Учрежденческий Pro** | **Страновой Pro** |
|---|---|---|---|---|
| Инструменты чтения (все 678 ресурсов, Core 5.13.0) | ✅ | ✅ | ✅ | ✅ |
| 26 руководств для чтения (17 × 5 языков + 9 EN) | ✅ | ✅ | ✅ | ✅ |
| 14 руководств записи / auth (mark-attendance, enrol, set-accreditation…) | заглушка | ✅ | ✅ | ✅ |
| Режим stdio (Claude Code, Cursor, Cline) | ✅ | ✅ | ✅ | ✅ |
| **Режим HTTP-сервера** (Oracle / VPS — установить один раз, подключаться по URL) | — | ✅ | ✅ | ✅ |
| **Адаптер OpenAPI** (ChatGPT Custom GPT, любой REST-клиент) | — | ✅ | ✅ | ✅ |
| Прямая запись — одна запись | — | ✅ | ✅ | ✅ |
| Аудит действий по учреждению | — | — | ✅ | ✅ |
| Выполнение маршрута рабочего процесса | — | — | ✅ | ✅ |
| Шлюз утверждения администратором учреждения | — | — | ✅ | ✅ |
| Пакетные операции в рамках одного учреждения | — | — | ✅ | ✅ |
| Пакетные операции для нескольких учреждений | — | — | — | ✅ |
| Шлюзы утверждения министерством | — | — | — | ✅ |
| Межучрежденческий контроль | — | — | — | ✅ |

**Режим HTTP-сервера** позволяет установить Pro один раз на экземпляре [Oracle Always Free](https://www.oracle.com/cloud/free/) ARM и подключаться с любого устройства — без настройки на каждой машине. Встроенный адаптер OpenAPI означает, что учителя могут использовать **ChatGPT** (или любого AI-ассистента) для отметки посещаемости и поиска записей учеников, импортируя единственный URL схемы. См. [Руководство для учителя по ChatGPT](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) для пошаговой настройки.

→ **Цены:** khindol.madraimov@gmail.com

---

## Установка

Требуется **Node 22+**.

```bash
git clone https://github.com/tixuz/openemis-mcp.git
cd openemis-mcp
npm install
npm run build
cp .env.example .env
$EDITOR .env
```

### Настройка

```env
OPENEMIS_BASE_URL=https://demo.openemis.org/core
OPENEMIS_USERNAME=admin
OPENEMIS_PASSWORD=your_password
OPENEMIS_API_KEY=your_api_key
```

### Тест работоспособности

```bash
set -a && source .env && set +a
node scripts/smoke-login.mjs
```

### Регистрация в Claude Code

```bash
claude mcp add openemis \
  --env OPENEMIS_BASE_URL="https://your-instance/core" \
  --env OPENEMIS_USERNAME="…" \
  --env OPENEMIS_PASSWORD="…" \
  --env OPENEMIS_API_KEY="…" \
  -- node "$(pwd)/dist/server.js"
```

Работает с любым MCP-совместимым клиентом: Claude Code, Cursor, Cline, Codex (через [gemmy-and-qwenny](https://github.com/tixuz/gemmy-and-qwenny)) или любым stdio MCP-клиентом.

> 🌐 **Удалённая / серверная установка:** [openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro) добавляет режим HTTP-сервера — установите один раз на Oracle Always Free, и каждый AI-ассистент (Claude Code, Cursor, **ChatGPT**) будет подключаться по URL без настройки на каждой машине. См. [Руководство для учителя по ChatGPT](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md), чтобы узнать, как позволить учителям отмечать посещаемость через ChatGPT.

---

## Руководства по рабочим процессам

26 курируемых руководств только для чтения — см. [docs/playbooks/](docs/playbooks/). Руководства записи (отметка посещаемости, зачисление, аккредитация и т.д.) доступны как заглушки, перенаправляющие на **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

> **Новое в v1.1.0:** добавлено 9 новых руководств для OpenEMIS Core 5.10.0 — аккредитация / регистрация школ, бюджет учреждения, история отсутствий ученика, журнал аудита действий пользователя, состав класса, состояние очереди приёма / зачисления и общее объяснение системы workflow. Идентификаторы: `diagnose-alert-delivery`, `view-school-accreditation`, `view-school-registration`, `view-institution-budget`, `query-student-absence-history`, `query-user-activity-audit-log`, `view-class-roster`, `view-admission-and-enrolment-queue-state`, `explain-workflow-system`. Доступны через `openemis_get_playbook` — пока только на английском.

| # | Руководство | Домен | Переводы |
|---|---|---|---|
| 1 | [Подсчёт вакантных должностей](docs/playbooks/count-vacant-positions.md) | Персонал | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [Просмотреть расписание ученика](docs/playbooks/view-student-timetable.md) | Расписание | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 3 | [Панель управления ученика](docs/playbooks/student-dashboard.md) | Ученики | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 4 | [Сводка по учреждению](docs/playbooks/institution-summary.md) | Учреждение | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 5 | [Просмотреть последнюю посещаемость](docs/playbooks/view-latest-attendance.md) | Посещаемость | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 6 | [Просмотреть профиль ученика](docs/playbooks/view-student-profile.md) | Ученики | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 7 | [Просмотреть оценки ученика](docs/playbooks/view-student-marks.md) | Оценивание | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 8 | [Просмотреть отчёт по классу](docs/playbooks/view-class-report.md) | Отчёт | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 9 | [Просмотреть расписание](docs/playbooks/view-timetable.md) | Расписание | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 10 | [Просмотреть полный профиль учреждения](docs/playbooks/view-institution-profile.md) | Учреждение | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 11 | [Просмотреть полный профиль класса](docs/playbooks/view-class-profile.md) | Ученики | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 12 | [Просмотреть полный профиль сотрудника](docs/playbooks/view-staff-profile.md) | Персонал | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 13 | [Расширить профиль ученика](docs/playbooks/enhance-student-profile.md) | Ученики | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 14 | [Просмотреть инфраструктуру учреждения](docs/playbooks/view-institution-infrastructure.md) | Учреждение | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 15 | [Просмотреть питание в учреждении](docs/playbooks/view-institution-meals.md) | Учреждение | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 16 | [Просмотреть профиль рисков ученика и случаи социальной помощи](docs/playbooks/view-student-risks.md) | Ученики | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 17 | [Просмотреть сводку по рискам учреждения и правила оповещений](docs/playbooks/view-institution-risks.md) | Учреждение | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
---

## Архитектура

```
Агент (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 инструментов чтения + 26 руководств + 14 заглушек
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{ресурс}   (3 361 эндпоинтов / 678 ресурсов, Core 5.13.0)
```

Обнаружение, ограниченное доменом, поддерживает диалоги компактными — `openemis_discover("attendance")` возвращает 20–30 эндпоинтов, относящихся к посещаемости, а не все 3 361.

> 🖥️ **Режим сервера / HTTP** (установить один раз на Oracle, подключаться откуда угодно, включая ChatGPT) доступен в **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## Документация

- [Справочник по ресурсам](docs/resources.md) — все 678 ресурсов с доступными методами (Core 5.13.0)
- [Руководства по рабочим процессам](docs/playbooks/) — 17 руководств просмотра на 5 языках + 9 новых только на английском (переводы позже)
- [GLOSSARY.md](docs/GLOSSARY.md) — ключевые термины: OpenEMIS, MCP, посещаемость учеников, риски и другое
- [FAQ.md](docs/FAQ.md) — часто задаваемые вопросы об управлении образованием с OpenEMIS MCP
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — команда AI, которая это создала

---

## Лицензия

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*Не аффилирован с OpenEMIS или его разработчиками. Сторонний мост к публичному Core API. Учётные данные остаются на вашем компьютере.*