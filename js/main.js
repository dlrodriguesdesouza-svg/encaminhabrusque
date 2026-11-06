const menu = document.querySelector('.site-menu');
const menuControl = menu.querySelector('summary');

menu.addEventListener('click', (event) => {
  if (event.target.closest('a[href^="#"]')) menu.open = false;
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
