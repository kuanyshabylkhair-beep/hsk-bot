/* ══════════════════════════════════════════════
   HSK Репетитор — Mini App
   ══════════════════════════════════════════════ */

const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
const initData = tg ? tg.initData : "";

if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setHeaderColor("#0F1B2D"); } catch (e) {}
  try { tg.setBackgroundColor("#0F1B2D"); } catch (e) {}
  try { tg.disableVerticalSwipes && tg.disableVerticalSwipes(); } catch (e) {}
}

function haptic(kind) {
  if (!tg || !tg.HapticFeedback) return;
  try {
    if (kind === "success" || kind === "error" || kind === "warning") {
      tg.HapticFeedback.notificationOccurred(kind);
    } else {
      tg.HapticFeedback.impactOccurred(kind || "light");
    }
  } catch (e) {}
}

/* ── i18n (только интерфейсные подписи; сами вопросы приходят с бэкенда уже на нужном языке) ── */
const I18N = {
  ru: {
    loading: "Загрузка…",
    plan_free: "Бесплатный план",
    hello: "Привет",
    tile_question: "Вопрос", tile_question_sub: "Обычный режим",
    tile_test: "Тест", tile_test_sub: "До 50 в день",
    tile_reading: "Чтение", tile_reading_sub: "Предложения и тексты",
    tile_listening: "Аудирование", tile_listening_sub: "На слух",
    tile_flashcards: "Карточки", tile_flashcards_sub: "Повторение SRS",
    tile_premium: "Премиум", tile_premium_sub: "Тарифы и оплата",
    tile_stats: "Статистика", tile_stats_sub: "Твой прогресс",
    section_practice: "Практика",
    section_more: "Ещё",
    level_title: "Выбери уровень",
    level_sub: "HSK 1 — самый простой, HSK 6 — самый сложный",
    level_mix: "Все уровни вперемешку",
    back: "Назад",
    next_question: "Следующий вопрос",
    finish_session: "Готово",
    correct: "Верно!",
    incorrect: "Неверно",
    your_answer: "Твой ответ",
    right_answer: "Правильный ответ",
    show_text: "Показать текст",
    play_audio: "Прослушать",
    playing_audio: "Играет…",
    listen_hint: "Прослушай и выбери перевод",
    limit_title: "Лимит на сегодня исчерпан",
    limit_sub_normal: "Возвращайся завтра или оформи более высокий тариф",
    limit_sub_test: "Счётчик обнулится завтра. Отличная тренировка сегодня! 💪",
    locked_title: "Доступно в тарифе Премиум + Тест",
    locked_sub: "1590 ₸/мес — тест, чтение, аудирование, карточки без ограничений по темам",
    upgrade_btn: "Смотреть тарифы",
    flash_show_answer: "Показать ответ",
    flash_knew: "Знал",
    flash_forgot: "Не знал",
    flash_empty_title: "Пока нечего повторять",
    flash_empty_sub: "Все карточки на сегодня выучены — заходи позже 🎉",
    flash_learned: "выучено",
    flash_next_in: "Вернётся через",
    tariffs_title: "Тарифы",
    tariffs_sub: "Выбери план подготовки",
    current_plan_badge: "Твой текущий план",
    free_plan_name: "Бесплатно",
    free_plan_feat: "1 вопрос в день · только HSK 1",
    feat_standard: "3 вопроса (уведомления) в день · все уровни",
    feat_premium: "5 вопросов (уведомлений) в день · все уровни",
    feat_premium_test: "5 уведомлений + Тест, Чтение, Аудирование, Карточки, до 50 вопросов в день",
    buy_btn: "Выбрать план",
    kaspi_hint: "Переведи сумму на этот номер Kaspi, затем нажми «Я оплатил»",
    paid_btn: "Я оплатил",
    paid_confirm_title: "Заявка отправлена!",
    paid_confirm_sub: "Проверим оплату и активируем тариф в течение 5–15 минут.",
    support_btn: "Написать в поддержку",
    stats_title: "Статистика",
    stats_sub: "Прогресс по уровням",
    stat_streak: "Серия дней",
    stat_best: "Рекорд",
    stat_cards: "Карточек выучено",
    toast_saved: "Сохранено",
    err_generic: "Что-то пошло не так, попробуй ещё раз",
    q_today: "сегодня",
    lang_ru: "РУ", lang_kk: "ҚАЗ",
  },
  kk: {
    loading: "Жүктелуде…",
    plan_free: "Тегін жоспар",
    hello: "Сәлем",
    tile_question: "Сұрақ", tile_question_sub: "Қалыпты режим",
    tile_test: "Тест", tile_test_sub: "Күніне 50-ге дейін",
    tile_reading: "Оқылым", tile_reading_sub: "Сөйлемдер мен мәтіндер",
    tile_listening: "Тыңдалым", tile_listening_sub: "Есту арқылы",
    tile_flashcards: "Карточкалар", tile_flashcards_sub: "SRS қайталау",
    tile_premium: "Премиум", tile_premium_sub: "Тарифтер мен төлем",
    tile_stats: "Статистика", tile_stats_sub: "Сенің прогресің",
    section_practice: "Жаттығу",
    section_more: "Тағы да",
    level_title: "Деңгейді таңда",
    level_sub: "HSK 1 — ең жеңіл, HSK 6 — ең қиын",
    level_mix: "Барлық деңгейлер аралас",
    back: "Артқа",
    next_question: "Келесі сұрақ",
    finish_session: "Дайын",
    correct: "Дұрыс!",
    incorrect: "Қате",
    your_answer: "Сенің жауабың",
    right_answer: "Дұрыс жауап",
    show_text: "Мәтінді көрсету",
    play_audio: "Тыңдау",
    playing_audio: "Ойнатылуда…",
    listen_hint: "Тыңдап, аудармасын таңда",
    limit_title: "Бүгінгі лимит бітті",
    limit_sub_normal: "Ертең кел немесе жоғары тарифке өт",
    limit_sub_test: "Есептегіш ертең нөлге түседі. Бүгінгі жаттығу тамаша болды! 💪",
    locked_title: "Премиум + Тест тарифінде қолжетімді",
    locked_sub: "1590 ₸/ай — тест, оқылым, тыңдалым, карточкалар шексіз",
    upgrade_btn: "Тарифтерді көру",
    flash_show_answer: "Жауапты көрсету",
    flash_knew: "Білдім",
    flash_forgot: "Білмедім",
    flash_empty_title: "Әзірге қайталайтын ештеңе жоқ",
    flash_empty_sub: "Бүгінгі карточкалардың бәрі үйренілді — кейінірек кел 🎉",
    flash_learned: "үйренілді",
    flash_next_in: "Қайта оралады",
    tariffs_title: "Тарифтер",
    tariffs_sub: "Дайындық жоспарын таңда",
    current_plan_badge: "Сенің ағымдағы жоспарың",
    free_plan_name: "Тегін",
    free_plan_feat: "Күніне 1 сұрақ · тек HSK 1",
    feat_standard: "Күніне 3 сұрақ (хабарландыру) · барлық деңгейлер",
    feat_premium: "Күніне 5 сұрақ (хабарландыру) · барлық деңгейлер",
    feat_premium_test: "5 хабарландыру + Тест, Оқылым, Тыңдалым, Карточкалар, күніне 50 сұраққа дейін",
    buy_btn: "Жоспарды таңдау",
    kaspi_hint: "Соманы осы Kaspi нөміріне аудар, содан кейін «Төледім» батырмасын бас",
    paid_btn: "Төледім",
    paid_confirm_title: "Өтінім жіберілді!",
    paid_confirm_sub: "Төлемді тексеріп, 5–15 минут ішінде тарифті іске қосамыз.",
    support_btn: "Қолдау қызметіне жазу",
    stats_title: "Статистика",
    stats_sub: "Деңгейлер бойынша прогресс",
    stat_streak: "Серия күндер",
    stat_best: "Рекорд",
    stat_cards: "Карточка үйренілді",
    toast_saved: "Сақталды",
    err_generic: "Бірдеңе дұрыс болмады, қайталап көр",
    q_today: "бүгін",
    lang_ru: "РУ", lang_kk: "ҚАЗ",
  },
};

function t(key) {
  const lang = (state.profile && state.profile.lang) || "ru";
  return (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || key;
}

/* ── state ── */
const state = {
  profile: null,
  screen: "home",
  stack: [],
  question: null,   // текущий вопрос {subject, idx, mode, text, options, audio_url, counter}
  answered: false,
  level: null,       // выбранный уровень для практики / карточек
  mode: null,        // normal | test | reading | listen
  flash: null,       // текущая карточка
  flashRevealed: false,
};

/* ── API helper ── */
async function api(path, opts) {
  opts = opts || {};
  const headers = Object.assign({ "X-Init-Data": initData }, opts.headers || {});
  if (opts.body && !(opts.body instanceof Blob)) headers["Content-Type"] = "application/json";
  const res = await fetch(path, Object.assign({}, opts, { headers }));
  if (!res.ok) {
    let detail = null;
    try { detail = await res.json(); } catch (e) {}
    const err = new Error("api_error");
    err.status = res.status;
    err.detail = detail ? detail.detail : null;
    throw err;
  }
  return res.json();
}

function apiGet(path) { return api(path); }
function apiPost(path, body) { return api(path, { method: "POST", body: JSON.stringify(body || {}) }); }

async function fetchAudioUrl(url) {
  const res = await fetch(url, { headers: { "X-Init-Data": initData } });
  if (!res.ok) throw new Error("audio_error");
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

/* ── toast ── */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ── navigation ── */
function go(screen, params) {
  state.stack.push({ screen: state.screen, params: state.params });
  state.screen = screen;
  state.params = params || null;
  render();
  updateBackButton();
  window.scrollTo(0, 0);
}
function goReplace(screen, params) {
  state.screen = screen;
  state.params = params || null;
  render();
  updateBackButton();
  window.scrollTo(0, 0);
}
function goHome() {
  state.stack = [];
  state.screen = "home";
  state.params = null;
  render();
  updateBackButton();
}
function goBack() {
  const prev = state.stack.pop();
  if (!prev) { goHome(); return; }
  state.screen = prev.screen;
  state.params = prev.params;
  render();
  updateBackButton();
}
function updateBackButton() {
  if (!tg || !tg.BackButton) return;
  if (state.screen === "home") tg.BackButton.hide();
  else tg.BackButton.show();
}
if (tg && tg.BackButton) tg.BackButton.onClick(() => goBack());

/* ── level label helper ── */
function levelLabel(key) {
  if (!state.profile) return key;
  const found = state.profile.subjects.find((s) => s.key === key);
  return found ? found.label : key;
}

/* ══════════════════════════════════════════════
   RENDER — экраны
   ══════════════════════════════════════════════ */

function render() {
  const app = document.getElementById("app");
  let html = "";
  switch (state.screen) {
    case "home": html = renderHome(); break;
    case "level_picker": html = renderLevelPicker(); break;
    case "question": html = renderQuestion(); break;
    case "flashcards": html = renderFlashcards(); break;
    case "tariffs": html = renderTariffs(); break;
    case "stats": html = renderStats(); break;
    default: html = renderHome();
  }
  app.innerHTML = html;
}

function topbarHTML() {
  const p = state.profile;
  const lang = p.lang;
  return `
  <div class="topbar">
    <div class="identity">
      <div class="seal-badge"><div class="n">${p.streak_emoji || "学"}</div><div class="e">${p.streak || 0}</div></div>
      <div class="who">
        <div class="name">${escapeHtml(p.name || "")}</div>
        <div class="plan">${p.is_premium ? p.plan_name : t("plan_free")}</div>
      </div>
    </div>
    <div class="lang-switch">
      <button data-action="lang" data-lang="ru" class="${lang === "ru" ? "active" : ""}">${t("lang_ru")}</button>
      <button data-action="lang" data-lang="kk" class="${lang === "kk" ? "active" : ""}">${t("lang_kk")}</button>
    </div>
  </div>`;
}

function backRowHTML(title, sub) {
  return `
  <div class="back-row">
    <div class="back-btn" data-action="back">←</div>
    <div>
      <div class="screen-title">${title}</div>
      ${sub ? `<div class="screen-sub">${sub}</div>` : ""}
    </div>
  </div>`;
}

function renderHome() {
  const p = state.profile;
  const locked = !p.has_test_access;
  const statChips = p.subjects.map((s) => {
    const st = p.stats[s.key] || { correct: 0, total: 0 };
    const pct = st.total ? Math.round((st.correct / st.total) * 100) : 0;
    return `<div class="stat-chip"><div class="v">${pct}%</div><div class="l">${escapeHtml(s.label)}</div></div>`;
  }).join("");

  return `
    ${topbarHTML()}
    <div class="screen">
      <div class="stat-strip">${statChips}</div>

      <div class="section-title">${t("section_practice")}</div>
      <div class="tiles">
        <div class="tile wide accent" data-action="open_level" data-mode="normal">
          <div class="ic">❓</div>
          <div>
            <div class="t">${t("tile_question")}</div>
            <div class="s">${t("tile_question_sub")} · ${p.questions_today}/${p.questions_limit} ${t("q_today")}</div>
          </div>
        </div>
        <div class="tile ${locked ? "locked" : ""}" data-action="open_level" data-mode="test">
          <span class="ic">🧪</span>
          <div class="t">${t("tile_test")}</div>
          <div class="s">${locked ? t("locked_title") : t("tile_test_sub")}</div>
        </div>
        <div class="tile ${locked ? "locked" : ""}" data-action="open_level" data-mode="reading">
          <span class="ic">📖</span>
          <div class="t">${t("tile_reading")}</div>
          <div class="s">${locked ? t("locked_title") : t("tile_reading_sub")}</div>
        </div>
        <div class="tile ${locked ? "locked" : ""}" data-action="open_level" data-mode="listen">
          <span class="ic">🎧</span>
          <div class="t">${t("tile_listening")}</div>
          <div class="s">${locked ? t("locked_title") : t("tile_listening_sub")}</div>
        </div>
        <div class="tile ${locked ? "locked" : ""}" data-action="open_flashcards">
          <span class="ic">🗂</span>
          <div class="t">${t("tile_flashcards")}</div>
          <div class="s">${locked ? t("locked_title") : `${p.flash_learned}/${p.flash_total} ${t("flash_learned")}`}</div>
        </div>
      </div>

      <div class="section-title">${t("section_more")}</div>
      <div class="tiles">
        <div class="tile" data-action="open_stats">
          <span class="ic">📊</span>
          <div class="t">${t("tile_stats")}</div>
          <div class="s">${t("tile_stats_sub")}</div>
        </div>
        <div class="tile" data-action="open_tariffs">
          <span class="ic">⭐️</span>
          <div class="t">${t("tile_premium")}</div>
          <div class="s">${t("tile_premium_sub")}</div>
        </div>
      </div>
    </div>`;
}

function renderLevelPicker() {
  const mode = state.params && state.params.mode;
  const p = state.profile;
  const locked = mode !== "normal" && !p.has_test_access;

  const titles = {
    normal: t("tile_question"), test: t("tile_test"), reading: t("tile_reading"), listen: t("tile_listening"),
  };

  if (locked) {
    return `
      ${topbarHTML()}
      <div class="screen">
        ${backRowHTML(titles[mode] || "", "")}
        ${lockedStateHTML()}
      </div>`;
  }

  const allowedSubjects = mode === "normal" && !p.is_premium ? p.free_subjects : p.subjects.map((s) => s.key);

  const cards = p.subjects.map((s) => {
    const disabled = !allowedSubjects.includes(s.key);
    const num = s.key.replace("HSK ", "");
    return `<div class="level-card ${disabled ? "locked" : ""}" data-action="${disabled ? "open_tariffs" : "pick_level"}" data-mode="${mode}" data-level="${s.key}">
      <div class="num">${num}</div><div class="lab">HSK</div>
    </div>`;
  }).join("");

  const mixDisabled = mode === "normal" && !p.is_premium;

  return `
    ${topbarHTML()}
    <div class="screen">
      ${backRowHTML(titles[mode] || "", t("level_sub"))}
      <div class="level-grid">
        ${cards}
        <div class="level-card mix ${mixDisabled ? "locked" : ""}" data-action="${mixDisabled ? "open_tariffs" : "pick_level"}" data-mode="${mode}" data-level="all">
          <span>🎲</span><span class="lab">${t("level_mix")}</span>
        </div>
      </div>
    </div>`;
}

function lockedStateHTML() {
  return `
    <div class="empty-state">
      <span class="ic">🔒</span>
      <div style="font-weight:800;font-size:15px;color:var(--paper);margin-bottom:6px;">${t("locked_title")}</div>
      <div style="font-size:13px;margin-bottom:20px;">${t("locked_sub")}</div>
      <button class="btn btn-gold" data-action="open_tariffs">${t("upgrade_btn")}</button>
    </div>`;
}

function renderQuestion() {
  const p = state.profile;
  if (state.limitReached) {
    const isTest = state.limitReached === "test_limit";
    const isLocked = state.limitReached === "locked";
    return `${topbarHTML()}<div class="screen">${backRowHTML("", "")}
      <div class="empty-state">
        <span class="ic">${isLocked ? "🔒" : "⏳"}</span>
        <div style="font-weight:800;color:var(--paper);margin-bottom:6px;">${isLocked ? t("locked_title") : t("limit_title")}</div>
        <div style="font-size:13px;margin-bottom:20px;">${isLocked ? t("locked_sub") : (isTest ? t("limit_sub_test") : t("limit_sub_normal"))}</div>
        ${isLocked ? `<button class="btn btn-gold" data-action="open_tariffs">${t("upgrade_btn")}</button>` : `<button class="btn btn-gold" data-action="back">${t("back")}</button>`}
      </div>
    </div>`;
  }
  const q = state.question;
  if (!q) {
    return `${topbarHTML()}<div class="screen">${backRowHTML("", "")}${lockedStateHTML()}</div>`;
  }
  const mode = q.mode;
  const isListen = mode === "listen";
  const counter = q.counter ? `${q.counter.today}/${q.counter.limit}` : `${p.questions_today}/${p.questions_limit}`;

  const optsHtml = q.options.map((opt) => {
    const letter = opt.trim()[0];
    const rest = opt.trim().slice(2).trim();
    return `<div class="opt" data-action="answer" data-letter="${letter}">
      <div class="letter">${letter}</div><div class="txt">${escapeHtml(rest)}</div>
    </div>`;
  }).join("");

  const textBlock = isListen && !state.showListenText
    ? `<div class="q-text" style="text-align:center;color:var(--paper-faint);font-size:15px;">${t("listen_hint")}</div>
       <button class="reveal-btn" data-action="reveal_text">${t("show_text")}</button>`
    : `<div class="q-text">${escapeHtml(q.text || "")}</div>`;

  const audioBlock = q.audio_url
    ? `<div class="audio-btn ${state.audioPlaying ? "playing" : ""}" data-action="play_audio">
         <span class="ic">🔊</span><span class="lab">${state.audioPlaying ? t("playing_audio") : t("play_audio")}</span>
       </div>`
    : "";

  return `
    ${topbarHTML()}
    <div class="screen">
      ${backRowHTML(levelLabel(q.subject), "")}
      <div class="q-card">
        <div class="q-meta">
          <div class="q-badge">${modeIcon(mode)} ${levelLabel(q.subject)}</div>
          <div class="q-counter">${counter}</div>
        </div>
        ${textBlock}
        ${audioBlock}
        <div class="options" id="options">${optsHtml}</div>
        <div class="result-banner" id="result"></div>
      </div>
    </div>`;
}

function modeIcon(mode) {
  return { normal: "❓", test: "🧪", reading: "📖", listen: "🎧" }[mode] || "❓";
}

function renderFlashcards() {
  const p = state.profile;
  if (!p.has_test_access) {
    return `${topbarHTML()}<div class="screen">${backRowHTML(t("tile_flashcards"), "")}${lockedStateHTML()}</div>`;
  }
  const fc = state.flash;
  let body;
  if (!fc) {
    body = `<div class="empty-state"><span class="ic">🎉</span>
      <div style="font-weight:800;color:var(--paper);margin-bottom:6px;">${t("flash_empty_title")}</div>
      <div style="font-size:13px;">${t("flash_empty_sub")}</div></div>`;
  } else if (!state.flashRevealed) {
    body = `
      <div class="flash-wrap">
        <div class="flash-card">
          <div class="q-badge">${levelLabel(fc.subject)}</div>
          <div class="q-text">${escapeHtml(fc.text)}</div>
          ${fc.audio_url ? `<div class="audio-btn ${state.audioPlaying ? "playing" : ""}" data-action="play_audio"><span class="ic">🔊</span><span class="lab">${state.audioPlaying ? t("playing_audio") : t("play_audio")}</span></div>` : ""}
        </div>
        <div class="flash-progress">${fc.progress.learned}/${fc.progress.total} ${t("flash_learned")}</div>
        <button class="btn btn-gold" style="margin-top:14px;" data-action="flash_reveal">${t("flash_show_answer")}</button>
      </div>`;
  } else {
    body = `
      <div class="flash-wrap">
        <div class="flash-card flash-back">
          <div class="q-badge">${levelLabel(fc.subject)}</div>
          <div class="q-text" style="font-size:16px;">${escapeHtml(fc.text)}</div>
          <div class="ans">${escapeHtml(state.flashAnswer || "")}</div>
          <div class="exp">${escapeHtml(state.flashExp || "")}</div>
        </div>
        <div class="btn-row" style="margin-top:14px;">
          <button class="btn btn-outline" data-action="flash_rate" data-know="0">${t("flash_forgot")}</button>
          <button class="btn btn-gold" data-action="flash_rate" data-know="1">${t("flash_knew")}</button>
        </div>
      </div>`;
  }

  return `
    ${topbarHTML()}
    <div class="screen">
      ${backRowHTML(t("tile_flashcards"), "")}
      ${body}
    </div>`;
}

function renderTariffs() {
  const p = state.profile;
  const tf = state.tariffs;
  if (!tf) return `${topbarHTML()}<div class="screen">${backRowHTML(t("tariffs_title"), "")}</div>`;

  const feats = { standard: t("feat_standard"), premium: t("feat_premium"), premium_test: t("feat_premium_test") };

  const pendingPlan = state.buyPlan;
  if (pendingPlan) {
    const info = state.buyInfo;
    return `
      ${topbarHTML()}
      <div class="screen">
        ${backRowHTML(t("tariffs_title"), "")}
        <div class="plan-card hi">
          <div class="plan-head"><div class="plan-name">${info.plan_name}</div><div class="plan-price">${info.price} ₸</div></div>
          <div class="kaspi-box">
            <div class="num">${info.kaspi_number}</div>
            <div class="hint">${t("kaspi_hint")}</div>
          </div>
          ${state.paidDone
            ? `<div class="result-banner ok show"><div class="h">${t("paid_confirm_title")}</div><div class="exp">${t("paid_confirm_sub")}</div></div>
               <a class="btn btn-outline" style="display:block;text-decoration:none;box-sizing:border-box;margin-top:10px;" href="https://t.me/${state.supportUsername || ""}" target="_blank">${t("support_btn")}</a>`
            : `<button class="btn btn-gold" data-action="mark_paid">${t("paid_btn")}</button>`}
        </div>
        ${!state.paidDone ? `<button class="btn btn-ghost" style="margin-top:6px;" data-action="cancel_buy">${t("back")}</button>` : ""}
      </div>`;
  }

  const cards = tf.plans.map((pl) => {
    const isCurrent = tf.current_plan === pl.key;
    return `
      <div class="plan-card ${pl.key === "premium_test" ? "hi" : ""}">
        ${isCurrent ? `<div class="current-badge">${t("current_plan_badge")}</div>` : ""}
        <div class="plan-head"><div class="plan-name">${pl.name}</div><div class="plan-price">${pl.price} ₸/мес</div></div>
        <div class="plan-feat">${feats[pl.key]}</div>
        ${isCurrent ? "" : `<button class="btn btn-gold" data-action="buy_plan" data-plan="${pl.key}">${t("buy_btn")}</button>`}
      </div>`;
  }).join("");

  return `
    ${topbarHTML()}
    <div class="screen">
      ${backRowHTML(t("tariffs_title"), t("tariffs_sub"))}
      ${cards}
    </div>`;
}

function renderStats() {
  const p = state.profile;
  const bars = p.subjects.map((s) => {
    const st = p.stats[s.key] || { correct: 0, total: 0 };
    const pct = st.total ? Math.round((st.correct / st.total) * 100) : 0;
    return `
      <div class="bar-row">
        <div class="top"><span class="lvl">${escapeHtml(s.label)}</span><span class="num">${st.correct}/${st.total} · ${pct}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>`;
  }).join("");

  return `
    ${topbarHTML()}
    <div class="screen">
      ${backRowHTML(t("stats_title"), t("stats_sub"))}
      <div class="stat-strip" style="margin-bottom:18px;">
        <div class="stat-chip"><div class="v">${p.streak_emoji} ${p.streak}</div><div class="l">${t("stat_streak")}</div></div>
        <div class="stat-chip"><div class="v">${p.best_streak}</div><div class="l">${t("stat_best")}</div></div>
        ${p.has_test_access ? `<div class="stat-chip"><div class="v">${p.flash_learned}/${p.flash_total}</div><div class="l">${t("stat_cards")}</div></div>` : ""}
      </div>
      ${bars}
    </div>`;
}

function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ══════════════════════════════════════════════
   ДЕЙСТВИЯ
   ══════════════════════════════════════════════ */

async function switchLang(lang) {
  if (state.profile.lang === lang) return;
  haptic("light");
  state.profile.lang = lang;
  render();
  try {
    await apiPost("/api/lang", { lang });
  } catch (e) {}
}

async function openLevelPicker(mode) {
  haptic("light");
  go("level_picker", { mode });
}

async function pickLevel(mode, level) {
  haptic("light");
  state.level = level;
  state.mode = mode;
  state.question = null;
  state.showListenText = false;
  state.audioPlaying = false;
  state.answered = false;
  state.limitReached = null;
  go("question", { mode, level });
  await loadQuestion(mode, level);
  render();
}

async function loadQuestion(mode, level) {
  state.limitReached = null;
  state.question = null;
  state.answered = false;
  state.showListenText = false;
  try {
    const q = await apiGet(`/api/question?mode=${encodeURIComponent(mode)}&level=${encodeURIComponent(level)}`);
    state.question = q;
  } catch (e) {
    if (e.status === 429) {
      state.limitReached = (e.detail && e.detail.reason) || "limit";
    } else if (e.status === 403) {
      state.limitReached = "locked";
    } else {
      showToast(t("err_generic"));
    }
  }
}

async function submitAnswer(letter) {
  if (state.answered || !state.question) return;
  state.answered = true;
  haptic("light");

  const q = state.question;
  let result;
  try {
    result = await apiPost("/api/answer", { subject: q.subject, idx: q.idx, mode: q.mode, chosen: letter });
  } catch (e) {
    showToast(t("err_generic"));
    state.answered = false;
    return;
  }

  haptic(result.correct ? "success" : "error");
  state.profile.streak = result.streak;

  // подсветка вариантов
  document.querySelectorAll("#options .opt").forEach((el) => {
    const l = el.dataset.letter;
    el.classList.add("disabled");
    if (l === result.correct_letter) el.classList.add("correct");
    else if (l === letter) el.classList.add("wrong");
    else el.classList.add("dim");
  });

  const banner = document.getElementById("result");
  banner.className = `result-banner show ${result.correct ? "ok" : "bad"}`;
  banner.innerHTML = `
    <div class="h">${result.correct ? "✅ " + t("correct") : "❌ " + t("incorrect") + " · " + t("right_answer") + ": " + escapeHtml(result.correct_text)}</div>
    <div class="exp">${escapeHtml(result.explanation)}</div>
    <button class="btn btn-gold next-btn" data-action="next_question">${["test", "reading", "listen"].includes(q.mode) ? t("next_question") : t("finish_session")}</button>
  `;
  banner.scrollIntoView({ behavior: "smooth", block: "nearest" });

  // обновим профильную статистику в фоне (для домашнего экрана/статистики)
  refreshProfile();
}

async function nextQuestionAction() {
  haptic("light");
  const q = state.question;
  if (!q) return;
  if (q.mode === "normal") {
    goHome();
    return;
  }
  await loadQuestion(q.mode, state.level);
  render();
}

let currentAudioObjUrl = null;
async function playCurrentAudio() {
  const url = state.flash ? state.flash.audio_url : (state.question ? state.question.audio_url : null);
  if (!url || state.audioPlaying) return;
  haptic("light");
  state.audioPlaying = true;
  render();
  try {
    if (currentAudioObjUrl) URL.revokeObjectURL(currentAudioObjUrl);
    currentAudioObjUrl = await fetchAudioUrl(url);
    const audio = new Audio(currentAudioObjUrl);
    audio.onended = () => { state.audioPlaying = false; render(); };
    audio.onerror = () => { state.audioPlaying = false; render(); };
    await audio.play();
  } catch (e) {
    state.audioPlaying = false;
    render();
    showToast(t("err_generic"));
  }
}

function revealListenText() {
  state.showListenText = true;
  render();
}

/* ── Карточки ── */
async function openFlashcards() {
  haptic("light");
  state.flash = null;
  state.flashRevealed = false;
  if (!state.profile.has_test_access) { go("flashcards"); return; }
  go("flashcards");
  await loadFlashcard();
  render();
}

async function loadFlashcard() {
  state.flashRevealed = false;
  state.flash = null;
  try {
    const fc = await apiGet(`/api/flashcard/next?level=${encodeURIComponent(state.level || "all")}`);
    state.flash = fc.empty ? null : fc;
  } catch (e) {
    showToast(t("err_generic"));
  }
}

function flashReveal() {
  haptic("light");
  const fc = state.flash;
  if (!fc) return;
  fetchFlashBack(fc);
}

async function fetchFlashBack(fc) {
  try {
    const back = await apiGet(`/api/flashcard/show?subject=${encodeURIComponent(fc.subject)}&idx=${fc.idx}`);
    state.flashAnswer = back.answer;
    state.flashExp = back.explanation;
    state.flashRevealed = true;
    render();
  } catch (e) {
    showToast(t("err_generic"));
  }
}

async function flashRate(know) {
  const fc = state.flash;
  if (!fc) return;
  haptic(know ? "success" : "light");
  try {
    await apiPost("/api/flashcard/rate", { subject: fc.subject, idx: fc.idx, know });
  } catch (e) {
    showToast(t("err_generic"));
  }
  await loadFlashcard();
  render();
  refreshProfile();
}

/* ── Тарифы ── */
async function openTariffs() {
  haptic("light");
  state.buyPlan = null;
  state.paidDone = false;
  go("tariffs");
  try {
    state.tariffs = await apiGet("/api/tariffs");
  } catch (e) {
    showToast(t("err_generic"));
  }
  render();
}

async function buyPlan(plan) {
  haptic("light");
  try {
    const info = await apiPost("/api/buy", { plan });
    state.buyPlan = plan;
    state.buyInfo = info;
    state.paidDone = false;
    render();
  } catch (e) {
    showToast(t("err_generic"));
  }
}

function cancelBuy() {
  state.buyPlan = null;
  render();
}

async function markPaid() {
  haptic("success");
  try {
    const res = await apiPost("/api/paid", { plan: state.buyPlan });
    state.paidDone = true;
    state.supportUsername = res.support_username;
    render();
  } catch (e) {
    showToast(t("err_generic"));
  }
}

/* ── Статистика ── */
async function openStats() {
  haptic("light");
  go("stats");
}

async function refreshProfile() {
  try {
    state.profile = await apiGet("/api/profile");
  } catch (e) {}
}

/* ══════════════════════════════════════════════
   ДИСПЕТЧЕР СОБЫТИЙ
   ══════════════════════════════════════════════ */

document.getElementById("app").addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;
  switch (action) {
    case "back": goBack(); break;
    case "lang": switchLang(el.dataset.lang); break;
    case "open_level": openLevelPicker(el.dataset.mode); break;
    case "pick_level": pickLevel(el.dataset.mode, el.dataset.level); break;
    case "answer": submitAnswer(el.dataset.letter); break;
    case "next_question": nextQuestionAction(); break;
    case "reveal_text": revealListenText(); break;
    case "play_audio": playCurrentAudio(); break;
    case "open_flashcards": openFlashcards(); break;
    case "flash_reveal": flashReveal(); break;
    case "flash_rate": flashRate(el.dataset.know === "1"); break;
    case "open_tariffs": openTariffs(); break;
    case "buy_plan": buyPlan(el.dataset.plan); break;
    case "cancel_buy": cancelBuy(); break;
    case "mark_paid": markPaid(); break;
    case "open_stats": openStats(); break;
  }
});

/* ══════════════════════════════════════════════
   BOOTSTRAP
   ══════════════════════════════════════════════ */

async function boot() {
  try {
    state.profile = await apiGet("/api/profile");
  } catch (e) {
    document.getElementById("loading").innerHTML =
      '<div class="txt" style="max-width:80vw;text-align:center;">Не удалось загрузить приложение.<br>Открой его из бота в Telegram.</div>';
    return;
  }
  document.getElementById("loading").style.display = "none";
  document.getElementById("app").style.display = "block";
  render();
  updateBackButton();
}

boot();
