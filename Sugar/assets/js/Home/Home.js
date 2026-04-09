// Gắn thanh tiêu đề lên đầu trang khi cuộn chuột
const sitenav = document.querySelector(".thanh-dieu-huong");
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight * 0.02) {
    sitenav.classList.add("gan-tren");
  } else {
    sitenav.classList.remove("gan-tren");
  }
});

// Hiển thị menu sản phẩm khi chỉ vào "SẢN PHẨM"
function toggleProductMenu() {
  const productMenu = document.querySelector(".danh-sach");
  const productMenuItem = document.querySelector(".danh-sach-lua-chon");
  productMenu.addEventListener("mouseenter", function () {
    productMenuItem.style.display = "block"; // hiển thị menu
  });
  productMenu.addEventListener("mouseleave", function () {
    productMenuItem.style.display = "none"; // ẩn menu
  });
}

// Gọi hàm để kích hoạt sự kiện
document.addEventListener("DOMContentLoaded", function () {
  toggleProductMenu();
});



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

// Làm sáng thẻ khi trang đang ở thẻ đó
const navLinks = document.querySelectorAll(".thanh-dieu-huong .nav-link");

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
