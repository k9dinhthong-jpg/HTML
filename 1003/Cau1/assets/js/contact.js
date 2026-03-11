let click = document.querySelector("#submit");
click.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.querySelector("#Name").value;
  let regexname = /^.{5,}$/;
  if (!regexname.test(name)) {
    alert("Tên không hợp lệ. Vui lòng nhập ít nhất 5 ký tự.");
    return;
  }
  let email = document.querySelector("#Email").value;
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Email không hợp lệ. Vui lòng nhập đúng định dạng email.");
    return;
  }
  let message = document.querySelector("#Message").value;
  let regexMessage = /^.{10,}$/;
  if (!regexMessage.test(message)) {
    alert("Tin nhắn không hợp lệ. Vui lòng nhập ít nhất 10 ký tự.");
    return;
  }
  alert("Gửi thành công!");
  setTimeout(function () {
    document.querySelector("form").reset();
  }, 1000);
});
