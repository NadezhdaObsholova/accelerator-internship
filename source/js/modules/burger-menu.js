const burgerMenu = function () {
  const bodyElement = document.querySelector('body');
  const bodyOverlayElement = document.querySelector('[data-overlay="body-overlay"]');
  const menuElement = document.querySelector('[data-menu="header-menu"]');
  const menuToggleOpen = document.querySelector('[data-open="toggle-open"]');
  const menuToggleClose = document.querySelector('[data-close="toggle-close"]');
  const menuButtonElement = document.querySelector('[data-toggle="menu__toggle"]');
  const menuItems = document.querySelectorAll('[data-item="menu_item"]');
  const isEscapeKey = (evt) => evt.key === 'Escape';
  const isEnterKey = (evt) => evt.key === 'Enter';


  const onDocumentEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMenu();
    }
  };

  const onMenuEnterKeydown = (evt) => {
    if (isEnterKey(evt)) {
      openMenu();
    }
  };

  const clickOutsideNav = (event) => {
    if (menuButtonElement.classList.contains('header__menu-toggle--is-open')) {
      if (!menuElement.contains(event.target) && !menuButtonElement.contains(event.target)) {
        closeMenu();
      }
    }
  };

  function toggleMenu() {
    menuButtonElement.classList.toggle('header__menu-toggle--is-open');
    menuElement.classList.toggle('visually-hidden');
    bodyElement.classList.toggle('scroll-lock');
    menuToggleOpen.classList.toggle('visually-hidden');
    menuToggleClose.classList.toggle('visually-hidden');
    bodyOverlayElement.classList.toggle('visually-hidden');
  }

  function openMenu() {
    toggleMenu();
    document.addEventListener('keydown', onDocumentEscapeKeydown);
    document.addEventListener('click', clickOutsideNav);
  }


  function closeMenu() {
    toggleMenu();
    document.removeEventListener('keydown', onDocumentEscapeKeydown);
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

  menuButtonElement.addEventListener('keydown', onMenuEnterKeydown);

};

export { burgerMenu };
