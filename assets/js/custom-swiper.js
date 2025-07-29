/*========================
    custom swiper js
==========================*/
var swiper_One = new Swiper(".property-home-slider", {
  speed: 2000,
  freeMode: true,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

var swiper_Two = new Swiper(".property-image-slider", {
  freeMode: true,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var thumbSubSlider = new Swiper(".thumb-sub-slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var thumbMainSlider = new Swiper(".thumb-main-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSubSlider,
  },
});

var discoverySlider = new Swiper(".discovery-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

var amenitiesSlider = new Swiper(".amenities-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

var carSlider = new Swiper(".car-slider", {
  slidesPerView: 3,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
  },
});

var carSlider2 = new Swiper(".car-slider-main", {
  speed: 2000,
  spaceBetween: 10,
  freeMode: true,
  thumbs: {
    swiper: carSlider,
  },
});

var categoriesSlider = new Swiper(".car-categories-slider", {
  slidesPerView: 5,
  spaceBetween: 40,
  speed: 2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

var tabSlider = new Swiper(".car-tab-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 14,
    },
    350: {
      slidesPerView: 1.5,
      spaceBetween: 14,
    },
    525: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 14,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1150: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var testimonialsSlider = new Swiper(".car-testimonials-slider", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var aboutJobSlider = new Swiper(".about-job-slider", {
  navigation: {
    nextEl: ".job-about-next",
    prevEl: ".job-about-prev",
  },
});

var categoryInnerSlider = new Swiper(".category-inner-slider", {
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  speed: 2000,
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

var detailSwiperSlider = new Swiper(".detail-swiper-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var detailPropertySlider = new Swiper(".detail-property-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var scheduleSlider = new Swiper(".schedule-slider", {
  slidesPerView: 7,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    470: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});

var stickyScheduleSlider = new Swiper(".sticky-schedule-slider", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var detailBreadcrumbsSlider = new Swiper(".detail-breadcrumbs-slider", {
  slidesPerView: 4,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

var subVertical = new Swiper(".sub-vertical-image", {
  loop: true,
  direction: "vertical",
  slidesPerView: 6,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 3,
      direction: "horizontal",
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 6,
    },
  },
});

var mainVertical = new Swiper(".main-vertical-image", {
  direction: "vertical",
  loop: true,
  breakpoints: {
    0: {
      direction: "horizontal",
    },
    768: {
      direction: "vertical",
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: subVertical,
  },
});

var breadcrumbThumb = new Swiper(".breadcrumb-thumb", {
  slidesPerView: 7,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    470: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});

var breadcrumbThumbs = new Swiper(".breadcrumb-thumbs", {
  spaceBetween: 10,
  thumbs: {
    swiper: breadcrumbThumb,
  },
});

var oneHalfSlider = new Swiper(".one-half-slider", {
  slidesPerView: 1.2,
  spaceBetween: 10,
});

var CarrelatedSlider = new Swiper(".car-related-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".car-related-next",
    prevEl: ".car-related-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    368: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var CarDetailSlider = new Swiper(".car-detail-slider", {
  slidesPerView: 4,
  speed: 2000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    470: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

var carExpandSlider = new Swiper(".car-expand-slider", {
  slidesPerView: 5,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    470: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

var detailSimpleSlider = new Swiper(".detail-simple-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var frontSlider = new Swiper(".front-slider", {
  spaceBetween: 20,
  direction: "vertical",
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    470: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var backSlider = new Swiper(".back-slider", {
  spaceBetween: 10,
  effect: "fade",
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: frontSlider,
  },
});

var blogBreadcrumbs = new Swiper(".blog-breadcrumbs-slider", {
  slidesPerView: 4,
  speed: 2000,
  spaceBetween: 30,
  autoplay: { enabled: false },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
    354: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      autoplay: { enabled: false },
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: { enabled: false },
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      autoplay: { enabled: false },
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 15,
      autoplay: { enabled: false },
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: { enabled: false },
    },
  },
  navigation: {
    nextEl: ".blog-next-swiper",
    prevEl: ".blog-prev-swiper",
  },
});

var blogDetailSlider = new Swiper(".blog-detail-slider", {
  loop: true,
  speed: 2000,
  autoplay: { enabled: false },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
  },
  navigation: {
    nextEl: ".blog-next-detail",
    prevEl: ".blog-prev-detail",
  },
});

var swiper = new Swiper(".portfolio-coverflow-slider", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".portfolio-next",
    prevEl: ".portfolio-prev",
  },
});

var portfolioImagesSlider = new Swiper(".portfolio-images-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var portfolioVerticalSlider = new Swiper(".portfolio-vertical-slider", {
  effect: "fade",
  direction: "vertical",
  speed: 1000,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var darkCategorySlider = new Swiper(".dark-category-slider", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".dark-category-next",
    prevEl: ".dark-category-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1602: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

var darkTestimonialSlider = new Swiper(".dark-testimonial-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var job3Category = new Swiper(".job3-category-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".job-category-next",
    prevEl: ".job-category-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var job3BoxSlider = new Swiper(".job3-box-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1399: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var logoJob3Slider = new Swiper(".logo-job3-slider", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 65,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1399: {
      slidesPerView: 6,
      spaceBetween: 65,
    },
  },
});

var logoCar2Slider = new Swiper(".logo-car2-slider", {
  slidesPerView: 5,
  spaceBetween: 120,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1399: {
      slidesPerView: 5,
      spaceBetween: 120,
    },
  },
});

var car2CategorySlider = new Swiper(".car2-category-slider", {
  slidesPerView: 5,
  spaceBetween: 25,
  navigation: {
    nextEl: ".car2-category-next",
    prevEl: ".car2-category-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        enabled: true,
      },
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: { enabled: false },
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 15,
      autoplay: { enabled: false },
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 25,
      autoplay: { enabled: false },
    },
  },
});

var car2FeaturedSlider = new Swiper(".car2-featured-slider", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var job3BoxSlider = new Swiper(".car2-testimonial-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var car2InstaSlider = new Swiper(".car2-insta-slider", {
  slidesPerView: 9,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    445: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 6,
    },
    1299: {
      slidesPerView: 7,
    },
    1500: {
      slidesPerView: 8,
    },
    1650: {
      slidesPerView: 9,
    },
  },
});

var property2FeaturedSlider = new Swiper(".property2-featured-slider", {
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var aboutTeamSlider = new Swiper(".about-team-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".about-team-next",
    prevEl: ".about-team-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1299: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

var modalSwiperSlider = new Swiper(".modal-swiper-slider", {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
var userJobSwiper = new Swiper(".user-job-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 1,
    },
    1460: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
