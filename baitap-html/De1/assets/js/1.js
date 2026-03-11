let clickshow = document.querySelector("#show");
let textarea = document.querySelector("#textarea");
clickshow.addEventListener("click", function () {
  if (clickshow.innerHTML === "[ Show ]") {
    clickshow.innerHTML = "[ Hide ]";
    textarea.className = "show";
  } else {
    clickshow.innerHTML = "[ Show ]";
    textarea.className = "hide";
  }
});
