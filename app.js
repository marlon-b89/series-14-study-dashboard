/* Series 14 Study Companion — app.js */
(function () {
  'use strict';

  const DASHBOARD_URL = "./rules/";
  const STORE_KEY = "s14companion:v1";

  // ==================== Storage ====================
  function storage() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : { decks: {}, weeks: {} };
    } catch { return { decks: {}, weeks: {} }; }
  }
  function saveStorage(s) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch {}
  }
  const state = { store: storage(), currentDeck: null, currentIdx: 0, flipped: false, ratings: {} };

  // ==================== Routing ====================
  const TABS = ["overview", "program", "flashcards", "deep-dives", "examples", "visualizations"];

  function parseHash() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return { tab: "overview", param: null };
    const [tab, ...rest] = hash.split("/");
    return { tab: TABS.includes(tab) ? tab : "overview", param: rest.join("/") || null };
  }

  function setActiveTab(tab) {
    document.querySelectorAll(".tab").forEach(el => {
      el.classList.toggle("active", el.dataset.tab === tab);
    });
    document.getElementById("tabs")?.classList.remove("open");
  }

  function route() {
    const { tab, param } = parseHash();
    setActiveTab(tab);
    const page = document.getElementById("page");
    page.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "instant" });
    switch (tab) {
      case "overview":       renderOverview(page); break;
      case "program":        renderProgram(page, param); break;
      case "flashcards":     renderFlashcards(page, param); break;
      case "deep-dives":     renderDeepDives(page, param); break;
      case "examples":       renderExamples(page, param); break;
      case "visualizations": renderVisualizations(page); break;
      default:               renderOverview(page);
    }
  }
  window.addEventListener("hashchange", route);

  // ==================== Helpers ====================
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "className") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        else node.setAttribute(k, attrs[k]);
      }
    }
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(x => x && node.appendChild(x.nodeType ? x : document.createTextNode(String(x))));
      else node.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  function paneHeader(eyebrow, title, subtitle) {
    return el("div", { className: "pane-header" },
      el("div", { className: "pane-eyebrow" }, eyebrow),
      el("h1", { className: "pane-title" }, title),
      subtitle && el("p", { className: "pane-subtitle" }, subtitle)
    );
  }

  // ==================== Overview ====================
  function renderOverview(page) {
    const blueprint = window.EXAM_BLUEPRINT || [];
    const maxItems = Math.max(...blueprint.map(b => b.items));

    // Hero
    const hero = el("section", { className: "hero" },
      el("h1", { html: 'Study the Series 14 the way you\'ll be <span class="accent">tested</span>.' }),
      el("p", { className: "hero-lede" }, "A companion to the rules dashboard: flashcards weighted to FINRA job functions, deep-dive write-ups of the concepts the exam loves, real-world case studies, visualizations, and a six-week plan calibrated to the blueprint."),
      el("div", { className: "hero-stats" },
        ...(window.HERO_STATS || []).map(s =>
          el("div", null,
            el("span", { className: "hero-stat-num" }, s.num),
            el("span", { className: "hero-stat-label" }, s.label)
          )
        )
      )
    );

    // Feature tiles
    const features = [
      { icon: "📅", tab: "program", cls: "bg-navy", title: "6-Week Plan", desc: "Daily topics, task chips, and weekly reviews sized to the FINRA weightings." },
      { icon: "🃏", tab: "flashcards", cls: "bg-rust", title: "Flashcards", desc: "One deck per job function. Flip, rate, track. Progress saves per deck." },
      { icon: "📖", tab: "deep-dives", cls: "bg-gold", title: "Deep Dives", desc: "Long-form write-ups on the ten highest-leverage concepts." },
      { icon: "🗂", tab: "examples", cls: "bg-sage", title: "Real-World", desc: "Enforcement case studies and market events tied to specific rules." },
      { icon: "📊", tab: "visualizations", cls: "bg-blue", title: "Visualizations", desc: "Weightings, haircut charts, timelines, decision flows — the numbers you must memorize." },
      { icon: "📚", href: "./rules/", cls: "bg-gold-alt", title: "Rules Reference", desc: "The full 289-rule chapter-by-chapter dashboard — every FINRA/SEC rule with citations." }
    ];
    const featGrid = el("div", { className: "feature-grid" },
      ...features.map(f => el("a", { className: "feature", href: f.href || `#${f.tab}` },
        el("div", { className: `feature-icon ${f.cls}` }, f.icon),
        el("div", { className: "feature-title" }, f.title),
        el("div", { className: "feature-desc" }, f.desc)
      ))
    );

    // Blueprint weight bars
    const weightRows = blueprint.map(b => {
      const pct = (b.items / maxItems) * 100;
      const emphasis = b.items >= 15 ? " emphasis" : "";
      return el("li", { className: "weight-row" },
        el("span", { className: "weight-code" }, b.code),
        el("div", null,
          el("div", { className: "weight-name" }, b.title),
          el("div", { style: "font-size:12px;color:var(--ink-3);margin-top:2px" }, b.focus)
        ),
        el("div", { className: "weight-bar-wrap" },
          el("div", { className: `weight-bar${emphasis}`, style: `width:${pct}%` })
        ),
        el("span", { className: "weight-count" }, `${b.items}`)
      );
    });

    const blueprintCard = el("section", { className: "blueprint-card" },
      el("h2", null, "FINRA blueprint weights"),
      el("p", { className: "blueprint-note" }, "The number of scored items per job function on the actual exam. F2 (Markets) and F5 (Supervision) are tied for heaviest — together they are more than a third of the test."),
      el("ul", { className: "weight-list" }, ...weightRows)
    );

    // Dashboard cross-link
    const bridge = el("section", { className: "blueprint-card", style: "background:var(--navy);color:var(--cream);border:0" },
      el("h2", { style: "color:var(--gold-3)" }, "Pair with the reference dashboard"),
      el("p", { style: "color:rgba(255,255,255,0.75);font-size:14.5px;margin-top:8px" }, "This tool is the active-learning half of a two-tool set. When you need to look up the exact language of a rule, its parameters, or its exceptions, use the chapter-by-chapter reference dashboard."),
      el("a", { className: "flash-btn", href: DASHBOARD_URL, target: "_blank", rel: "noopener", style: "margin-top:16px;background:var(--gold);color:var(--navy);border-color:var(--gold)" }, "Open the rules dashboard →")
    );

    page.append(hero, featGrid, blueprintCard, bridge);
  }

  // ==================== 6-Week Program ====================
  function renderProgram(page, openWeek) {
    page.appendChild(paneHeader(
      "F6 · Study Plan",
      "A six-week plan calibrated to the exam blueprint",
      "Two of the six weeks front-load F2 Markets and F5 Supervision because they carry 40 of the 110 items. Week 6 is dedicated review. Click a week to see day-by-day tasks."
    ));

    const weeks = window.PROGRAM || [];
    const container = el("div", null);

    weeks.forEach(w => {
      const isOpen = String(w.num) === openWeek;
      const week = el("div", { className: "week" + (isOpen ? " open" : ""), id: `week-${w.num}` },
        el("button", {
          className: "week-header",
          onClick: () => {
            document.querySelectorAll(".week").forEach(x => x.classList.remove("open"));
            week.classList.add("open");
            history.replaceState(null, "", `#program/${w.num}`);
            week.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        },
          el("div", { className: "week-badge" }, w.num),
          el("div", { className: "week-title-group" },
            el("div", { className: "week-num" }, `Week ${w.num}`),
            el("div", { className: "week-title" }, w.title),
            el("div", { className: "week-focus" }, w.focus)
          ),
          el("div", { className: "week-meta" },
            el("span", { className: "week-tag" }, w.tag),
            el("span", { className: "week-tag", style: "background:var(--paper-2);color:var(--navy)" }, `~${w.hours} hrs`)
          ),
          el("svg", { className: "week-chevron", viewBox: "0 0 20 20", width: "20", height: "20", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round" },
            (() => { const p = document.createElementNS("http://www.w3.org/2000/svg", "polyline"); p.setAttribute("points", "6 8 10 12 14 8"); return p; })()
          )
        ),
        el("div", { className: "week-body" },
          el("div", { className: "day-grid" },
            ...w.days.map(d => el("div", { className: "day" },
              el("div", { className: "day-label" }, d.day),
              el("div", { className: "day-content" },
                el("div", { className: "day-topic" }, d.topic),
                el("div", { className: "day-desc" }, d.desc),
                d.tasks && el("div", { className: "day-tasks" },
                  ...d.tasks.map(t => el("a", {
                    className: `day-task type-${t.type}`,
                    href: t.href || "#",
                    target: t.href && t.href.startsWith("http") ? "_blank" : null,
                    rel: t.href && t.href.startsWith("http") ? "noopener" : null
                  }, t.label))
                )
              )
            ))
          ),
          w.summary && el("div", { className: "week-summary", html: w.summary })
        )
      );
      container.appendChild(week);
    });

    page.appendChild(container);
  }

  // ==================== Flashcards ====================
  function renderFlashcards(page, deckId) {
    page.appendChild(paneHeader(
      "Active Recall",
      "Flashcards — one deck per job function",
      "Pick a deck sized to the exam weighting. Space bar flips a card, arrows navigate, and rating tracks what you're actually retaining. Progress saves per deck in your browser."
    ));

    const decks = window.FLASHCARD_DECKS || [];
    const store = state.store.decks;

    // Deck picker
    const picker = el("div", { className: "deck-picker" },
      ...decks.map(d => {
        const rated = store[d.id]?.ratings ? Object.keys(store[d.id].ratings).length : 0;
        const active = d.id === deckId ? " active" : "";
        return el("a", {
          className: `deck-tile${active}`,
          href: `#flashcards/${d.id}`
        },
          el("div", { className: "deck-tile-code" }, d.jobFunction),
          el("div", { className: "deck-tile-title" }, d.title),
          el("div", { className: "deck-tile-meta" },
            el("span", null, `${d.cards.length} cards`),
            rated > 0 && el("span", { className: "deck-tile-progress" }, `${rated} rated`)
          )
        );
      })
    );
    page.appendChild(picker);

    if (!deckId) {
      page.appendChild(el("div", { className: "flash-empty" },
        el("h3", null, "Pick a deck to start"),
        el("p", null, "Decks are ordered roughly heaviest → lightest on the exam.")
      ));
      return;
    }

    const deck = decks.find(d => d.id === deckId);
    if (!deck) { page.appendChild(el("div", { className: "flash-empty" }, el("h3", null, "Deck not found"))); return; }

    if (!store[deck.id]) store[deck.id] = { ratings: {}, index: 0 };
    state.currentDeck = deck;
    state.currentIdx = store[deck.id].index || 0;
    state.flipped = false;

    const stage = el("div", { className: "flash-stage" });
    page.appendChild(stage);
    renderFlashStage(stage);
  }

  function renderFlashStage(stage) {
    stage.innerHTML = "";
    const deck = state.currentDeck;
    if (!deck) return;
    const card = deck.cards[state.currentIdx];
    const store = state.store.decks[deck.id];
    const ratings = store.ratings;

    const tally = { know: 0, almost: 0, again: 0 };
    Object.values(ratings).forEach(r => { if (tally[r] !== undefined) tally[r]++; });

    // Toolbar
    stage.appendChild(el("div", { className: "flash-toolbar" },
      el("div", { className: "flash-deck-name" }, deck.title),
      el("div", { className: "flash-position" }, `${state.currentIdx + 1} / ${deck.cards.length}`)
    ));

    // Progress
    stage.appendChild(el("div", { className: "flash-progress-track" },
      el("div", { className: "flash-progress-fill", style: `width:${((state.currentIdx + 1) / deck.cards.length) * 100}%` })
    ));

    // Card
    const flashcard = el("div", { className: "flashcard" + (state.flipped ? " flipped" : "") });
    const inner = el("div", { className: "flashcard-inner",
      onClick: () => { state.flipped = !state.flipped; flashcard.classList.toggle("flipped"); }
    });
    inner.appendChild(el("div", { className: "flashcard-face flashcard-front" },
      el("div", { className: "flashcard-tag" }, card.tag || deck.jobFunction),
      el("div", { className: "flashcard-q" }, card.q),
      el("div", { className: "flashcard-flip-hint" }, "Click card or press SPACE to flip")
    ));
    inner.appendChild(el("div", { className: "flashcard-face flashcard-back" },
      el("div", { className: "flashcard-tag" }, "Answer"),
      el("div", { className: "flashcard-a", html: card.a }),
      el("div", { className: "flashcard-flip-hint" }, "Rate your recall below")
    ));
    flashcard.appendChild(inner);
    stage.appendChild(flashcard);

    // Controls
    const controls = el("div", { className: "flash-controls" },
      el("button", { className: "flash-btn nav", onClick: () => go(-1) }, "← Prev"),
      el("button", { className: "flash-btn rate-again", onClick: () => rate("again") }, "Again"),
      el("button", { className: "flash-btn rate-almost", onClick: () => rate("almost") }, "Almost"),
      el("button", { className: "flash-btn rate-know", onClick: () => rate("know") }, "I know it"),
      el("button", { className: "flash-btn nav", onClick: () => go(1) }, "Next →")
    );
    stage.appendChild(controls);

    // Tally
    stage.appendChild(el("div", { className: "flash-tally" },
      el("div", null, "Know: ", el("span", { className: "t-know" }, tally.know)),
      el("div", null, "Almost: ", el("span", { className: "t-almost" }, tally.almost)),
      el("div", null, "Again: ", el("span", { className: "t-again" }, tally.again)),
      el("div", null, "Rated: ", el("span", null, `${Object.keys(ratings).length} / ${deck.cards.length}`))
    ));

    // Shortcuts
    stage.appendChild(el("div", { className: "flash-shortcuts", html:
      "Shortcuts &nbsp;·&nbsp; <kbd>Space</kbd> flip &nbsp;·&nbsp; <kbd>←</kbd> <kbd>→</kbd> navigate &nbsp;·&nbsp; <kbd>1</kbd> again &nbsp;·&nbsp; <kbd>2</kbd> almost &nbsp;·&nbsp; <kbd>3</kbd> know &nbsp;·&nbsp; <kbd>R</kbd> reset deck"
    }));

    // Reset link
    stage.appendChild(el("div", { style: "text-align:center;margin-top:16px" },
      el("button", {
        className: "flash-btn nav",
        style: "font-size:12px;padding:6px 12px",
        onClick: () => {
          if (confirm("Reset progress for this deck?")) {
            store.ratings = {}; store.index = 0;
            state.currentIdx = 0; state.flipped = false;
            saveStorage(state.store);
            renderFlashStage(stage);
          }
        }
      }, "Reset deck progress")
    ));

    function go(delta) {
      state.currentIdx = Math.max(0, Math.min(deck.cards.length - 1, state.currentIdx + delta));
      state.flipped = false;
      store.index = state.currentIdx;
      saveStorage(state.store);
      renderFlashStage(stage);
    }
    function rate(kind) {
      ratings[state.currentIdx] = kind;
      saveStorage(state.store);
      // Auto-advance
      if (state.currentIdx < deck.cards.length - 1) {
        state.currentIdx++;
        state.flipped = false;
        store.index = state.currentIdx;
        saveStorage(state.store);
      }
      renderFlashStage(stage);
    }

    // Keyboard shortcuts (bind once per render)
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === " ") { e.preventDefault(); state.flipped = !state.flipped; flashcard.classList.toggle("flipped"); }
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "1") rate("again");
      else if (e.key === "2") rate("almost");
      else if (e.key === "3") rate("know");
      else if (e.key === "r" || e.key === "R") {
        if (confirm("Reset progress for this deck?")) {
          store.ratings = {}; store.index = 0;
          state.currentIdx = 0; state.flipped = false;
          saveStorage(state.store);
          renderFlashStage(stage);
        }
      }
    };
    // Remove any previous listener on this stage, add fresh
    if (stage._handler) document.removeEventListener("keydown", stage._handler);
    stage._handler = handler;
    document.addEventListener("keydown", handler);
  }

  // ==================== Deep Dives ====================
  function renderDeepDives(page, diveId) {
    const dives = window.DEEP_DIVES || [];

    if (diveId) {
      const dive = dives.find(d => d.id === diveId);
      if (!dive) { page.appendChild(paneHeader("Deep Dives", "Not found")); return; }
      renderDeepDiveArticle(page, dive);
      return;
    }

    page.appendChild(paneHeader(
      "Concept Analysis",
      "Deep dives on the highest-leverage concepts",
      "Ten write-ups on the concepts the exam tests most heavily. Each one covers the mental model, the parameters you must know cold, common traps, and the rule cards to review after."
    ));

    page.appendChild(el("div", { className: "dive-picker" },
      ...dives.map(d => el("a", { className: "dive-tile", href: `#deep-dives/${d.id}` },
        el("div", { className: "dive-tile-code" }, `${d.jobFunction} · ${d.readMin} min read`),
        el("div", { className: "dive-tile-title" }, d.title),
        el("div", { className: "dive-tile-summary" }, d.summary)
      ))
    ));
  }

  function renderDeepDiveArticle(page, dive) {
    const article = el("article", { className: "dive-article" },
      el("a", { className: "dive-back", href: "#deep-dives" },
        el("span", null, "←"), " All deep dives"
      ),
      el("div", { className: "dive-article-eyebrow" }, `${dive.jobFunction} · ${dive.readMin} min read`),
      el("h1", null, dive.title),
      el("div", { className: "dive-article-tldr", html: dive.tldr }),
      el("div", { className: "dive-body", html: dive.body })
    );
    page.appendChild(article);
  }

  // ==================== Examples ====================
  function renderExamples(page) {
    page.appendChild(paneHeader(
      "Illustrations",
      "Real-world case studies keyed to specific rules",
      "Enforcement actions, market events, and everyday broker-dealer scenarios that make abstract rules concrete. Each card ties back to a rule you'll be tested on."
    ));
    const examples = window.EXAMPLES || [];
    page.appendChild(el("div", { className: "example-grid" },
      ...examples.map(e => el("div", { className: "example" },
        el("span", { className: "example-tag" }, e.category),
        el("h3", null, e.title),
        el("div", { className: "example-scenario", html: e.scenario }),
        el("div", { className: "example-section" },
          el("div", { className: "example-section-label" }, "What went wrong / what happened"),
          el("div", { className: "example-section-body", html: e.whatHappened })
        ),
        el("div", { className: "example-section" },
          el("div", { className: "example-section-label" }, "Why it matters for the exam"),
          el("div", { className: "example-section-body", html: e.lesson })
        ),
        el("div", { className: "example-section" },
          el("div", { className: "example-section-label" }, "Rules invoked"),
          el("div", { className: "example-section-body" },
            ...e.rules.map(r => el("span", { className: "example-rule-tag" }, r))
          )
        )
      ))
    ));
  }

  // ==================== Visualizations ====================
  function renderVisualizations(page) {
    page.appendChild(paneHeader(
      "Numbers to Know",
      "Visualizations of the parameters the exam loves",
      "Weightings, haircut percentages, timelines, and decision flows — the numeric muscle memory this exam demands, rendered so it sticks."
    ));

    const grid = el("div", { className: "viz-grid" });
    page.appendChild(grid);

    // Viz 1: Exam weight doughnut
    const vizBlueprint = el("div", { className: "viz" },
      el("div", { className: "viz-header" },
        el("div", { className: "viz-title" }, "Exam weighting — where the points are"),
        el("div", { className: "viz-caption" }, "F2 Markets and F5 Supervision are tied at 20 items each. F1 is only 3 items — don't over-study it.")
      ),
      el("div", { className: "viz-body" }, el("canvas", { id: "viz-blueprint", width: "400", height: "260" }))
    );
    grid.appendChild(vizBlueprint);

    // Viz 2: Net Capital haircuts
    const vizHaircut = el("div", { className: "viz" },
      el("div", { className: "viz-header" },
        el("div", { className: "viz-title" }, "Rule 15c3-1 Net Capital haircut ladder"),
        el("div", { className: "viz-caption" }, "Standard equity/debt haircuts BDs apply when computing net capital. Higher risk → bigger haircut.")
      ),
      el("div", { className: "viz-body", style: "align-items:stretch;flex-direction:column" },
        el("ul", { className: "haircut-list" },
          el("li", { className: "haircut-row h-good" }, el("span", { className: "h-cat" }, "U.S. Treasuries (< 3 months)"), el("span", { className: "h-pct" }, "0%")),
          el("li", { className: "haircut-row h-good" }, el("span", { className: "h-cat" }, "U.S. Treasuries (3–12 months)"), el("span", { className: "h-pct" }, "1%")),
          el("li", { className: "haircut-row h-good" }, el("span", { className: "h-cat" }, "Investment-grade munis / commercial paper"), el("span", { className: "h-pct" }, "2%")),
          el("li", { className: "haircut-row h-mid" }, el("span", { className: "h-cat" }, "Investment-grade corporate debt"), el("span", { className: "h-pct" }, "3%")),
          el("li", { className: "haircut-row h-mid" }, el("span", { className: "h-cat" }, "Preferred stock (cumulative, non-convertible)"), el("span", { className: "h-pct" }, "10%")),
          el("li", { className: "haircut-row h-warn" }, el("span", { className: "h-cat" }, "Common stock & most equities"), el("span", { className: "h-pct" }, "15%")),
          el("li", { className: "haircut-row h-warn" }, el("span", { className: "h-cat" }, "Non-investment-grade / non-marketable"), el("span", { className: "h-pct" }, "100%"))
        )
      )
    );
    grid.appendChild(vizHaircut);

    // Viz 3: Reg M restricted periods
    const vizRegM = el("div", { className: "viz" },
      el("div", { className: "viz-header" },
        el("div", { className: "viz-title" }, "Reg M Rule 101 restricted periods"),
        el("div", { className: "viz-caption" }, "Before pricing, distribution participants can't bid or purchase the covered security. Tier depends on ADTV and float.")
      ),
      el("div", { className: "viz-body" }, el("canvas", { id: "viz-regm", width: "400", height: "220" }))
    );
    grid.appendChild(vizRegM);

    // Viz 4: IPO price stabilization timeline
    const vizIPO = el("div", { className: "viz" },
      el("div", { className: "viz-header" },
        el("div", { className: "viz-title" }, "IPO / registered offering timeline"),
        el("div", { className: "viz-caption" }, "Pre-filing, filing/waiting, and post-effective — with quiet periods and prospectus delivery windows.")
      ),
      el("div", { className: "viz-body", style: "align-items:stretch" },
        el("div", { className: "timeline" }, el("div", { className: "timeline-line" },
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "Pre-filing"),
            el("div", { className: "timeline-what" }, "No offers, no sales"),
            el("div", { className: "timeline-detail" }, "Rule 163A safe harbor: no communications 30 days before filing (except by non-reporting issuers via limited channels).")
          ),
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "Filing → Effective"),
            el("div", { className: "timeline-what" }, "Waiting period (~15–20 days)"),
            el("div", { className: "timeline-detail" }, "Oral offers allowed. Written offers only via Rule 134 tombstone, red herring preliminary prospectus, or free writing prospectus.")
          ),
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "Effective + 25 / 40 / 90"),
            el("div", { className: "timeline-what" }, "Aftermarket prospectus delivery"),
            el("div", { className: "timeline-detail" }, "IPO (listed) — 25 days · IPO (not listed) — 90 days · Non-IPO by dealer not participating — 40 days · Non-IPO by underwriter — 90 days.")
          ),
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "Research quiet periods"),
            el("div", { className: "timeline-what" }, "IPO — 10 days · secondary — 3 days"),
            el("div", { className: "timeline-detail" }, "Reg AC and FINRA 2241 restrict participating underwriters from publishing research after the offering.")
          )
        ))
      )
    );
    grid.appendChild(vizIPO);

    // Viz 5: MSRB G-37 political contributions
    const vizG37 = el("div", { className: "viz" },
      el("div", { className: "viz-header" },
        el("div", { className: "viz-title" }, "MSRB Rule G-37 — the $250 rule"),
        el("div", { className: "viz-caption" }, "How a de minimis contribution to an official you can vote for triggers — or doesn't trigger — a two-year business ban.")
      ),
      el("div", { className: "viz-body" }, el("canvas", { id: "viz-g37", width: "400", height: "220" }))
    );
    grid.appendChild(vizG37);

    // Viz 6: T+1 settlement flow
    const vizT1 = el("div", { className: "viz" },
      el("div", { className: "viz-header" },
        el("div", { className: "viz-title" }, "T+1 settlement flow (post May 28, 2024)"),
        el("div", { className: "viz-caption" }, "The clock from execution to good delivery. Miss any window and you're staring at a fail or a buy-in.")
      ),
      el("div", { className: "viz-body", style: "align-items:stretch" },
        el("div", { className: "timeline" }, el("div", { className: "timeline-line" },
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "Trade date (T)"),
            el("div", { className: "timeline-what" }, "Execution → allocation"),
            el("div", { className: "timeline-detail" }, "Institutional trades: allocations & affirmations required by 9:00 PM ET on T (Rule 15c6-2).")
          ),
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "T+1 morning"),
            el("div", { className: "timeline-what" }, "Confirmation to customer"),
            el("div", { className: "timeline-detail" }, "Rule 10b-10 confirms must go out at or before completion of the transaction — i.e., settlement.")
          ),
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "T+1"),
            el("div", { className: "timeline-what" }, "Settlement — good delivery"),
            el("div", { className: "timeline-detail" }, "Standard settlement under Rule 15c6-1. Cash trades: same day. Munis: T+1. Options: T+1.")
          ),
          el("div", { className: "timeline-item" },
            el("div", { className: "timeline-when" }, "T+2 / Rule 15c3-3"),
            el("div", { className: "timeline-what" }, "Buy-in clock starts"),
            el("div", { className: "timeline-detail" }, "Broker must close out a fail-to-deliver by T+3 (long) or T+34 (short after close-out failures under Reg SHO).")
          )
        ))
      )
    );
    grid.appendChild(vizT1);

    // Kick off Chart.js renders after DOM is in place
    setTimeout(() => {
      renderBlueprintChart();
      renderRegMChart();
      renderG37Chart();
    }, 20);
  }

  function commonChartFont() {
    return { family: "'Inter', sans-serif", size: 11, weight: "500" };
  }

  function renderBlueprintChart() {
    const canvas = document.getElementById("viz-blueprint");
    if (!canvas || !window.Chart) return;
    const bp = window.EXAM_BLUEPRINT;
    new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: bp.map(b => b.shortLabel || `${b.code} · ${b.title}`),
        datasets: [{
          data: bp.map(b => b.items),
          backgroundColor: [
            "#7d8394", "#d4a437", "#c8961e", "#a94f2f",
            "#0d1f3c", "#1e4789", "#2f6b48", "#7a3719", "#294874"
          ],
          borderColor: "#faf7f0",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "62%",
        plugins: {
          legend: {
            position: "right",
            labels: { font: commonChartFont(), color: "#4a5163", boxWidth: 12, padding: 8 }
          },
          tooltip: {
            callbacks: { label: (ctx) => ` ${ctx.parsed} items (${((ctx.parsed / 110) * 100).toFixed(1)}%)` },
            backgroundColor: "#0d1f3c", padding: 10, cornerRadius: 6
          }
        }
      }
    });
  }

  function renderRegMChart() {
    const canvas = document.getElementById("viz-regm");
    if (!canvas || !window.Chart) return;
    new Chart(canvas, {
      type: "bar",
      data: {
        labels: [
          "Actively-traded (ADTV ≥ $1M & public float ≥ $150M)",
          "ADTV ≥ $100K & public float ≥ $25M",
          "All other securities"
        ],
        datasets: [{
          label: "Restricted period (business days before pricing)",
          data: [0, 1, 5],
          backgroundColor: ["#2f6b48", "#d4a437", "#a94f2f"],
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: (c) => ` ${c.parsed.x} business days` },
            backgroundColor: "#0d1f3c", padding: 10, cornerRadius: 6
          }
        },
        scales: {
          x: { beginAtZero: true, max: 6, ticks: { stepSize: 1, font: commonChartFont(), color: "#4a5163" }, grid: { color: "#e3dbc3" } },
          y: { ticks: { font: commonChartFont(), color: "#1a1f2e" }, grid: { display: false } }
        }
      }
    });
  }

  function renderG37Chart() {
    const canvas = document.getElementById("viz-g37");
    if (!canvas || !window.Chart) return;
    new Chart(canvas, {
      type: "bar",
      data: {
        labels: [
          "$250 or less, you CAN vote for official",
          "$250 or less, you CANNOT vote",
          "More than $250 to any elected official"
        ],
        datasets: [{
          label: "Two-year ban on negotiated muni business?",
          data: [0, 24, 24],
          backgroundColor: ["#2f6b48", "#a94f2f", "#a94f2f"],
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: (c) => c.parsed.x === 0 ? " Allowed — de minimis" : ` ${c.parsed.x}-month ban` },
            backgroundColor: "#0d1f3c", padding: 10, cornerRadius: 6
          }
        },
        scales: {
          x: { beginAtZero: true, max: 30, ticks: { callback: (v) => v === 0 ? "OK" : `${v} mo`, font: commonChartFont(), color: "#4a5163" }, grid: { color: "#e3dbc3" } },
          y: { ticks: { font: commonChartFont(), color: "#1a1f2e" }, grid: { display: false } }
        }
      }
    });
  }

  // ==================== Mobile menu ====================
  function initMobileMenu() {
    const btn = document.getElementById("mobile-menu");
    const tabs = document.getElementById("tabs");
    btn?.addEventListener("click", () => tabs.classList.toggle("open"));
  }

  // ==================== Boot ====================
  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    route();
  });
})();
