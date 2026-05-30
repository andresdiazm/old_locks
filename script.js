/* ── Render ticker desde data.js ── */
(function renderTicker() {
  const track = document.getElementById('ticker-track');
  if (!track || typeof TICKER === 'undefined') return;
  const items = [...TICKER, ...TICKER].map(t => {
    const html = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return `<span class="ticker-item">${html}</span><span class="ticker-sep">◆</span>`;
  }).join('');
  track.innerHTML = items;
  track.parentElement.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.parentElement.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
})();

/* ── Render stats del hero ── */
(function renderStats() {
  const el = document.getElementById('hero-stats');
  if (!el || typeof STATS === 'undefined') return;
  el.innerHTML = STATS.map(s => `
    <div class="hero-stat">
      <strong class="count" data-target="${s.valor}">0</strong>
      <span>${s.label}</span>
    </div>`).join('');
})();

/* ── Render noticias ── */
(function renderNoticias() {
  const grid = document.getElementById('news-grid');
  if (!grid || typeof NOTICIAS === 'undefined') return;

  const bgGradients = [
    'linear-gradient(135deg,#06165f 0%,#1a4080 100%)',
    'linear-gradient(135deg,#0d1b3e 0%,#1a3566 100%)',
    'linear-gradient(135deg,#1a2a5e 0%,#0a4080 100%)',
  ];
  const icons = { noticia: '📢', evento: '🏑', resultado: null };

  grid.innerHTML = NOTICIAS.map((n, i) => {
    const badgeClass = n.badgeColor === 'teal' ? 'news-badge-teal' : '';
    const imgContent = n.type === 'resultado'
      ? `<div class="news-score-block">
           <span class="score-team">${n.equipoL}</span>
           <span class="score">${n.golesL} – ${n.golesR}</span>
           <span class="score-team">${n.equipoR}</span>
         </div>`
      : `<div class="news-icon-block">${icons[n.type] || '📰'}</div>`;

    return `
      <article class="news-card${n.featured ? ' news-card-featured' : ''}">
        <div class="news-card-img" style="background:${bgGradients[i % bgGradients.length]}">
          <div class="news-card-badge ${badgeClass}">${n.badge}</div>
          ${imgContent}
        </div>
        <div class="news-card-body">
          <p class="news-cat">${n.categoria}</p>
          <h3>${n.titulo}</h3>
          <p>${n.excerpt}</p>
          <time datetime="${n.fecha}">${n.fechaTexto}</time>
        </div>
      </article>`;
  }).join('');
})();

/* ── Render partidos ── */
(function renderPartidos() {
  const el = document.getElementById('fixtures');
  if (!el || typeof PARTIDOS === 'undefined') return;

  el.innerHTML = PARTIDOS.map(p => {
    const titulo = p.visita
      ? `${p.local} <span class="vs">vs</span> ${p.visita}`
      : p.local;
    return `
      <article class="fixture-row">
        <div class="fixture-date">
          <strong>${p.dia}</strong>
          <span>${p.mes}</span>
        </div>
        <div class="fixture-info">
          <p class="fixture-comp">${p.competencia}</p>
          <h3>${titulo}</h3>
          <p class="fixture-place">${p.lugar} · ${p.hora}</p>
        </div>
        <div class="fixture-tag ${p.tag}">${p.tagTexto}</div>
      </article>`;
  }).join('');
})();

/* ── Header scroll state ── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile menu ── */
const menuToggle = document.querySelector('.menu-toggle');
const siteNav    = document.querySelector('.site-nav');

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  siteNav.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
siteNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* ── Animated counters + scroll reveal ── */
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const start  = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / 1600, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  })(start);
}

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.classList.contains('reveal'))   el.classList.add('visible');
    if (el.classList.contains('count'))    animateCount(el);
    io.unobserve(el);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.news-card, .fixture-row, .staff-card, .value-item, .contact-card, .hero-stat')
  .forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });

document.querySelectorAll('.count').forEach(el => io.observe(el));
