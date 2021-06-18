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
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__list");
  const layer = document.querySelector(".layer");
  const videoPopup = document.querySelector(".video__popup");
  if (e.target == burger || e.target == layer || e.target.classList.contains("header__link")) {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    layer.classList.toggle("active");
  }

  if (e.target == layer) {
    burger.classList.remove("active");
    nav.classList.remove("active");
    layer.classList.remove("active");
    videoPopup.classList.remove("active");
    if (document.querySelector(".gallery__popup")) {
      document.querySelector(".gallery__popup").remove();
    }
  }

  if (e.target.classList.contains("gallery__btn")) {
    const filter = e.target.dataset.filter;
    const items = document.querySelectorAll(".gallery__item");

    document.querySelector(".gallery__btn.active").classList.remove("active");
    e.target.classList.add("active");
    items.forEach((item) => item.classList.remove("hidden"));
    if (!(filter == "all")) {
      items.forEach((item) => {
        if (!(item.dataset.filter == filter)) {
          item.classList.add("hidden");
        }
      });
    }
  }

  if (e.target.classList.contains("video__play")) {
    videoPopup.classList.add("active");
    layer.classList.add("active");
  }

  if (e.target.classList.contains("gallery__item")) {
    const imgSrc = e.target.querySelector("img").getAttribute("src");
    const template = `
    <div class="gallery__popup">
      <button class="gallery__close">закрыть</button>
      <img src="${imgSrc}" />
    </div>
    `;
    e.target.insertAdjacentHTML("beforeend", template);
    layer.classList.add("active");
  }

  if (e.target.classList.contains("gallery__close")) {
    e.target.parentElement.remove();
    layer.classList.remove("active");
  }
});
