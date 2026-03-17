function validateForm(event) {
  event.preventDefault();
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const day = document.querySelector("#day").value;
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;
  const email = document.querySelector("#email-id").value;
  const mobileNumber = document.querySelector("#mobile-number").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const address = document.querySelector("#address").value;

  let firstNameRegex = /^[A-Za-z]{1,30}$/;
  if (!firstNameRegex.test(firstName)) {
    alert("Nhập tối đa 30 ký tự, bao gồm các chữ cái a-z hoặc A-Z");
    return;
  }
  let lastNameRegex = /^[A-Za-z]{1,30}$/;
  if (!lastNameRegex.test(lastName)) {
    alert("Nhập tối đa 30 ký tự, bao gồm các chữ cái a-z hoặc A-Z");
    return;
  }
  if (day === "" || month === "" || year === "") {
    alert("Nhập ngày tháng năm sinh");
    return;
  }
  if (year % 4 === 0 && month == 2 && day > 29) {
    alert("Năm nhuận chỉ có 29 ngày trong tháng 2");
    return;
  }
  if (year % 4 !== 0 && month == 2 && day > 28) {
    alert("Năm không nhuận chỉ có 28 ngày trong tháng 2");
    return;
  }
  if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
    alert("Tháng 4, 6, 9, 11 chỉ có 30 ngày");
    return;
  }
  if (
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12) &&
    day > 31
  ) {
    alert("Tháng 1, 3, 5, 7, 8, 10, 12 chỉ có 31 ngày");
    return;
  }
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Địa chỉ email không hợp lệ");
    return;
  }
  let mobileNumberRegex = /^\d{10}$/;
  if (!mobileNumberRegex.test(mobileNumber)) {
    alert("Số điện thoại phải là 10 chữ số");
    return;
  }
  if (!gender) {
    alert("Vui lòng chọn giới tính");
    return;
  }
  if (address.trim() === "") {
    alert("Địa chỉ không được để trống");
    return;
  }
  alert("Đăng ký thành công!");
  resetForm();
}

function createDayOptions() {
  for (let i = 1; i <= 31; i++) {
    day.innerHTML += `<option value="${i}">${i}</option>`;
  }
  for (let i = 1; i <= 12; i++) {
    month.innerHTML += `<option value="${i}">${i}</option>`;
  }
  for (let i = 1980; i <= 2000; i++) {
    year.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

function resetForm() {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#day").value = "";
  document.querySelector("#month").value = "";
  document.querySelector("#year").value = "";
  document.querySelector("#email-id").value = "";
  document.querySelector("#mobile-number").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.querySelector("#address").value = "";
}

createDayOptions();

const clicksubmit = document.querySelector("form");
clicksubmit.addEventListener("submit", validateForm);

const clickreset = document.querySelector("#reset");
clickreset.addEventListener("click", function () {
  resetForm();
});
