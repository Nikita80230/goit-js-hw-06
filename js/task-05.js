const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input',() => {
    outputRef.textContent = inputRef.value;
    if (inputRef.value.trim() === '') {
        outputRef.textContent = 'Anonymous'
    }
})