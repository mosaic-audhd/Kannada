(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const home = $('#home'), deck = $('#deck'), picker = $('#picker');
  const stage = $('#stage');

  const state = {
    sc: null,          // current scenario
    student: 'a',      // role key the student plays
    i: 0,              // slide index
    hide: true,        // conceal student lines until revealed
    revealed: false,
    busy: false
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };
  if (store.get('hide') === '0') state.hide = false;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const other = (r) => (r === 'a' ? 'b' : 'a');
  const posClass = (p) => 'pos-' + p.toLowerCase().split(' ')[0];

  /* ---------- HOME ---------- */
  function renderGrid() {
    $('#grid').innerHTML = SCENARIOS.map((s, i) => `
      <button class="card" type="button" data-id="${s.id}" style="--i:${i};--h:${s.hue};--img:url('${s.img}')">
        <span class="card-num">${String(i + 1).padStart(2, '0')} · ${s.lines.length} lines</span>
        <h3>${esc(s.title)}</h3>
        <span class="kn" lang="kn">${s.kn}</span>
        <p>${esc(s.blurb)}</p>
        <span class="roles">${esc(s.roles.a.en)} <span aria-hidden="true">⇄</span><span class="sr-only"> and </span> ${esc(s.roles.b.en)}</span>
      </button>`).join('');
  }
  $('#grid').addEventListener('click', (e) => {
    const c = e.target.closest('.card');
    if (c) openPicker(SCENARIOS.find((s) => s.id === c.dataset.id), c);
  });

  /* ---------- PICKER ---------- */
  let lastFocus = null;
  function openPicker(sc, from) {
    lastFocus = from || null;
    state.sc = sc;
    $('#pickPhoto').style.backgroundImage = `url('${sc.img}')`;
    $('#pickPlace').textContent = sc.place;
    $('#pickTitle').textContent = sc.title;
    $('#pickKn').textContent = sc.kn;
    $('#pickOptions').innerHTML = ['a', 'b'].map((r, n) => `
      <button class="opt" type="button" data-role="${r}">
        <span class="opt-key">${n + 1}</span>
        <span class="opt-main">Student is the <b>${esc(sc.roles[r].en)}</b></span>
        <span class="opt-sub">Teacher plays the ${esc(sc.roles[other(r)].en.toLowerCase())}</span>
      </button>`).join('');
    picker.hidden = false;
    $('.opt', picker).focus();
  }
  function closePicker() {
    picker.hidden = true;
    if (lastFocus) lastFocus.focus();
  }
  picker.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closePicker();
    const o = e.target.closest('.opt');
    if (o) { picker.hidden = true; startDeck(state.sc, o.dataset.role, 0); }
  });

  /* ---------- DECK ---------- */
  const total = () => state.sc.lines.length + 2; // intro + lines + end

  function startDeck(sc, student, i) {
    state.sc = sc; state.student = student; state.i = i; state.revealed = false;
    const bg = $('#deckBg');
    bg.style.backgroundImage = `url('${sc.img}')`;
    home.hidden = true; home.classList.remove('is-active');
    deck.hidden = false;
    updateChrome();
    render(0);
  }

  function goHome() {
    deck.hidden = true;
    home.hidden = false;
    history.replaceState(null, '', location.pathname);
    const card = $(`.card[data-id="${state.sc?.id}"]`);
    if (card) card.focus();
  }

  function updateChrome() {
    const sc = state.sc, st = state.student, te = other(st);
    $('#deckTitle').textContent = sc.title;
    $('#deckRoles').innerHTML = `<span class="t">Teacher: ${esc(sc.roles[te].en)}</span> · <span class="s">Student: ${esc(sc.roles[st].en)}</span>`;
    $('#hideBtn').setAttribute('aria-pressed', String(state.hide));
    $('#hideBtn').textContent = state.hide ? 'Answers hidden' : 'Answers shown';
  }

  function isConcealed() {
    const line = state.sc.lines[state.i - 1];
    return !!line && state.hide && !state.revealed && line.s === state.student;
  }

  function slideHTML() {
    const sc = state.sc, i = state.i, st = state.student, te = other(st);
    if (i === 0) {
      return `<div class="slide intro-slide">
        <span class="place">${esc(sc.place)} · Bengaluru</span>
        <h2>${esc(sc.title)}</h2>
        <div class="kn-title" lang="kn">${sc.kn}</div>
        <div class="cast">
          <div class="cast-item teacher"><span class="lbl">Teacher plays</span><span class="nm">${esc(sc.roles[te].en)}</span><span class="nm-kn" lang="kn">${sc.roles[te].kn}</span></div>
          <div class="cast-item student"><span class="lbl">Student plays</span><span class="nm">${esc(sc.roles[st].en)}</span><span class="nm-kn" lang="kn">${sc.roles[st].kn}</span></div>
        </div>
        <span class="hint">Press → or Space to begin</span>
      </div>`;
    }
    if (i === total() - 1) {
      return `<div class="slide intro-slide end-slide">
        <span class="place">Shabaash! · ಶಭಾಷ್!</span>
        <h2>Well done</h2>
        <span class="hint">Now swap: the student plays the ${esc(sc.roles[te].en.toLowerCase())}.</span>
        <div class="end-actions">
          <button class="solid-btn" type="button" data-act="swap">⇄ Swap roles and replay</button>
          <button class="ghost-btn" type="button" data-act="restart">Replay same roles</button>
          <button class="ghost-btn" type="button" data-act="home">All scenarios</button>
        </div>
      </div>`;
    }
    const line = sc.lines[i - 1];
    const isStudent = line.s === st;
    const role = sc.roles[line.s];
    const words = line.w.map(([rom, kn, pos, mean], n) => `
      <div class="word" style="--i:${n}">
        <span class="w-rom">${esc(rom)}</span>
        <span class="w-kn" lang="kn">${kn}</span>
        <span class="w-pos ${posClass(pos)}">${esc(pos)}</span>
        <span class="w-mean">${esc(mean)}</span>
      </div>`).join('');
    const concealed = isConcealed();
    return `<div class="slide line-slide${concealed ? ' concealed' : ''}">
      <span class="speaker ${isStudent ? 'student' : 'teacher'}">
        <span class="who">${isStudent ? 'Student' : 'Teacher'}</span>
        ${esc(role.en)} <span class="role-kn" lang="kn">${role.kn}</span>
      </span>
      ${concealed ? `<div class="prompt">
          <span class="say">Your turn. Say in Kannada:</span>
          <span class="say-en">${esc(line.en)}</span>
          <button class="reveal-btn" type="button" data-act="reveal">Reveal <kbd>Space</kbd></button>
        </div>` : ''}
      <div class="words" ${concealed ? 'aria-hidden="true"' : ''}>${words}</div>
      ${concealed ? '' : `<p class="meaning">${esc(line.en)}</p>`}
    </div>`;
  }

  function render(dir) {
    const old = $('.slide', stage);
    const draw = () => {
      stage.innerHTML = slideHTML();
      const s = $('.slide', stage);
      if (dir) s.classList.add(dir > 0 ? 'enter-next' : 'enter-prev');
      const n = state.i, t = total();
      $('#counter').textContent = `${n + 1} / ${t}`;
      $('#progressFill').style.width = `${(n / (t - 1)) * 100}%`;
      $('#prevBtn').disabled = n === 0;
      $('#nextBtn').disabled = n === t - 1;
      history.replaceState(null, '', `#${state.sc.id}-${state.student}-${n}`);
      state.busy = false;
    };
    if (old && dir) {
      state.busy = true;
      old.classList.add(dir > 0 ? 'leave-next' : 'leave-prev');
      setTimeout(draw, 230);
    } else draw();
  }

  function reveal() {
    state.revealed = true;
    render(0);
  }

  function go(delta) {
    if (state.busy || !state.sc) return;
    if (delta > 0 && isConcealed()) return reveal();
    const n = state.i + delta;
    if (n < 0 || n > total() - 1) return;
    state.i = n; state.revealed = false;
    render(delta);
  }

  function swap() {
    state.student = other(state.student);
    state.i = 0; state.revealed = false;
    updateChrome();
    render(1);
  }

  function toggleHide() {
    state.hide = !state.hide;
    store.set('hide', state.hide ? '1' : '0');
    updateChrome();
    render(0);
  }

  $('#prevBtn').addEventListener('click', () => go(-1));
  $('#nextBtn').addEventListener('click', () => go(1));
  $('#backBtn').addEventListener('click', goHome);
  $('#swapBtn').addEventListener('click', swap);
  $('#hideBtn').addEventListener('click', toggleHide);
  stage.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const a = b.dataset.act;
    if (a === 'reveal') reveal();
    if (a === 'swap') swap();
    if (a === 'restart') { state.i = 0; state.revealed = false; render(-1); }
    if (a === 'home') goHome();
  });

  /* keyboard */
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (!picker.hidden) {
      if (e.key === 'Escape') closePicker();
      if (e.key === '1' || e.key === '2') {
        picker.hidden = true;
        startDeck(state.sc, e.key === '1' ? 'a' : 'b', 0);
      }
      return;
    }
    if (deck.hidden) return;
    const k = e.key;
    if (k === 'ArrowRight' || k === 'PageDown') { e.preventDefault(); go(1); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(-1); }
    else if (k === ' ' || k === 'Enter') {
      if (e.target.closest && e.target.closest('button') && k === 'Enter') return; // let buttons work
      e.preventDefault(); go(1);
    }
    else if (k === 's' || k === 'S') swap();
    else if (k === 'h' || k === 'H') toggleHide();
    else if (k === 'Escape') goHome();
    else if (k === 'Home') { state.i = 1; go(-1); }
    else if (k === 'End') { state.i = total() - 2; state.revealed = true; go(1); }
  });

  /* touch swipe */
  let tx = null, ty = null;
  deck.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  deck.addEventListener('touchend', (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    tx = null;
  });

  /* deep link: #airport-a-3 */
  function fromHash() {
    const m = location.hash.match(/^#([a-z]+)-([ab])-(\d+)$/);
    if (!m) return false;
    const sc = SCENARIOS.find((s) => s.id === m[1]);
    if (!sc) return false;
    startDeck(sc, m[2], Math.min(+m[3], sc.lines.length + 1));
    return true;
  }

  renderGrid();
  fromHash();
})();
