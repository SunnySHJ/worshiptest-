const QUESTIONS = [
  {
    id: "q1",
    title: "1️⃣ 지금 내 마음 상태는?",
    desc: "",
    choices: [
      { title: "A. 지치고 위로가 필요하다", score: { HEALING: 1 } },
      { title: "B. 다시 결단하고 싶다", score: { COMMITMENT: 1 } },
      { title: "C. 기쁘고 감사하다", score: { JOY: 1 } },
      { title: "D. 조용히 하나님과 깊이 있고 싶다", score: { WORSHIP: 1 } },
    ],
  },
  {
    id: "q2",
    title: "2️⃣ 예배 시작할 때 선호 분위기",
    desc: "",
    choices: [
      { title: "A. 잔잔하게 시작", score: { WORSHIP: 1 } },
      { title: "B. 점점 고조되는 흐름", score: { HEALING: 1 } },
      { title: "C. 처음부터 에너지 있게", score: { JOY: 1 } },
      { title: "D. 선포적으로 강하게", score: { DECLARATION: 1 } },
    ],
  },
  {
    id: "q3",
    title: "3️⃣ 더 끌리는 가사는?",
    desc: "",
    choices: [
      { title: "A. “주님 날 사랑하시네”", score: { HEALING: 1 } },
      { title: "B. “내 삶 드립니다”", score: { COMMITMENT: 1 } },
      { title: "C. “기뻐하며 찬양하리”", score: { JOY: 1 } },
      { title: "D. “주는 나의 왕”", score: { DECLARATION: 1 } },
    ],
  },
  {
    id: "q4",
    title: "4️⃣ 요즘 나에게 필요한 것",
    desc: "",
    choices: [
      { title: "A. 회복", score: { HEALING: 1 } },
      { title: "B. 방향성", score: { COMMITMENT: 1 } },
      { title: "C. 기쁨", score: { JOY: 1 } },
      { title: "D. 확신", score: { DECLARATION: 1 } },
    ],
  },
  {
    id: "q5",
    title: "5️⃣ 찬양할 때 모습",
    desc: "",
    choices: [
      { title: "A. 눈 감고 묵상", score: { WORSHIP: 1 } },
      { title: "B. 조용히 따라 부름", score: { HEALING: 1 } },
      { title: "C. 손 들고 활짝", score: { JOY: 1 } },
      { title: "D. 크게 선포", score: { DECLARATION: 1 } },
    ],
  },
  {
    id: "q6",
    title: "6️⃣ 더 좋은 예배 흐름은?",
    desc: "",
    choices: [
      { title: "A. 잔잔 → 깊어짐", score: { WORSHIP: 1 } },
      { title: "B. 위로 → 회복", score: { HEALING: 1 } },
      { title: "C. 밝음 → 즐거움", score: { JOY: 1 } },
      { title: "D. 강함 → 선포", score: { DECLARATION: 1 } },
    ],
  },
  {
    id: "q7",
    title: "7️⃣ 찬양 선택 기준",
    desc: "",
    choices: [
      { title: "A. 가사 의미", score: { WORSHIP: 1 } },
      { title: "B. 마음 울림", score: { HEALING: 1 } },
      { title: "C. 멜로디 & 분위기", score: { JOY: 1 } },
      { title: "D. 메시지 전달력", score: { DECLARATION: 1 } },
    ],
  },
  {
    id: "q8",
    title: "8️⃣ 하나님과의 관계 느낌",
    desc: "",
    choices: [
      { title: "A. 위로자", score: { HEALING: 1 } },
      { title: "B. 주인/왕", score: { DECLARATION: 1 } },
      { title: "C. 친구/기쁨", score: { JOY: 1 } },
      { title: "D. 깊은 교제", score: { WORSHIP: 1 } },
    ],
  },
  {
    id: "q9",
    title: "9️⃣ 요즘 가장 하고 싶은 고백",
    desc: "",
    choices: [
      { title: "A. “힘 주세요”", score: { HEALING: 1 } },
      { title: "B. “다시 시작할게요”", score: { COMMITMENT: 1 } },
      { title: "C. “감사합니다”", score: { JOY: 1 } },
      { title: "D. “주님만 바라봅니다”", score: { WORSHIP: 1 } },
    ],
  },
  {
    id: "q10",
    title: "🔟 예배 후 느낌",
    desc: "",
    choices: [
      { title: "A. 위로받았다", score: { HEALING: 1 } },
      { title: "B. 결단했다", score: { COMMITMENT: 1 } },
      { title: "C. 즐거웠다", score: { JOY: 1 } },
      { title: "D. 깊었다", score: { WORSHIP: 1 } },
    ],
  },
];

const resultData = {
  HEALING: {
    title: "회복형 예배자",
    keyword: ["회복", "위로", "신뢰"],
    description:
      "지친 마음을 하나님께 맡기며 위로와 회복을 경험하는 예배자입니다. 조용하지만 깊은 감정선으로 하나님과 연결됩니다.",
    songs: [
      { title: "주가 일하시네", artist: "김브라이언" },
      { title: "은혜 아니면", artist: "김대환" },
      { title: "주 품에", artist: "어노인팅" },
    ],
  },
  COMMITMENT: {
    title: "결단형 예배자",
    keyword: ["결단", "헌신", "순종"],
    description:
      "삶을 다시 하나님께 드리고자 하는 마음이 강한 예배자입니다. 고백과 헌신의 찬양에 깊이 반응합니다.",
    songs: [
      { title: "나의 삶은 주의 것", artist: "어노인팅" },
      { title: "주께 가오니", artist: "마커스" },
      { title: "주님 다시 오실 때까지", artist: "다윗의 장막" },
    ],
  },
  JOY: {
    title: "기쁨형 예배자",
    keyword: ["기쁨", "감사", "찬양"],
    description:
      "밝고 에너지 있는 찬양을 통해 하나님께 나아가는 예배자입니다. 즐거움 속에서 하나님을 찬양합니다.",
    songs: [
      { title: "기뻐하며 승리의 노래", artist: "마커스" },
      { title: "행복", artist: "손경민" },
      { title: "나는 예배자입니다", artist: "어노인팅" },
    ],
  },
  WORSHIP: {
    title: "묵상형 예배자",
    keyword: ["묵상", "깊이", "임재"],
    description:
      "하나님의 임재를 깊이 느끼며 조용히 예배하는 타입입니다. 가사와 분위기에 집중하는 경향이 있습니다.",
    songs: [
      { title: "주님의 임재 앞에서", artist: "마커스" },
      { title: "예수 나의 첫사랑 되시네", artist: "어노인팅" },
      { title: "주 보좌로부터 물이 흘러", artist: "어노인팅" },
    ],
  },
  DECLARATION: {
    title: "선포형 예배자",
    keyword: ["믿음", "선포", "승리"],
    description:
      "하나님의 능력과 승리를 선포하는 찬양을 좋아하는 타입입니다. 강하고 확신 있는 예배를 선호합니다.",
    songs: [
      { title: "전능하신 나의 주 하나님은", artist: "어노인팅" },
      { title: "주는 완전합니다", artist: "마커스" },
      { title: "살아계신 주", artist: "시와 그림" },
    ],
  },
  HOPE: {
    title: "소망형 예배자",
    keyword: ["소망", "새출발", "기대"],
    description:
      "새로운 시작과 하나님의 인도하심을 기대하는 예배자입니다. 미래를 향한 소망의 찬양에 반응합니다.",
    songs: [
      { title: "다시 일어나", artist: "마커스" },
      { title: "소원", artist: "어노인팅" },
      { title: "새로운 시작", artist: "워십팀" },
    ],
  },
};

const TYPES = Object.fromEntries(
  Object.entries(resultData).map(([code, v]) => [
    code,
    {
      code,
      title: v.title,
      keyword: v.keyword,
      description: v.description,
      picks: v.songs.map((s) => ({ title: s.title, artist: s.artist })),
    },
  ]),
);

const SCORE_KEYS = ["HEALING", "COMMITMENT", "JOY", "WORSHIP", "DECLARATION", "HOPE"];

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function createEl(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined) continue;
    if (typeof v === "boolean") {
      if (!v) continue;
      el.setAttribute(k, "");
      continue;
    }
    if (k === "className") el.className = v;
    else if (k === "text") el.textContent = v;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2).toLowerCase(), v);
    else el.setAttribute(k, String(v));
  }
  for (const child of children) el.append(child);
  return el;
}

function sumScores(base, delta) {
  const next = { ...base };
  for (const k of SCORE_KEYS) next[k] = (next[k] ?? 0) + (delta?.[k] ?? 0);
  return next;
}

function sampleN(arr, n) {
  const a = Array.isArray(arr) ? arr.slice() : [];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.max(0, n));
}

function pickType(scores) {
  const entries = SCORE_KEYS.map((k) => [k, scores[k] ?? 0]);
  const max = Math.max(...entries.map(([, v]) => v));
  const tied = entries.filter(([, v]) => v === max).map(([k]) => k);
  // 동점이면 아래 우선순위로 1개 선택
  const tieBreak = ["WORSHIP", "HEALING", "JOY", "COMMITMENT", "DECLARATION", "HOPE"];
  const chosen = tieBreak.find((k) => tied.includes(k)) ?? tied[0] ?? "WORSHIP";
  return TYPES[chosen];
}

function buildShareText(resultType) {
  return `찬양 추천 결과: ${resultType.title}`;
}

function renderStart(screen, onStart) {
  const wrap = createEl("div");
  wrap.append(
    createEl("p", { className: "qDesc", text: "지금의 마음 상태에 맞춰 찬양을 추천해요. 정답은 없고, 솔직하게 고르면 더 잘 맞아요." }),
    createEl("div", { className: "actions" }, [
      createEl("button", { className: "btn btnPrimary", type: "button", onClick: onStart, text: "테스트 시작" }),
    ]),
  );
  screen.replaceChildren(wrap);
}

function renderQuestion(screen, idx, total, q, onPick, onBack) {
  const progressPct = clamp(Math.round(((idx) / total) * 100), 0, 100);
  const top = createEl("div", { className: "row" }, [
    createEl("div", { className: "progressWrap", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(progressPct) }, [
      createEl("div", { className: "progressBar", style: `width:${progressPct}%` }),
    ]),
    createEl("div", { className: "meta", text: `${idx + 1} / ${total}` }),
  ]);

  const title = createEl("h2", { className: "qTitle", text: q.title });
  const desc = createEl("p", { className: "qDesc", text: q.desc });

  const choices = createEl(
    "div",
    { className: "choices", role: "list" },
    q.choices.map((c, cIdx) =>
      (() => {
        const m = String(c.title).match(/^([A-D])\.\s*(.*)$/);
        const letter = m?.[1] ?? "";
        const text = (m?.[2] ?? String(c.title)).trim();
        const badgeClass = letter ? `choiceBadge badge${letter}` : "choiceBadge";

        return createEl(
          "button",
          {
            className: "choiceBtn",
            type: "button",
            role: "listitem",
            onClick: () => onPick(idx, cIdx),
            "aria-label": `${c.title} 선택`,
          },
          [
            createEl("span", { className: badgeClass, text: letter || "•", "aria-hidden": "true" }),
            createEl("span", { className: "choiceTitle", text }),
            ...(c.hint ? [createEl("span", { className: "choiceHint", text: c.hint })] : []),
          ],
        );
      })(),
    ),
  );

  const actions = createEl("div", { className: "actions" }, [
    createEl("button", {
      className: "btn",
      type: "button",
      onClick: onBack,
      text: "이전",
      disabled: idx === 0,
      "aria-disabled": idx === 0 ? "true" : "false",
    }),
  ]);

  screen.replaceChildren(top, title, desc, choices, actions);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function loadTheme() {
  const v = localStorage.getItem("theme");
  return v === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function renderResult(screen, resultType, scores, onRestart) {
  const total = QUESTIONS.length || 1;
  const pct = (k) => Math.round(((scores?.[k] ?? 0) / total) * 100);
  const top3 = [...SCORE_KEYS]
    .map((k) => ({ k, v: scores?.[k] ?? 0 }))
    .sort((a, b) => b.v - a.v)
    .slice(0, 3);

  const wrap = createEl("div", { className: "resultScreen" });
  wrap.append(createEl("div", { className: "topMeter" }, [createEl("div", { className: "topMeterBar", style: "width:100%" })]));

  const hero = createEl("div", { className: "hero" }, [
    createEl("div", {}, [
      createEl("h2", { className: "heroTitle", text: resultType.title }),
      createEl("p", { className: "heroDesc", text: resultType.description }),
      createEl(
        "div",
        { className: "chipRow" },
        (resultType.keyword ?? []).slice(0, 4).map((kw) => createEl("span", { className: "chip", text: String(kw) })),
      ),
    ]),
    createEl("div", { className: "avatar", "aria-hidden": "true" }),
  ]);

  const statGrid = createEl(
    "div",
    { className: "statGrid" },
    top3.map(({ k }) =>
      createEl("div", { className: "statCard" }, [
        createEl("p", { className: "statValue", text: `${pct(k)}%` }),
        createEl("p", { className: "statLabel", text: k }),
      ]),
    ),
  );

  const sheet = createEl("div", { className: "bottomSheet" }, [
    createEl("div", { className: "sheetHandle", "aria-hidden": "true" }),
    createEl("h3", { className: "sheetTitle", text: "추천 찬양" }),
    createEl("p", { className: "sheetDesc", text: "지금 상태에 어울리는 곡들이에요. 한 곡부터 천천히 시작해보세요." }),
    createEl(
      "div",
      { className: "songMiniList" },
      (resultType.picks ?? []).map((s, i) =>
        // picks items can be { title, artist, imageUrl? }
        createEl("div", { className: "songMiniRow" }, [
          (() => {
            if (s?.imageUrl) {
              return createEl("img", { className: "songMiniArt songMiniArtImg", src: String(s.imageUrl), alt: "" });
            }
            return createEl("div", {
              className: "songMiniArt",
              "aria-hidden": "true",
              style: `filter:hue-rotate(${(i * 28) % 180}deg)`,
            });
          })(),
          createEl("div", {}, [
            createEl("p", { className: "songMiniTitle", text: String(s.title) }),
            createEl("p", { className: "songMiniSub", text: String(s.artist ?? "") }),
          ]),
        ]),
      ),
    ),
  ]);

  const shareText = buildShareText(resultType);
  const status = createEl("p", { className: "qDesc", id: "status", text: "" });

  const actions = createEl("div", { className: "sheetActions" }, [
    createEl("button", { className: "btn btnPrimary", type: "button", onClick: onRestart, text: "다시하기" }),
    createEl("button", {
      className: "btn btnDark",
      type: "button",
      text: "결과 복사",
      onClick: async () => {
        const lines = [shareText, "", resultType.description, "", "추천 찬양:", ...(resultType.picks ?? []).map((x) => `- ${x.title} / ${x.artist ?? ""}`.trim())].join("\n");
        const ok = await copyToClipboard(lines);
        status.textContent = ok ? "복사했어요." : "복사에 실패했어요. 브라우저 권한을 확인해 주세요.";
      },
    }),
  ]);

  wrap.append(hero, statGrid, sheet, actions, status);
  screen.replaceChildren(wrap);
}

function createApp() {
  const screen = document.getElementById("screen");
  if (!screen) return;

  applyTheme(loadTheme());

  let answers = [];
  let scores = { HEALING: 0, COMMITMENT: 0, JOY: 0, WORSHIP: 0, DECLARATION: 0, HOPE: 0 };
  let lastResult = null;

  function recomputeScores() {
    scores = { HEALING: 0, COMMITMENT: 0, JOY: 0, WORSHIP: 0, DECLARATION: 0, HOPE: 0 };
    for (let i = 0; i < answers.length; i++) {
      const q = QUESTIONS[i];
      const choice = q?.choices?.[answers[i]];
      scores = sumScores(scores, choice?.score);
    }
  }

  function goStart() {
    answers = [];
    scores = { HEALING: 0, COMMITMENT: 0, JOY: 0, WORSHIP: 0, DECLARATION: 0, HOPE: 0 };
    lastResult = null;
    renderStart(screen, () => goQuestion(0));
  }

  function goQuestion(idx) {
    const q = QUESTIONS[idx];
    if (!q) return goResult();
    renderQuestion(
      screen,
      idx,
      QUESTIONS.length,
      q,
      (qIdx, choiceIdx) => {
        answers[qIdx] = choiceIdx;
        recomputeScores();
        if (qIdx + 1 >= QUESTIONS.length) goResult();
        else goQuestion(qIdx + 1);
      },
      () => {
        if (idx <= 0) return;
        answers = answers.slice(0, idx - 1 + 1);
        recomputeScores();
        goQuestion(idx - 1);
      },
    );
  }

  function goResult() {
    recomputeScores();
    const picked = pickType(scores);
    const shown = {
      ...picked,
      picks: sampleN(picked.picks ?? [], 3),
    };
    lastResult = { resultType: shown, scores: { ...scores } };
    renderResult(screen, shown, scores, goStart);
  }

  goStart();
}

document.addEventListener("DOMContentLoaded", createApp);
