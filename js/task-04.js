// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterEl = document.querySelector("#counter");
const decrementEl = counterEl.querySelector('button[data-action="decrement"]');
const spanEl = counterEl.querySelector('#value');
const incrementEl = counterEl.querySelector('button[data-action="increment"]')

decrementEl.addEventListener('click', onDecrementClick);
incrementEl.addEventListener('click', onIncrementClick);
let counterValue = 0;

function changeCounterValue() {
    spanEl.textContent = counterValue;
}
function onDecrementClick() {
    counterValue -= 1;
    changeCounterValue()
}

function onIncrementClick() {
    counterValue += 1;
    changeCounterValue()
}







































// const divRef = document.querySelector('div')
// const firstBtn = divRef.firstElementChild;
// const secondBtn = divRef.lastElementChild;
// const counterValue = document.querySelector('#value')


// firstBtn.addEventListener('click', () => {
//     counterValue.textContent --;
// });

// secondBtn.addEventListener('click', () => {
//     counterValue.textContent ++;
// });