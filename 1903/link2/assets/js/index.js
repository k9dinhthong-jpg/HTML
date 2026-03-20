function checkLogin(event) {
  const isLoggedIn = localStorage.getItem("login");
  console.log(isLoggedIn);
  if (isLoggedIn !== "true") {
    alert("Bạn chưa đăng nhập");
    window.location.href = "./login.html";
  }
}

class Product {
  constructor(name, category, releasedate, price) {
    this.name = name;
    this.category = category;
    this.releasedate = releasedate;
    this.price = price;
  }
}
let item1 = new Product(
  "Settlers of Catan",
  "Toy & Game",
  "2019-09-20",
  "19.99",
);
let item2 = new Product("Think and Grow Rich", "Book", "2019-09-20", "9.99");
let item3 = new Product("Game of Thrones", "DVD", "2019-09-20", "14.99");
let item4 = new Product("iPhone 11", "Phone", "2019-09-20", "699.99");
let item5 = new Product("Samsung Galaxy S20", "Phone", "2019-09-20", "999.99");
let item6 = new Product("MacBook Pro", "Laptop", "2019-09-20", "1299.99");
let item7 = new Product("Dell XPS 13", "Laptop", "2019-09-20", "999.99");
let item8 = new Product(
  "Sony WH-1000XM3",
  "Headphones",
  "2019-09-20",
  "349.99",
);
let item9 = new Product(
  "Bose QuietComfort 35 II",
  "Headphones",
  "2019-09-20",
  "299.99",
);
let item10 = new Product(
  "Apple Watch Series 5",
  "Smartwatch",
  "2019-09-20",
  "399.99",
);

let listProduct = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
];

function addbook() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  listProduct.forEach((item) => {
    tbody.innerHTML += `
    <tr>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.releasedate}</td>
      <td>${item.price}</td>
    </tr>
  `;
  });
}

function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#category").value = "";
  document.querySelector("#releasedate").value = "";
  document.querySelector("#price").value = "";
}

function validateForm(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const category = document.querySelector("#category").value;
  const releasedate = document.querySelector("#releasedate").value;
  const price = document.querySelector("#price").value;
  console.log(name, category, releasedate, price);
  if (name === "" || category === "" || releasedate === "" || price === "") {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }
  const newProduct = new Product(name, category, releasedate, price);
  listProduct.push(newProduct);
  addbook();
  clearForm();
}

function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("username");
  alert("Logout successful!");
  window.location.href = "./login.html";
}

document.addEventListener("DOMContentLoaded", function (event) {
  const username = localStorage.getItem("username");
  document.querySelector("#username").innerHTML = `WELCOME, ${username} !`;
  document.querySelector("#logout").innerHTML = "LOGOUT";
  checkLogin(event);
  addbook();
});

const clickaddnewproduct = document.querySelector("form");
clickaddnewproduct.addEventListener("submit", function (event) {
  validateForm(event);
});

const clicklogout = document.querySelector("#logout");
clicklogout.addEventListener("click", function (event) {
  logout();
});
