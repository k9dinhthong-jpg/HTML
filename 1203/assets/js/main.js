const button = document.querySelector("#load-btn");
const userlist = document.querySelector("#user-list");
const error = document.querySelector("#error");
const statustext = document.querySelector("#status");

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const searchResult = document.querySelector("#search-results");
const searchError = document.querySelector("#search-error");

const detailInfo = document.querySelector("#user-detail-info");
const detailError = document.querySelector("#detail-error");

let usersData = [];

function filterUsers(keyword) {
  return usersData.filter((user) => {
    return (
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
    );
  });
}

function renderList(users) {
  searchResult.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");

    li.textContent = `${user.name} – ${user.company.name}`;

    li.addEventListener("click", () => showDetail(user));

    searchResult.appendChild(li);
  });
}

function showDetail(user) {
  detailInfo.innerHTML = "";
  detailError.textContent = "";

  detailInfo.innerHTML = `
    <p><strong>Tên:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>SĐT:</strong> ${user.phone}</p>
    <p><strong>Công ty:</strong> ${user.company.name}</p>
    <p><strong>Địa chỉ:</strong> ${user.address.street}, ${user.address.city}</p>
  `;
}

function handleSearch() {
  searchResult.innerHTML = "";
  searchError.textContent = "";

  if (usersData.length === 0) {
    searchError.textContent = "Vui lòng tải dữ liệu người dùng trước.";
    return;
  }

  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    searchError.textContent = "Vui lòng nhập từ khóa tìm kiếm.";
    return;
  }

  const filtered = filterUsers(keyword);

  if (filtered.length === 0) {
    searchError.textContent = "Không tìm thấy người dùng nào phù hợp.";
    return;
  }

  renderList(filtered);
}

async function loadUsers() {
  userlist.innerHTML = "";
  error.textContent = "";
  statustext.textContent = "Đang tải dữ liệu...";
  button.disabled = true;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Lỗi khi tải dữ liệu: " + response.status);
    }

    const users = await response.json();

    usersData = users;

    statustext.textContent = "Dữ liệu đã được tải thành công!";

    users.forEach((user) => {
      const li = document.createElement("li");

      li.textContent = `${user.name} (${user.email})`;

      userlist.appendChild(li);
    });
  } catch (err) {
    error.textContent = "Đã xảy ra lỗi không thể tải dữ liệu.";
    statustext.textContent = "";
  }

  button.disabled = false;
}

button.addEventListener("click", loadUsers);
searchBtn.addEventListener("click", handleSearch);
