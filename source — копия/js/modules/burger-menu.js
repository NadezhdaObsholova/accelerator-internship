
const burgerMenu = function () {
  const bodyElement = document.querySelector('body');
  const bodyOverlayElement = document.querySelector('[data-overlay="body-overlay"]');
  const menuElement = document.querySelector('[data-menu="header-menu"]');
  const menuToggleOpen = document.querySelector('[data-open="toggle-open"]');
  const menuToggleClose = document.querySelector('[data-close="toggle-close"]');
  const menuButtonElement = document.querySelector('[data-toggle="menu__toggle"]');
  const menuItems = document.querySelectorAll('[data-menu_item="menu_item"]');
  const isEscapeKey = (evt) => evt.key === 'Escape';

  function toggleMenu() {
    menuButtonElement.classList.toggle('is_open');
    menuElement.classList.toggle('visually-hidden');
    bodyElement.classList.toggle('scroll-lock');
    menuToggleOpen.classList.toggle('visually-hidden');
    menuToggleClose.classList.toggle('visually-hidden');
    bodyOverlayElement.classList.toggle('visually-hidden');
  }

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMenu();
    }
  };

  function openMenu() {
    toggleMenu();
    document.addEventListener('keydown', onDocumentKeydown);
  }

  function closeMenu() {
    toggleMenu();
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  menuButtonElement.addEventListener('click', () => {
    openMenu();
  });

  const onMenuItemsClick = (evt) => {
    if (evt) {
      closeMenu();
    }
  };

  menuItems.forEach((item) => {
    item.addEventListener('click', onMenuItemsClick);
  });

};

export { burgerMenu };
