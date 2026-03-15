function submitForm(event) {
  event.preventDefault();
  const name = document.querySelector("#fullname").value;
  const email = document.querySelector("#email").value;
  const eventtype = document.querySelector("#eventtype").value;
  const eventdate = document.querySelector("#eventdate").value;
  const participation = document.querySelector("#participation").value;
  let regexname = /^.{3,}$/;
  if (!regexname.test(name) || name.length === 0) {
    alert("Tên không hợp lệ. Mời nhập vào ít nhất 3 ký tự");
    return;
  }
  let regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexemail.test(email) || email.length === 0) {
    alert("Email không hợp lệ. Vui lòng nhập đúng định dạng email");
    return;
  }
  let today = new Date();
  let selectedDate = new Date(eventdate);
  if (selectedDate < today || eventdate.length === 0) {
    alert("Ngày phải là hôm nay hoặc trong tương lai");
    return;
  }
  alert(
    `Thank you, ${name}! You have registered for the ${eventtype} on ${eventdate} (${participation}).`,
  );
}
const clicksubmit = document.querySelector("form");
clicksubmit.addEventListener("submit", (event) => {
  submitForm(event);
});
