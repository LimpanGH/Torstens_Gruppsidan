// ----- Getting user input and taking it over to Spelsidan. ------
const form = document.querySelector('#form');
const playerName = document.getElementById('playername');
// console.log(playerName.value);
// Appending a submit-event to form that fires when we click on the submit-button, and when an input is submittet, the fc runs .

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("sound-startsida");

  // Lägg till en klickhändelse för att starta uppspelningen
  document.addEventListener("click", function() {
    audio.play();
  });
});


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
// console.log(localStorage);

// ------ Getting the chosen avatar and taking it over to spelsidan. ------
const avatars = document.querySelectorAll('.avatar');
// looping through the node-list with all elements with the class avatar.
avatars.forEach((avatar) => {
  // Adding click-listener to each of the elements in the node-list.
  avatar.addEventListener('click', () => {
    // Making a variable and setting it to be the url of the element.
    let url = avatar.src;
    // Using setItem-method to store the value (url) to our local-storage-key (avatarUrl)
    window.localStorage.setItem('avatarUrl', url);
    // window.location.href = 'spelsidan.html';
  });
});
