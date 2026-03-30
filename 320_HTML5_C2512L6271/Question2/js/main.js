class Food {
  constructor(name, calories, meal) {
    this.name = name;
    this.calories = calories;
    this.meal = meal;
  }
}

let food1 = new Food("Apple", 95, "Snack");
let food2 = new Food("Burger", 450, "Lunch");
let listOfFoods = [food1, food2];

function displayFoods() {
  const tbody = document.querySelector("#foodTableBody");
  tbody.innerHTML = "";
  listOfFoods.forEach((food, index) => {
    tbody.innerHTML += `<tr>
            <td>${food.name}</td>
            <td>${food.calories}</td>
            <td>${food.meal}</td>
            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
        </tr>`;
  });
}

function validateForm(event) {
  event.preventDefault();
  const foodName = document.querySelector("#foodName").value.trim();
  const calories = document.querySelector("#calories").value.trim();
  const mealType = document.querySelector("#mealType").value.trim();

  if (foodName === "" || calories === "" || mealType === "") {
    alert("Please fill in all fields.");
    return;
  }

  const newFood = new Food(foodName, Number(calories), mealType);
  listOfFoods.push(newFood);
  displayFoods();
  updateTotalCalories();
  document.querySelector("#calorieForm").reset();
}

function deleteFood(event) {
  if (event.target.classList.contains("delete-btn")) {
    const index = event.target.getAttribute("data-index");
    listOfFoods.splice(index, 1);
    displayFoods();
    updateTotalCalories();
  }
}

function updateTotalCalories() {
  let total = 0;
  listOfFoods.forEach((food) => {
    total += food.calories;
  });
  document.querySelector("#totalCalories").textContent =
    ` Total Calories: ${total}`;
}

document.addEventListener("DOMContentLoaded", function () {
  displayFoods();
  updateTotalCalories();
});

const clickAddFood = document.querySelector("#calorieForm");
clickAddFood.addEventListener("submit", function (event) {
  validateForm(event);
});

const clickDeleteFood = document.querySelector("#foodTableBody");
clickDeleteFood.addEventListener("click", function (event) {
  deleteFood(event);
});