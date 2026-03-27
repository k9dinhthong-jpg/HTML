/* Đăng nhập */
function login(e) {
  e.preventDefault();
  let user = document.querySelector("#username").value;
  let pass = document.querySelector("#password").value;
  if (user === "admin" && pass === "zxcv1234") {
    window.location.href = "qlsv.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
}
let clickLogin = document.querySelector(".click-Login");
clickLogin.addEventListener("click", login);
