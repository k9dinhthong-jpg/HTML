let clickLogin = document.querySelector("button[type='submit']"); // Bộ chọn CSS ( Atribute Selector )
// let clickLogin = document.querySelector(".class-login-button"); // Bộ chọn CSS ( Class Selector )
// let clickLogin = document.querySelector("#id-login-button"); // Bộ chọn CSS ( ID Selector )]");
clickLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let username = document.querySelector("input[name='username']").value;
  let password = document.querySelector("input[name='password']").value;
  if (username === "admin" && password === "123456") {
    alert("Đăng nhập thành công!");
    window.location.href = "qlsv.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng !!!");
  }
});
