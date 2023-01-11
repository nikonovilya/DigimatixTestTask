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
    slidesPerView: 4,
    spaceBetween: 64,
    // breakpoints: {
    //   1101: {
    //     initialSlide: 1,
    //   },
    // },
  });
}

createSliders('.tabs__content-item');
