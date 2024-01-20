
import Swiper from 'swiper/bundle';


const initProgramsSlider = () => {

  const programsSlider = document.querySelector('[data-swiper="programs-slider"]');
  const programsPagination = document.querySelector('[data-pagination="programs-pagination"]');
  const buttonNext = document.querySelector('[data-button="programs-button-next"]');
  const buttonPrev = document.querySelector('[data-button="programs-button-prev"]');

  if (programsSlider) {
    // eslint-disable-next-line
     new Swiper(programsSlider, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      pagination: {
        el: programsPagination,
        clickable: true,
      },

      loop: true,

      breakpoints: {
        1440: {
          initialSlide: 0,
          slidesPerView: 3,
          spaceBetween: 32,
        },

        768: {
         // initialSlide: 3,
          spaceBetween: 30,
        },

        320: {
          initialSlide: 3,
          slidesPerView: 1,
        },
      },
    });
  }
};


export { initProgramsSlider };

