// Getting user input and taking it over to Spelsidan, fully working.
const form = document.getElementById('form');
const playerName = document.getElementById('name');
// Appending a submit-event to form that fires when we click on the submit-button, and when an input is submittet, the fc runs .
form.addEventListener('submit', (e) => {
  // Prevents the default action of the submit-method which is submitting the form itself and refreshing the page.
  e.preventDefault();
  // .value is a property in JavaScript that retrieves the current value of an input field in a form, we store the value in a variable.
  const nameValue = playerName.value;
  // Using the Local-storage API to store the values in the users browser, making it avalable on the global window. So we dont really need to put window in front of .localStorage.
  // The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions,
  // it gives you a set of methods to store, read, clear or delete items.
  // The setItem() method of the Storage interface takes two arguments, and when passed a key- name and value, will add that key to the given Storage object, or update that key's value if it already exists.
  window.localStorage.setItem('fullName', nameValue);
  // Redirects to our other page (spelsidan) when our form is submitted and the items have been set to localstorage
  window.location.href = 'spelsidan.html';
});
//To check what is in your local storage:
//console.log(localStorage);

// Getting the chosen avatar and taking it over to spelsidan, not working yet.
const avatar = document.querySelectorAll('.avatar');

let switchFunction = () => {
  switch (true) {
    case avatar.id == '#avatar1':
      chosenAvatar = src = 'img/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg';
      return;
      chosenAvatar;
      break;
    case avatar.id == '#avatar 2':
      return;
      '#avatar 2';
      break;
    case avatar.id == '#avatar 3':
      return;
      '#avatar 3';
      break;
    case avatar.id == '#avatar 4':
      return;
      '#avatar 4';
      break;
    case avatar.id == '#avatar 5':
      return;
      '#avatar 5';
      break;
    case avatar.id == '#avatar 6':
      return;
      '#avatar 6';
      break;
  }
  window.localStorage.setItem('myAvatar', chosenAvatar);
  window.location.href = 'spelsidan.html';
};

avatar.addEventListener('click', switchFunction);

// const form = document.getElementById("form");
// const playerName = document.getElementById("name");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nameValue = playerName.value;
//   localStorage.setItem("fullName", nameValue);
//   window.location.href = "spelsidan.html";
// });
