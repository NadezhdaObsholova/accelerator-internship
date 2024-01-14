import { initHeroSlider } from './modules/slider/hero-slider';
import { burgerMenu } from './modules/burger-menu';


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------

  initHeroSlider();
  burgerMenu();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  /*
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
  */
});
