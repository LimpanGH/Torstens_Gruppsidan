// Extracting data from localstorage using the getItem-method and by putting the key inside the parenthes, we assign the value to our varable.
const fullName = localStorage.getItem('fullName');
// Selecting the span-element with #name and writing the value from localstorage to the span.
document.querySelector('.playerName').textContent = fullName;


const avatarUrl = localStorage.getItem('avatarUrl');
let a = document.querySelector('#imgOfPlayerAvatar')
a.src = avatarUrl;



// const body = document.body
// const div = document.querySelector(‘div’);
// const spanHi = document.querySelector(‘#hi’);
// console.log(spanHi.getAttribute(‘id’))  	 (note)
// console.log(spanHi.id)  			(note) 

// spanHi.setAttribute(‘id’, ‘asdfasdf’); 		(note)
// spanHi.id = ‘asdfasdf’;




