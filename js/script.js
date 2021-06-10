$(document).ready(function () {
  $(".blog__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
});

document.addEventListener("click", function (e) {
  const body = document.querySelector("html");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");
  const layer = document.querySelector(".layer");
  if (e.target == burger || e.target == layer || e.target.classList.contains("header__link")) {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    layer.classList.toggle("active");
    body.classList.toggle("active");
  }
});
