const menu = document.querySelector('.site-menu');
const menuControl = menu.querySelector('summary');

menu.addEventListener('click', (event) => {
  if (event.target.closest('a[href^="#"]')) menu.open = false;
});

menu.addEventListener('focusout', (event) => {
  const nextFocus = event.relatedTarget;
  if (menu.open && nextFocus && !menu.contains(nextFocus)) {
    menu.open = false;
  }
});

menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menuControl.focus();
  }
});

const citationReturn = document.createElement('a');
citationReturn.className = 'citation-return';
citationReturn.href = '#citacao-atual';
citationReturn.textContent = 'Voltar à citação';

document.addEventListener('click', (event) => {
  const citation = event.target.closest('.citacao a');
  if (!citation || event.defaultPrevented ||
      event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

  document.getElementById('citacao-atual')?.removeAttribute('id');
  citation.id = 'citacao-atual';
  document.getElementById(citation.hash.slice(1)).append(citationReturn);
});

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
