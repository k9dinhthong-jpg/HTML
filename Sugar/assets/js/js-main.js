// Dùng để chuyển slider ảnh trên trang chủ
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
  });
});

const sitenav = document.querySelector(".site-nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    sitenav.classList.add("sticky-top");
  } else {
    sitenav.classList.remove("sticky-top");
  }
});

