
const burgerMenu = function () {
  const menuElement = document.querySelector('[data-menu="header-menu"]');
  const menuToggleOpen = document.querySelector('[data-open="toggle-open"]');
  const menuToggleClose = document.querySelector('[data-close="toggle-close"]');
  const menuButtonElement = document.querySelector('[data-toggle="menu__toggle"]');//кнопка
  const bodyElement = document.querySelector('body');
  const bodyOverlayElement = document.querySelector('[data-overlay="body-overlay"]');

  const toggleMenu = () => {
    menuButtonElement.classList.toggle('is_open');
    menuElement.classList.toggle('visually-hidden');
    bodyElement.classList.toggle('menuToggleClose');
    menuToggleOpen.classList.toggle('visually-hidden');
    menuToggleClose.classList.toggle('visually-hidden');
    bodyOverlayElement.classList.toggle('visually-hidden');
  };

  menuButtonElement.addEventListener('click', () => {
    toggleMenu();
  });

};

export { burgerMenu };
