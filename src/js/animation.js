import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(Timeline, ScrollTrigger);

function addMainScreenAnimation() {
  const mainScreen = document.querySelector('.main-screen');
  const header = document.querySelector('.header');
  const title = document.querySelector('.main-screen__title');
  const text = document.querySelector('.main-screen__text');
  const actions = document.querySelector('.main-screen__actions');
  const planet = document.querySelector('.main-screen__planet');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mainScreen,
      start: 'top bottom',
      end: 'bottom top',
      render: false,
    },
  });

  tl.from(
    title,
    {
      delay: 1,
      duration: 1,
      y: '-60%',
      opacity: 0,
      ease: 'power1.inOut',
    },
    'offer'
  );

  tl.from(
    text,
    {
      delay: 1,
      duration: 1,
      y: '-60%',
      opacity: 0,
      ease: 'power1.inOut',
    },
    'offer'
  );

  tl.from(
    actions,
    {
      delay: 1,
      duration: 1,
      y: '-90%',
      opacity: 0,
      ease: 'power1.inOut',
    },
    'offer'
  );

  tl.from(
    header,
    {
      delay: 1.4,
      duration: 1,
      y: '-60%',
      opacity: 0,
      ease: 'power1.inOut',
    },
    'offer'
  );

  tl.from(planet, {
    duration: 2,
    scale: '0.6',
    opacity: 0,
    ease: 'power1.inOut',
  });
}

function addOffersAnimation() {
  const offersBlock = document.querySelector('.offers');
  const title = offersBlock.querySelector('.offers__title');
  const tabsNav = offersBlock.querySelector('.tabs__nav');
  const tabsContent = offersBlock.querySelector('.tabs__content');
  const tabsPagination = offersBlock.querySelector('.tabs__content-pagination');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: offersBlock,
      start: 'top+=200px bottom',
      end: 'bottom top',
      render: false,
    },
  });

  tl.from(title, {
    duration: 0.6,
    y: '40%',
    opacity: 0,
    ease: 'power1.inOut',
  });
  tl.from(tabsNav, {
    duration: 0.6,
    y: '40%',
    opacity: 0,
    ease: 'power1.inOut',
  });
  tl.from(tabsContent, {
    duration: 0.6,
    opacity: 0,
    ease: 'power1.inOut',
  });
  tl.from(tabsPagination, {
    duration: 0.6,
    opacity: 0,
    ease: 'power1.inOut',
  });
}

function addContactAnimation() {
  const contactBlok = document.querySelector('.contact');
  const title = contactBlok.querySelector('.contact__title');
  const text = contactBlok.querySelector('.contact__text');
  const form = contactBlok.querySelector('.contact-form');
  const footerLogo = document.querySelector('.footer__logo');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactBlok,
      start: 'top+=200px bottom',
      end: 'bottom top',
      render: false,
    },
  });

  tl.from(title, {
    duration: 0.6,
    y: '40%',
    opacity: 0,
    ease: 'power1.inOut',
  });
  tl.from(text, {
    duration: 0.6,
    y: '40%',
    opacity: 0,
    ease: 'power1.inOut',
  });
  tl.from(form, {
    duration: 0.6,
    opacity: 0,
    ease: 'power1.inOut',
  });
  tl.from(footerLogo, {
    duration: 0.6,
    y: '40%',
    opacity: 0,
    ease: 'power1.inOut',
  });
}

addMainScreenAnimation();
addOffersAnimation();
addContactAnimation();
