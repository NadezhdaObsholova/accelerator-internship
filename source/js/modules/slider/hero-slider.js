
import Swiper from 'swiper/bundle';


const initHeroSlider = () => {

  const heroSlider = document.querySelector('[data-swiper="hero-slider"]');
  const heroPagination = document.querySelector('[data-pagination="hero-pagination"]');

  if (heroSlider) {
    // eslint-disable-next-line
     new Swiper(heroSlider, {

      pagination: {
        el: heroPagination,
        clickable: true,
      },

      autoplay: {
        delay: 3000,
      },

      autoHeight: true,
      loop: true,
      breakpoints: {
        1440: {
          allowTouchMove: false,
        },

        768: {
          allowTouchMove: true,
          autoplay: false,
        },
      },
    });
  }
};


export { initHeroSlider };
