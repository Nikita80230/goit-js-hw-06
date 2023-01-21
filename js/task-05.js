// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// if(inputEl.value) {
    // const value = inputEl.value;
    console.dir(inputEl);
    // outputEl.value = value;
// }
inputEl.addEventListener("input", changeName);

function changeName() {
    if(inputEl.value.trim()) {
        const value = inputEl.value;
        console.dir(inputEl.value);
        outputEl.textContent = value;
    }
}














































// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');

// inputRef.addEventListener('input',() => {
//     outputRef.textContent = inputRef.value;
//     if (inputRef.value.trim() === '') {
//         outputRef.textContent = 'Anonymous'
//     }
// })