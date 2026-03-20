function checkLogin(event) {
  const isLoggedIn = localStorage.getItem("login");
  console.log(isLoggedIn);
  if (isLoggedIn !== "true") {
    alert("Bạn chưa đăng nhập");
    window.location.href = "./login.html";
  }
}

function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("username");
  alert("Logout successful!");
  window.location.href = "./login.html";
}

function addtocart(button) {
}

document.addEventListener("DOMContentLoaded", function (event) {
  const username = localStorage.getItem("username");
  document.querySelector("#username").innerHTML = `WELCOME, ${username} !`;
  document.querySelector("#logout").innerHTML = "LOGOUT";
  checkLogin(event);
});

const clicklogout = document.querySelector("#logout");
clicklogout.addEventListener("click", function (event) {
  logout();
});
const clickaddtocart = document.querySelectorAll(".btn-addtocart");
clickaddtocart.forEach((button) => {
  button.addEventListener("click", function () {
    addtocart(this);
  });
});
