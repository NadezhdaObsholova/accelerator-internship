// https://swiperjs.com/get-started#installation
//import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import './vendor/swiper';
import {initHeroSlider} from './modules/slider/hero-slider';


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

 // iosVhFix();

  // Modules
  // ---------------------------------

  initHeroSlider();

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
