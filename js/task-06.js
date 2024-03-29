// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector("#validation-input");

const validLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener("blur", callback);

function callback() {
    console.log(inputEl.value.length)

    inputEl.classList.add("invalid") 
    
    if(inputEl.value.length === validLength) {
        inputEl.classList.remove("invalid") 
        inputEl.classList.add("valid") 
    }
}





























// const form = document.querySelector('#validation-input');

// form.addEventListener('blur', callback);

// function callback(event) {
//     if (Number(event.target.value.length) === Number(form.dataset.length)) {
//         form.classList.remove('invalid');
//         form.classList.add('valid');
//     } else {
//         form.classList.remove('valid');
//         form.classList.add('invalid');
        
//     }
    
// }