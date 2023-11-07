const form = document.getElementById('form');
const playerName = document.getElementById('name')

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const nameValue = playerName.value;

    localStorage.setItem('fullName', nameValue)

    window.location.href = 'spelsidan.html';

})