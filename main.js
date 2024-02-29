"use strict";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const swipers = new Swiper(".swipers", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 30,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const PRODUCTS_SWIPER_DATA = [
  {
    id: 0,
    img: "product-slider-first.png",
    title: "Стальные листы",
  },
  {
    id: 1,
    img: "product-slider-second.png",
    title: "Стальные листы",
  },
  {
    id: 2,
    img: "product-slider-first.png",
    title: "Стальные листы",
  },
  {
    id: 3,
    img: "product-slider-second.png",
    title: "Стальные листы",
  },
  {
    id: 4,
    img: "product-slider-first.png",
    title: "Стальные листы",
  },
  {
    id: 5,
    img: "product-slider-second.png",
    title: "Стальные листы",
  },
];

PRODUCTS_SWIPER_DATA.forEach((slide, idx) => {
  const slider = document.createElement("div");
  slider.classList.add("swiper-slide");
  slider.innerHTML = `
  <div class="slide">
  <h5 class="slide-title">${slide.title}</h5>
</div>
<img
  class="slide-image"
  src="./assets/images/${slide.img}"
  alt="first-pic"
/>`;

  window.document
    .querySelector(".products .swipers .swiper-wrapper")
    .append(slider);
});
