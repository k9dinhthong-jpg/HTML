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
  if (window.scrollY > window.innerHeight * 0.02) {
    sitenav.classList.add("sticky-top");
  } else {
    sitenav.classList.remove("sticky-top");
  }
});
// Làm sáng thẻ khi trang đang ở thẻ đó
const navLinks = document.querySelectorAll(".site-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
// Hiển thị menu khi click vào biểu tượng
// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-Toggle");
//   const navMenu = document.getElementById("nav-Menu");
//   menuToggle.addEventListener("click", function () {
//     navMenu.classList.toggle("show");
//   });
// });

function toggleProductMenu() {
  const productMenus = document.querySelectorAll(".product-menu");

  productMenus.forEach(function (menu) {
    const productMenuItem = menu.querySelector(".product-menu-item");

    menu.addEventListener("mouseenter", function () {
      productMenuItem.style.display = "block";
    });

    menu.addEventListener("mouseleave", function () {
      productMenuItem.style.display = "none";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  toggleProductMenu();
});
