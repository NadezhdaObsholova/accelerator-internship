
import Swiper from 'swiper/bundle';


const initNewsSlider = () => {

  const newsSlider = document.querySelector('[data-swiper="news-slider"]');
  const buttonNext = document.querySelector('[data-button="news-button-next"]');
  const buttonPrev = document.querySelector('[data-button="news-button-prev"]');
  const newsPagination = document.querySelector('[data-pagination="news-pagination"]');



  if (newsSlider) {
    // eslint-disable-next-line
    new Swiper(newsSlider, {

      pagination: {
        el: newsPagination,
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: false,

      breakpoints: {
        1440: {
          slidesPerView: 'auto',
          slidesPerGroup: 4,
          spaceBetween: 32,
        },
        768: {
          autoHeight: false,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          rows: 2,
          grid: {
            rows: 2,
          },
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 2,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
      },
    });
  }
};


export { initNewsSlider };

/*const newsSwiperOptions = {
  loop: newsSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="news"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="news"] [data-swiper="button-prev"]',
  },
  pagination: {
    el: '[data-swiper="news-pagination"]',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className }">${ index + 1 }</span>`;
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
  },
};
*/
