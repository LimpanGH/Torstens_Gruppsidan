// ---- Name from startsidan to spelsidan ----
// Extracting data from localstorage using the getItem-method and by putting the key inside the parenthes, we assign the value to our varable.
const fullName = localStorage.getItem('fullName');
// Selecting the span-element with #name and writing the value from localstorage to the span.
document.querySelector('.playerName').textContent = fullName;


// ---- Avatar from startsidan to spelsidan ----
// Extracting data from localstorage using the getItem-method and by putting the key inside the parenthes, we assign the value to our varable.
const avatarUrl = localStorage.getItem('avatarUrl');
// Selecting the image-element that has no hard-coded src on spelsidan.
let imgOfPlayerAvatar = document.querySelector('#imgOfPlayerAvatar')
// Adding a src-attribute to the img in the dom an setting its value to be avatarUrl (i.e the url from localstorage)
imgOfPlayerAvatar.src = avatarUrl;