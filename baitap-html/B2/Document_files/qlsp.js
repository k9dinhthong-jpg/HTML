let BamThemloai = document.querySelector(".typesp");

BamThemloai.addEventListener("click", function (e) {
  e.preventDefault();

  let LoaiSP = prompt("Nhập tên loại sản phẩm mới:");

  if (!LoaiSP) {
    return; // sửa: kiểm tra nếu người dùng bấm cancel hoặc không nhập
  }

  LoaiSP = LoaiSP.trim();

  if (!LoaiSP) {
    return; // sửa: tránh nhập toàn khoảng trắng
  }

  let input = document.createElement("input");
  input.type = "checkbox";
  input.name = "LoaiSP"; // sửa: giữ cùng name để sau này querySelectorAll dễ lấy
  input.id = LoaiSP;
  input.value = LoaiSP;

  let label = document.createElement("label");
  label.htmlFor = LoaiSP;
  label.textContent = LoaiSP;

  let container = BamThemloai.parentElement;

  container.insertBefore(input, BamThemloai);
  // sửa: dùng insertBefore để checkbox mới nằm TRƯỚC nút "Thêm loại"

  container.insertBefore(label, BamThemloai);
  // sửa: label cũng đặt trước nút để UI đúng thứ tự
});

let BamThemhang = document.querySelector(".brand");

BamThemhang.addEventListener("click", function (e) {
  e.preventDefault();

  let Hang = prompt("Nhập tên hãng sản phẩm mới:");
  let input = document.createElement("input");
  input.type = "radio";
  input.name = "brand";
  input.id = Hang;
  input.value = Hang;

  let label = document.createElement("label");
  label.htmlFor = Hang;
  label.textContent = Hang;

  let container = BamThemhang.parentElement;
});

let BamThemSP = document.querySelector(".submit");

BamThemSP.addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let date = document.querySelector("#date").value;

  let LoaiSP = document.querySelectorAll('.box input[type="checkbox"]:checked');

  LoaiSP = Array.from(LoaiSP).map((item) => item.value || item.id);

  let Hang = document.querySelector('input[name="brand"]:checked');

  console.log("Tên sản phẩm:", name);
  console.log("Ngày sản xuất:", date);
  console.log("Loại sản phẩm:", LoaiSP);
  console.log("Hãng sản phẩm:", Hang);
});
