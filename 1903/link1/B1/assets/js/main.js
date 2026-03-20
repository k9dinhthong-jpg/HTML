function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const visittye = document.querySelector('select[name="visit_type"]').value;
  const visittime = document.querySelector(
    'input[name="visit_time"]:checked',
  )?.value;
  let error = [];

  //   console.log(name, email, visittye, visittime);
  if (name.length < 3) {
    error.push({
      id: "name",
      message: "Name must be at least 3 characters long.",
    });
    // alert("Name must be at least 3 characters long.");
  }
  let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailregex.test(email)) {
    error.push({ id: "email", message: "Please enter a valid email address." });
    // alert("Please enter a valid email address.");
  }
  if (visittye === "") {
    error.push({ id: "visit_type", message: "Please select a visit type." });
    // alert("Please select a visit type.");
  }
  if (!visittime) {
    error.push({ id: "visit_time", message: "Please select a visit time." });
    // alert("Please select a visit time.");
  }
  if (error.length == 0) {
    document.getElementById("success-message").textContent =
      "Form submitted successfully!";
  }
  if (error.length > 0) {
    error.forEach((err) => {
      if (err.id === "visit_time") {
        //     document.getElementById("visit_time_error").textContent = err.message;
        //     document.getElementById("visit_time_error").classList.add("error");
      } else if (err.id === "visit_type") {
        // document.getElementById("visit_type").textContent = err.message;
        document.getElementById("visit_type").classList.add("error");
      } else {
        let element = document.getElementById(err.id);
        element.classList.add("error");
      }
      document.querySelector(`#err_${err.id}`).textContent = err.message;
      document.querySelector(`#err_${err.id}`).classList.add("error-message");
      //   document.getElementById(err.id).classList.add("error");

      //   console.log(element);
      //   console.log(err);

      //   const errorElement = document.getElementById(`${})
    });
  }
}
const clicksubmit = document.querySelector("form");
clicksubmit.addEventListener("submit", function (event) {
  validateForm(event);
});
