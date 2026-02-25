
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: false,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
