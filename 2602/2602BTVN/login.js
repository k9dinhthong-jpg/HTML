document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123456") {
    localStorage.setItem("login", "true");
    window.location.href = "qlsv.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});
