
const burgerMenu = function () {
  const bodyElement = document.querySelector('body');
  const bodyOverlayElement = document.querySelector('[data-overlay="body-overlay"]');
  const menuElement = document.querySelector('[data-menu="header-menu"]');
  const menuToggleOpen = document.querySelector('[data-open="toggle-open"]');
  const menuToggleClose = document.querySelector('[data-close="toggle-close"]');
  const menuButtonElement = document.querySelector('[data-toggle="menu__toggle"]');
  const menuItems = document.querySelectorAll('[data-item="menu_item"]');
  const isEscapeKey = (evt) => evt.key === 'Escape';


  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMenu();
    }
  };

  const clickOutsideNav = (event) => {
    if (!menuElement.contains(event.target) && !menuButtonElement.contains(event.target)) {
      closeMenu();
    }
  };

  function openMenu() {
    menuButtonElement.classList.add('is_open');
    menuElement.classList.remove('visually-hidden');
    bodyElement.classList.add('scroll-lock');
    menuToggleOpen.classList.add('visually-hidden');
    menuToggleClose.classList.remove('visually-hidden');
    bodyOverlayElement.classList.remove('visually-hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', clickOutsideNav);
  }


  function closeMenu() {
    menuButtonElement.classList.remove('is_open');
    menuElement.classList.add('visually-hidden');
    bodyElement.classList.remove('scroll-lock');
    menuToggleOpen.classList.remove('visually-hidden');
    menuToggleClose.classList.add('visually-hidden');
    bodyOverlayElement.classList.add('visually-hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', clickOutsideNav);
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

  document.addEventListener('click', clickOutsideNav);

};

export { burgerMenu };
