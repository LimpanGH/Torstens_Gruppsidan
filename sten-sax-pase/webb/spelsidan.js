// Extracting data from localstorage using the getItem-method and by putting the key inside the parenthes, we assign the value to our varable.
const fullName = localStorage.getItem('fullName');
// Selecting the span-element with #name and writing the value from localstorage to the span.
document.querySelector('.playerName').textContent = fullName;