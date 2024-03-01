
import Swiper from 'swiper/bundle';


const initProgramsSlider = () => {

  const programsSlider = document.querySelector('[data-swiper="programs-slider"]');
  const buttonNext = document.querySelector('[data-button="programs-button-next"]');
  const buttonPrev = document.querySelector('[data-button="programs-button-prev"]');
  const scrollBar = document.querySelector('[data-scroll="programs-scroll"]');
  const programsSliderElement = document.querySelector('[data-slider="programs-slider"]');
  const width = programsSliderElement.offsetWidth;


  if (programsSlider) {
    // eslint-disable-next-line
    new Swiper(programsSlider, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      scrollbar: {
        el: scrollBar,
        draggable: true,
        dragSize: width,
      },

      loop: false,

      breakpoints: {
        1440: {
          allowTouchMove: false,
          slidesPerView: 'auto',
          spaceBetween: 32,
        },

        768: {
          allowTouchMove: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
        },
      },
    });
  }
};


export { initProgramsSlider };

