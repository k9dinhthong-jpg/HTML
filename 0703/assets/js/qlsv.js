/* Thêm môn học*/
let clickThemmon = document.querySelector("#id_themmon"); // Chon phần tử có id "id_themmon" và gán vào biến clickThemmon
clickThemmon.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn trang web tải lại khi click vào nút thêm môn học
  let nhapMonmoi = prompt("Nhập tên môn học mới:"); // Hiển thị hộp thoại yêu cầu nhập tên môn học mới
  let themMonmoi = document.createElement("input"); // Tạo một phần tử input mới
  themMonmoi.type = "checkbox"; // Gán thuộc tính type của phần tử input mới là "checkbox"
  themMonmoi.name = "monhoc"; // Gán thuộc tính name của phần tử input mới là "monhoc"
  themMonmoi.value = nhapMonmoi; // Gán thuộc tính value của phần tử input mới bằng tên môn học mới người dùng nhập
  themMonmoi.id = nhapMonmoi; // Gán thuộc tính id của phần tử input mới bằng tên môn học mới người dùng nhập
  let vitriThemmonmoi = document.querySelector("#id_monhoc"); // Chọn phần tử có id "id_monhoc" và gán vào biến vitriThemmonmoi
  let labelThemmonmoi = document.createElement("label"); // Tạo một phần tử label mới
  labelThemmonmoi.htmlFor = nhapMonmoi; // Gán thuộc tính htmlFor của phần tử label mới bằng tên môn học mới người dùng nhập
  labelThemmonmoi.textContent = nhapMonmoi; // Gán nội dung văn bản của phần tử label mới bằng tên môn học mới người dùng nhập
  vitriThemmonmoi.appendChild(themMonmoi); // Thêm phần tử input mới vào phần tử có id "id_monhoc"
  vitriThemmonmoi.appendChild(labelThemmonmoi); // Thêm phần tử label mới vào phần tử có id "id_monhoc"
});
/* Thêm lớp*/
let clickThemlop = document.querySelector("#id_themlop"); // Chọn phần tử có id "id_themlop" và gán vào biến clickThemlop
clickThemlop.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn trang web tải lại khi click vào nút thêm lớp
  let Nhaplopmoi = prompt("Nhập tên lớp mới:"); // Hiển thị hộp thoại yêu cầu nhập tên lớp mới
  let Themlopmoi = document.createElement("option"); // Tạo một phần tử option mới
  Themlopmoi.value = Nhaplopmoi; // Gán giá trị của phần tử option mới bằng tên lớp mới người dùng nhập
  Themlopmoi.textContent = Nhaplopmoi; // Gán nội dung văn bản của phần tử option mới bằng tên lớp mới người dùng nhập
  let VitriThemlopmoi = document.querySelector("#id_lop"); // Chọn phần tử có id "id_lop" và gán vào biến VitriThemlopmoi
  VitriThemlopmoi.appendChild(Themlopmoi); // Thêm phần tử option mới vào phần tử có id "id_lop"
});
/* Thêm sinh viên*/
let clickThemsv = document.querySelector("#themsv"); // Chọn phần tử có id "themsv" và gán vào biến clickThemsv
clickThemsv.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn trang web tải lại khi click vào nút thêm sinh viên
  let tensv = document.querySelector("#tensv").value; // Lấy giá trị của phần tử có id "tensv" và gán vào biến tensv
  let namsinh = document.querySelector("#namsinh").value; // Lấy giá trị của phần tử có id "namsinh" và gán vào biến namsinh
  let gioitinh = document.querySelector('input[name="gioitinh"]:checked').id; // Lấy giá trị của phần tử input có name "gioitinh" được chọn và gán vào biến gioitinh
  let monhoc = document.querySelectorAll('input[name="monhoc"]:checked'); // Lấy tất cả phần tử input có name "monhoc" được chọn và gán vào biến monhoc
  monhoc = Array.from(monhoc).map((item) => item.id); // Chuyển đổi NodeList monhoc thành mảng và lấy giá trị của mỗi phần tử checkbox được chọn
  let lop = document.querySelector("#id_lop").value; // Lấy giá trị của phần tử có id "id_lop" và gán vào biến lop
  /* Thêm vào bảng */
  let bảng = document.querySelector(".qlsv-table tbody"); // Chọn phần tử tbody của bảng và gán vào biến bảng
  if (document.querySelector("#themsv").innerText === "Thêm sinh viên") {
    let hàngmới = document.createElement("tr"); // Tạo một phần tử tr mới
    hàngmới.innerHTML = `
    <td>${tensv}</td>
    <td>${lop}</td>
    <td>${namsinh}</td>
    <td>${gioitinh}</td>
    <td>${monhoc.join(", ")}</td>
    <td><button type="button" name="Sửa" >Sửa</button><button type="button" name="Xóa" >Xóa</button></td>
  `;
    bảng.appendChild(hàngmới); // Thêm hàng mới vào bảng
  } else if (document.querySelector("#themsv").innerText === "Cập nhật") {
    let cotsua = hangsua.querySelectorAll("td"); // Lấy tất cả phần tử td trong hàng được sửa và gán vào biến cotsua
    cotsua[0].innerText = tensv; // Cập nhật nội dung của cột tên sinh viên bằng giá trị của biến tensv
    cotsua[1].innerText = lop; // Cập nhật nội dung của cột lớp bằng giá trị của biến lop
    cotsua[2].innerText = namsinh; // Cập nhật nội dung của cột năm sinh bằng giá trị của biến namsinh
    cotsua[3].innerText = gioitinh; // Cập nhật nội dung của cột giới tính bằng giá trị của biến gioitinh
    cotsua[4].innerText = monhoc.join(", "); // Cập nhật nội dung của cột môn học bằng giá trị của biến monhoc, được nối thành chuỗi với dấu ", " làm dấu phân cách
    document.querySelector("#themsv").innerText = "Thêm sinh viên"; // Thay đổi nội dung của phần tử có id "themsv" thành "Thêm sinh viên"
  }
  document.querySelector("#qlsv_form").reset(); // Đặt lại giá trị của form có id "qlsv_form" về mặc định sau khi thêm hoặc cập nhật sinh viên
});
/* Sửa hoặc Xóa sinh viên */

let suaxoaSinhvien = document.querySelector(".qlsv-table tbody"); // Chọn phần tử tbody của bảng và gán vào biến suaxoaSinhvien
let hangsua = null; // Khởi tạo biến hangsua với giá trị null
suaxoaSinhvien.addEventListener("click", function (event) {
  if (event.target.innerText === "Sửa") {
    // Kiểm tra nếu phần tử được click có nội dung là "Sửa"
    document.querySelector("#themsv").innerText = "Cập nhật"; // Thay đổi nội dung của phần tử có id "themsv" thành "Cập nhật"
    hangsua = event.target.closest("tr"); // Lấy phần tử tr gần nhất của phần tử được click và gán vào biến hangsua
    let cotsua = hangsua.querySelectorAll("td"); // Lấy tất cả phần tử td trong hàng được sửa và gán vào biến cotsua
    let tensv = cotsua[0].innerText; // Lấy nội dung của cột tên sinh viên và gán vào biến tensv
    document.querySelector("#tensv").value = tensv; // Gán giá trị của phần tử có id "tensv" bằng giá trị của biến tensv
    let lop = cotsua[1].innerText; // Lấy nội dung của cột lớp và gán vào biến lop
    document.querySelector("#id_lop").value = lop; // Gán giá trị của phần tử có id "id_lop" bằng giá trị của biến lop
    let namsinh = cotsua[2].innerText; // Lấy nội dung của cột năm sinh và gán vào biến namsinh
    document.querySelector("#namsinh").value = namsinh; // Gán giá trị của phần tử có id "namsinh" bằng năm sinh đã được định dạng
    let gioitinh = cotsua[3].innerText; // Lấy nội dung của cột giới tính và gán vào biến gioitinh
    document.querySelector(`input[name="gioitinh"][id="${gioitinh}"]`).checked =
      true; // Đánh dấu phần tử input có name "gioitinh" và id bằng giá trị của biến gioitinh là được chọn
    let monhoc = cotsua[4].innerText.split(","); // Lấy nội dung của cột môn học, tách thành mảng và gán vào biến monhoc
    monhoc.forEach((item) => {
      // Duyệt qua từng phần tử trong mảng monhoc
      document.querySelector(`input[name="monhoc"][id="${item}"]`).checked =
        true; // Đánh dấu phần tử input có name "monhoc" và id bằng giá trị của item là được chọn
    });
  } else if (event.target.innerText === "Xóa") {
    // Kiểm tra nếu phần tử được click có nội dung là "Xóa"
    let hangxoa = event.target.closest("tr"); // Lấy phần tử tr gần nhất của phần tử được click và gán vào biến hangxoa
    hangxoa.remove(); // Xóa hàng khỏi bảng
  }
});
