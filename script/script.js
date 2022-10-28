"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var body = document.querySelector('body');
window.addEventListener('load', function () {
  body.style.display = 'inline';
});
var headerNav = document.querySelector(".header__nav");

function scrollNav() {
  scrollY > headerNav.clientHeight ? headerNav.classList.add("scrolled") : headerNav.classList.remove("scrolled");
}

window.addEventListener("scroll", function () {
  return scrollNav();
});
var nav = document.querySelector(".header__nav"),
    headerBurger = nav.querySelector(".header__nav-burger"),
    headerList = nav.querySelector(".header__nav-list");
headerBurger.addEventListener("click", function () {
  nav.classList.toggle("open");
  headerBurger.classList.toggle("open");
  headerList.classList.toggle("open");
}); // swiper

var swiper = new Swiper('.swiper', _defineProperty({
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1.5,
  breakpoints: {
    1320: {
      slidesPerView: 2
    },
    1140: {
      slidesPerView: 1.7
    },
    960: {
      slidesPerView: 1.4
    },
    720: {
      slidesPerView: 1.1
    },
    540: {
      slidesPerView: 1.5
    }
  }
}, "pagination", {
  el: '.swiper-pagination',
  type: 'bullets'
}));