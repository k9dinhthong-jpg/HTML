let clickGuilienhe = document.querySelector("#guilienhe");
clickGuilienhe.addEventListener("click", function (event) {
  event.preventDefault();
  let nguoilienhe = document.querySelector("#name").value;
  if (nguoilienhe.length <= 0) {
    alert("Vui lòng nhập người liên hệ");
    return;
  } else if (nguoilienhe.length > 100) {
    alert("Người liên hệ không được vượt quá 100 ký tự");
    return;
  }
  let dienthoailienhe = document.querySelector("#phone").value;
  if (dienthoailienhe.length < 10) {
    alert("Vui lòng nhập số điện thoại liên hệ ít nhất 10 ký tự");
    return;
  } else if (dienthoailienhe.length > 11) {
    alert("Số điện thoại liên hệ không được vượt quá 11 ký tự");
    return;
  }
  let emaillienhe = document.querySelector("#email").value;
  let noidunglienhe = document.querySelector("#message").value;
  if (noidunglienhe.length <= 0) {
    alert("Vui lòng nhập nội dung lời nhắn");
    return;
  }
  console.log(`Người liên hệ: ${nguoilienhe}`);
  console.log(`Số điện thoại liên hệ: ${dienthoailienhe}`);
  console.log(`Email liên hệ: ${emaillienhe}`);
  console.log(`Nội dung liên hệ: ${noidunglienhe}`);
  alert(`Cảm ơn ${nguoilienhe} đã liên hệ với chúng tôi!
    Chúng tôi sẽ liên lạc theo số điện thoại ${dienthoailienhe} hoặc email ${emaillienhe} quý khách đã cung cấp.
    Lời nhắn của quý khách: ${noidunglienhe}`);
  document.querySelector("form").reset();
});
