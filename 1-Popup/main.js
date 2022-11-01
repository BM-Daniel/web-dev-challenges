const button = document.querySelector('.container a');
const popup = document.querySelector('.container .popup');
const confirmButton = document.querySelector('.confirm');
const cancelButton = document.querySelector('.cancel');

button.addEventListener('click', () => {
        popup.style.display = 'block';
})

cancelButton.addEventListener('click', () => popup.style.display = 'none');
confirmButton.addEventListener('click', () => popup.style.display = 'none');