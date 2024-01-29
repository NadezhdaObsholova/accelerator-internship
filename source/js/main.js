import { initHeroSlider } from './modules/slider/hero-slider';
import { initProgramsSlider } from './modules/slider/programs-slider';
import { burgerMenu } from './modules/burger-menu';
import { scrollPage } from './modules/scroll-page';
import { initAccordions } from './vendor/accordion/init-accordion';
import { initReviewsSlider } from './modules/slider/reviews-slider';
import { initNewsSlider } from './modules/slider/news-slider';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------

  initHeroSlider();
  burgerMenu();
  scrollPage();
  initProgramsSlider();
  initReviewsSlider();
  initNewsSlider();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  window.addEventListener('load', () => {
  // const form = new Form();
  //  window.form = form;
  //  form.init();
    initAccordions();
  });

});
