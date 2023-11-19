// Getting user input and taking it over to Spelsidan, fully working.
const form = document.querySelector('#form');
const playerName = document.getElementById('playername');
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
console.log(localStorage);



// Getting the chosen avatar and taking it over to spelsidan, not working yet.
const avatar = document.querySelectorAll('input');

let switchFunction = () => {
  switch (true) {
    case img.id == '#avatar1':
      chosenAvatar = src = 'img/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg';
      console.log(chosenAvatar);
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

const gameButtons = document.querySelectorAll('[data-selection]');

gameButtons.forEach((gameButtons) => {
  gameButtons.addEventListener('click', (e) => {
    const selectionName = gameButtons.dataset.selection;
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  console.log(selection);
}

const a = 10;

// What to do for  bark Audio on icon click:
// 1. Get the element by class/id for icon buttons
// 2. make a function that plays the Audio
// 3. make the function run onclick
// 4. connect the onclick to  appropriate html element

// let bark = document.getElementsByClassName(avatar-flex);
// element.addEventListener("click" function, (e) => {
//  play

//   )

// onClick function for bark.mp3
function playAudio(file) {
  new Audio(file).play();
}

function borderClick(box) {
  //selects all avatars as eligible items, and allows a max of 1 item to be affected by borderClick
  var allAvatars = document.querySelectorAll('.avatar');
  allAvatars.forEach(function (avatar) {
    avatar.style.border = 'none';
  });

  //styles borders on click
  box.style.border = '5px solid red';
}
