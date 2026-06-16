---
title: "openemis-mcp — جسر الذكاء الاصطناعي لنظام إدارة المدارس OpenEMIS"
description: "خادم MCP مجاني يربط مساعدي الذكاء الاصطناعي بـ OpenEMIS نظام إدارة المدارس. استعلم عن حضور الطلاب والمخاطر والموظفين و678 موردًا."
keywords:
  - OpenEMIS
  - نظام إدارة المدارس
  - إدارة التعليم
  - حضور الطلاب
  - مخاطر الطلاب
  - MCP
---

<p align="center">
  <img src="assets/logo.png" alt="openemis-mcp logo — جسر الذكاء الاصطناعي لنظام إدارة المدارس OpenEMIS" width="320">
</p>

# openemis-mcp — جسر الذكاء الاصطناعي لنظام إدارة المدارس OpenEMIS

**جسر MCP مجاني للقراءة فقط بين وكلاء الذكاء الاصطناعي وأي نسخة من OpenEMIS.**

OpenEMIS هو نظام معلومات إدارة مدرسية مجاني ومفتوح المصدر طورته اليونسكو وKORDIT، ويُستخدم في رياض الأطفال والمدارس ومؤسسات التعليم المهني الثانوي والجامعات.

> **ما هذا:** openemis-mcp خادم MCP مجاني يربط مساعدي الذكاء الاصطناعي بـ OpenEMIS نظام إدارة المدارس. يتيح الوصول إلى 678 موردًا (حضور الطلاب، مخاطر الطلاب، الموظفون، الامتحانات) عبر 26 دليل سير عمل للقراءة فقط.

مبني على **واجهة برمجة تطبيقات OpenEMIS Core** المنشورة (المرجع: [api.openemis.org/core](https://api.openemis.org/core)) وتم التحقق منه مقابل النسخة التجريبية العامة على [demo.openemis.org/core](https://demo.openemis.org/core).

اطرح سؤالك باللغة الإنجليزية البسيطة:

> *"كم عدد الطلاب الحاليين في مدرسة أفوري الابتدائية؟"*

يقوم الوكيل بتخطيط الاستدعاءات، ويوفر هذا MCP البيانات:

> *"مدرسة أفوري الابتدائية لديها 97 طالبًا مسجلين حاليًا في 6 فصول."*

لا يوجد كود برمجي. لا يوجد JSON. فقط اسأل.

---

## ما المدرج (مجاني، MIT)

| الأداة | ما الذي تقوم به |
|---|---|
| `openemis_health` | التحقق من حالة النسخة المكونة — رحلة تسجيل دخول فعلية |
| `openemis_list_domains` | عرض المجالات التسعة المنسقة (الحضور، التقييم، الموظفين، الطلاب…) |
| `openemis_discover` | موضوع → ما يصل إلى 30 نقطة نهاية محددة النطاق. يحافظ على المحادثات صغيرة |
| `openemis_list_playbooks` | عرض جميع أدلة سير العمل الـ 40 — 26 للقراءة فقط هنا، 14 stubs يعيدون التوجيه إلى mcp-pro |
| `openemis_get_playbook` | تحميل دليل سير عمل حسب المعرف — خطوات كاملة، موارد، ملاحظات مهمة |
| `openemis_get` | قراءة موحدة: قائمة أو عنصر مفرد، أي مورد، أي عامل تصفية |

**26 دليل سير عمل للقراءة فقط (+ 14 stubs)** تغطي الحضور والتقييم وملفات تعريف الطلاب والموظفين والبنية التحتية والوجبات ولوحات تحكم المخاطر وتقارير الفصول والجداول الزمنية وسجلات التدقيق واعتماد وتسجيل المدارس وحالة قائمة انتظار القبول/التسجيل، بالإضافة إلى تمهيد عام لنظام سير عمل OpenEMIS — كل منها تم التحقق منه مقابل بيان v5 مع تغطية موارد بنسبة 100%. **14 stub لأدلة سير العمل للكتابة / المصادقة** يمكن اكتشافها هنا لكنها تعيد التوجيه إلى **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)** للخطوات الفعلية.

**الترجمات متاحة:** الروسية · الإسبانية · الهندية · العربية — تمت ترجمة أدلة العرض الأصلية الـ 17 إلى اللغات الأربع جميعًا؛ الـ 9 أدلة الجديدة (المضافة في v1.1.0 لـ Core 5.10.0، بالإضافة إلى دليلَي سير العمل) متوفرة حاليًا بالإنجليزية فقط.

> ✏️ **عمليات الكتابة** (إنشاء/تحديث السجلات في OpenEMIS) تتطلب **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. هذا الخادم المجاني مقصور على القراءة عن قصد — `post`، `put`، و `delete` غير متاحة.

## ما الموجود في الإصدار Pro

يضيف `openemis-mcp-pro` أدوات الكتابة، والاستضافة عن بُعد، والتوافق مع ChatGPT بالإضافة إلى خادم القراءة فقط المجاني هذا.

| | **مجاني** | **Pro الفردي** | **Pro المؤسسي** | **Pro الوطني** |
|---|---|---|---|---|
| أدوات القراءة (جميع الموارد الـ 678، Core 5.13.0) | ✅ | ✅ | ✅ | ✅ |
| 26 دليل قراءة (17 × 5 لغات + 9 EN) | ✅ | ✅ | ✅ | ✅ |
| 14 دليل كتابة / مصادقة (mark-attendance, enrol, set-accreditation…) | stub | ✅ | ✅ | ✅ |
| وضع stdio (Claude Code، Cursor، Cline) | ✅ | ✅ | ✅ | ✅ |
| **وضع خادم HTTP** (Oracle / VPS — قم بالتثبيت مرة واحدة، اتصل عبر URL) | — | ✅ | ✅ | ✅ |
| **محول OpenAPI** (ChatGPT Custom GPT، أي عميل REST) | — | ✅ | ✅ | ✅ |
| الكتابة المباشرة — سجل واحد | — | ✅ | ✅ | ✅ |
| سجل تدقيق المؤسسة | — | — | ✅ | ✅ |
| تنفيذ مسار سير العمل | — | — | ✅ | ✅ |
| بوابة موافقة مدير المؤسسة | — | — | ✅ | ✅ |
| عمليات الدُفعات داخل مؤسسة واحدة | — | — | ✅ | ✅ |
| عمليات الدُفعات متعددة المؤسسات | — | — | — | ✅ |
| بوابات موافقة الوزارة | — | — | — | ✅ |
| الإشراف عبر المؤسسات | — | — | — | ✅ |

يتيح لك **وضع خادم HTTP** تثبيت Pro مرة واحدة على نسخة [Oracle Always Free](https://www.oracle.com/cloud/free/) ARM والاتصال من أي جهاز — بدون إعداد لكل جهاز. يعني محول OpenAPI المدمج أن المعلمين يمكنهم استخدام **ChatGPT** (أو أي مساعد ذكي اصطناعي) لتسجيل الحضور والبحث عن سجلات الطلاب عن طريق استيراد عنوان URL مخطط واحد. راجع [دليل المعلم لـ ChatGPT](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) للحصول على إعداد خطوة بخطوة.

→ **التسعير:** khindol.madraimov@gmail.com

---

## التثبيت

يتطلب **Node 22+**.

```bash
git clone https://github.com/tixuz/openemis-mcp.git
cd openemis-mcp
npm install
npm run build
cp .env.example .env
$EDITOR .env
```

### التكوين

```env
OPENEMIS_BASE_URL=https://demo.openemis.org/core
OPENEMIS_USERNAME=admin
OPENEMIS_PASSWORD=your_password
OPENEMIS_API_KEY=your_api_key
```

### اختبار سريع

```bash
set -a && source .env && set +a
node scripts/smoke-login.mjs
```

### التسجيل مع Claude Code

```bash
claude mcp add openemis \
  --env OPENEMIS_BASE_URL="https://your-instance/core" \
  --env OPENEMIS_USERNAME="…" \
  --env OPENEMIS_PASSWORD="…" \
  --env OPENEMIS_API_KEY="…" \
  -- node "$(pwd)/dist/server.js"
```

يعمل مع أي عميل متوافق مع MCP: Claude Code، Cursor، Cline، Codex (عبر [gemmy-and-qwenny](https://github.com/tixuz/gemmy-and-qwenny))، أو أي عميل MCP عبر stdio.

> 🌐 **التثبيت عن بُعد / على الخادم:** يضيف [openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro) وضع خادم HTTP — قم بالتثبيت مرة واحدة على Oracle Always Free وسيتصل كل مساعد ذكي اصطناعي (Claude Code، Cursor، **ChatGPT**) عبر URL بدون إعداد لكل جهاز. راجع [دليل المعلم لـ ChatGPT](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) لمعرفة كيفية السماح للمعلمين بتسجيل الحضور عبر ChatGPT.

---

## أدلة سير العمل

26 دليل سير عمل منسقًا للقراءة فقط — راجع [docs/playbooks/](docs/playbooks/). أدلة الكتابة (تسجيل الحضور، التسجيل، تعيين اعتماد المدرسة، إلخ) يمكن اكتشافها هنا كـ stubs تشير إلى **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

> **جديد في v1.1.0:** تمت إضافة 9 أدلة جديدة لـ OpenEMIS Core 5.10.0 — اعتماد / تسجيل المدرسة، ميزانية المؤسسة، تاريخ غياب الطالب، سجل تدقيق نشاط المستخدم، قائمة الفصل، حالة قائمة انتظار القبول / التسجيل، وشرح عام لنظام سير العمل. المعرّفات: `diagnose-alert-delivery`, `view-school-accreditation`, `view-school-registration`, `view-institution-budget`, `query-student-absence-history`, `query-user-activity-audit-log`, `view-class-roster`, `view-admission-and-enrolment-queue-state`, `explain-workflow-system`. متوفرة عبر `openemis_get_playbook` — حاليًا بالإنجليزية فقط.

| # | دليل سير العمل | المجال | الترجمات |
|---|---|---|---|
| 1 | [عد الوظائف الشاغرة](docs/playbooks/count-vacant-positions.md) | الموظفين | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [عرض الجدول الزمني للطالب](docs/playbooks/view-student-timetable.md) | الجدولة | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 3 | [لوحة تحكم الطالب](docs/playbooks/student-dashboard.md) | الطالب | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 4 | [ملخص المؤسسة](docs/playbooks/institution-summary.md) | المؤسسة | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 5 | [عرض أحدث الحضور](docs/playbooks/view-latest-attendance.md) | الحضور | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 6 | [عرض ملف تعريف الطالب](docs/playbooks/view-student-profile.md) | الطالب | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 7 | [عرض درجات الطالب](docs/playbooks/view-student-marks.md) | التقييم | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 8 | [عرض تقرير الفصل](docs/playbooks/view-class-report.md) | التقرير | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 9 | [عرض الجدول الزمني](docs/playbooks/view-timetable.md) | الجدولة | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 10 | [عرض ملف المؤسسة الكامل](docs/playbooks/view-institution-profile.md) | المؤسسة | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 11 | [عرض ملف الفصل الكامل](docs/playbooks/view-class-profile.md) | الطالب | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 12 | [عرض ملف الموظف الكامل](docs/playbooks/view-staff-profile.md) | الموظفين | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 13 | [تحسين ملف تعريف الطالب](docs/playbooks/enhance-student-profile.md) | الطالب | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 14 | [عرض بنية المؤسسة التحتية](docs/playbooks/view-institution-infrastructure.md) | المؤسسة | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 15 | [عرض وجبات المؤسسة](docs/playbooks/view-institution-meals.md) | المؤسسة | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 16 | [عرض ملف مخاطر الطالب وحالات الرعاية](docs/playbooks/view-student-risks.md) | الطالب | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 17 | [عرض ملخص مخاطر المؤسسة وقواعد التنبيه](docs/playbooks/view-institution-risks.md) | المؤسسة | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
---

## البنية

```
الوكيل (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 أدوات قراءة + 26 دليل سير عمل + 14 stubs
        │ HTTPS + Bearer JWT
واجهة برمجة تطبيقات OpenEMIS Core  /api/v5/{resource}   (3,361 نقطة نهاية / 678 موردًا، Core 5.13.0)
```

يحافظ الاكتشاف المحدد النطاق على المحادثات صغيرة — `openemis_discover("attendance")` يعيد 20–30 نقطة نهاية ذات صلة بالحضور، وليس جميع نقاط النهاية البالغ عددها 3,361.

> 🖥️ **وضع الخادم / HTTP** (التثبيت مرة واحدة على Oracle، الاتصال من أي مكان بما في ذلك ChatGPT) متاح في **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## الوثائق

- [مرجع الموارد](docs/resources.md) — جميع الموارد الـ 678 مع توفر الطرق (Core 5.13.0)
- [أدلة سير العمل](docs/playbooks/) — 17 دليل عرض بـ 5 لغات + 9 جديدة بالإنجليزية فقط (الترجمات لاحقًا)
- [GLOSSARY.md](docs/GLOSSARY.md) — المصطلحات الرئيسية: OpenEMIS، MCP، حضور الطلاب، المخاطر والمزيد
- [FAQ.md](docs/FAQ.md) — أسئلة شائعة حول إدارة التعليم باستخدام OpenEMIS MCP
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — فريق الذكاء الاصطناعي الذي بنى هذا

---

## الترخيص

[MIT](LICENSE.md) © 2026 خيندول مدرايموف

*غير تابع لـ OpenEMIS أو القائمين عليه. جسر طرف ثالث لواجهة برمجة تطبيقات Core العامة. تبقى بيانات الاعتماد على جهازكم.*