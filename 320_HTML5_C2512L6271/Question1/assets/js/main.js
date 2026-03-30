const fitnessForm = document.querySelector("#fitnessForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const classType = document.querySelector("#classType");
const preferredDate = document.querySelector("#preferredDate");
const timeSlot = document.querySelector("#timeSlot");
const message = document.querySelector("#message");

fitnessForm.addEventListener("submit", function (event) {
  event.preventDefault();

  fullName.classList.remove("invalid");
  email.classList.remove("invalid");
  classType.classList.remove("invalid");
  preferredDate.classList.remove("invalid");
  timeSlot.classList.remove("invalid");

  let isValid = true;

  if (fullName.value.trim() === "" || fullName.value.trim().length < 3) {
    fullName.classList.add("invalid");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
    email.classList.add("invalid");
    isValid = false;
  }

  if (classType.value === "") {
    classType.classList.add("invalid");
    isValid = false;
  }

  if (preferredDate.value === "") {
    preferredDate.classList.add("invalid");
    isValid = false;
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(preferredDate.value);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      preferredDate.classList.add("invalid");
      isValid = false;
    }
  }

  if (timeSlot.value === "") {
    timeSlot.classList.add("invalid");
    isValid = false;
  }

  if (!isValid) {
    message.textContent =
      " Please correct the highlighted fields and try again.";

    fullName.value = "";
    email.value = "";
    classType.value = "";
    preferredDate.value = "";
    timeSlot.value = "";

    return;
  }

  message.textContent = `Thank you, ${fullName.value.trim()}! You have registered for ${classType.value} on ${preferredDate.value} during the ${timeSlot.value} slot.`;

  fullName.value = "";
  email.value = "";
  classType.value = "";
  preferredDate.value = "";
  timeSlot.value = "";
});