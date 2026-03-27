class sinhvien {
  constructor(ten, ngaysinh, gioitinh, mon, lop) {
    this.ten = ten;
    this.ngaysinh = ngaysinh;
    this.gioitinh = gioitinh;
    this.mon = mon;
    this.lop = lop;
  }
}
const danhsachsinhvien = [];
let sinhvien1 = new sinhvien(
  "Nguyễn Văn A",
  "01/01/2000",
  "Nam",
  ["Toán", "Hóa"],
  "A",
);
let sinhvien2 = new sinhvien("Trần Thị B", "02/02/2001", "Nữ", ["Hóa"], "B");
let sinhvien3 = new sinhvien("Lê Văn C", "03/03/2002", "Nam", ["Lý"], "C");
danhsachsinhvien.push(sinhvien1);
danhsachsinhvien.push(sinhvien2);
danhsachsinhvien.push(sinhvien3);

function Themmonhoc() {
  const inputmonhoc = prompt("Nhập tên môn học mới:");
  let taothemonhoc = document.createElement("input");
  taothemonhoc.type = "checkbox";
  taothemonhoc.name = "monhoc";
  taothemonhoc.value = inputmonhoc;
  taothemonhoc.id = inputmonhoc;
  const label = document.createElement("label");
  label.htmlFor = inputmonhoc;
  label.textContent = inputmonhoc;
  let vitri = document.querySelector("#themmonhoc");
  let vỉtri = document.querySelector(".subject");
  vitri.appendChild(createSubject);
  vitri.appendChild(createLabel);
}

function addSinhVien() {
  const ten = document.querySelector("#name").value;
  const ngaysinh = document.querySelector("#namsinh").value;
  const gioitinh = document.querySelector("#gioitinh").value;
  const mon = Array.from(
    document.querySelectorAll('input[name="monhoc"]:checked'),
  ).map((checkbox) => checkbox.value);
  const lop = document.querySelector("#Lop").value;
  console.log(ten, ngaysinh, gioitinh, mon, lop);
  const sinhvienmoi = new sinhvien(ten, ngaysinh, gioitinh, mon, lop);
  danhsachsinhvien.push(sinhvienmoi);
  let table = document.querySelector("tbody");
  table.innerHTML += `<tr>
        <td>${sinhvienmoi.ten}</td>
         <td>${sinhvienmoi.lop}</td>
        <td>${sinhvienmoi.ngaysinh}</td>
        <td>${sinhvienmoi.gioitinh}</td>
        <td>${sinhvienmoi.mon.join(", ")}</td>
        <td><button type="button" id="update">Cập nhật</button> <button type="button" id="delete">Xóa</button></td>
      </tr>`;
}

addEventListener("DOMContentLoaded", function () {
  let table = document.querySelector("tbody");
  danhsachsinhvien.forEach((sinhvien) => {
    table.innerHTML += `<tr>
        <td>${sinhvien.ten}</td>
         <td>${sinhvien.lop}</td>
        <td>${sinhvien.ngaysinh}</td>
        <td>${sinhvien.gioitinh}</td>
        <td>${sinhvien.mon.join(", ")}</td>
        <td><button type="button" id="update">Cập nhật</button> <button type="button" id="delete">Xóa</button></td>
      </tr>`;
  });
});

const clickThemmonhoc = document.querySelector("#themmonhoc");
clickThemmonhoc.addEventListener("click", function (event) {
  event.preventDefault();
  Themmonhoc();
});

const clickThemsinhvien = document.querySelector("form");
clickThemsinhvien.addEventListener("submit", function (event) {
  event.preventDefault();
  addSinhVien();
});
