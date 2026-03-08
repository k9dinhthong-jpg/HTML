/* Thêm Môn*/
let clickAddsubject = document.querySelectorAll(".qlsv-register button")[0];
clickAddsubject.addEventListener("click", function (event) {
  event.preventDefault();
  let inputSubject = prompt("Nhập tên môn học:");
  let createSubject = document.createElement("input");
  createSubject.type = "checkbox";
  createSubject.id = inputSubject;
  createSubject.name = "monhoc";
  let createLabel = document.createElement("label");
  createLabel.htmlFor = inputSubject;
  createLabel.innerText = inputSubject;
  let subjectArea = document.querySelector(".subject");
  subjectArea.appendChild(createSubject);
  subjectArea.appendChild(createLabel);
});
/* Thêm Lớp */
let clickAddclass = document.querySelectorAll(".qlsv-register button")[1];
clickAddclass.addEventListener("click", function (event) {
  event.preventDefault();
  let inputClass = prompt("Nhập tên lớp:");
  let createOption = document.createElement("option");
  createOption.value = inputClass;
  createOption.innerText = inputClass;
  let classArea = document.querySelector("select[name='lop']");
  classArea.appendChild(createOption);
});
/* Thêm Sinh Viên */
let clickAddstudent = document.querySelector("#qlsv_form");
clickAddstudent.addEventListener("submit", function (event) {
  event.preventDefault();
  let tensv = document.querySelector("#tensv").value;
  let namsinh = document.querySelector("#namsinh").value;
  let gioitinh = document.querySelector("input[name='gioitinh']:checked").id;
  let monhoc = document.querySelectorAll("input[name='monhoc']:checked");
  monhoc = Array.from(monhoc).map((item) => item.id);
  let lop = document.querySelector("select[name='lop']").value;
  /* Thêm vào bảng */
  let table = document.querySelector(".qlsv-table tbody");
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${tensv}</td>
    <td>${lop}</td>
    <td>${namsinh}</td>
    <td>${gioitinh}</td>
    <td>${monhoc}</td>
    <td><button type="button">Sửa</button><button type="button">Xóa</button></td>
`;
  table.appendChild(newRow);
});
// /* Sửa Sinh Viên - Xóa Sinh Viên */
let editsv = document.querySelector(".qlsv-table tbody");
editsv.addEventListener("click", function (event) {
  if (event.target.innerText === "Sửa") {
    let row = event.target.closest("tr");
    let cells = row.querySelectorAll("td");
    let tensv = cells[0].innerText;
    let lop = cells[1].innerText;
    let namsinh = cells[2].innerText;
    let gioitinh = cells[3].innerText;
    let monhoc = cells[4].innerText.split(",");
    document.querySelector("#tensv").value = tensv;
    document.querySelector("select[name='lop']").value = lop;
    let parts = namsinh.split("/");
    let formatDate = parts[2] + "-" + parts[1] + "-" + parts[0];
    document.querySelector("#namsinh").value = formatDate;
    document.querySelector(`input[name='gioitinh'][id='${gioitinh}']`).checked =
      true;
    monhoc.forEach((item) => {
      let checkbox = document.querySelector(
        `input[name='monhoc'][id='${item}']`,
      );
      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }
  if (event.target.innerText === "Xóa") {
    let row = event.target.closest("tr");
    row.remove();
  }
});
