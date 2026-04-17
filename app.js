// Series 14 Study Dashboard — app.js
// Renders chapter navigation, chapter detail views, and rule cards.

(function () {
  'use strict';

  // ---- Chapter registry --------------------------------------------------
  // Fallback titles if a chapter file fails to load
  const FALLBACK_TITLES = {
    1: "Public and Private Offerings",
    2: "Underwriting",
    3: "Equity Research & The Securities Exchange Act of 1934",
    4: "Equity Trading and Settlement",
    5: "SEC Trading Rules (Reg NMS, Reg SHO)",
    6: "SRO Trading Rules",
    7: "Trade Reporting (ACT, TRACE, CAT)",
    8: "Customer Accounts (Reg BI, AML, Penny Stock)",
    9: "Margin (Regulation T)",
    10: "General Supervision",
    11: "Business Conduct Rules",
    12: "Communications With the Public",
    13: "Financial Responsibility"
  };

  const CHAPTER_DATA = {};
  for (let i = 1; i <= 13; i++) {
    const data = window['CHAPTER_' + i];
    if (data) CHAPTER_DATA[i] = data;
  }

  const ALL_CHAPTERS = [];
  for (let i = 1; i <= 13; i++) {
    const data = CHAPTER_DATA[i];
    ALL_CHAPTERS.push({
      num: i,
      title: (data && data.title) || FALLBACK_TITLES[i] || ('Chapter ' + i),
      available: !!data
    });
  }

  // ---- Utilities ---------------------------------------------------------
  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function categoryClass(cat) {
    const c = (cat || '').toLowerCase();
    if (c.includes('finra')) return 'finra';
    if (c.includes('msrb')) return 'msrb';
    if (c.includes('nyse')) return 'nyse';
    if (c.includes('nasdaq')) return 'nasdaq';
    // Default to SEC styling for SEC Rule, SEC Form, Federal Law, etc.
    return 'sec';
  }

  function countRules(chapter) {
    if (!chapter || !chapter.sections) return 0;
    return chapter.sections.reduce((n, s) => n + (s.rules ? s.rules.length : 0), 0);
  }

  // ---- Renderers ---------------------------------------------------------
  function renderSidebar() {
    const nav = document.getElementById('chapter-nav');
    if (!nav) return;

    const hash = window.location.hash.replace('#', '');
    const activeNum = hash.startsWith('chapter-') ? parseInt(hash.slice(8), 10) : null;

    nav.innerHTML = ALL_CHAPTERS.map(ch => {
      const isActive = ch.num === activeNum;
      const classes = ['nav-chapter'];
      if (!ch.available) classes.push('disabled');
      if (isActive) classes.push('active');
      const hrefAttr = ch.available ? `href="#chapter-${ch.num}"` : 'href="javascript:void(0)"';
      const soonBadge = ch.available ? '' : '<span class="nav-chapter-soon">soon</span>';
      return `
        <a class="${classes.join(' ')}" ${hrefAttr} data-chapter="${ch.num}">
          <span class="nav-chapter-num">${String(ch.num).padStart(2, '0')}</span>
          <span class="nav-chapter-title">${esc(ch.title)}</span>
          ${soonBadge}
        </a>
      `;
    }).join('');
  }

  function renderWelcome() {
    const header = document.getElementById('chapter-header');
    const content = document.getElementById('chapter-content');
    if (header) header.innerHTML = '';

    const totalAvailable = ALL_CHAPTERS.filter(c => c.available).length;
    const totalRules = Object.values(CHAPTER_DATA)
      .filter(Boolean)
      .reduce((n, ch) => n + countRules(ch), 0);

    const cards = ALL_CHAPTERS.map(ch => {
      const data = CHAPTER_DATA[ch.num];
      const rules = data ? countRules(data) : 0;
      const sections = data && data.sections ? data.sections.length : 0;
      const meta = ch.available
        ? `${rules} rules · ${sections} sections`
        : 'Coming soon';
      const classes = ['ch-card'];
      if (!ch.available) classes.push('disabled');
      const tag = ch.available ? 'a' : 'div';
      const hrefAttr = ch.available ? `href="#chapter-${ch.num}"` : '';
      return `
        <${tag} class="${classes.join(' ')}" ${hrefAttr}>
          <div class="ch-card-num">Chapter ${String(ch.num).padStart(2, '0')}</div>
          <div class="ch-card-title">${esc(ch.title)}</div>
          <div class="ch-card-meta">${esc(meta)}</div>
        </${tag}>
      `;
    }).join('');

    content.innerHTML = `
      <div class="welcome">
        <h1>Series 14<br><span class="welcome-accent">Compliance Official Qualification</span></h1>
        <p>
          A chapter-by-chapter study manual covering every named SEC, FINRA, and MSRB rule
          tested on the Series 14 exam. Each rule entry includes its exact regulatory
          language, the core concept to understand, key parameters, and every exception.
        </p>
        <p style="font-family:var(--font-mono);font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-top:1.5rem">
          ${totalAvailable} of 13 chapters available · ${totalRules} rules indexed
        </p>
      </div>
      <div class="chapter-grid">
        ${cards}
      </div>
    `;
  }

  function renderRuleCard(rule) {
    const catClass = categoryClass(rule.category);
    const params = (rule.parameters || []).filter(Boolean);
    const exceptions = (rule.exceptions || []).filter(Boolean);
    const tipsMap = window.EXAM_TIPS || {};
    const examTip = rule.examTip || rule.exam_tip || tipsMap[rule.id] || '';

    const paramsHtml = params.length
      ? `<ul class="rule-list">${params.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`
      : `<ul class="rule-list empty"><li>None specified.</li></ul>`;

    const exceptionsHtml = exceptions.length
      ? `<ul class="rule-list exceptions">${exceptions.map(e => `<li>${esc(e)}</li>`).join('')}</ul>`
      : `<ul class="rule-list empty"><li>None.</li></ul>`;

    const languageHtml = rule.language
      ? `<blockquote class="rule-language">${esc(rule.language)}</blockquote>`
      : `<blockquote class="rule-language" style="opacity:.6">No exact language recorded.</blockquote>`;

    const conceptHtml = rule.concept
      ? `<div class="rule-concept">${esc(rule.concept)}</div>`
      : `<div class="rule-concept" style="opacity:.6">—</div>`;

    const examTipSection = examTip ? `
          <div class="rule-section exam-tip">
            <div class="rule-section-label">Exam Tip</div>
            <div class="rule-section-body">
              <div class="rule-tip">${esc(examTip)}</div>
            </div>
          </div>` : '';

    const searchHaystack = [rule.name, rule.concept, rule.language, rule.category, examTip, ...(params || []), ...(exceptions || [])]
      .filter(Boolean).join(' ').toLowerCase();

    return `
      <article class="rule-card" data-rule-id="${esc(rule.id || '')}" data-search="${esc(searchHaystack)}">
        <button type="button" class="rule-header" aria-expanded="false">
          <div class="rule-title-group">
            <span class="rule-cat ${catClass}">${esc(rule.category || 'Rule')}</span>
            <div class="rule-name">${esc(rule.name || 'Untitled rule')}</div>
          </div>
          <svg class="chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div class="rule-body">
          <div class="rule-section language">
            <div class="rule-section-label">Exact Language</div>
            <div class="rule-section-body">${languageHtml}</div>
          </div>
          <div class="rule-section concept">
            <div class="rule-section-label">Core Concept</div>
            <div class="rule-section-body">${conceptHtml}</div>
          </div>
          <div class="rule-section parameters">
            <div class="rule-section-label">Parameters</div>
            <div class="rule-section-body">${paramsHtml}</div>
          </div>
          <div class="rule-section exceptions">
            <div class="rule-section-label">Exceptions</div>
            <div class="rule-section-body">${exceptionsHtml}</div>
          </div>${examTipSection}
        </div>
      </article>
    `;
  }

  function renderChapter(num) {
    const chapter = CHAPTER_DATA[num];
    const header = document.getElementById('chapter-header');
    const content = document.getElementById('chapter-content');
    if (!chapter) {
      header.innerHTML = '';
      content.innerHTML = `
        <div class="welcome">
          <h1>Chapter ${num}<br><span class="welcome-accent">Coming soon</span></h1>
          <p>This chapter has not been compiled yet. Return to the home page to see available content.</p>
          <p><a href="#" style="color:var(--navy);text-decoration:underline;">← Back to all chapters</a></p>
        </div>
      `;
      return;
    }

    const sectionCount = chapter.sections.length;
    const ruleCount = countRules(chapter);

    header.innerHTML = `
      <div class="ch-eyebrow">Chapter ${String(chapter.id).padStart(2, '0')}</div>
      <h1 class="ch-title">${esc(chapter.title)}</h1>
      <p class="ch-subtitle">${esc(chapter.subtitle || '')}</p>
      <div class="ch-stats">
        <div><span class="ch-stat-num">${ruleCount}</span><span class="ch-stat-label">Rules</span></div>
        <div><span class="ch-stat-num">${sectionCount}</span><span class="ch-stat-label">Sections</span></div>
      </div>
    `;

    const sectionsHtml = chapter.sections.map(section => `
      <section class="section">
        <h2 class="section-title">${esc(section.name)}</h2>
        ${(section.rules || []).map(renderRuleCard).join('')}
      </section>
    `).join('');

    content.innerHTML = `${sectionsHtml}<div class="no-results" id="no-results" hidden>No rules match your search.</div>`;
  }

  // ---- Event wiring ------------------------------------------------------
  function closeMobileSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
  }

  function handleRoute() {
    const hash = window.location.hash.replace('#', '');
    renderSidebar();

    if (hash.startsWith('chapter-')) {
      const num = parseInt(hash.slice(8), 10);
      const ch = ALL_CHAPTERS.find(c => c.num === num);
      if (!ch || !ch.available) {
        window.history.replaceState(null, '', '#');
        renderWelcome();
      } else {
        renderChapter(num);
      }
    } else {
      renderWelcome();
    }

    // Reset scroll & search
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    const search = document.getElementById('search');
    if (search) search.value = '';
    closeMobileSidebar();
  }

  function handleSearch(e) {
    const q = (e.target.value || '').trim().toLowerCase();
    const cards = document.querySelectorAll('.rule-card');
    let visible = 0;
    cards.forEach(card => {
      const haystack = card.getAttribute('data-search') || '';
      const match = !q || haystack.includes(q);
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });

    // Hide empty sections
    document.querySelectorAll('.section').forEach(section => {
      const anyVisible = section.querySelectorAll('.rule-card:not(.hidden)').length > 0;
      section.style.display = anyVisible ? '' : 'none';
    });

    // No-results message
    const noRes = document.getElementById('no-results');
    if (noRes) noRes.hidden = !(q && visible === 0 && cards.length > 0);
  }

  function handleClick(e) {
    // Rule card expand/collapse (accordion: only one open at a time)
    const header = e.target.closest('.rule-header');
    if (header) {
      const card = header.closest('.rule-card');
      if (card) {
        const willOpen = !card.classList.contains('open');
        // Close all other open cards first
        document.querySelectorAll('.rule-card.open').forEach(other => {
          if (other !== card) {
            other.classList.remove('open');
            const btn = other.querySelector('.rule-header');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });
        card.classList.toggle('open', willOpen);
        header.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        // If opening, keep the card header in view
        if (willOpen) {
          requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            if (rect.top < 0 || rect.top > window.innerHeight - 120) {
              card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        }
      }
      return;
    }

    // Disabled nav chapter - show friendly message
    const disabledNav = e.target.closest('.nav-chapter.disabled, .ch-card.disabled');
    if (disabledNav) {
      e.preventDefault();
      return;
    }
  }

  function init() {
    // Initial render
    handleRoute();

    // Route changes
    window.addEventListener('hashchange', handleRoute);

    // Search
    const search = document.getElementById('search');
    if (search) search.addEventListener('input', handleSearch);

    // Delegated clicks (rule expand, nav)
    document.addEventListener('click', handleClick);

    // Mobile sidebar toggle
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggle && sidebar) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (window.innerWidth > 900) return;
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
