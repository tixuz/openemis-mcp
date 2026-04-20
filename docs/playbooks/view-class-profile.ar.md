# عرض الملف الشخصي الكامل للصف

> 📖 **خادم للقراءة فقط.** تتطلب سيناريوهات التشغيل التي تنشئ أو تحدث السجلات **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)**.

**المجال:** الطالب  
**الجمهور:** معلم، مدير  
**معرف سيناريو التشغيل:** `view-class-profile`

## الوصف

عرض الملف الشخصي للصف: تعيين مستوى الصف، قائمة الطلاب المسجلين، المواد النشطة، ملخص الحضور الشهري، وقائمة المعلمين الكاملة (معلم الفصل + المعلمون الثانويون + معلمو المواد). يستخدم مورد الحضور مفتاحًا أوليًا مركبًا — لا يوجد حقل عدد صحيح `id`؛ استخدم دائمًا عوامل التصفية من نوع القائمة لجلب البيانات. موزعة قائمة المعلمين عبر ثلاث جداول وتتطلب توسيعًا وتكرارًا وإزالة التكرار.

---

## الموارد المستخدمة

| المورد | الغرض |
|---|---|
| `institution-classes` | صف الصف نفسه — يحمل `staff_id` (المفتاح الخارجي لمعلم الفصل) |
| `institution-class-grades` | تحديد مستوى التعليم الذي ينتمي إليه هذا الصف |
| `institution-class-students` | جميع الطلاب المسجلين حاليًا في الصف |
| `institution-class-subjects` | المواد التي تُدرس بنشاط في هذا الصف |
| `institution-subjects` | حل أسماء المواد من `institution_subject_id` |
| `institution-class-attendance-records` | ملخص الحضور الشهري (أعداد الطلاب الحاضرين يوميًا) |
| `institution-classes-secondary-staff` | المعلمون المشاركون / الموظفون الثانويون المعينون للصف |
| `institution-subject-staff` | معلمو المواد — صف واحد لكل زوج (مادة، معلم) |

---

## الخطوات

| الخطوة | الإجراء | المورد | الغرض |
|---|---|---|---|
| 1 | `openemis_get` | `institution-class-grades` | تحديد مستوى الصف لهذا الصف |
| 2 | `openemis_get` | `institution-class-students` | سرد الطلاب المسجلين |
| 3 | `openemis_get` | `institution-class-subjects` | سرد المواد النشطة |
| 4 | `openemis_get` | `institution-class-attendance-records` | ملخص الحضور الشهري |
| 5 | `openemis_get` × 3 | `institution-classes` · `institution-classes-secondary-staff` · `institution-subject-staff` | قائمة المعلمين (توسيع، اتحاد، إزالة التكرار بواسطة `staff_id`) |

---

## ملاحظات الخطوات

**الخطوة 1 — تعيين صف الصف**  
تصفية بواسطة `institution_class_id`. تُرجع `education_grade_id` — جدول تعيين (صف ↔ مستوى). عادةً صف واحد لكل صف، لكن التكوينات متعددة المستويات صالحة.

**الخطوة 2 — الطلاب المسجلين**  
تصفية بواسطة `institution_class_id` و `academic_period_id`. اضبط `student_status_id=1` لإرجاع الطلاب المسجلين حاليًا فقط. هذا جدول اتحاد — حقل `id` هنا هو معرف سجل التسجيل، وليس معرف الطالب. `student_id` هو المفتاح الخارجي لـ `security_users`.

**الخطوة 3 — المواد النشطة**  
تصفية بواسطة `institution_class_id` و `status=1` لإرجاع المواد النشطة فقط. أسماء المواد غير مدرجة — فقط المفتاح الخارجي `institution_subject_id`. حل الأسماء بشكل منفصل عبر `institution-subjects` إذا لزم الأمر.

**الخطوة 4 — ملخص الحضور الشهري**  
> ⚠️ **حرج:** `institution-class-attendance-records` **ليس له حقل عدد صحيح `id`**. مفتاحه الأولي مركب: `(institution_class_id, academic_period_id, year, month)`. **لا تمرر أبدًا** معامل `id=` — سيعيد فارغًا أو خطأ.

استخدم عوامل التصفية القائمة فقط:
```
?institution_class_id={id}&academic_period_id={period}&year={year}&month={month}
```
بدلاً من ذلك، استخدم مسار المفتاح المركب:
```
GET /institution-class-attendance-records/institution_class_id/{X}/academic_period_id/{Y}/year/{Z}/month/{M}
```
تحمل الحقول `day_1` حتى `day_31` عدد الحاضرين يوميًا؛ `null` يعني أن الحضور لم يُسجل بعد لذلك اليوم.

**الخطوة 5 — قائمة المعلمين**  
لا توجد نقطة نهاية واحدة تعيد قائمة المعلمين الكاملة للصف. قم بالتوسيع عبر ثلاث جداول والاتحاد بواسطة `staff_id`:

**(أ) معلم الفصل** — على صف الصف نفسه:
```
openemis_get { resource: "institution-classes", id: 42 }
→ row.staff_id  (مفتاح خارجي واحد لـ security_users؛ قد يكون فارغًا)
```

**(ب) المعلمون الثانويون / المشاركون** — جدول اتحاد مخصص (مفتاح أولي مركب، بدون عدد صحيح `id`):
```
openemis_get { resource: "institution-classes-secondary-staff",
               params: { institution_class_id: 42 } }
→ صفوف تحتوي على secondary_staff_id (مفتاح خارجي لـ security_users)
```

**(ج) معلمو المواد** — صف واحد لكل زوج (مادة، معلم). غير قابل للتصفية بـ `institution_class_id` مباشرة؛ قم بالتوسيع على قائمة `institution_subject_id` من الخطوة 3:
```
لكل institution_subject_id في الخطوة 3:
  openemis_get { resource: "institution-subject-staff",
                 params: { institution_subject_id: subjId } }
→ صفوف تحتوي على staff_id
```

**إزالة التكرار + حل الأسماء.** يمكن أن يظهر الشخص في قوائم متعددة (غالبًا ما يدرس معلم الفصل مادة أيضًا). اتحاد بواسطة `staff_id`، ثم حل الأسماء في استدعاء واحد:
```
openemis_get { resource: "security-users",
               params: { ids: "13,42,99" } }
```

---

## المزالق الرئيسية

- **مفتاح أولي مركب — بدون عدد صحيح id.** المفتاح الأولي لـ `institution-class-attendance-records` هو `(institution_class_id, academic_period_id, year, month)`. أي استدعاء يستخدم عامل تصفية رقمي عادي `id=` سيفشل بصمت أو يعيد بيانات خاطئة.
- **مجمعات شهرية فقط.** يحتفظ هذا المورد بأعداد الحاضرين لكل يوم. إنه ليس سجل الغياب لكل طالب — للغياب الفردي استخدم `student-attendance-marked-records`.
- **الحقول اليومية `null` ≠ صفر.** تُرجع الحقول `day_X` قيمة `null` للأيام التي لم يُسجل فيها الحضور — عالجها على أنها `معلق`، وليس `0 غائب`.
- **قائمة المعلمين مجزأة.** معلم الفصل موجود في `institution-classes.staff_id`، والمعلمون المشاركون في `institution-classes-secondary-staff`، ومعلمو المواد في `institution-subject-staff`. لا توجد نقطة نهاية واحدة توحدهم — قم بالتوسيع وإزالة التكرار.
- **مفتاح أولي مركب لـ `institution-classes-secondary-staff`.** `(institution_class_id, secondary_staff_id)`. استخدم عوامل التصفية القائمة — لا تمرر `id=` رقميًا.
- **`institution-subject-staff` غير قابل للتصفية حسب الصف.** صف فقط بواسطة `institution_subject_id`؛ كرر على معرفات مواد الصف من الخطوة 3.
- **الرؤية القائمة على الدور هي شأن العميل حاليًا.** يحتاج المديرون ووكلاؤهم والمدراء إلى رؤية *جميع* الصفوف في مؤسستهم، لكن واجهة برمجة التطبيقات لا توفر نقطة نهاية "الصفوف المسموح لي بمشاهدتها" بعد. الاستعلام العكسي ("ما هي الصفوف التي يمكن لهذا `staff_id` رؤيتها؟") يتطلب نفس التوسيع لثلاثة جداول بالإضافة إلى فحص الدور — نقطة نهاية أساسية مخصصة موجودة في خارطة طريق OpenEMIS.

---

## مثال على الاستعلام

> *"أرني الملف الشخصي للصف 8A للفترة الأكاديمية الحالية."*

1. `openemis_get { resource: "institution-class-grades", params: { institution_class_id: 42 } }` → الصف 8
2. `openemis_get { resource: "institution-class-students", params: { institution_class_id: 42, academic_period_id: 1, student_status_id: 1 } }` → 28 طالبًا
3. `openemis_get { resource: "institution-class-subjects", params: { institution_class_id: 42, status: 1 } }` → 7 مواد (معرفات `[101, 102, …, 107]`)
4. `openemis_get { resource: "institution-class-attendance-records", params: { institution_class_id: 42, academic_period_id: 1, year: 2024, month: 3 } }` → أعداد يومية لشهر مارس 2024
5. قائمة المعلمين:
   - `openemis_get { resource: "institution-classes", id: 42 }` → معلم الفصل `staff_id=7`
   - `openemis_get { resource: "institution-classes-secondary-staff", params: { institution_class_id: 42 } }` → المعلمون المشاركون `[12, 19]`
   - `openemis_get { resource: "institution-subject-staff", params: { institution_subject_id: 101 } }` × 7 → معلمو المواد `[7, 23, 41, 58, …]`
   - اتحاد + إزالة التكرار → `{7, 12, 19, 23, 41, 58, …}`
   - `openemis_get { resource: "security-users", params: { ids: "7,12,19,23,41,58" } }` → الأسماء في استدعاء واحد