/**
 * День профийца — мини-квест про культуру Профи.ру
 * ~2–3 минуты · ценности + «кто такой профиец»
 */

const VALUES = {
  people: "Сила в людях",
  sense: "Здравый смысл",
  result: "Фокус на результат",
  drive: "Драйв без надрыва",
  honesty: "Честность и ошибки",
};

/** Official value marks from the culture deck (slide 10) */
const VALUE_ICONS = {
  people: "icons/people.png",
  sense: "icons/sense.png",
  result: "icons/result.png",
  drive: "icons/drive.png",
};

const ART = {
  intro: `
<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="70" cy="70" r="48" fill="#FFF1F3"/>
  <circle cx="210" cy="70" r="48" fill="#FAFAFA" stroke="#EBEBEB"/>
  <circle cx="140" cy="34" r="8" fill="#FA2A48"/>
  <rect x="126" y="48" width="28" height="12" rx="6" fill="#FA2A48"/>
  <path d="M92 88h36M152 88h36" stroke="#FA2A48" stroke-width="3" stroke-linecap="round" opacity=".35"/>
  <circle cx="70" cy="70" r="14" fill="#FA2A48" opacity=".15"/>
  <circle cx="210" cy="70" r="14" fill="#1A1A1A" opacity=".08"/>
  <path d="M118 108c14 10 30 10 44 0" stroke="#FA2A48" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

  hire: `
<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="36" y="36" width="64" height="80" rx="14" fill="#FFF1F3"/>
  <circle cx="68" cy="62" r="12" fill="#FA2A48" opacity=".35"/>
  <rect x="52" y="82" width="32" height="20" rx="8" fill="#FA2A48" opacity=".2"/>
  <rect x="108" y="28" width="64" height="88" rx="14" fill="#FA2A48"/>
  <circle cx="140" cy="56" r="13" fill="#FFF"/>
  <rect x="124" y="78" width="32" height="22" rx="8" fill="#FFF" opacity=".9"/>
  <circle cx="140" cy="18" r="5" fill="#FA2A48"/>
  <rect x="180" y="40" width="56" height="76" rx="12" fill="#FAFAFA" stroke="#EBEBEB"/>
  <text x="198" y="84" font-family="Manrope,sans-serif" font-weight="800" font-size="22" fill="#FA2A48">?</text>
</svg>`,

  why: `
<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="40" y="32" width="120" height="64" rx="16" fill="#FFF1F3"/>
  <text x="58" y="74" font-family="Manrope,sans-serif" font-weight="800" font-size="28" fill="#FA2A48">зачем?</text>
  <path d="M170 64c18-18 48-12 58 12" stroke="#EBEBEB" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 6"/>
  <circle cx="228" cy="92" r="26" fill="#FAFAFA" stroke="#EBEBEB"/>
  <circle cx="220" cy="88" r="2.5" fill="#1A1A1A"/>
  <circle cx="236" cy="88" r="2.5" fill="#1A1A1A"/>
  <path d="M220 100c5 5 12 5 17 0" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
</svg>`,

  ship: `
<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="28" y="36" width="96" height="72" rx="12" fill="#FAFAFA" stroke="#EBEBEB"/>
  <rect x="42" y="52" width="68" height="6" rx="3" fill="#EBEBEB"/>
  <rect x="42" y="66" width="52" height="6" rx="3" fill="#EBEBEB"/>
  <rect x="42" y="80" width="60" height="6" rx="3" fill="#EBEBEB"/>
  <path d="M136 72h18" stroke="#FA2A48" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M148 64l12 8-12 8" fill="#FA2A48"/>
  <rect x="168" y="32" width="84" height="80" rx="14" fill="#FA2A48"/>
  <circle cx="210" cy="64" r="16" fill="#FFF"/>
  <path d="M203 64l5 5 10-11" stroke="#FA2A48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="186" y="98" font-family="Manrope,sans-serif" font-weight="700" font-size="11" fill="#FFF">гипотеза</text>
</svg>`,

  drive: `
<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="100" cy="70" r="38" fill="#FA2A48"/>
  <path d="M86 70c0-9 7-16 16-16" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
  <circle cx="116" cy="56" r="3.5" fill="#FFF"/>
  <rect x="168" y="48" width="72" height="52" rx="14" fill="#FFF1F3"/>
  <circle cx="190" cy="70" r="5" fill="#FA2A48" opacity=".35"/>
  <circle cx="218" cy="70" r="5" fill="#FA2A48" opacity=".35"/>
  <path d="M192 86h24" stroke="#FA2A48" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>
  <path d="M204 28v10M192 36l8 6M216 36l-8 6" stroke="#FA2A48" stroke-width="2.5" stroke-linecap="round" opacity=".4"/>
</svg>`,

  oops: `
<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="48" y="28" width="100" height="64" rx="14" fill="#FFF1F3"/>
  <text x="72" y="70" font-family="Manrope,sans-serif" font-weight="800" font-size="26" fill="#FA2A48">упс</text>
  <path d="M158 64c22-4 42 14 38 36" stroke="#EBEBEB" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="208" cy="108" r="18" fill="#FA2A48"/>
  <path d="M200 108l5 5 12-12" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="48" y="120" font-family="Manrope,sans-serif" font-weight="600" font-size="12" fill="#5C5C5C">вывод → дальше</text>
</svg>`,

  finale: `
<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="140" cy="58" r="36" fill="#FFF1F3"/>
  <circle cx="140" cy="42" r="10" fill="#FA2A48"/>
  <rect x="124" y="58" width="32" height="14" rx="7" fill="#FA2A48"/>
  <path d="M108 88c10 16 54 16 64 0" stroke="#FA2A48" stroke-width="3" stroke-linecap="round" opacity=".35"/>
  <rect x="96" y="104" width="88" height="26" rx="13" fill="#FA2A48"/>
  <text x="118" y="122" font-family="Manrope,sans-serif" font-weight="800" font-size="13" fill="#FFF">профиец</text>
</svg>`,
};

/** @typedef {'good'|'ok'|'miss'} Verdict */

const SCENES = [
  {
    id: "hire",
    badge: "Ценность · Сила в людях",
    badgeClass: "coral",
    title: "Найм без компромиссов",
    art: "hire",
    icon: "people",
    situation:
      "В команду срочно нужен человек. Есть кандидат «на троечку» — закроет дыру сейчас. Сильный кандидат появится только через месяц.",
    choices: [
      {
        text: "Берём «троечника» — главное закрыть дыру, разберёмся потом",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Мимо",
        feedback:
          "В Профи строят компанию вокруг сильных людей, а не вокруг контроля и «затычек». Компромисс в найме дорого обходится всей команде.",
        trait: null,
      },
      {
        text: "Ждём сильного. Пока перераспределим нагрузку и доверяем команде",
        verdict: /** @type {Verdict} */ ("good"),
        title: "В точку",
        feedback:
          "Сила в людях: когда нанимаешь сильных и доверяешь им — не нужно контролировать каждый шаг. Найм без компромиссов — это про будущее команды.",
        trait: "Доверяет сильным людям",
      },
      {
        text: "Берём слабого, но ставим жёсткий контроль и ежедневные отчёты",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Не наш путь",
        feedback:
          "Контроль вместо доверия — антипаттерн. Компания строится вокруг людей, а не вокруг микроменеджмента.",
        trait: null,
      },
    ],
    value: VALUES.people,
  },
  {
    id: "why",
    badge: "Ценность · Здравый смысл",
    badgeClass: "lilac",
    title: "Сначала «зачем?»",
    art: "why",
    icon: "sense",
    situation:
      "Тимлид просит срочно сделать фичу «как у конкурентов». Дедлайн — послезавтра. Ты не до конца понимаешь, зачем она пользователям.",
    choices: [
      {
        text: "Молча делаю — раз попросили, значит надо",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Слабо",
        feedback:
          "Здравый смысл — базовый инструмент, не опция. Спрашивать «зачем?» прежде чем делать «что» — норма профийца.",
        trait: null,
      },
      {
        text: "Спрашиваю «зачем?» и предлагаю обсудить смысл — потом делаем",
        verdict: /** @type {Verdict} */ ("good"),
        title: "Вот это профиец",
        feedback:
          "Здесь можно и нужно думать, спорить и не соглашаться. Высказался — услышали — двигаемся дальше вместе. Это не саботаж, а зрелость.",
        trait: "Спрашивает «зачем?»",
      },
      {
        text: "Устраиваю бесконечный спор в треде на 40 сообщений",
        verdict: /** @type {Verdict} */ ("ok"),
        title: "Почти, но…",
        feedback:
          "Спорить конструктивно — ок. Бесконечно дискутировать — уже нет. Высказался, услышали, поехали.",
        trait: "Учится спорить по делу",
      },
    ],
    value: VALUES.sense,
  },
  {
    id: "ship",
    badge: "Ценность · Фокус на результат",
    badgeClass: "mint",
    title: "Эффект, не суета",
    art: "ship",
    icon: "result",
    situation:
      "Есть идея для продукта. Можно две недели полировать презентацию для всех стейкхолдеров — или за три дня выкатить простой эксперимент на пользователей.",
    choices: [
      {
        text: "Две недели на идеальную презентацию — чтобы все согласовали",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Бурная деятельность",
        feedback:
          "Важен эффект, а не красивая суета. Отклик пользователей важнее идеальных слайдов.",
        trait: null,
      },
      {
        text: "Быстрая гипотеза: маленький шаг → смотрим реакцию → решаем дальше",
        verdict: /** @type {Verdict} */ ("good"),
        title: "Фокус на результат",
        feedback:
          "Лучше попробовать и узнать, чем планировать бесконечно. Быстрые итерации — наш стиль.",
        trait: "Проверяет гипотезы",
      },
      {
        text: "Делаю и то и другое параллельно, чтобы «закрыть все риски»",
        verdict: /** @type {Verdict} */ ("ok"),
        title: "Можно проще",
        feedback:
          "Звучит ответственно, но часто это распыление. Фокус — выбрать путь с максимальным эффектом, а не закрыть все галочки.",
        trait: "Учится фокусироваться",
      },
    ],
    value: VALUES.result,
  },
  {
    id: "drive",
    badge: "Ценность · Драйв",
    badgeClass: "",
    title: "Горим — без надрыва",
    art: "drive",
    icon: "drive",
    situation:
      "Важный релиз. Коллега пишет в полночь: «давай ещё пару часов, надо дожать». Ты уже вымотан, завтра важная встреча.",
    choices: [
      {
        text: "Сижу до утра — настоящий драйв это жертвенность",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Это не драйв",
        feedback:
          "Драйв — не значит выгорание. Профи не требует жертвенности 24/7. Ценим вовлечённость, а не надрыв.",
        trait: null,
      },
      {
        text: "Честно говорю: сегодня стоп. Утром свежей головой дожмём приоритет",
        verdict: /** @type {Verdict} */ ("good"),
        title: "Зрелый драйв",
        feedback:
          "Работаем с интересом, а не из страха. Берём инициативу — и умеем отдыхать. Энергия без надрыва — топливо надолго.",
        trait: "Горит делом без надрыва",
      },
      {
        text: "Молча игнорю сообщение — пусть сами разбираются",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Мимо",
        feedback:
          "Неравнодушие и честность важнее красивого молчания. Лучше прямо сказать про границы, чем пропасть.",
        trait: null,
      },
    ],
    value: VALUES.drive,
  },
  {
    id: "oops",
    badge: "Культура · Ошибки",
    badgeClass: "coral",
    title: "Упс. Что дальше?",
    art: "oops",
    situation:
      "Твой эксперимент провалился: метрики упали, пользователи ругаются. На синке все смотрят на тебя.",
    choices: [
      {
        text: "Ищем виноватых: кто согласовал, кто не проверил, кто «допустил»",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Так не делаем",
        feedback:
          "Ошибаться — нормально. Искать виноватых — нет. Не замалчиваем провалы и не боимся признавать ошибки.",
        trait: null,
      },
      {
        text: "Признаю промах, разбираем вывод и следующий шаг — без охоты на ведьм",
        verdict: /** @type {Verdict} */ ("good"),
        title: "Взрослая команда",
        feedback:
          "Делаем вывод — и двигаемся дальше. Честный разговор лучше красивого молчания. Обратная связь — дар, а не угроза.",
        trait: "Учится на ошибках",
      },
      {
        text: "Тихо откатываю и делаю вид, что ничего не было",
        verdict: /** @type {Verdict} */ ("miss"),
        title: "Замалчивание",
        feedback:
          "Замалчивать провалы — антипаттерн. Психологическая безопасность строится на открытости, не на идеальной картинке.",
        trait: null,
      },
    ],
    value: VALUES.honesty,
  },
];

const TAKEAWAYS = [
  "Здесь можно влиять",
  "Здесь можно задавать вопросы",
  "Здесь не нужно быть идеальным",
  "Здесь важно думать",
  "Здесь многое строится на людях",
];

const state = {
  index: -1, // -1 = intro
  score: 0,
  maxScore: SCENES.length * 2,
  traits: /** @type {string[]} */ ([]),
  answered: false,
};

const stage = document.getElementById("stage");
const progressWrap = document.getElementById("progressWrap");
const progressFill = document.getElementById("progressFill");
const sceneLabel = document.getElementById("sceneLabel");
const scoreLabel = document.getElementById("scoreLabel");
const toast = document.getElementById("toast");

function showToast(text) {
  toast.textContent = text;
  toast.hidden = false;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function updateProgress() {
  if (state.index < 0) {
    progressWrap.hidden = true;
    return;
  }
  progressWrap.hidden = false;
  const step = Math.min(state.index + 1, SCENES.length);
  const pct = (step / SCENES.length) * 100;
  progressFill.style.width = `${pct}%`;
  progressFill.parentElement.setAttribute("aria-valuenow", String(Math.round(pct)));
  sceneLabel.textContent =
    state.index >= SCENES.length ? "Финал" : `Сцена ${state.index + 1} из ${SCENES.length}`;
  scoreLabel.textContent = `${state.score} / ${state.maxScore}`;
}

function swapStage(html) {
  stage.classList.remove("swap");
  void stage.offsetWidth;
  stage.innerHTML = html;
  stage.classList.add("swap");
}

function renderIntro() {
  updateProgress();
  swapStage(`
    <div class="scene-art">${ART.intro}</div>
    <span class="badge">Тренинг · культура</span>
    <h1>Инструкцию на всё не напишешь</h1>
    <p class="lead">
      В IT решений слишком много. Людей удерживают не правила — а общие ориентиры.
      Пройди один рабочий день профийца: 5 ситуаций, ~2–3 минуты.
    </p>
    <ul class="intro-list">
      <li><span class="dot"></span> Сила в людях</li>
      <li><span class="dot"></span> Здравый смысл</li>
      <li><span class="dot"></span> Фокус на результат</li>
      <li><span class="dot"></span> Драйв и честность</li>
    </ul>
    <div class="actions">
      <button class="btn btn-primary" type="button" id="startBtn">Начать день →</button>
    </div>
  `);
  document.getElementById("startBtn").onclick = () => {
    state.index = 0;
    state.answered = false;
    renderScene();
  };
}

function renderScene() {
  if (state.index >= SCENES.length) {
    renderFinale();
    return;
  }

  const scene = SCENES[state.index];
  state.answered = false;
  updateProgress();

  const choicesHtml = scene.choices
    .map(
      (c, i) =>
        `<button class="choice" type="button" data-i="${i}">${c.text}</button>`
    )
    .join("");

  const artHtml = scene.icon
    ? `<div class="value-icon-wrap"><img class="value-icon" src="${VALUE_ICONS[scene.icon]}" alt="" width="120" height="120" /></div>`
    : `<div class="scene-art">${ART[scene.art]}</div>`;

  swapStage(`
    ${artHtml}
    <span class="badge ${scene.badgeClass}">${scene.badge}</span>
    <h2>${scene.title}</h2>
    <div class="situation">${scene.situation}</div>
    <div class="choices" id="choices">${choicesHtml}</div>
    <div id="feedbackSlot"></div>
  `);

  document.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => onChoice(Number(btn.dataset.i)));
  });
}

function onChoice(choiceIndex) {
  if (state.answered) return;
  state.answered = true;

  const scene = SCENES[state.index];
  const choice = scene.choices[choiceIndex];
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === choiceIndex) {
      btn.classList.add(
        choice.verdict === "good"
          ? "picked-good"
          : choice.verdict === "ok"
            ? "picked-ok"
            : "picked-miss"
      );
    }
  });

  if (choice.verdict === "good") {
    state.score += 2;
    showToast("+2 · в духе Профи");
  } else if (choice.verdict === "ok") {
    state.score += 1;
    showToast("+1 · почти");
  } else {
    showToast("0 · есть другой путь");
  }

  if (choice.trait && !state.traits.includes(choice.trait)) {
    state.traits.push(choice.trait);
  }

  updateProgress();

  const icons = { good: "✓", ok: "~", miss: "✗" };
  const slot = document.getElementById("feedbackSlot");
  const valueIcon = scene.icon
    ? `<img class="value-chip-icon" src="${VALUE_ICONS[scene.icon]}" alt="" width="18" height="18" />`
    : "";
  slot.innerHTML = `
    <div class="feedback ${choice.verdict}">
      <div class="value-chip">${valueIcon}${scene.value}</div>
      <div class="feedback-title">${icons[choice.verdict]} ${choice.title}</div>
      <p>${choice.feedback}</p>
      <div class="actions">
        <button class="btn btn-primary" type="button" id="nextBtn">
          ${state.index === SCENES.length - 1 ? "К финалу →" : "Дальше →"}
        </button>
      </div>
    </div>
  `;

  document.getElementById("nextBtn").onclick = () => {
    state.index += 1;
    renderScene();
  };
}

function scoreTitle() {
  const ratio = state.score / state.maxScore;
  if (ratio >= 0.85) return "Ты уже думаешь как профиец";
  if (ratio >= 0.55) return "Хорошее чутьё — осталось чуть подкрутить";
  return "Культура читается — теперь можно прожить её в деле";
}

function renderFinale() {
  updateProgress();
  const traits =
    state.traits.length > 0
      ? state.traits
      : ["Уже в пути — переиграй и собери больше черт"];

  const traitsHtml = traits.map((t) => `<span class="trait">${t}</span>`).join("");
  const takeHtml = TAKEAWAYS.map(
    (t, i) => `<li><span>${i + 1}</span>${t}</li>`
  ).join("");

  swapStage(`
    <div class="scene-art">${ART.finale}</div>
    <span class="badge">Финал</span>
    <div class="score-pill">${state.score} из ${state.maxScore}</div>
    <h1>${scoreTitle()}</h1>
    <p class="lead">
      Профиец — не должность. Это человек, который выбрал Профи осознанно:
      думает критически, берёт ответственность, честен и неравнодушен — без надрыва.
    </p>
    <h2 style="font-size:1.1rem;margin-top:8px">Твой набор на сегодня</h2>
    <div class="traits">${traitsHtml}</div>
    <h2 style="font-size:1.1rem;margin-top:20px">Что забрать с собой</h2>
    <ul class="takeaways">${takeHtml}</ul>
    <div class="actions">
      <button class="btn btn-primary" type="button" id="replayBtn">Пройти ещё раз</button>
      <button class="btn btn-secondary" type="button" id="introBtn">На старт</button>
    </div>
  `);

  document.getElementById("replayBtn").onclick = () => {
    state.index = 0;
    state.score = 0;
    state.traits = [];
    state.answered = false;
    renderScene();
  };
  document.getElementById("introBtn").onclick = () => {
    state.index = -1;
    state.score = 0;
    state.traits = [];
    state.answered = false;
    renderIntro();
  };
}

renderIntro();
