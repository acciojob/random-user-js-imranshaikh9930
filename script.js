document.addEventListener("DOMContentLoaded", function () {
  let user;

  function getUserInfo() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        user = data.results[0];

        displayUserInfo(user);

        document.getElementById("ageInfo").textContent = "";
        document.getElementById("emailInfo").textContent = "";
        document.getElementById("phoneInfo").textContent = "";
      })
      .catch((error) => console.error("Error fetching user:", error));
  }

  function displayUserInfo(user) {
    const fullName = `${user.name.first} ${user.name.last}`;
    const userImage = user.picture.large;

    document.getElementById("fullName").textContent = fullName;
    document.getElementById("userImage").src = userImage;
  }

  const info = document.querySelector("#info");

  function displayAge() {
    info.textContent = `${user.dob.age}`;
  }

  function displayEmail() {
    info.textContent = `${user.email}`;
  }

  function displayPhone() {
    info.textContent = `${user.phone}`;
  }

  getUserInfo();

  document.getElementById("getUser").addEventListener("click", getUserInfo);
  document.getElementById("ageButton").addEventListener("click", displayAge);
  document
    .getElementById("emailButton")
    .addEventListener("click", displayEmail);
  document
    .getElementById("phoneButton")
    .addEventListener("click", displayPhone);
});
