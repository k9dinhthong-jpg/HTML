// Nhập sinh viên vào bảng
class SinhVien {
  constructor(tensv, lop, namsinh, gioitinh, monhoc) {
    this.tensv = tensv;
    this.lop = lop;
    this.namsinh = namsinh;
    this.gioitinh = gioitinh;
    this.monhoc = monhoc;
  }
}

const SELECTOR = {
  tbody: ".qlsv-table tbody",
  monhocWrapper: "#id_monhoc",
  themMonBtn: "#id_themmon",
  themLopBtn: "#id_themlop",
  themSvBtn: "#themsv",
  tenSv: "#tensv",
  namSinh: "#namsinh",
  lop: "#id_lop",
  form: "#qlsv_form",
};

function qs(selector) {
  return document.querySelector(selector);
}

function renderRow({ tensv, lop, namsinh, gioitinh, monhoc }) {
  return `<tr>
    <td>${tensv}</td>
    <td>${lop}</td>
    <td>${namsinh}</td>
    <td>${gioitinh}</td>
    <td>${monhoc.join(", ")}</td>
    <td><button type="button" name="Sửa">Sửa</button><button type="button" name="Xóa">Xóa</button></td>
  </tr>`;
}

const dssv = [
  new SinhVien("Nguyễn Văn A", "A", "01/01/2000", "Nam", ["Toán"]),
  new SinhVien("Trần Thị B", "B", "02/02/2001", "Nữ", ["Hóa", "Lý"]),
  new SinhVien("Lê Văn C", "C", "03/03/2002", "Nam", ["Toán"]),
];

document.addEventListener("DOMContentLoaded", function () {
  const tbody = qs(SELECTOR.tbody);
  if (!tbody) {
    return;
  }

  dssv.forEach(function (sv) {
    tbody.innerHTML += renderRow({
      tensv: sv.tensv,
      lop: sv.lop,
      namsinh: sv.namsinh.split("/").reverse().join("-"),
      gioitinh: sv.gioitinh,
      monhoc: sv.monhoc,
    });
  });
});

// Thêm môn học mới vào danh sách
const clickThemmon = qs(SELECTOR.themMonBtn);
if (clickThemmon) {
  clickThemmon.addEventListener("click", function (event) {
    event.preventDefault();
    const monhoc = prompt("Nhập tên môn học mới:");
    const monhocTrim = monhoc ? monhoc.trim() : "";
    if (!monhocTrim) {
      return;
    }

    const dsmonhoc = qs(SELECTOR.monhocWrapper);
    if (!dsmonhoc) {
      return;
    }

    dsmonhoc.innerHTML += `<input type="checkbox" name="monhoc" value="${monhocTrim}" id="${monhocTrim}"><label for="${monhocTrim}">${monhocTrim}</label>`;
  });
}

// Thêm lớp mới vào danh sách
const clickThemlop = qs(SELECTOR.themLopBtn);
if (clickThemlop) {
  clickThemlop.addEventListener("click", function (event) {
    event.preventDefault();
    const lopmoi = prompt("Nhập tên lớp mới:");
    const lopmoiTrim = lopmoi ? lopmoi.trim() : "";
    if (!lopmoiTrim) {
      return;
    }

    const dslop = qs(SELECTOR.lop);
    if (!dslop) {
      return;
    }

    dslop.innerHTML += `<option value="${lopmoiTrim}">${lopmoiTrim}</option>`;
  });
}

// Thêm hoặc cập nhật sinh viên trong bảng
const clickThemsv = qs(SELECTOR.themSvBtn);
let hangsua = null;

if (clickThemsv) {
  clickThemsv.addEventListener("click", function (event) {
    event.preventDefault();
    const tenSvInput = qs(SELECTOR.tenSv);
    const namSinhInput = qs(SELECTOR.namSinh);
    const lopSelect = qs(SELECTOR.lop);
    const tbody = qs(SELECTOR.tbody);
    const gioitinhChecked = qs('input[name="gioitinh"]:checked');
    let monhoc = document.querySelectorAll('input[name="monhoc"]:checked');

    if (
      !tenSvInput ||
      !namSinhInput ||
      !lopSelect ||
      !tbody ||
      !gioitinhChecked
    ) {
      return;
    }

    monhoc = Array.from(monhoc).map((item) => item.id);
    const svData = {
      tensv: tenSvInput.value,
      lop: lopSelect.value,
      namsinh: namSinhInput.value,
      gioitinh: gioitinhChecked.id,
      monhoc,
    };

    if (clickThemsv.innerText === "Thêm sinh viên") {
      tbody.innerHTML += renderRow(svData);
    } else if (clickThemsv.innerText === "Cập nhật" && hangsua) {
      const cotsua = hangsua.querySelectorAll("td");
      cotsua[0].innerText = svData.tensv;
      cotsua[1].innerText = svData.lop;
      cotsua[2].innerText = svData.namsinh;
      cotsua[3].innerText = svData.gioitinh;
      cotsua[4].innerText = svData.monhoc.join(", ");
      clickThemsv.innerText = "Thêm sinh viên";
      hangsua = null;
    }

    const form = qs(SELECTOR.form);
    if (form) {
      form.reset();
    }
  });
}

// Sửa và xóa sinh viên trong bảng
const tbodyActions = qs(SELECTOR.tbody);
if (tbodyActions && clickThemsv) {
  tbodyActions.addEventListener("click", function (event) {
    if (event.target.name === "Xóa") {
      const rowsdelete = event.target.closest("tr");
      if (rowsdelete) {
        rowsdelete.remove();
      }
      return;
    }

    if (event.target.name === "Sửa") {
      clickThemsv.innerText = "Cập nhật";
      hangsua = event.target.closest("tr");
      if (!hangsua) {
        return;
      }

      const cotsua = hangsua.querySelectorAll("td");
      const tenSvInput = qs(SELECTOR.tenSv);
      const lopSelect = qs(SELECTOR.lop);
      const namSinhInput = qs(SELECTOR.namSinh);

      if (!tenSvInput || !lopSelect || !namSinhInput) {
        return;
      }

      tenSvInput.value = cotsua[0].innerText;
      lopSelect.value = cotsua[1].innerText;
      namSinhInput.value = cotsua[2].innerText;

      const gioitinhRadio = qs(
        `input[name="gioitinh"][id="${cotsua[3].innerText}"]`,
      );
      if (gioitinhRadio) {
        gioitinhRadio.checked = true;
      }

      const monhocDaChon = cotsua[4].innerText
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      document.querySelectorAll('input[name="monhoc"]').forEach((checkbox) => {
        checkbox.checked = monhocDaChon.includes(checkbox.id);
      });
    }
  });
}
