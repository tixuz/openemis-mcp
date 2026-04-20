<p align="center">
  <img src="assets/logo.png" alt="openemis-mcp logo" width="320">
</p>

# openemis-mcp

**Бесплатный, только для чтения MCP-мост между AI-агентами и любым экземпляром OpenEMIS.**

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
| `openemis_list_playbooks` | Список всех 24 курируемых руководств по рабочим процессам |
| `openemis_get_playbook` | Загрузить руководство по id — полные шаги, ресурсы, важные примечания |
| `openemis_get` | Унифицированное чтение: список или отдельная запись, любой ресурс, любые фильтры |

**24 курируемых руководства** по рабочим процессам, охватывающие посещаемость, оценивание, профили учеников, профили сотрудников, инфраструктуру, питание, панели управления рисками, отчеты по классам, расписания и многое другое — каждое проверено на соответствие манифесту v5 при 100% покрытии ресурсов.

**Доступны переводы:** Русский · Испанский · Хинди · Арабский — все 24 руководства на всех четырёх языках.

> ✏️ **Операции записи** (создание/обновление записей в OpenEMIS) требуют **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. Этот бесплатный сервер намеренно работает только в режиме чтения — `post`, `put` и `delete` недоступны.

## Что входит в Pro

`openemis-mcp-pro` добавляет инструменты записи, удалённый хостинг и совместимость с ChatGPT поверх этого бесплатного сервера только для чтения.

| | **Бесплатно** | **Индивидуальный Pro** | **Учрежденческий Pro** | **Страновой Pro** |
|---|---|---|---|---|
| Инструменты чтения (все 645 ресурсов) | ✅ | ✅ | ✅ | ✅ |
| 24 руководства для чтения × 5 языков | ✅ | ✅ | ✅ | ✅ |
| 3 руководства для записи (v0.2+) | — | ✅ | ✅ | ✅ |
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

24 курируемых руководства — см. [docs/playbooks/](docs/playbooks/):

| # | Руководство | Домен | Переводы |
|---|---|---|---|
| 1 | [Подсчёт вакантных должностей](docs/playbooks/count-vacant-positions.md) | Персонал | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [Отметить посещаемость ученика](docs/playbooks/mark-student-attendance.md) | Посещаемость | [RU](docs/playbooks/mark-student-attendance.ru.md) · [ES](docs/playbooks/mark-student-attendance.es.md) · [HI](docs/playbooks/mark-student-attendance.hi.md) · [AR](docs/playbooks/mark-student-attendance.ar.md) |
| 3 | [Отметить посещаемость сотрудника](docs/playbooks/mark-staff-attendance.md) | Персонал | [RU](docs/playbooks/mark-staff-attendance.ru.md) · [ES](docs/playbooks/mark-staff-attendance.es.md) · [HI](docs/playbooks/mark-staff-attendance.hi.md) · [AR](docs/playbooks/mark-staff-attendance.ar.md) |
| 4 | [Просмотреть расписание ученика](docs/playbooks/view-student-timetable.md) | Расписание | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 5 | [Панель управления ученика](docs/playbooks/student-dashboard.md) | Ученики | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 6 | [Создать PDF-отчёт об успеваемости ученика](docs/playbooks/generate-student-report-card-pdf.md) | Отчёт | [RU](docs/playbooks/generate-student-report-card-pdf.ru.md) · [ES](docs/playbooks/generate-student-report-card-pdf.es.md) · [HI](docs/playbooks/generate-student-report-card-pdf.hi.md) · [AR](docs/playbooks/generate-student-report-card-pdf.ar.md) |
| 7 | [Зачислить нового ученика](docs/playbooks/enroll-new-student.md) | Ученики | [RU](docs/playbooks/enroll-new-student.ru.md) · [ES](docs/playbooks/enroll-new-student.es.md) · [HI](docs/playbooks/enroll-new-student.hi.md) · [AR](docs/playbooks/enroll-new-student.ar.md) |
| 8 | [Записать инцидент с поведением](docs/playbooks/record-behavior-incident.md) | Ученики | [RU](docs/playbooks/record-behavior-incident.ru.md) · [ES](docs/playbooks/record-behavior-incident.es.md) · [HI](docs/playbooks/record-behavior-incident.hi.md) · [AR](docs/playbooks/record-behavior-incident.ar.md) |
| 9 | [Внести оценки за экзамен](docs/playbooks/submit-exam-marks.md) | Оценивание | [RU](docs/playbooks/submit-exam-marks.ru.md) · [ES](docs/playbooks/submit-exam-marks.es.md) · [HI](docs/playbooks/submit-exam-marks.hi.md) · [AR](docs/playbooks/submit-exam-marks.ar.md) |
| 10 | [Сводка по учреждению](docs/playbooks/institution-summary.md) | Учреждение | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 11 | [Создать PDF со статистикой учреждения](docs/playbooks/generate-institution-statistics-pdf.md) | Отчёт | [RU](docs/playbooks/generate-institution-statistics-pdf.ru.md) · [ES](docs/playbooks/generate-institution-statistics-pdf.es.md) · [HI](docs/playbooks/generate-institution-statistics-pdf.hi.md) · [AR](docs/playbooks/generate-institution-statistics-pdf.ar.md) |
| 12 | [Просмотреть последнюю посещаемость](docs/playbooks/view-latest-attendance.md) | Посещаемость | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 13 | [Просмотреть профиль ученика](docs/playbooks/view-student-profile.md) | Ученики | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 14 | [Просмотреть оценки ученика](docs/playbooks/view-student-marks.md) | Оценивание | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 15 | [Просмотреть отчёт по классу](docs/playbooks/view-class-report.md) | Отчёт | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 16 | [Просмотреть расписание](docs/playbooks/view-timetable.md) | Расписание | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 17 | [Просмотреть полный профиль учреждения](docs/playbooks/view-institution-profile.md) | Учреждение | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 18 | [Просмотреть полный профиль класса](docs/playbooks/view-class-profile.md) | Ученики | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 19 | [Просмотреть полный профиль сотрудника](docs/playbooks/view-staff-profile.md) | Персонал | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 20 | [Расширить профиль ученика](docs/playbooks/enhance-student-profile.md) | Ученики | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 21 | [Просмотреть инфраструктуру учреждения](docs/playbooks/view-institution-infrastructure.md) | Учреждение | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 22 | [Просмотреть питание в учреждении](docs/playbooks/view-institution-meals.md) | Учреждение | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 23 | [Просмотреть профиль рисков ученика и случаи социальной помощи](docs/playbooks/view-student-risks.md) | Ученики | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 24 | [Просмотреть сводку по рискам учреждения и правила оповещений](docs/playbooks/view-institution-risks.md) | Учреждение | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
---

## Архитектура

```
Агент (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 инструментов чтения + 24 руководства
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{ресурс}
```

Обнаружение, ограниченное доменом, поддерживает диалоги компактными — `openemis_discover("attendance")` возвращает 20–30 эндпоинтов, относящихся к посещаемости, а не все 1350.

> 🖥️ **Режим сервера / HTTP** (установить один раз на Oracle, подключаться откуда угодно, включая ChatGPT) доступен в **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## Документация

- [Справочник по ресурсам](docs/resources.md) — все 645 ресурсов с доступными методами
- [Руководства по рабочим процессам](docs/playbooks/) — 24 руководства на английском, русском, испанском, хинди и арабском
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — команда AI, которая это создала

---

## Лицензия

[MIT](LICENSE.md) © 2026 Khindol Madraimov

*Не аффилирован с OpenEMIS или его разработчиками. Сторонний мост к публичному Core API. Учётные данные остаются на вашем компьютере.*