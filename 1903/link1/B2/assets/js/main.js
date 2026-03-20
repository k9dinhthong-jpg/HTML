class Book {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }
}
let book1 = new Book("Clean Code", "Technology");
let book2 = new Book("Cosmos", "Science");
let listOfBooks = [book1, book2];
function displayBooks() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  listOfBooks.forEach((book) => {
    tbody.innerHTML += `<tr>
            <td>${book.title}</td>
            <td>${book.category}</td>
            <td><button class="delete-btn">Delete</button></td>
        </tr>`;
  });
}

function validateForm(event) {
  event.preventDefault();
  const booktitle = document.querySelector("#booktitle").value.trim();
  const category = document.querySelector("#category").value.trim();
  if (booktitle === "" || category === "") {
    alert("Please fill in all fields.");
    return;
  }
  const newBook = new Book(booktitle, category);
  listOfBooks.push(newBook);
  displayBooks();
  document.querySelector("form").reset();
}

function deleteBook(event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("tr").remove();
  }
}

function borrowBook() {
  let fiction = 0;
  let science = 0;
  let history = 0;
  let technology = 0;
  listOfBooks.forEach((book) => {
    if (book.category === "Fiction") {
      fiction++;
    } else if (book.category === "Science") {
      science++;
    } else if (book.category === "History") {
      history++;
    } else if (book.category === "Technology") {
      technology++;
    }
  });
  document.querySelector(".fiction").textContent = fiction;
  document.querySelector(".science").textContent = science;
  document.querySelector(".history").textContent = history;
  document.querySelector(".technology").textContent = technology;
}

document.addEventListener("DOMContentLoaded", function () {
  displayBooks();
  borrowBook();
});
const clickAddBook = document.querySelector("form");
clickAddBook.addEventListener("submit", function (event) {
  validateForm(event);
  borrowBook();
});
const clickDeleteBook = document.querySelector("tbody");
clickDeleteBook.addEventListener("click", function (event) {
  deleteBook(event);
  borrowBook();
});
