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

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
  },
});

const PRODUCTS_SWIPER_DATA = [
  {
    id: 0,
    img: "product-slider-first.png",
    title: "Стальные листы",
    description: "Помимо широкого ассортимента металлических изделий, мы...",
  },
  {
    id: 1,
    img: "product-slider-second.png",
    title: "Стальные листы",
    description: "Помимо широкого ассортимента металлических изделий, мы...",
  },
  {
    id: 2,
    img: "product-slider-first.png",
    title: "Стальные листы",
    description: "Помимо широкого ассортимента металлических изделий, мы...",
  },
  {
    id: 3,
    img: "product-slider-second.png",
    title: "Стальные листы",
    description: "Помимо широкого ассортимента металлических изделий, мы...",
  },
  {
    id: 4,
    img: "product-slider-first.png",
    title: "Стальные листы",
    description: "Помимо широкого ассортимента металлических изделий, мы...",
  },
  {
    id: 5,
    img: "product-slider-second.png",
    title: "Стальные листы",
    description: "Помимо широкого ассортимента металлических изделий, мы...",
  },
];

PRODUCTS_SWIPER_DATA.forEach((slide, idx) => {
  const slider = document.createElement("div");
  slider.classList.add("swiper-slide");
  slider.innerHTML = `
  <div class="slide">
  <h5 class="slide-title">${slide.title}</h5>
  <p class="slide-description">${slide.description}</p>
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
