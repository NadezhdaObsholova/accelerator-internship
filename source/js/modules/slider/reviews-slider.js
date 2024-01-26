
import Swiper from 'swiper/bundle';


const initReviewsSlider = () => {

  const reviewsSlider = document.querySelector('[data-swiper="reviews-slider"]');
  const buttonNext = document.querySelector('[data-button="reviews-button-next"]');
  const buttonPrev = document.querySelector('[data-button="reviews-button-prev"]');
  const scrollBar = document.querySelector('[data-scroll="reviews-scroll"]');



  if (reviewsSlider) {
    // eslint-disable-next-line
    new Swiper(reviewsSlider, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      scrollbar: {
        el: scrollBar,
        draggable: true,
      },

      loop: false,

      breakpoints: {
        1440: {
          allowTouchMove: false,
          slidesPerView: 2,
          spaceBetween: 32,
          dragSize: 392,
          scrollbar: {
            dragSize: 392,
          },
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


export { initReviewsSlider };

