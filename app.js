// ============================================================
// CONFIG
// ============================================================
// Paste your deployed Google Apps Script Web App URL here to
// enable automatic recording of results to a Google Sheet.
// Leave as "" to run the test without recording (results still
// show on-screen and can be reviewed by the student).
// See README.md for setup instructions.
const GOOGLE_SCRIPT_URL = ""; // e.g. "https://script.google.com/macros/s/XXXXX/exec"

// Paste the URL of your Listening section test here. Shown as a
// "Continue to Listening Section" button on the final screen.
// Leave as "" to hide the button.
const LISTENING_SECTION_URL = "";

// ============================================================
// STATE
// ============================================================
const state = {
  studentName: "",
  studentEmail: "",
  moduleIndex: 0,     // which module (0-based) we're on
  stepIndex: 0,        // which step within the flattened step list
  steps: [],           // flattened steps for current module
  responses: [],        // responses[moduleIndex] = { blanks:{}, mc:{} }
  timeLeft: 0,
  timerHandle: null,
  phase: "start"        // start | moduleIntro | testing | results
};

const root = document.getElementById("app");

// ============================================================
// HELPERS
// ============================================================
function flattenSteps(mod) {
  const steps = [];
  mod.screens.forEach(screen => {
    if (screen.type === "fillblank") {
      steps.push({ kind: "fillblank", screen });
    } else {
      screen.questions.forEach(q => {
        steps.push({ kind: "question", screen, question: q });
      });
    }
  });
  return steps;
}

function fmtTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (v === null || v === undefined || v === false) return; // skip: don't set falsy attrs at all
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (k === "checked") { node.setAttribute("checked", "checked"); node.checked = true; }
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach(c => {
    if (c === null || c === undefined) return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}

function createBlankGroup(part, modResp) {
  if (!Array.isArray(modResp.blanks[part.blankId])) {
    modResp.blanks[part.blankId] = new Array(part.len).fill("");
  }
  const chars = modResp.blanks[part.blankId];
  const inputs = [];
  const wrap = el("span", { class: "blankGroup" });

  for (let i = 0; i < part.len; i++) {
    const input = el("input", {
      class: "blankCell",
      maxlength: "1",
      placeholder: "_",
      value: chars[i] || ""
    });
    input.addEventListener("input", (e) => {
      const v = e.target.value.replace(/[^a-zA-Z]/g, "").slice(-1);
      e.target.value = v;
      chars[i] = v;
      if (v && i < part.len - 1) inputs[i + 1].focus();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && i > 0) {
        inputs[i - 1].focus();
      }
    });
    inputs.push(input);
    wrap.appendChild(input);
  }
  return wrap;
}

// ============================================================
// TIMER
// ============================================================
function startTimer(seconds, onTick, onExpire) {
  clearInterval(state.timerHandle);
  state.timeLeft = seconds;
  onTick(state.timeLeft);
  state.timerHandle = setInterval(() => {
    state.timeLeft -= 1;
    onTick(state.timeLeft);
    if (state.timeLeft <= 0) {
      clearInterval(state.timerHandle);
      onExpire();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerHandle);
}

// ============================================================
// RENDER: TOP BAR
// ============================================================
function renderExamBar(moduleLabel) {
  const bar = el("div", { class: "examBar" }, [
    el("div", { class: "brand" }, READING_TEST.title),
    el("div", { class: "moduleLabel" }, moduleLabel || ""),
    el("div", { class: "timer", id: "timerDisplay" }, "--:--")
  ]);
  return bar;
}

// ============================================================
// RENDER: START SCREEN
// ============================================================
function renderStart() {
  root.innerHTML = "";
  root.appendChild(renderExamBar("Welcome"));

  const nameInput = el("input", { type: "text", id: "nameInput", placeholder: "e.g. Alex Kim" });
  const emailInput = el("input", { type: "email", id: "emailInput", placeholder: "e.g. alex@example.com" });

  const card = el("div", { class: "centerCard" }, [
    el("h1", {}, "Reading Section"),
    el("p", {}, "This mock test has two timed modules. Within a module you can move forward and back between questions using Next and Back. Once you begin Module 2, you will not be able to return to Module 1."),
    el("table", { class: "taskTable" }, [
      el("tr", {}, [el("th", {}, "Type of Task"), el("th", {}, "Description")]),
      el("tr", {}, [el("td", {}, "Complete the Words"), el("td", {}, "Fill in the missing letters in a paragraph.")]),
      el("tr", {}, [el("td", {}, "Read in Daily Life"), el("td", {}, "Answer questions about everyday texts.")]),
      el("tr", {}, [el("td", {}, "Read an Academic Passage"), el("td", {}, "Answer questions about an academic passage.")])
    ]),
    el("div", { class: "field" }, [el("label", {}, "Your name"), nameInput]),
    el("div", { class: "field" }, [el("label", {}, "Email (optional)"), emailInput]),
    el("button", {
      class: "navBtn",
      onclick: () => {
        const name = nameInput.value.trim();
        if (!name) { nameInput.focus(); nameInput.style.borderColor = "var(--error)"; return; }
        state.studentName = name;
        state.studentEmail = emailInput.value.trim();
        state.responses = READING_TEST.modules.map(() => ({ blanks: {}, mc: {} }));
        goToModuleIntro(0);
      }
    }, "Begin Test")
  ]);

  root.appendChild(card);
}

// ============================================================
// RENDER: MODULE INTRO
// ============================================================
function goToModuleIntro(moduleIndex) {
  state.moduleIndex = moduleIndex;
  state.phase = "moduleIntro";
  renderModuleIntro();
}

function renderModuleIntro() {
  const mod = READING_TEST.modules[state.moduleIndex];
  root.innerHTML = "";
  root.appendChild(renderExamBar(mod.label));

  const isFirst = state.moduleIndex === 0;
  const card = el("div", { class: "centerCard" }, [
    el("h1", {}, mod.label),
    el("p", {}, `The clock will show you how much time you have to complete ${mod.label} (${Math.round(mod.timeLimitSeconds / 60)} minutes). You can use Next and Back to move between questions within this module.`),
    el("p", {}, isFirst
      ? "Once you begin Module 2, you will not be able to return to Module 1."
      : "You will not be able to return to Module 1 once you begin."),
    el("button", {
      class: "navBtn",
      onclick: () => startModule(state.moduleIndex)
    }, "Start Module")
  ]);
  root.appendChild(card);
}

// ============================================================
// START / RUN A MODULE
// ============================================================
function startModule(moduleIndex) {
  const mod = READING_TEST.modules[moduleIndex];
  state.moduleIndex = moduleIndex;
  state.steps = flattenSteps(mod);
  state.stepIndex = 0;
  state.phase = "testing";

  renderStep();

  startTimer(mod.timeLimitSeconds, (t) => {
    const disp = document.getElementById("timerDisplay");
    if (disp) {
      disp.textContent = fmtTime(t);
      disp.classList.toggle("low", t <= 60);
    }
  }, () => {
    finishModule(moduleIndex, true);
  });
}

function finishModule(moduleIndex, timedOut) {
  stopTimer();
  const nextIndex = moduleIndex + 1;
  if (nextIndex < READING_TEST.modules.length) {
    goToModuleIntro(nextIndex);
  } else {
    state.phase = "done";
    renderThankYou();
  }
}

// ============================================================
// RENDER: A TEST STEP (fillblank or question)
// ============================================================
function renderStep() {
  const mod = READING_TEST.modules[state.moduleIndex];
  const step = state.steps[state.stepIndex];
  const modResp = state.responses[state.moduleIndex];

  root.innerHTML = "";
  root.appendChild(renderExamBar(mod.label));

  const stage = el("div", { class: "stage" });

  if (step.kind === "fillblank") {
    stage.appendChild(el("div", { class: "screenMeta" }, step.screen.range));
    stage.appendChild(el("div", { class: "screenInstructions" }, step.screen.instructions));

    const box = el("div", { class: "fillblankBox" });
    step.screen.parts.forEach(part => {
      if (part.text !== undefined) {
        box.appendChild(document.createTextNode(part.text));
      } else {
        box.appendChild(createBlankGroup(part, modResp));
      }
    });
    stage.appendChild(box);
  } else {
    const screen = step.screen;
    const q = step.question;

    stage.appendChild(el("div", { class: "screenMeta" }, screen.heading));

    const split = el("div", { class: "split" });

    // --- left: passage / short text ---
    const passagePanel = el("div", { class: "passagePanel" });
    if (screen.type === "passage") {
      passagePanel.appendChild(el("div", { class: "passageTitle" }, screen.title));
      screen.paragraphs.forEach(p => passagePanel.appendChild(el("p", {}, p)));
    } else if (screen.textKind === "email") {
      passagePanel.appendChild(el("div", { class: "passageTitle" }, screen.title));
      const meta = screen.meta;
      passagePanel.appendChild(el("div", { class: "emailMeta" }, [
        el("div", {}, `To: ${meta.to}`),
        el("div", {}, `From: ${meta.from}`),
        el("div", {}, `Date: ${meta.date}`),
        el("div", {}, `Subject: ${meta.subject}`)
      ]));
      screen.body.forEach(p => passagePanel.appendChild(el("p", {}, p)));
    } else if (screen.textKind === "social") {
      passagePanel.appendChild(el("div", { class: "passageTitle" }, screen.title));
      const card = el("div", { class: "socialCard" });
      card.appendChild(el("div", { class: "handle" }, screen.title));
      screen.body.forEach(p => card.appendChild(el("p", { style: "margin:0 0 0.7rem" }, p)));
      passagePanel.appendChild(card);
    } else {
      // notice
      passagePanel.appendChild(el("div", { class: "passageTitle" }, screen.title));
      screen.body.forEach(p => passagePanel.appendChild(el("p", {}, p)));
    }

    // --- right: question ---
    const qPanel = el("div", { class: "questionPanel" });
    qPanel.appendChild(el("div", { class: "qNumber" }, `Question ${q.id}`));
    qPanel.appendChild(el("div", { class: "qPrompt" }, q.prompt));

    const optWrap = el("div", { class: "options" });
    q.options.forEach((optText, idx) => {
      const inputId = `q${q.id}_opt${idx}`;
      const selected = modResp.mc[q.id] === idx;
      const optDiv = el("label", {
        class: "option" + (selected ? " selected" : ""),
        for: inputId,
        onclick: () => { modResp.mc[q.id] = idx; renderStep(); }
      }, [
        el("input", { type: "radio", name: `q${q.id}`, id: inputId, checked: selected ? "checked" : null }),
        el("span", {}, optText)
      ]);
      optWrap.appendChild(optDiv);
    });
    qPanel.appendChild(optWrap);

    split.appendChild(passagePanel);
    split.appendChild(qPanel);
    stage.appendChild(split);
  }

  root.appendChild(stage);
  root.appendChild(renderNavBar());
}

// ============================================================
// NAV BAR
// ============================================================
function renderNavBar() {
  const total = state.steps.length;
  const isFirst = state.stepIndex === 0;
  const isLast = state.stepIndex === total - 1;

  const backBtn = el("button", {
    class: "navBtn secondary",
    disabled: isFirst ? "disabled" : null,
    onclick: () => { state.stepIndex -= 1; renderStep(); }
  }, "Back");

  const nextBtn = el("button", {
    class: "navBtn",
    onclick: () => {
      if (isLast) {
        finishModule(state.moduleIndex, false);
      } else {
        state.stepIndex += 1;
        renderStep();
      }
    }
  }, isLast ? "Submit Module" : "Next");

  return el("div", { class: "navBar" }, [
    backBtn,
    el("div", { class: "progress" }, `Step ${state.stepIndex + 1} of ${total}`),
    nextBtn
  ]);
}

// ============================================================
// SCORING
// ============================================================
function scoreModule(moduleIndex) {
  const mod = READING_TEST.modules[moduleIndex];
  const resp = state.responses[moduleIndex];
  let correct = 0, total = 0;
  const detail = [];

  mod.screens.forEach(screen => {
    if (screen.type === "fillblank") {
      screen.parts.forEach(part => {
        if (part.blankId !== undefined) {
          total += 1;
          const chars = Array.isArray(resp.blanks[part.blankId]) ? resp.blanks[part.blankId] : [];
          const given = chars.join("");
          const correctAns = part.answer.trim();
          const isCorrect = given.toLowerCase() === correctAns.toLowerCase() && given.length === correctAns.length;
          if (isCorrect) correct += 1;
          detail.push({ id: part.blankId, type: "blank", given, correctAns: part.answer, isCorrect });
        }
      });
    } else {
      screen.questions.forEach(q => {
        total += 1;
        const given = resp.mc[q.id];
        const isCorrect = given === q.answer;
        if (isCorrect) correct += 1;
        detail.push({
          id: q.id, type: "mc",
          given: given !== undefined ? q.options[given] : "(no answer)",
          correctAns: q.options[q.answer],
          isCorrect
        });
      });
    }
  });

  return { correct, total, detail };
}

// ============================================================
// THANK-YOU SCREEN (no score shown to the test taker)
// ============================================================
function renderThankYou() {
  root.innerHTML = "";
  root.appendChild(renderExamBar("Reading Section Complete"));

  // Scores are still computed and sent to the instructor's sheet —
  // just not displayed to the test taker.
  const moduleScores = READING_TEST.modules.map((mod, i) => ({ label: mod.label, ...scoreModule(i) }));
  const totalCorrect = moduleScores.reduce((s, m) => s + m.correct, 0);
  const totalQuestions = moduleScores.reduce((s, m) => s + m.total, 0);
  const pct = Math.round((totalCorrect / totalQuestions) * 100);

  const card = el("div", { class: "centerCard" }, [
    el("h1", {}, "Thank You"),
    el("p", {}, `You have completed the Reading section of the mock test, ${state.studentName}.`),
    el("div", { class: "statusMsg pending", id: "submitStatus" },
      GOOGLE_SCRIPT_URL ? "Recording your results…" : "Result recording is not configured for this deployment."),
    LISTENING_SECTION_URL
      ? el("a", { href: LISTENING_SECTION_URL, class: "navBtn", style: "display:inline-block;text-decoration:none;margin-top:1.4rem;" }, "Continue to Listening Section")
      : el("p", { style: "margin-top:1.4rem;color:var(--ink-soft);font-size:0.85rem;" }, "The link to the Listening section hasn't been set up yet — check with your instructor.")
  ]);

  root.appendChild(card);

  submitResults(moduleScores, totalCorrect, totalQuestions, pct);
}

// ============================================================
// SUBMIT TO GOOGLE SHEETS
// ============================================================
function submitResults(moduleScores, totalCorrect, totalQuestions, pct) {
  const statusEl = () => document.getElementById("submitStatus");

  if (!GOOGLE_SCRIPT_URL) return;

  const payload = {
    timestamp: new Date().toISOString(),
    name: state.studentName,
    email: state.studentEmail,
    totalCorrect,
    totalQuestions,
    percent: pct,
    moduleBreakdown: moduleScores.map(m => `${m.label}: ${m.correct}/${m.total}`).join(" | "),
    detail: JSON.stringify(moduleScores.map(m => ({ label: m.label, detail: m.detail })))
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors", // Apps Script web apps don't return readable CORS responses
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  })
    .then(() => {
      const s = statusEl();
      if (s) { s.textContent = "Your results were sent to your instructor."; s.className = "statusMsg ok"; }
    })
    .catch((err) => {
      const s = statusEl();
      if (s) { s.textContent = "Couldn't send results automatically. Please show this screen to your instructor."; s.className = "statusMsg error"; }
      console.error(err);
    });
}

// ============================================================
// INIT
// ============================================================
renderStart();
