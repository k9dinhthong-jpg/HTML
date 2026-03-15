function addExpense(event) {
  event.preventDefault();
  const name = document.querySelector("#expenseName").value;
  const amount = parseFloat(document.querySelector("#amount").value);
  const category = document.querySelector("#category").value;
  const table = document.querySelector("tbody");

  if (amount <= 0 || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  table.innerHTML += `
    <tr>
      <td>${name}</td>
      <td>${amount}</td>
      <td>${category}</td>
      <td><button type="button" class="del">[ Delete ]</button></td>
    </tr>
  `;
  updateTotal();
}

function deleteExpense(event) {
  if (event.target.classList.contains("del")) {
    event.target.closest("tr").remove();
  }
}

function updateTotal() {
  const amounts = document.querySelectorAll("tbody tr td:nth-child(2)");
  let total = 0;
  amounts.forEach((amount) => {
    total += parseFloat(amount.textContent);
  });
  document.querySelector(".totalBill").textContent =
    `Total Expenses: ${total.toFixed(2)}`;
}

updateTotal();
const clicksubmit = document.querySelector("form");
clicksubmit.addEventListener("submit", (event) => {
  addExpense(event);
});
const clickdelete = document.querySelector("tbody");
clickdelete.addEventListener("click", (event) => {
  deleteExpense(event);
  updateTotal();
});
