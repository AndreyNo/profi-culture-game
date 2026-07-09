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

const ART = {
  intro: `
<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="140" cy="148" rx="90" ry="8" fill="#1A2740" opacity=".12"/>
  <rect x="70" y="70" width="140" height="70" rx="16" fill="#FFF" stroke="#1A2740" stroke-width="3"/>
  <rect x="88" y="88" width="40" height="28" rx="6" fill="#7EC8FF" stroke="#1A2740" stroke-width="2.5"/>
  <rect x="140" y="88" width="50" height="8" rx="4" fill="#FFC94A" stroke="#1A2740" stroke-width="2"/>
  <rect x="140" y="104" width="36" height="8" rx="4" fill="#E8E0D4" stroke="#1A2740" stroke-width="2"/>
  <circle cx="200" cy="48" r="28" fill="#FFB4A2" stroke="#1A2740" stroke-width="3"/>
  <circle cx="190" cy="46" r="3" fill="#1A2740"/>
  <circle cx="208" cy="46" r="3" fill="#1A2740"/>
  <path d="M192 56c4 5 12 5 16 0" stroke="#1A2740" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M200 76v20M185 100h30" stroke="#1A2740" stroke-width="3" stroke-linecap="round"/>
  <circle cx="55" cy="40" r="18" fill="#FFC94A" stroke="#1A2740" stroke-width="3"/>
  <path d="M55 22v-8M55 66v-8M37 40h-8M81 40h-8" stroke="#1A2740" stroke-width="2.5" stroke-linecap="round"/>
  <text x="100" y="132" font-family="Nunito,sans-serif" font-weight="800" font-size="14" fill="#1A2740">Добро пожаловать!</text>
</svg>`,

  hire: `
<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="140" cy="148" rx="100" ry="8" fill="#1A2740" opacity=".12"/>
  <rect x="40" y="50" width="70" height="90" rx="14" fill="#C4B8FF" stroke="#1A2740" stroke-width="3"/>
  <circle cx="75" cy="78" r="16" fill="#FFE8C8" stroke="#1A2740" stroke-width="2.5"/>
  <rect x="58" y="100" width="34" height="28" rx="8" fill="#FFF" stroke="#1A2740" stroke-width="2.5"/>
  <rect x="120" y="40" width="70" height="100" rx="14" fill="#3ECF8E" stroke="#1A2740" stroke-width="3"/>
  <circle cx="155" cy="72" r="18" fill="#FFE8C8" stroke="#1A2740" stroke-width="2.5"/>
  <path d="M147 72h4M159 72h4M149 80c3 3 9 3 12 0" stroke="#1A2740" stroke-width="2" stroke-linecap="round"/>
  <rect x="138" y="98" width="34" height="30" rx="8" fill="#FFF" stroke="#1A2740" stroke-width="2.5"/>
  <path d="M155 28l4 10h10l-8 6 3 10-9-6-9 6 3-10-8-6h10z" fill="#FFC94A" stroke="#1A2740" stroke-width="2"/>
  <rect x="200" y="55" width="55" height="85" rx="12" fill="#FFB4A2" stroke="#1A2740" stroke-width="3" opacity=".7"/>
  <text x="208" y="100" font-family="Nunito,sans-serif" font-weight="900" font-size="22" fill="#1A2740">?</text>
</svg>`,

  why: `
<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="140" cy="148" rx="90" ry="8" fill="#1A2740" opacity=".12"/>
  <rect x="50" y="35" width="100" height="70" rx="16" fill="#FFF" stroke="#1A2740" stroke-width="3"/>
  <text x="70" y="78" font-family="Nunito,sans-serif" font-weight="900" font-size="36" fill="#FF6B4A">зачем?</text>
  <path d="M150 70c20-30 60-20 70 10" stroke="#1A2740" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 6"/>
  <circle cx="220" cy="95" r="32" fill="#7EC8FF" stroke="#1A2740" stroke-width="3"/>
  <circle cx="210" cy="90" r="3.5" fill="#1A2740"/>
  <circle cx="228" cy="90" r="3.5" fill="#1A2740"/>
  <path d="M212 104c5 6 14 6 19 0" stroke="#1A2740" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="30" y="115" width="80" height="24" rx="8" fill="#FFC94A" stroke="#1A2740" stroke-width="2.5"/>
  <text x="42" y="132" font-family="Nunito,sans-serif" font-weight="800" font-size="12" fill="#1A2740">не «что»</text>
</svg>`,

  ship: `
<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="140" cy="148" rx="95" ry="8" fill="#1A2740" opacity=".12"/>
  <rect x="30" y="45" width="90" height="70" rx="12" fill="#FFF" stroke="#1A2740" stroke-width="3"/>
  <rect x="42" y="58" width="66" height="8" rx="4" fill="#E8E0D4"/>
  <rect x="42" y="74" width="50" height="8" rx="4" fill="#E8E0D4"/>
  <rect x="42" y="90" width="58" height="8" rx="4" fill="#E8E0D4"/>
  <text x="48" y="40" font-family="Nunito,sans-serif" font-weight="800" font-size="11" fill="#3D4F6F">презентация</text>
  <path d="M130 80h20" stroke="#1A2740" stroke-width="3" stroke-linecap="round"/>
  <path d="M145 70l15 10-15 10" fill="#1A2740"/>
  <rect x="160" y="40" width="90" height="80" rx="14" fill="#3ECF8E" stroke="#1A2740" stroke-width="3"/>
  <circle cx="205" cy="72" r="18" fill="#FFF" stroke="#1A2740" stroke-width="2.5"/>
  <path d="M198 72l5 5 10-12" stroke="#1A2740" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="175" y="108" font-family="Nunito,sans-serif" font-weight="800" font-size="12" fill="#FFF">гипотеза!</text>
</svg>`,

  drive: `
<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="140" cy="148" rx="90" ry="8" fill="#1A2740" opacity=".12"/>
  <circle cx="100" cy="85" r="40" fill="#FF6B4A" stroke="#1A2740" stroke-width="3"/>
  <path d="M85 85c0-10 8-18 18-18" stroke="#FFF" stroke-width="5" stroke-linecap="round"/>
  <circle cx="118" cy="70" r="4" fill="#FFF"/>
  <text x="78" y="130" font-family="Nunito,sans-serif" font-weight="800" font-size="12" fill="#1A2740">драйв</text>
  <rect x="165" y="55" width="70" height="55" rx="14" fill="#7EC8FF" stroke="#1A2740" stroke-width="3"/>
  <circle cx="188" cy="78" r="6" fill="#FFF" stroke="#1A2740" stroke-width="2"/>
  <circle cx="212" cy="78" r="6" fill="#FFF" stroke="#1A2740" stroke-width="2"/>
  <path d="M190 95h20" stroke="#1A2740" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M200 40v12M185 48l8 8M215 48l-8 8" stroke="#FFC94A" stroke-width="3" stroke-linecap="round"/>
  <text x="172" y="130" font-family="Nunito,sans-serif" font-weight="800" font-size="12" fill="#1A2740">отдых</text>
</svg>`,

  oops: `
<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="140" cy="148" rx="90" ry="8" fill="#1A2740" opacity=".12"/>
  <rect x="55" y="40" width="100" height="70" rx="14" fill="#FFE0D8" stroke="#1A2740" stroke-width="3"/>
  <text x="78" y="82" font-family="Nunito,sans-serif" font-weight="900" font-size="28" fill="#E84A2E">упс</text>
  <path d="M160 75c25-5 45 15 40 40" stroke="#1A2740" stroke-width="3" stroke-linecap="round"/>
  <circle cx="210" cy="115" r="22" fill="#3ECF8E" stroke="#1A2740" stroke-width="3"/>
  <path d="M200 115l7 7 14-14" stroke="#FFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="40" y="120" width="100" height="20" rx="8" fill="#FFF" stroke="#1A2740" stroke-width="2.5"/>
  <text x="52" y="134" font-family="Nunito,sans-serif" font-weight="700" font-size="11" fill="#1A2740">вывод → дальше</text>
</svg>`,

  finale: `
<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="140" cy="148" rx="100" ry="8" fill="#1A2740" opacity=".12"/>
  <circle cx="140" cy="70" r="42" fill="#FFC94A" stroke="#1A2740" stroke-width="3"/>
  <circle cx="126" cy="64" r="4" fill="#1A2740"/>
  <circle cx="154" cy="64" r="4" fill="#1A2740"/>
  <path d="M126 82c8 10 22 10 30 0" stroke="#1A2740" stroke-width="3" stroke-linecap="round"/>
  <path d="M140 28l5 12h13l-10 8 4 12-12-8-12 8 4-12-10-8h13z" fill="#FF6B4A" stroke="#1A2740" stroke-width="2"/>
  <rect x="95" y="112" width="90" height="28" rx="10" fill="#3ECF8E" stroke="#1A2740" stroke-width="3"/>
  <text x="112" y="131" font-family="Nunito,sans-serif" font-weight="900" font-size="14" fill="#FFF">профиец</text>
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
      <li><span class="dot c1"></span> Сила в людях</li>
      <li><span class="dot c2"></span> Здравый смысл</li>
      <li><span class="dot c3"></span> Фокус на результат</li>
      <li><span class="dot c4"></span> Драйв и честность</li>
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

  swapStage(`
    <div class="scene-art">${ART[scene.art]}</div>
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
  slot.innerHTML = `
    <div class="feedback ${choice.verdict}">
      <div class="value-chip">◎ ${scene.value}</div>
      <div class="feedback-title">${icons[choice.verdict]} ${choice.title}</div>
      <p>${choice.feedback}</p>
      <div class="actions">
        <button class="btn btn-mint" type="button" id="nextBtn">
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
    <span class="badge mint">Финал</span>
    <div class="score-pill">★ ${state.score} из ${state.maxScore}</div>
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
