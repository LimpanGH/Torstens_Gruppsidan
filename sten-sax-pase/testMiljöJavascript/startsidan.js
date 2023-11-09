// Objective
// - Get the user’s name
// - Send the name to spelsidan

// Getting user input and taking it over to spelsidan
const form = document.getElementById("form");
const playerName = document.getElementById("name");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = playerName.value;
  localStorage.setItem("fullName", nameValue);
  window.location.href = "spelsidan.html";
});

// Getting the chosen avatar and taking it over to spelsidan
const body = document.body;
const avatar = document.querySelectorAll(".avatar");

avatar.addEventListener("click", (getChosenAvatar));

function getChosenAvatar() {
  switch (avatar) {
    case avatar == ".avatar" && avatar == "#avatar 1":
      //   return;
      console.log("#avatar 1");
      break;
    case avatar == ".avatar" && avatar == "#avatar 2":
      return;
      "#avatar 2";
      break;
    case avatar == ".avatar" && avatar == "#avatar 3":
      return;
      "#avatar 3";
      break;
    case avatar == ".avatar" && avatar == "#avatar 4":
      return;
      "#avatar 4";
      break;
    case avatar == ".avatar" && avatar == "#avatar 5":
      return;
      "#avatar 5";
      break;
    case avatar == ".avatar" && avatar == "#avatar 6":
      return;
      "#avatar 6";
      break;
  }
}

// const form = document.getElementById("form");
// const playerName = document.getElementById("name");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nameValue = playerName.value;
//   localStorage.setItem("fullName", nameValue);
//   window.location.href = "spelsidan.html";
// });
