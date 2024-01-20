/*
const paginationWidth = () => {

  const programsSliderElement = document.querySelector('.programs__slider-item');
  const programsPagination = document.querySelector('.programs__pagination');
  const programsPaginationElement = programsPagination.querySelector('.swiper-pagination-bullet');

  programsPaginationElement.style.width = `${programsSliderElement.offsetWidth}px`;

};


export { paginationWidth };

*/

const paginationWidth = () => {
  const programsSliderElement = document.querySelector('.programs__slider-item');
  const programsPagination = document.querySelector('[data-pagination="programs-pagination"]');
  const programsPaginationElement = programsPagination.querySelector('.swiper-pagination-bullet');

  addEventListener('resize', () => { });
  onresize = () => {
    programsPaginationElement.style.width = `${programsSliderElement.offsetWidth}px`;
  };
};


export { paginationWidth };

