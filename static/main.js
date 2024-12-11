// function initializeSwiper() {
//   const swip = new Swiper(".swiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     speed: 400,
//     freeMode: true,
//     navigation: {
//       nextEl: '.next',
//       prevEl: '.prev',
//     },
//     preventClicks: false, // Allow button clicks
//     noSwiping: false, // Allow swiping functionality
//   });
// }
// document.addEventListener("DOMContentLoaded", initializeSwiper);
const swip = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 60,
    loop: false,
    speed: 500,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      loopAdditionalSlides: 3,
    },
    884: {
      slidesPerView: 3,
      
    },
    1280: {
      slidesPerView: 5
    }
    },
    preventClicks: true, // Allow button clicks
    noSwiping: true, // Allow swiping functionality
});
const brand = new Swiper(".newly-brand", {
    slidesPerView: 6,
    spaceBetween: 60,
    loop: false,
    speed: 500,
    navigation: {
      nextEl: '.next-brand',
      prevEl: '.prev-brand',
    },
  breakpoints: {
    390: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      loopAdditionalSlides: 3,
    },
    884: {
      slidesPerView: 1,
      
    },
    1280: {
      slidesPerView: 3
    }
    },
    preventClicks: true, // Allow button clicks
    noSwiping: true, // Allow swiping functionality
});
document.querySelector('.next').addEventListener('click', () => console.log('Next clicked!'));
document.querySelector('.prev').addEventListener('click', () => console.log('Prev clicked!'));
