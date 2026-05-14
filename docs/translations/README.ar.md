<p align="center">
  <img src="assets/logo.png" alt="openemis-mcp logo" width="320">
</p>

# openemis-mcp

**جسر MCP مجاني للقراءة فقط بين وكلاء الذكاء الاصطناعي وأي نسخة من OpenEMIS.**

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
| `openemis_list_playbooks` | عرض جميع أدلة سير العمل الـ 24 المنسقة |
| `openemis_get_playbook` | تحميل دليل سير عمل حسب المعرف — خطوات كاملة، موارد، ملاحظات مهمة |
| `openemis_get` | قراءة موحدة: قائمة أو عنصر مفرد، أي مورد، أي عامل تصفية |

**24 دليل سير عمل منسقًا** يغطي الحضور، التقييم، ملفات تعريف الطلاب، ملفات تعريف الموظفين، البنية التحتية، الوجبات، لوحات تحكم المخاطر، تقارير الفصول، الجداول الزمنية، والمزيد — كل منها تم التحقق منه مقابل بيان v5 مع تغطية موارد بنسبة 100%.

**الترجمات متاحة:** الروسية · الإسبانية · الهندية · العربية — جميع أدلة سير العمل الـ 24 متاحة بجميع اللغات الأربع.

> ✏️ **عمليات الكتابة** (إنشاء/تحديث السجلات في OpenEMIS) تتطلب **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**. هذا الخادم المجاني مقصور على القراءة عن قصد — `post`، `put`، و `delete` غير متاحة.

## ما الموجود في الإصدار Pro

يضيف `openemis-mcp-pro` أدوات الكتابة، والاستضافة عن بُعد، والتوافق مع ChatGPT بالإضافة إلى خادم القراءة فقط المجاني هذا.

| | **مجاني** | **Pro الفردي** | **Pro المؤسسي** | **Pro الوطني** |
|---|---|---|---|---|
| أدوات القراءة (جميع الموارد الـ 645) | ✅ | ✅ | ✅ | ✅ |
| 24 دليل قراءة × 5 لغات | ✅ | ✅ | ✅ | ✅ |
| 3 أدلة كتابة (v0.2+) | — | ✅ | ✅ | ✅ |
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

24 دليل سير عمل منسقًا — راجع [docs/playbooks/](docs/playbooks/):

| # | دليل سير العمل | المجال | الترجمات |
|---|---|---|---|
| 1 | [عد الوظائف الشاغرة](docs/playbooks/count-vacant-positions.md) | الموظفين | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [تسجيل حضور الطالب](docs/playbooks/mark-student-attendance.md) | الحضور | [RU](docs/playbooks/mark-student-attendance.ru.md) · [ES](docs/playbooks/mark-student-attendance.es.md) · [HI](docs/playbooks/mark-student-attendance.hi.md) · [AR](docs/playbooks/mark-student-attendance.ar.md) |
| 3 | [تسجيل حضور الموظف](docs/playbooks/mark-staff-attendance.md) | الموظفين | [RU](docs/playbooks/mark-staff-attendance.ru.md) · [ES](docs/playbooks/mark-staff-attendance.es.md) · [HI](docs/playbooks/mark-staff-attendance.hi.md) · [AR](docs/playbooks/mark-staff-attendance.ar.md) |
| 4 | [عرض الجدول الزمني للطالب](docs/playbooks/view-student-timetable.md) | الجدولة | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 5 | [لوحة تحكم الطالب](docs/playbooks/student-dashboard.md) | الطالب | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 6 | [إنشاء تقرير الطالب بصيغة PDF](docs/playbooks/generate-student-report-card-pdf.md) | التقرير | [RU](docs/playbooks/generate-student-report-card-pdf.ru.md) · [ES](docs/playbooks/generate-student-report-card-pdf.es.md) · [HI](docs/playbooks/generate-student-report-card-pdf.hi.md) · [AR](docs/playbooks/generate-student-report-card-pdf.ar.md) |
| 7 | [تسجيل طالب جديد](docs/playbooks/enroll-new-student.md) | الطالب | [RU](docs/playbooks/enroll-new-student.ru.md) · [ES](docs/playbooks/enroll-new-student.es.md) · [HI](docs/playbooks/enroll-new-student.hi.md) · [AR](docs/playbooks/enroll-new-student.ar.md) |
| 8 | [تسجيل حادثة سلوكية](docs/playbooks/record-behavior-incident.md) | الطالب | [RU](docs/playbooks/record-behavior-incident.ru.md) · [ES](docs/playbooks/record-behavior-incident.es.md) · [HI](docs/playbooks/record-behavior-incident.hi.md) · [AR](docs/playbooks/record-behavior-incident.ar.md) |
| 9 | [إرسال درجات الامتحان](docs/playbooks/submit-exam-marks.md) | التقييم | [RU](docs/playbooks/submit-exam-marks.ru.md) · [ES](docs/playbooks/submit-exam-marks.es.md) · [HI](docs/playbooks/submit-exam-marks.hi.md) · [AR](docs/playbooks/submit-exam-marks.ar.md) |
| 10 | [ملخص المؤسسة](docs/playbooks/institution-summary.md) | المؤسسة | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 11 | [إنشاء إحصائيات المؤسسة بصيغة PDF](docs/playbooks/generate-institution-statistics-pdf.md) | التقرير | [RU](docs/playbooks/generate-institution-statistics-pdf.ru.md) · [ES](docs/playbooks/generate-institution-statistics-pdf.es.md) · [HI](docs/playbooks/generate-institution-statistics-pdf.hi.md) · [AR](docs/playbooks/generate-institution-statistics-pdf.ar.md) |
| 12 | [عرض أحدث الحضور](docs/playbooks/view-latest-attendance.md) | الحضور | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 13 | [عرض ملف تعريف الطالب](docs/playbooks/view-student-profile.md) | الطالب | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 14 | [عرض درجات الطالب](docs/playbooks/view-student-marks.md) | التقييم | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 15 | [عرض تقرير الفصل](docs/playbooks/view-class-report.md) | التقرير | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 16 | [عرض الجدول الزمني](docs/playbooks/view-timetable.md) | الجدولة | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 17 | [عرض ملف المؤسسة الكامل](docs/playbooks/view-institution-profile.md) | المؤسسة | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 18 | [عرض ملف الفصل الكامل](docs/playbooks/view-class-profile.md) | الطالب | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 19 | [عرض ملف الموظف الكامل](docs/playbooks/view-staff-profile.md) | الموظفين | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 20 | [تحسين ملف تعريف الطالب](docs/playbooks/enhance-student-profile.md) | الطالب | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 21 | [عرض بنية المؤسسة التحتية](docs/playbooks/view-institution-infrastructure.md) | المؤسسة | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 22 | [عرض وجبات المؤسسة](docs/playbooks/view-institution-meals.md) | المؤسسة | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 23 | [عرض ملف مخاطر الطالب وحالات الرعاية](docs/playbooks/view-student-risks.md) | الطالب | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 24 | [عرض ملخص مخاطر المؤسسة وقواعد التنبيه](docs/playbooks/view-institution-risks.md) | المؤسسة | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
---

## البنية

```
الوكيل (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 أدوات قراءة + 24 دليل سير عمل
        │ HTTPS + Bearer JWT
واجهة برمجة تطبيقات OpenEMIS Core  /api/v5/{resource}
```

يحافظ الاكتشاف المحدد النطاق على المحادثات صغيرة — `openemis_discover("attendance")` يعيد 20–30 نقطة نهاية ذات صلة بالحضور، وليس جميع نقاط النهاية البالغ عددها 1,350.

> 🖥️ **وضع الخادم / HTTP** (التثبيت مرة واحدة على Oracle، الاتصال من أي مكان بما في ذلك ChatGPT) متاح في **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

---

## الوثائق

- [مرجع الموارد](docs/resources.md) — جميع الموارد الـ 645 مع توفر الطرق
- [أدلة سير العمل](docs/playbooks/) — 24 دليل سير عمل باللغات الإنجليزية، الروسية، الإسبانية، الهندية، والعربية
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — فريق الذكاء الاصطناعي الذي بنى هذا

---

## الترخيص

[MIT](LICENSE.md) © 2026 خيندول مدرايموف

*غير تابع لـ OpenEMIS أو القائمين عليه. جسر طرف ثالث لواجهة برمجة تطبيقات Core العامة. تبقى بيانات الاعتماد على جهازكم.*