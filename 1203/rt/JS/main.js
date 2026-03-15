// nhập danh sách người dùng từ api
const clickTaidulieu = document.querySelector("#taidulieu");
const trangthai = document.querySelector("#trangthai");
const thongbao = document.querySelector("#thongbao");
const danhsach = document.querySelector("#danhsach");
function taidulieu() {
  trangthai.textContent = "Đang tải dữ liệu...";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((ketqua) => {
      if (!ketqua.ok) {
        throw new Error("Đã xảy ra lỗi khi tải dữ liệu: " + ketqua.status);
      }
      return ketqua.json();
    })
    .then((dulieu) => {
      thongbao.textContent = "Dữ liệu đã được tải thành công.";
      trangthai.textContent = "Danh sách người dùng:";
      danhsach.innerHTML = "";
      dulieu.forEach((nguoidung) => {
        const themoi = document.createElement("li");
        themoi.textContent = `${nguoidung.name} (${nguoidung.email})`;
        danhsach.appendChild(themoi);
      });
    })
    .catch((loi) => {
      trangthai.textContent = "Đã xảy ra lỗi khi tải dữ liệu.";
      thongbao.textContent = "Lỗi: " + loi.message;
    });
}
clickTaidulieu.addEventListener("click", function () {
  taidulieu();
});
// tim kiếm
const clickTimkiem = document.querySelector("#timkiem");
const noidungtimkiem = document.querySelector("#tukhoa");
const trangthaitimkiem = document.querySelector("#trangthai-timkiem");
const ketquatimkiem = document.querySelector("#ketqua-timkiem");
const thongbaotimkiem = document.querySelector("#thongbao-timkiem");

function timkiem() {
  if (danhsach.children.length === 0) {
    thongbaotimkiem.textContent = "Vui lòng tải dữ liệu trước khi tìm kiếm.";
    return;
  }
  const tukhoa = noidungtimkiem.value.trim().toLowerCase();
  if (tukhoa === "") {
    thongbaotimkiem.textContent = "Vui lòng nhập từ khóa tìm kiếm.";
    return;
  }
  trangthaitimkiem.textContent = "Đang tìm kiếm...";
  ketquatimkiem.innerHTML = "";
  const ketqua = [];
  danhsach.querySelectorAll("li").forEach((nguoidung) => {
    if (nguoidung.textContent.toLowerCase().includes(tukhoa)) {
      ketqua.push(nguoidung);
    }
  });
  if (ketqua.length > 0) {
    ketqua.forEach((nguoidung) => {
      const themoi = document.createElement("li");
      themoi.textContent = nguoidung.textContent;
      ketquatimkiem.appendChild(themoi);
    });
    trangthaitimkiem.textContent = `Tìm thấy ${ketqua.length} kết quả.`;
    thongbaotimkiem.textContent = "";
  } else {
    trangthaitimkiem.textContent = "Không tìm thấy kết quả nào.";
    thongbaotimkiem.textContent = "";
  }
}
clickTimkiem.addEventListener("click", function () {
  timkiem();
});

//hiển thị dữ liệu người dùng đã tải về

let dulieuNguoidung = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    dulieuNguoidung = data;
  });
const chitiet = document.querySelector("#chitiet");
ketquatimkiem.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const text = e.target.textContent;
    const user = dulieuNguoidung.find((u) => `${u.name} (${u.email})` === text);
    if (user) {
      chitiet.innerHTML = `Tên: ${user.name}<br>
         Email: ${user.email}<br>
         SĐT: ${user.phone}<br>
         Website: ${user.website}<br>
         Công ty: ${user.company.name}<br>
         Địa chỉ: ${user.address.street}, ${user.address.city}`;
    }
  }
});
