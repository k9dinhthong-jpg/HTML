let clickadd = document.querySelector(".add");

clickadd.addEventListener("click", function () {
  let input = document.querySelector("#newtodo").value;

  if (input === "") {
    alert("Please enter a todo item.");
    return;
  }

  let list = document.querySelector("#list");

  let li = document.createElement("li");
  li.className = "list-item";
  li.innerHTML = input;

  let remove = document.createElement("button");
  remove.innerHTML = "<i class='fa-solid fa-trash'></i>";
  remove.className = "remove";

  li.appendChild(remove);
  list.appendChild(li);

  document.querySelector("#newtodo").value = "";

  updateNotification();
});

let clickremove = document.querySelector("#list");

clickremove.addEventListener("click", function (e) {
  if (e.target.closest(".remove")) {
    e.target.closest("li").remove();
    updateNotification();
  }
});

function updateNotification() {
  let quantity = document.querySelectorAll(".list-item").length;
  let notification = document.querySelector(".notification");

  if (quantity === 0) {
    notification.innerHTML = "You have 0 pending tasks.";
  } else {
    notification.innerHTML = "You have " + quantity + " pending tasks";
  }
}
updateNotification();
