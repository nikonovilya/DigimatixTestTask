import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

function createSliders(className) {
  // eslint-disable-next-line no-unused-vars
  const slider = new Swiper(className, {
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: '.tabs__content-btn.tabs__content-btn--prev',
      nextEl: '.tabs__content-btn.tabs__content-btn--next',
    },
    pagination: {
      el: '.tabs__content-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
      561: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 64,
      },
    },
  });
}

createSliders('.tabs__content-item');
