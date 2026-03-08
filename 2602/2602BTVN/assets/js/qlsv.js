let clickAddsubject = document.querySelector(".qlsv-register button");
clickAddsubject.addEventListener("click", function (event) {
  event.preventDefault();
  let inputSubject = prompt("Nhập tên môn học:");
  let createSubject = document.createElement("input");
  createSubject.type = "checkbox";
  createSubject.id = inputSubject;
  let createLabel = document.createElement("label");
  createLabel.htmlFor = inputSubject;
  createLabel.innerText = inputSubject;
  let subjectArea = document.querySelector(".subject");
  subjectArea.appendChild(createSubject);
  subjectArea.appendChild(createLabel);
});
