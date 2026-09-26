const langButtons = document.querySelectorAll(".lang-btn");

const picker = document.querySelector(".language-picker");
const toggle = picker.querySelector(".language-picker-toggle");
const menu = picker.querySelector(".language-menu");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    setLanguage(lang);

    // close dropdown
    picker.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  });
});

toggle.addEventListener("click", () => {
  const open = picker.classList.toggle("open");

  toggle.setAttribute("aria-expanded", open);
  menu.hidden = !open;
});

document.addEventListener("click", event => {
  if (!picker.contains(event.target)) {
    picker.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }
});

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // update language picker
  const currentLang = document.querySelector(".language-current");

  if (currentLang) {
    currentLang.textContent = lang.toUpperCase();
  }

  // update active
  langButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

const translations = {
  en: {
    meta_title: "Oxford Capacity Analysis",
    meta_description: "Oxford Capacity Analysis — free personal test and consultation in Kyalami",
    burger_open: "Open menu",

    header_work: "How it works",
    header_result: "Results",
    header_success: "Testimonials",
    header_start: "Start Test",

    hero_h1: "What is really stopping you from living the way you want?",
    hero_p: "If problems keep returning despite all your attempts to solve them, it means you still do not see what is really causing them. The free test and personal analysis can help identify hidden causes of financial difficulties, conflict, anxiety, lack of confidence and recurring problems.",
    hero_btn: "Start the free test",
    hero_40min: "Allow up to 40 minutes",
    hero_free: "Free test",
    hero_graph: "Your graph immediately after the test",
    hero_kya: "Free personal analysis in Kyalami",

    problems_title: "You try to change the situation. But nothing changes",
    problem_money: "There is never enough money",
    problem_work: "It is difficult to find and keep a job",
    problem_anxiety: "Anxiety makes it difficult to make decisions",
    problem_confidence: "You lack confidence in yourself",
    problem_relationships: "Conflicts in relationships keep repeating",
    problem_trust: "It is difficult to know whom to trust",
    problem_success: "Success keeps slipping away",
    problem_family: "The problems of loved ones are damaging the family",
    problems_conclusion: "The problem keeps returning while its real cause remains unnoticed.",
    problems_cta: "Find out what I am not noticing",

    insight_image_alt: "Illustrative portrait of a woman in warm sunset light",
    insight_title: "If you knew the real cause, you could already do something about it",
    insight_p1: "You may think the problem is your partner, your boss, lack of money or difficult circumstances.",
    insight_p2: "But people and circumstances change, while the problem often returns or remains.",
    insight_conclusion: "That means you can see the consequences, but not what keeps leading to them again.",
    insight_cta: "Find the real cause",

    process_title: "Take the test. Get your graph. Find the real cause",
    process_step1_title: "Take the test",
    process_step1_text: "Answer questions about your reactions, decisions and actions.",
    process_step2_title: "Get your graph immediately",
    process_step2_text: "See your individual profile across ten personality characteristics.",
    process_step3_title: "Get a professional analysis",
    process_step3_text: "A specialist will interpret the combination of indicators and show what keeps leading you back to the same problems.",
    process_conclusion: "It is the combination of points that makes it possible to see what a person may not notice on their own:<br><strong>the hidden cause of recurring difficulties.</strong>",
    process_cta: "Take the test and get an analysis",

    offer_title: "Full personal analysis — free",
    offer_graph: "Personal graph immediately after the test",
    offer_interpretation: "Professional interpretation of your results",
    offer_meeting: "Personal meeting of up to one hour",
    offer_location: "Location — Kyalami",
    offer_price_test: "Test — <strong>R0</strong>",
    offer_price_review: "Personal analysis — <strong>R0</strong>",
    offer_cta: "Get a free analysis",
    offer_graph_alt: "Oxford Capacity Analysis graph with ten personality characteristics",

    stories_title: "What people understood after their personal analysis",

    story_1_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_1_author: "John Dow",
    story_1_city: "Johannesburg",

    story_2_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_2_author: "Paol Prigent",
    story_2_city: "Cape Town",

    story_3_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_3_author: "Iminathi Nkosi",
    story_3_city: "Soweto",

    story_4_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_4_author: "Dumisani Abdallah",
    story_4_city: "Durban",

    story_5_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_5_author: "Karin Mathiasen",
    story_5_city: "Gebeha",

    story_6_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_6_author: "Karlmann Messmann",
    story_6_city: "Pretoria",

    final_title: "Find the cause instead of fighting only the consequences",
    final_text: "Allow up to 40 minutes. Answer honestly. Immediately after the test, you will receive your personal graph. A specialist will also contact you soon to arrange a time for an in-depth personality analysis.",
    final_btn: "Start Test",
    final_fact_questions: "200 questions",
    final_fact_answers: "Answers: yes, maybe or no",
    final_fact_free: "Test and personal analysis are free",

    footer_rights: "©2026 All rights reserved.",
    footer_designed: "Designed by Jacaranda Group",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions"
  },

  af: {
    meta_title: "Oxford Capacity Analysis",
    meta_description: "Oxford Capacity Analysis — gratis persoonlikheidstoets en konsultasie in Kyalami",
    burger_open: "Maak kieslys oop",

    header_work: "Hoe dit werk",
    header_result: "Resultate",
    header_success: "Getuigskrifte",
    header_start: "Begin die toets",

    hero_h1: "Wat verhinder jou werklik om te leef soos jy wil?",
    hero_p: "As probleme aanhou terugkeer ondanks al jou pogings om dit op te los, beteken dit dat jy nog nie sien wat dit werklik veroorsaak nie. Die gratis toets en persoonlike ontleding kan help om verborge oorsake van finansiële probleme, konflik, angs, onsekerheid en herhalende probleme te identifiseer.",
    hero_btn: "Begin die gratis toets",
    hero_40min: "Maak tot 40 minute beskikbaar",
    hero_free: "Gratis toets",
    hero_graph: "Jou grafiek onmiddellik ná die toets",
    hero_kya: "Gratis persoonlike ontleding in Kyalami",

    problems_title: "Jy probeer om die situasie te verander. Maar niks verander nie",
    problem_money: "Daar is voortdurend nie genoeg geld nie",
    problem_work: "Dit is moeilik om werk te kry en te behou",
    problem_anxiety: "Angs maak dit moeilik om besluite te neem",
    problem_confidence: "Jy het nie genoeg selfvertroue nie",
    problem_relationships: "Konflik in verhoudings bly herhaal",
    problem_trust: "Dit is moeilik om te weet wie om te vertrou",
    problem_success: "Sukses bly buite bereik",
    problem_family: "Die probleme van geliefdes ontwrig die gesin",
    problems_conclusion: "Die probleem keer terug solank die werklike oorsaak daarvan ongemerk bly.",
    problems_cta: "Vind uit wat ek nie raaksien nie",

    insight_image_alt: "Illustratiewe portret van ’n vrou in warm sonsonderganglig",
    insight_title: "As jy die werklike oorsaak geken het, kon jy reeds iets daaraan gedoen het",
    insight_p1: "Jy dink dalk dat jou maat, jou bestuurder, ’n tekort aan geld of moeilike omstandighede die probleem veroorsaak.",
    insight_p2: "Maar mense en omstandighede verander, terwyl die probleem dikwels terugkeer of bly bestaan.",
    insight_conclusion: "Dit beteken jy sien die gevolge, maar nie wat telkens weer daartoe lei nie.",
    insight_cta: "Vind die werklike oorsaak",

    process_title: "Doen die toets. Kry jou grafiek. Vind die werklike oorsaak",
    process_step1_title: "Doen die toets",
    process_step1_text: "Beantwoord vrae oor jou reaksies, besluite en optrede.",
    process_step2_title: "Kry jou grafiek onmiddellik",
    process_step2_text: "Sien jou individuele profiel oor tien persoonlikheidseienskappe.",
    process_step3_title: "Kry ’n professionele ontleding",
    process_step3_text: "’n Spesialis interpreteer die kombinasie van aanwysers en wys wat jou telkens na dieselfde probleme teruglei.",
    process_conclusion: "Dit is juis die kombinasie van punte wat dit moontlik maak om te sien wat iemand self nie raaksien nie:<br><strong>die verborge oorsaak van herhalende probleme.</strong>",
    process_cta: "Doen die toets en kry ’n ontleding",

    offer_title: "Volledige persoonlike ontleding — gratis",
    offer_graph: "Persoonlike grafiek onmiddellik ná die toets",
    offer_interpretation: "Professionele interpretasie van jou resultate",
    offer_meeting: "Persoonlike afspraak van tot een uur",
    offer_location: "Plek — Kyalami",
    offer_price_test: "Toets — <strong>R0</strong>",
    offer_price_review: "Persoonlike ontleding — <strong>R0</strong>",
    offer_cta: "Kry ’n gratis ontleding",
    offer_graph_alt: "Oxford Capacity Analysis-grafiek met tien persoonlikheidseienskappe",

    stories_title: "Wat mense ná hul persoonlike ontleding besef het",

    story_1_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_1_author: "John Dow",
    story_1_city: "Johannesburg",

    story_2_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_2_author: "Paol Prigent",
    story_2_city: "Cape Town",

    story_3_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_3_author: "Iminathi Nkosi",
    story_3_city: "Soweto",

    story_4_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_4_author: "Dumisani Abdallah",
    story_4_city: "Durban",

    story_5_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_5_author: "Karin Mathiasen",
    story_5_city: "Gebeha",

    story_6_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_6_author: "Karlmann Messmann",
    story_6_city: "Pretoria",

    final_title: "Vind die oorsaak in plaas daarvan om net die gevolge te beveg",
    final_text: "Maak tot 40 minute beskikbaar. Antwoord eerlik. Onmiddellik ná die toets ontvang jy jou persoonlike grafiek. ’n Spesialis sal jou ook binnekort kontak om ’n tyd vir ’n diepgaande persoonlikheidsontleding te bespreek.",
    final_btn: "Begin die toets",
    final_fact_questions: "200 vrae",
    final_fact_answers: "Antwoorde: ja, miskien of nee",
    final_fact_free: "Die toets en persoonlike ontleding is gratis",

    footer_rights: "©2026 All rights reserved.",
    footer_designed: "Designed by Jacaranda Group",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions"
  },

  zu: {
    meta_title: "Oxford Capacity Analysis",
    meta_description: "Oxford Capacity Analysis — ukuhlolwa kobuntu nokubonisana kwamahhala eKyalami",
    burger_open: "Vula imenyu",

    header_work: "Kusebenza kanjani",
    header_result: "Imiphumela",
    header_success: "Imibono",
    header_start: "Qala ukuhlolwa",

    hero_h1: "Yini ngempela ekuvimbela ukuba uphile ngendlela ofuna ngayo?",
    hero_p: "Uma izinkinga zilokhu zibuya naphezu kwayo yonke imizamo yakho yokuzixazulula, kusho ukuthi awukakuboni kahle ukuthi yini ngempela ezibangela zona. Ukuhlolwa kwamahhala nokuhlaziywa komuntu ngamunye kungasiza ekutholeni izimbangela ezifihlekile zezinkinga zezimali, izingxabano, ukukhathazeka, ukungazethembi kanye nezinkinga eziphindaphindayo.",
    hero_btn: "Qala ukuhlolwa kwamahhala",
    hero_40min: "Beka eceleni imizuzu engafika kwengu-40",
    hero_free: "Ukuhlolwa kumahhala",
    hero_graph: "Igrafu yakho ngokushesha ngemva kokuhlolwa",
    hero_kya: "Ukuhlaziywa komuntu siqu kwamahhala eKyalami",

    problems_title: "Uzama ukushintsha isimo. Kodwa akukho okushintshayo",
    problem_money: "Imali ihlala inganele",
    problem_work: "Kunzima ukuthola nokugcina umsebenzi",
    problem_anxiety: "Ukukhathazeka kwenza kube nzima ukwenza izinqumo",
    problem_confidence: "Awunakho ukuzethemba okwanele",
    problem_relationships: "Izingxabano ebudlelwaneni ziyaphindaphinda",
    problem_trust: "Kunzima ukwazi ukuthi ubani ongamuthemba",
    problem_success: "Impumelelo ihlala ikuphunyuka",
    problem_family: "Izinkinga zabasondelene nawe zilimaza umndeni",
    problems_conclusion: "Inkinga iyabuya uma imbangela yayo yangempela ingakabonakali.",
    problems_cta: "Thola ukuthi yini engingayiboni",

    insight_image_alt: "Isithombe esibonisayo sowesifazane ekukhanyeni okufudumele kokushona kwelanga",
    insight_title: "Ukube bewuyazi imbangela yangempela, ubungase usukwazi ukwenza okuthile ngayo",
    insight_p1: "Ungase ucabange ukuthi inkinga ibangelwa umlingani wakho, umphathi wakho, ukuntuleka kwemali noma izimo ezinzima.",
    insight_p2: "Kodwa abantu nezimo ziyashintsha, kanti inkinga ivame ukuphindaphinda noma ihlale ikhona.",
    insight_conclusion: "Lokho kusho ukuthi ubona imiphumela, kodwa awuboni ukuthi yini ephinde iholele kuyo.",
    insight_cta: "Thola imbangela yangempela",

    process_title: "Yenza ukuhlolwa. Thola igrafu. Thola imbangela yangempela",
    process_step1_title: "Yenza ukuhlolwa",
    process_step1_text: "Phendula imibuzo ngendlela osabela ngayo, izinqumo zakho kanye nezenzo zakho.",
    process_step2_title: "Thola igrafu ngokushesha",
    process_step2_text: "Bona iphrofayela yakho yomuntu siqu ezicini eziyishumi zobuntu.",
    process_step3_title: "Thola ukuhlaziywa kochwepheshe",
    process_step3_text: "Uchwepheshe uzohumusha inhlanganisela yezinkomba futhi akubonise ukuthi yini ephinde ikuholele ezinkingeni ezifanayo.",
    process_conclusion: "Yinhlanganisela yamaphuzu eyenza kubonakale lokho umuntu angakuboni ngokwakhe:<br><strong>imbangela efihlekile yobunzima obuphindaphindayo.</strong>",
    process_cta: "Yenza ukuhlolwa bese uthola ukuhlaziywa",

    offer_title: "Ukuhlaziywa okuphelele komuntu ngamunye — mahhala",
    offer_graph: "Igrafu yomuntu siqu ngokushesha ngemva kokuhlolwa",
    offer_interpretation: "Ukuhunyushwa kochwepheshe kwemiphumela yakho",
    offer_meeting: "Umhlangano womuntu siqu ongafinyelela ehoreni elilodwa",
    offer_location: "Indawo — Kyalami",
    offer_price_test: "Ukuhlolwa — <strong>R0</strong>",
    offer_price_review: "Ukuhlaziywa komuntu siqu — <strong>R0</strong>",
    offer_cta: "Thola ukuhlaziywa kwamahhala",
    offer_graph_alt: "Igrafu ye-Oxford Capacity Analysis enezici eziyishumi zobuntu",

    stories_title: "Lokho abantu abakuqonda ngemva kokuhlaziywa komuntu siqu",

    story_1_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_1_author: "John Dow",
    story_1_city: "Johannesburg",

    story_2_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_2_author: "Paol Prigent",
    story_2_city: "Cape Town",

    story_3_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_3_author: "Iminathi Nkosi",
    story_3_city: "Soweto",

    story_4_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_4_author: "Dumisani Abdallah",
    story_4_city: "Durban",

    story_5_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_5_author: "Karin Mathiasen",
    story_5_city: "Gebeha",

    story_6_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_6_author: "Karlmann Messmann",
    story_6_city: "Pretoria",

    final_title: "Thola imbangela, kunokuba ulwe nemiphumela kuphela",
    final_text: "Beka eceleni imizuzu engafika kwengu-40. Phendula ngobuqotho. Ngokushesha ngemva kokuhlolwa uzothola igrafu yakho yomuntu siqu. Futhi maduze uchwepheshe uzoxhumana nawe ukuze ahlele isikhathi sokuhlaziywa okujulile kobuntu.",
    final_btn: "Qala ukuhlolwa",
    final_fact_questions: "Imibuzo engu-200",
    final_fact_answers: "Izimpendulo: yebo, mhlawumbe noma cha",
    final_fact_free: "Ukuhlolwa nokuhlaziywa komuntu siqu kumahhala",

    footer_rights: "©2026 All rights reserved.",
    footer_designed: "Designed by Jacaranda Group",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions"
  },

  ru: {
    meta_title: "Oxford Capacity Analysis",
    meta_description: "Oxford Capacity Analysis — бесплатный тест личности и консультация в Кьялами",
    burger_open: "Открыть меню",

    header_work: "Как это работает",
    header_result: "Результаты",
    header_success: "Отзывы",
    header_start: "Начать тест",

    hero_h1: "Что на самом деле мешает вам жить так, как&nbsp;вы&nbsp;хотите?",
    hero_p: "Если проблемы возвращаются, несмотря на все ваши попытки их решить, значит, вы до сих пор не видите, что на самом деле их вызывает. Бесплатный тест и индивидуальный разбор помогут найти скрытые причины финансовых трудностей, конфликтов, тревоги, неуверенности и повторяющихся неприятностей.",
    hero_btn: "Начать бесплатный тест",
    hero_40min: "Выделите до 40 минут",
    hero_free: "Тест бесплатно",
    hero_graph: "Готовый график сразу после теста",
    hero_kya: "Личный разбор в Кьялами бесплатно",

    problems_title: "Вы пытаетесь изменить ситуации. Но&nbsp;ничего не меняется",
    problem_money: "Денег постоянно не&nbsp;хватает",
    problem_work: "Работу сложно найти и&nbsp;сохранить",
    problem_anxiety: "Тревога мешает принимать решения",
    problem_confidence: "Не хватает уверенности в&nbsp;себе",
    problem_relationships: "В отношениях повторяются конфликты",
    problem_trust: "Трудно понять, кому доверять",
    problem_success: "Успех постоянно ускользает",
    problem_family: "Проблемы близких разрушают семью",
    problems_conclusion: "Проблема возвращается, пока её настоящая причина остаётся незамеченной.",
    problems_cta: "Узнать, что я не замечаю",

    insight_image_alt: "Иллюстративный портрет женщины в тёплом свете заката",
    insight_title: "Если бы вы знали настоящую причину, вы уже могли бы с ней что-то сделать",
    insight_p1: "Вы можете думать, что всему виной партнёр, начальник, нехватка денег или плохие обстоятельства.",
    insight_p2: "Но люди и обстоятельства меняются, а проблема часто повторяется или остаётся.",
    insight_conclusion: "Значит, вы видите последствия, но не то, что снова к ним приводит.",
    insight_cta: "Найти настоящую причину",

    process_title: "Пройдите тест. Получите график. Узнайте настоящую причину",
    process_step1_title: "Пройдите тест",
    process_step1_text: "Ответьте на вопросы о своих реакциях,&nbsp;решениях&nbsp;и&nbsp;поступках.",
    process_step2_title: "Сразу получите график",
    process_step2_text: "Увидьте свой индивидуальный профиль по&nbsp;десяти характеристикам личности.",
    process_step3_title: "Получите профессиональный разбор",
    process_step3_text: "Специалист интерпретирует сочетание показателей и&nbsp;покажет, что снова приводит вас&nbsp;к&nbsp;одним и тем же проблемам.",
    process_conclusion: "Именно сочетание точек позволяет увидеть то,&nbsp;чего человек не замечает сам:<br><strong>скрытую причину повторяющихся трудностей.</strong>",
    process_cta: "Пройти тест и получить разбор",

    offer_title: "Полный индивидуальный анализ бесплатно",
    offer_graph: "Персональный график сразу после теста",
    offer_interpretation: "Профессиональная интерпретация результатов",
    offer_meeting: "Личная встреча продолжительностью до одного часа",
    offer_location: "Место проведения - Кьялами",
    offer_price_test: "Тест - <strong>R0</strong>",
    offer_price_review: "Личный разбор - <strong>R0</strong>",
    offer_cta: "Получить бесплатный анализ",
    offer_graph_alt: "График Oxford Capacity Analysis с десятью характеристиками",

    stories_title: "Что люди поняли после индивидуального разбора",

    story_1_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_1_author: "Джон Доу",
    story_1_city: "Йоханнесбург",

    story_2_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_2_author: "Пол Пригент",
    story_2_city: "Кейптаун",

    story_3_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_3_author: "Иминахи Нкоси",
    story_3_city: "Соувето",

    story_4_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_4_author: "Думасани Абдаллах",
    story_4_city: "Дурбан",

    story_5_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_5_author: "Карина Матисен",
    story_5_city: "Порт Элизабет",

    story_6_text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    story_6_author: "Карл Месман",
    story_6_city: "Претория",

    final_title: "Найдите причину, а не боритесь только с последствиями",
    final_text: "Выделите до 40 минут. Отвечайте честно. Сразу после теста вы получите свой персональный график. А также в ближайшее время с вами свяжется специалист для брони времени для глубокого анализа личности.",
    final_btn: "Начать тест",
    final_fact_questions: "200 вопросов",
    final_fact_answers: "Ответы: да, возможно или нет",
    final_fact_free: "Тест и личный разбор бесплатно",

    footer_rights: "©2026 All rights reserved.",
    footer_designed: "Designed by Jacaranda Group",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования"
  }
};

    // launcher (leave here!)
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);