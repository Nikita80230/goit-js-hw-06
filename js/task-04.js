const divRef = document.querySelector('div')
const firstBtn = divRef.firstElementChild;
const secondBtn = divRef.lastElementChild;
const counterValue = document.querySelector('#value')


firstBtn.addEventListener('click', () => {
    counterValue.textContent --;
});

secondBtn.addEventListener('click', () => {
    counterValue.textContent ++;
});