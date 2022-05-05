function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const widgetRef = document.querySelector('.widget');
const colorSpanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', handleChangeColor);

function handleChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpanRef.textContent = getRandomHexColor();
}