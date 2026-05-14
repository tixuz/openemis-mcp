<p align="center">
  <img src="assets/logo.png" alt="openemis-mcp logo" width="320">
</p>

# openemis-mcp

**मुफ्त, केवल-पढ़ने योग्य MCP ब्रिज AI एजेंटों और किसी भी OpenEMIS इंस्टेंस के बीच।**

प्रकाशित **OpenEMIS Core API** पर निर्मित (संदर्भ: [api.openemis.org/core](https://api.openemis.org/core)) और सार्वजनिक डेमो [demo.openemis.org/core](https://demo.openemis.org/core) पर सत्यापित।

सादे अंग्रेजी में पूछें:

> *"एवरी प्राइमरी में वर्तमान में कितने छात्र हैं?"*

एजेंट कॉल्स की योजना बनाता है, यह MCP डेटा प्रदान करता है:

> *"एवरी प्राइमरी स्कूल में वर्तमान में 6 कक्षाओं में 97 छात्र नामांकित हैं।"*

कोई कोड नहीं। कोई JSON नहीं। बस पूछें।

---

## क्या शामिल है (मुफ्त, MIT)

| टूल | यह क्या करता है |
|---|---|
| `openemis_health` | कॉन्फ़िगर किए गए इंस्टेंस को पिंग करें — वास्तविक लॉगिन राउंड-ट्रिप |
| `openemis_list_domains` | 9 क्यूरेटेड डोमेन सूचीबद्ध करें (उपस्थिति, मूल्यांकन, स्टाफ, छात्र…) |
| `openemis_discover` | विषय → 30 तक स्कोप्ड एंडपॉइंट्स। वार्तालापों को छोटा रखता है |
| `openemis_list_playbooks` | सभी 24 क्यूरेटेड वर्कफ़्लो गाइड सूचीबद्ध करें |
| `openemis_get_playbook` | id द्वारा एक प्लेबुक लोड करें — पूर्ण चरण, संसाधन, गॉचा नोट्स |
| `openemis_get` | एकीकृत पठन: सूची या सिंगलटन, कोई भी संसाधन, कोई भी फ़िल्टर |

**24 क्यूरेटेड प्लेबुक्स** उपस्थिति, मूल्यांकन, छात्र प्रोफाइल, स्टाफ प्रोफाइल, बुनियादी ढांचा, भोजन, जोखिम डैशबोर्ड, कक्षा रिपोर्ट, समय-सारणी, और अधिक को कवर करती हैं — प्रत्येक v5 मेनिफेस्ट के विरुद्ध 100% संसाधन कवरेज पर सत्यापित।

**उपलब्ध अनुवाद:** रूसी · स्पेनिश · हिंदी · अरबी — सभी 24 प्लेबुक्स सभी चार भाषाओं में।

> ✏️ **लिखने के संचालन** (OpenEMIS में रिकॉर्ड बनाना/अपडेट करना) के लिए **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)** की आवश्यकता होती है। यह मुफ्त सर्वर जानबूझकर केवल-पढ़ने योग्य है — `post`, `put`, और `delete` उपलब्ध नहीं हैं।

## Pro में क्या है

`openemis-mcp-pro` इस मुफ्त केवल-पढ़ने योग्य सर्वर के शीर्ष पर लिखने के टूल, रिमोट होस्टिंग और ChatGPT संगतता जोड़ता है।

| | **मुफ्त** | **व्यक्तिगत Pro** | **संस्थान Pro** | **देश Pro** |
|---|---|---|---|---|
| पढ़ने के टूल (सभी 645 संसाधन) | ✅ | ✅ | ✅ | ✅ |
| 24 रीड प्लेबुक्स × 5 भाषाएँ | ✅ | ✅ | ✅ | ✅ |
| 3 राइट प्लेबुक्स (v0.2+) | — | ✅ | ✅ | ✅ |
| stdio मोड (Claude Code, Cursor, Cline) | ✅ | ✅ | ✅ | ✅ |
| **HTTP सर्वर मोड** (Oracle / VPS — एक बार इंस्टॉल करें, URL द्वारा कनेक्ट करें) | — | ✅ | ✅ | ✅ |
| **OpenAPI एडाप्टर** (ChatGPT Custom GPT, कोई भी REST क्लाइंट) | — | ✅ | ✅ | ✅ |
| प्रत्यक्ष लेखन — एकल रिकॉर्ड | — | ✅ | ✅ | ✅ |
| संस्थान ऑडिट ट्रेल | — | — | ✅ | ✅ |
| वर्कफ़्लो रूट निष्पादन | — | — | ✅ | ✅ |
| संस्थान-प्रशासक अनुमोदन गेट | — | — | ✅ | ✅ |
| एक संस्थान के भीतर बैच ऑप्स | — | — | ✅ | ✅ |
| बहु-संस्थान बैच ऑप्स | — | — | — | ✅ |
| मंत्रालय अनुमोदन गेट | — | — | — | ✅ |
| क्रॉस-संस्थान पर्यवेक्षण | — | — | — | ✅ |

**HTTP सर्वर मोड** आपको Pro को एक [Oracle Always Free](https://www.oracle.com/cloud/free/) ARM इंस्टेंस पर एक बार इंस्टॉल करने देता है और किसी भी डिवाइस से कनेक्ट करने देता है — प्रति-मशीन सेटअप नहीं। अंतर्निहित OpenAPI एडाप्टर का मतलब है कि शिक्षक **ChatGPT** (या किसी भी AI सहायक) का उपयोग एकल स्कीमा URL आयात करके उपस्थिति चिह्नित करने और छात्र रिकॉर्ड देखने के लिए कर सकते हैं। चरण-दर-चरण सेटअप के लिए [ChatGPT Teacher Guide](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) देखें।

→ **मूल्य निर्धारण:** khindol.madraimov@gmail.com

---

## इंस्टॉल करें

**Node 22+** आवश्यक है।

```bash
git clone https://github.com/tixuz/openemis-mcp.git
cd openemis-mcp
npm install
npm run build
cp .env.example .env
$EDITOR .env
```

### कॉन्फ़िगर करें

```env
OPENEMIS_BASE_URL=https://demo.openemis.org/core
OPENEMIS_USERNAME=admin
OPENEMIS_PASSWORD=your_password
OPENEMIS_API_KEY=your_api_key
```

### स्मोक टेस्ट

```bash
set -a && source .env && set +a
node scripts/smoke-login.mjs
```

### Claude Code के साथ पंजीकरण करें

```bash
claude mcp add openemis \
  --env OPENEMIS_BASE_URL="https://your-instance/core" \
  --env OPENEMIS_USERNAME="…" \
  --env OPENEMIS_PASSWORD="…" \
  --env OPENEMIS_API_KEY="…" \
  -- node "$(pwd)/dist/server.js"
```

किसी भी MCP-संगत क्लाइंट के साथ काम करता है: Claude Code, Cursor, Cline, Codex (via [gemmy-and-qwenny](https://github.com/tixuz/gemmy-and-qwenny)), या कोई भी stdio MCP क्लाइंट।

> 🌐 **रिमोट / सर्वर इंस्टॉल:** [openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro) एक HTTP सर्वर मोड जोड़ता है — Oracle Always Free पर एक बार इंस्टॉल करें और प्रत्येक AI सहायक (Claude Code, Cursor, **ChatGPT**) URL द्वारा प्रति-मशीन सेटअप के बिना कनेक्ट होता है। देखें [ChatGPT Teacher Guide](https://github.com/tixuz/openemis-mcp-pro/blob/main/docs/CHATGPT-TEACHER-GUIDE.md) कि कैसे शिक्षकों को ChatGPT के माध्यम से उपस्थिति चिह्नित करने दें।

---

## प्लेबुक्स

24 क्यूरेटेड वर्कफ़्लो गाइड्स — देखें [docs/playbooks/](docs/playbooks/):

| # | प्लेबुक | डोमेन | अनुवाद |
|---|---|---|---|
| 1 | [Count Vacant Positions](docs/playbooks/count-vacant-positions.md) | Staff | [RU](docs/playbooks/count-vacant-positions.ru.md) · [ES](docs/playbooks/count-vacant-positions.es.md) · [HI](docs/playbooks/count-vacant-positions.hi.md) · [AR](docs/playbooks/count-vacant-positions.ar.md) |
| 2 | [Mark Student Attendance](docs/playbooks/mark-student-attendance.md) | Attendance | [RU](docs/playbooks/mark-student-attendance.ru.md) · [ES](docs/playbooks/mark-student-attendance.es.md) · [HI](docs/playbooks/mark-student-attendance.hi.md) · [AR](docs/playbooks/mark-student-attendance.ar.md) |
| 3 | [Mark Staff Attendance](docs/playbooks/mark-staff-attendance.md) | Staff | [RU](docs/playbooks/mark-staff-attendance.ru.md) · [ES](docs/playbooks/mark-staff-attendance.es.md) · [HI](docs/playbooks/mark-staff-attendance.hi.md) · [AR](docs/playbooks/mark-staff-attendance.ar.md) |
| 4 | [View Student Timetable](docs/playbooks/view-student-timetable.md) | Schedule | [RU](docs/playbooks/view-student-timetable.ru.md) · [ES](docs/playbooks/view-student-timetable.es.md) · [HI](docs/playbooks/view-student-timetable.hi.md) · [AR](docs/playbooks/view-student-timetable.ar.md) |
| 5 | [Student Dashboard](docs/playbooks/student-dashboard.md) | Student | [RU](docs/playbooks/student-dashboard.ru.md) · [ES](docs/playbooks/student-dashboard.es.md) · [HI](docs/playbooks/student-dashboard.hi.md) · [AR](docs/playbooks/student-dashboard.ar.md) |
| 6 | [Generate Student Report Card PDF](docs/playbooks/generate-student-report-card-pdf.md) | Report | [RU](docs/playbooks/generate-student-report-card-pdf.ru.md) · [ES](docs/playbooks/generate-student-report-card-pdf.es.md) · [HI](docs/playbooks/generate-student-report-card-pdf.hi.md) · [AR](docs/playbooks/generate-student-report-card-pdf.ar.md) |
| 7 | [Enrol a New Student](docs/playbooks/enroll-new-student.md) | Student | [RU](docs/playbooks/enroll-new-student.ru.md) · [ES](docs/playbooks/enroll-new-student.es.md) · [HI](docs/playbooks/enroll-new-student.hi.md) · [AR](docs/playbooks/enroll-new-student.ar.md) |
| 8 | [Record a Behaviour Incident](docs/playbooks/record-behavior-incident.md) | Student | [RU](docs/playbooks/record-behavior-incident.ru.md) · [ES](docs/playbooks/record-behavior-incident.es.md) · [HI](docs/playbooks/record-behavior-incident.hi.md) · [AR](docs/playbooks/record-behavior-incident.ar.md) |
| 9 | [Submit Exam Marks](docs/playbooks/submit-exam-marks.md) | Assessment | [RU](docs/playbooks/submit-exam-marks.ru.md) · [ES](docs/playbooks/submit-exam-marks.es.md) · [HI](docs/playbooks/submit-exam-marks.hi.md) · [AR](docs/playbooks/submit-exam-marks.ar.md) |
| 10 | [Institution Summary](docs/playbooks/institution-summary.md) | Institution | [RU](docs/playbooks/institution-summary.ru.md) · [ES](docs/playbooks/institution-summary.es.md) · [HI](docs/playbooks/institution-summary.hi.md) · [AR](docs/playbooks/institution-summary.ar.md) |
| 11 | [Generate Institution Statistics PDF](docs/playbooks/generate-institution-statistics-pdf.md) | Report | [RU](docs/playbooks/generate-institution-statistics-pdf.ru.md) · [ES](docs/playbooks/generate-institution-statistics-pdf.es.md) · [HI](docs/playbooks/generate-institution-statistics-pdf.hi.md) · [AR](docs/playbooks/generate-institution-statistics-pdf.ar.md) |
| 12 | [View Latest Attendance](docs/playbooks/view-latest-attendance.md) | Attendance | [RU](docs/playbooks/view-latest-attendance.ru.md) · [ES](docs/playbooks/view-latest-attendance.es.md) · [HI](docs/playbooks/view-latest-attendance.hi.md) · [AR](docs/playbooks/view-latest-attendance.ar.md) |
| 13 | [View Student Profile](docs/playbooks/view-student-profile.md) | Student | [RU](docs/playbooks/view-student-profile.ru.md) · [ES](docs/playbooks/view-student-profile.es.md) · [HI](docs/playbooks/view-student-profile.hi.md) · [AR](docs/playbooks/view-student-profile.ar.md) |
| 14 | [View Student Marks](docs/playbooks/view-student-marks.md) | Assessment | [RU](docs/playbooks/view-student-marks.ru.md) · [ES](docs/playbooks/view-student-marks.es.md) · [HI](docs/playbooks/view-student-marks.hi.md) · [AR](docs/playbooks/view-student-marks.ar.md) |
| 15 | [View Class Report](docs/playbooks/view-class-report.md) | Report | [RU](docs/playbooks/view-class-report.ru.md) · [ES](docs/playbooks/view-class-report.es.md) · [HI](docs/playbooks/view-class-report.hi.md) · [AR](docs/playbooks/view-class-report.ar.md) |
| 16 | [View Timetable](docs/playbooks/view-timetable.md) | Schedule | [RU](docs/playbooks/view-timetable.ru.md) · [ES](docs/playbooks/view-timetable.es.md) · [HI](docs/playbooks/view-timetable.hi.md) · [AR](docs/playbooks/view-timetable.ar.md) |
| 17 | [View Full Institution Profile](docs/playbooks/view-institution-profile.md) | Institution | [RU](docs/playbooks/view-institution-profile.ru.md) · [ES](docs/playbooks/view-institution-profile.es.md) · [HI](docs/playbooks/view-institution-profile.hi.md) · [AR](docs/playbooks/view-institution-profile.ar.md) |
| 18 | [View Full Class Profile](docs/playbooks/view-class-profile.md) | Student | [RU](docs/playbooks/view-class-profile.ru.md) · [ES](docs/playbooks/view-class-profile.es.md) · [HI](docs/playbooks/view-class-profile.hi.md) · [AR](docs/playbooks/view-class-profile.ar.md) |
| 19 | [View a Staff Member's Full Profile](docs/playbooks/view-staff-profile.md) | Staff | [RU](docs/playbooks/view-staff-profile.ru.md) · [ES](docs/playbooks/view-staff-profile.es.md) · [HI](docs/playbooks/view-staff-profile.hi.md) · [AR](docs/playbooks/view-staff-profile.ar.md) |
| 20 | [Enhance Student Profile](docs/playbooks/enhance-student-profile.md) | Student | [RU](docs/playbooks/enhance-student-profile.ru.md) · [ES](docs/playbooks/enhance-student-profile.es.md) · [HI](docs/playbooks/enhance-student-profile.hi.md) · [AR](docs/playbooks/enhance-student-profile.ar.md) |
| 21 | [View Institution Infrastructure](docs/playbooks/view-institution-infrastructure.md) | Institution | [RU](docs/playbooks/view-institution-infrastructure.ru.md) · [ES](docs/playbooks/view-institution-infrastructure.es.md) · [HI](docs/playbooks/view-institution-infrastructure.hi.md) · [AR](docs/playbooks/view-institution-infrastructure.ar.md) |
| 22 | [View Institution Meals](docs/playbooks/view-institution-meals.md) | Institution | [RU](docs/playbooks/view-institution-meals.ru.md) · [ES](docs/playbooks/view-institution-meals.es.md) · [HI](docs/playbooks/view-institution-meals.hi.md) · [AR](docs/playbooks/view-institution-meals.ar.md) |
| 23 | [View Student Risk Profile and Welfare Cases](docs/playbooks/view-student-risks.md) | Student | [RU](docs/playbooks/view-student-risks.ru.md) · [ES](docs/playbooks/view-student-risks.es.md) · [HI](docs/playbooks/view-student-risks.hi.md) · [AR](docs/playbooks/view-student-risks.ar.md) |
| 24 | [View Institution Risk Summary and Alert Rules](docs/playbooks/view-institution-risks.md) | Institution | [RU](docs/playbooks/view-institution-risks.ru.md) · [ES](docs/playbooks/view-institution-risks.es.md) · [HI](docs/playbooks/view-institution-risks.hi.md) · [AR](docs/playbooks/view-institution-risks.ar.md) |
---

## आर्किटेक्चर

```
एजेंट (Claude / Cursor / Codex / …)
        │ MCP stdio
openemis-mcp  ←  6 पठन टूल + 24 प्लेबुक्स
        │ HTTPS + Bearer JWT
OpenEMIS Core API  /api/v5/{resource}
```

डोमेन-स्कोप्ड डिस्कवरी वार्तालापों को छोटा रखती है — `openemis_discover("attendance")` उपस्थिति से संबंधित 20–30 एंडपॉइंट्स लौटाता है, सभी 1,350 नहीं।

> 🖥️ **सर्वर / HTTP मोड** (Oracle पर एक बार इंस्टॉल करें, कहीं से भी कनेक्ट करें जिसमें ChatGPT शामिल है) **[openemis-mcp-pro](https://github.com/tixuz/openemis-mcp-pro)** में उपलब्ध है।

---

## दस्तावेज़

- [Resource Reference](docs/resources.md) — सभी 645 संसाधन विधि उपलब्धता के साथ
- [Playbooks](docs/playbooks/) — अंग्रेजी, रूसी, स्पेनिश, हिंदी और अरबी में 24 वर्कफ़्लो गाइड्स
- [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) — AI टीम जिसने इसे बनाया

---

## लाइसेंस

[MIT](LICENSE.md) © 2026 खिंडोल मदराइमोव

*OpenEMIS या इसके रखरखावकर्ताओं से संबद्ध नहीं। सार्वजनिक Core API के लिए तृतीय-पक्ष ब्रिज। आपकी क्रेडेंशियल्स आपकी मशीन पर रहती हैं।*