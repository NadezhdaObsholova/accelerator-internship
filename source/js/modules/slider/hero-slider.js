
import Swiper from '../../vendor/swiper';

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

      loop: true,
    });
  }
};


export { initHeroSlider };
