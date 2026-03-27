function validateform() {
  const inputname = document.getElementById("name").value;
  const inputpassword = document.getElementById("password").value;

  //check name phải là email hoặc số điện thoại
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  if (!emailRegex.test(inputname) && !phoneRegex.test(inputname)) {
    alert("Tên đăng nhập phải là email hoặc số điện thoại.");
    return false;
  }
  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return false;
  }
  return true;
}
function checklocalStorage() {
  const inputname = document.getElementById("name").value;
  const inputpassword = document.getElementById("password").value;

  localStorage.setItem("name", "k9dinhthong@gmail.com");
  localStorage.setItem("password", "123456");

  if (
    inputname === localStorage.getItem("name") &&
    inputpassword === localStorage.getItem("password")
  ) {
    alert("Đăng nhập thành công!");
    return true;
  } else {
    return false;
  }
}

const clicklogin = document.querySelector("form");
clicklogin.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateform() && checklocalStorage()) {
    window.location.href = "qlsv.html";
  } else {
    alert("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.");
  }
});
