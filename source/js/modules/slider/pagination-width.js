
const paginationWidth = () => {

  const programsSliderElement = document.querySelector('.programs__slider-item');
  const programsPagination = document.querySelector('[data-pagination="programs-pagination"]');
  const programsPaginationElements = programsPagination.querySelectorAll('.swiper-pagination-bullet');

  programsPaginationElements.forEach((item) => {
    item.style.width = `${programsSliderElement.offsetWidth}px`;
  });

};
export { paginationWidth };


