const menu = document.querySelector('.site-menu');
const menuControl = menu.querySelector('summary');

// Mantém o link visível até o navegador concluir sua ativação no Safari.
// Ao abrir uma página ou restaurá-la pelo botão Voltar, o menu começa fechado.
window.addEventListener('pageshow', () => {
  menu.open = false;
});

menu.addEventListener('focusout', (event) => {
  const nextFocus = event.relatedTarget;
  if (menu.open && nextFocus && !menu.contains(nextFocus)) {
    // No toque, o Safari pode focar o cabeçalho antes de ativar o link.
    setTimeout(() => {
      if (!menu.contains(document.activeElement)) menu.open = false;
    }, 0);
  }
});

menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menuControl.focus();
  }
});

const movedSections = new Map([
  ['metodos.html', [
    'metodos', 'metodos-titulo', 'cuidados', 'cuidados-titulo',
    'video-diu-titulo', 'video-implanon-titulo', 'video-pilulas-titulo',
    'video-injetavel-mensal-titulo', 'video-injetavel-trimestral-titulo',
    'video-preservativos-titulo', 'video-vasectomia-titulo', 'video-laqueadura-titulo',
    'video-cuidados-diu-titulo', 'video-cuidados-implanon-titulo'
  ]],
  ['testagem-e-prevencao.html', [
    'testagem', 'testagem-titulo', 'prevencao', 'prevencao-titulo', 'prep-pep',
    'video-testes-titulo', 'video-vacina-hepatite-b-titulo', 'video-vacina-hpv-titulo',
    'video-pep-prevencao-titulo', 'video-prep-prevencao-titulo'
  ]],
  ['urgencia.html', ['urgencia', 'urgencia-titulo', 'video-prep-titulo']],
  ['referencias.html', ['referencias', 'referencias-titulo']]
]);

function openLinkedSection() {
  const anchor = location.hash.slice(1);
  if (!anchor) return;

  if (document.body.hasAttribute('data-links-antigos')) {
    for (const [page, sections] of movedSections) {
      if (sections.includes(anchor) || (page === 'referencias.html' && /^ref-(?:[1-9]|[12]\d)$/.test(anchor))) {
        location.replace(page + location.hash);
        return;
      }
    }
  }

  const target = document.getElementById(anchor);
  if (!target) return;

  let openedDetails = false;
  let details = target.closest('details:not([open])');
  while (details) {
    details.open = true;
    openedDetails = true;
    details = details.parentElement.closest('details:not([open])');
  }
  if (openedDetails) requestAnimationFrame(() => target.scrollIntoView());

  const origin = new URLSearchParams(location.search).get('origem') || '';
  if (target.parentElement.matches('.references') &&
      /^(index|metodos|testagem-e-prevencao|urgencia)\.html#citacao-\d+$/.test(origin) &&
      !target.querySelector('.citation-return')) {
    const citationReturn = document.createElement('a');
    citationReturn.className = 'citation-return';
    citationReturn.href = origin;
    citationReturn.textContent = 'Voltar à citação';
    target.append(citationReturn);
  }
}

openLinkedSection();
window.addEventListener('hashchange', openLinkedSection);

const backToTop = document.createElement('button');
backToTop.type = 'button';
backToTop.className = 'back-to-top';
backToTop.hidden = true;
backToTop.setAttribute('aria-label', 'Voltar ao topo');
backToTop.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 19V5m-6 6 6-6 6 6"/></svg>';
document.body.append(backToTop);

const mobileViewport = window.matchMedia('(max-width: 47.99rem)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateBackToTop() {
  backToTop.hidden = !mobileViewport.matches || window.scrollY < window.innerHeight * 2;
}

backToTop.addEventListener('click', () => {
  document.getElementById('topo').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
});

window.addEventListener('scroll', updateBackToTop, { passive: true });
window.addEventListener('resize', updateBackToTop);
window.addEventListener('pageshow', updateBackToTop);
mobileViewport.addEventListener('change', updateBackToTop);
updateBackToTop();

/* Carrega o player do YouTube somente após o clique da pessoa usuária. */
document.addEventListener('click', (event) => {
  const button = event.target.closest('.edu-video__load[data-video-id]');
  if (!button) return;
  const id = button.dataset.videoId;
  if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) return;

  const frame = document.createElement('iframe');
  frame.title = button.dataset.videoTitle || 'Vídeo educativo do YouTube';
  frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1';
  frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allowFullscreen = true;
  button.parentElement.replaceChildren(frame);
  frame.focus();
});
