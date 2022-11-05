(() => {
  let eventsSlider = new Swiper(".js-events-slider", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },

    spaceBetween: 20,
    pagination: {
      el: ".js-events-pagination",
      clickable: true,
    },

    all: {
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    },

    navigation: {
      nextEl: ".js-events-slider-next",
      prevEl: ".js-events-slider-prev",
      disabledClass: "navigation-btn_disabled"
    },

    breakpoints: {
      611: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      971: {
        slidesPerView: 3,
        spaceBetween: 27
      },

      1281: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }

  })
})();

