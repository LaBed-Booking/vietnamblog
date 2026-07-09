/* ===========================================================
   VỀ RỒI — Foto-Memory im Footer
   =========================================================== */
(function () {
  const board = document.getElementById('fm-board');
  if (!board) return;

  const photos = [
    { src: 'memory/tag01-flughafen-gate-thumb.jpg', alt: 'Flughafen' },
    { src: 'memory/tag02-ankunft-saigon-thumb.jpg', alt: 'Ankunft in Saigon' },
    { src: 'memory/tag02-eis-i-love-kem-thumb.jpg', alt: 'Eis essen' },
    { src: 'memory/tag03-rex-hotel-saigon-thumb.jpg', alt: 'Rex Hotel' },
    { src: 'memory/tag03-pomelo-fussball-thumb.jpg', alt: 'Fußball mit Pomelo' },
    { src: 'memory/tag04-gamecenter-thumb.jpg', alt: 'Game Center' },
    { src: 'memory/tag04-tuktuk-fahrt-thumb.jpg', alt: 'Tuk-Tuk-Fahrt' },
    { src: 'memory/tag05-wassermelonensaft-thumb.jpg', alt: 'Wassermelonensaft' },
  ];

  const movesEl = document.getElementById('fm-moves');
  const bestEl = document.getElementById('fm-best');
  const winEl = document.getElementById('fm-win');
  const restartBtn = document.getElementById('fm-restart');

  const BEST_KEY = 'veroi-memory-best';
  let first = null, second = null, lock = false, moves = 0, matched = 0;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getBest() {
    const v = parseInt(localStorage.getItem(BEST_KEY), 10);
    return Number.isFinite(v) ? v : null;
  }

  function renderBest() {
    const best = getBest();
    bestEl.textContent = best !== null ? best : '—';
  }

  function build() {
    board.innerHTML = '';
    first = null; second = null; lock = false; moves = 0; matched = 0;
    movesEl.textContent = '0';
    winEl.textContent = '';
    winEl.classList.remove('show');

    const deck = shuffle(photos.concat(photos)).map((p, i) => ({ ...p, id: i }));

    deck.forEach((card) => {
      const el = document.createElement('div');
      el.className = 'fm-card';
      el.dataset.key = card.alt;
      el.innerHTML = `
        <div class="fm-card-inner">
          <div class="fm-face fm-face-back"></div>
          <div class="fm-face fm-face-front"><img src="${card.src}" alt="${card.alt}" loading="lazy"></div>
        </div>`;
      el.addEventListener('click', () => flip(el));
      board.appendChild(el);
    });
  }

  function flip(el) {
    if (lock || el.classList.contains('flipped') || el.classList.contains('matched')) return;
    el.classList.add('flipped');

    if (!first) {
      first = el;
      return;
    }
    second = el;
    lock = true;
    moves++;
    movesEl.textContent = moves;

    if (first.dataset.key === second.dataset.key) {
      first.classList.add('matched');
      second.classList.add('matched');
      matched++;
      first = null; second = null; lock = false;
      if (matched === photos.length) finish();
    } else {
      setTimeout(() => {
        first.classList.remove('flipped');
        second.classList.remove('flipped');
        first = null; second = null; lock = false;
      }, 700);
    }
  }

  function finish() {
    const best = getBest();
    if (best === null || moves < best) {
      localStorage.setItem(BEST_KEY, String(moves));
      winEl.textContent = `Geschafft in ${moves} Zügen — neuer Bestwert! 🎉`;
    } else {
      winEl.textContent = `Geschafft in ${moves} Zügen! 🎉`;
    }
    winEl.classList.add('show');
    renderBest();
  }

  restartBtn.addEventListener('click', build);

  renderBest();
  build();
})();
