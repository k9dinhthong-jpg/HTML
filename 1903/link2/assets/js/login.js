function validateForm() {
  const Inputusername = document.querySelector("#username").value;
  const Inputpassword = document.querySelector("#password").value;
  const username = "sugar";
  const password = "sugar";
  console.log(Inputpassword, Inputusername);
  if (Inputusername === username && Inputpassword === password) {
    localStorage.setItem("login", "true");
    localStorage.setItem("username", "Sugar");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

const clicksignin = document.querySelector("form");
clicksignin.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});
