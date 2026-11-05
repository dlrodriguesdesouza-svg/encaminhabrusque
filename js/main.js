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
