const form = document.querySelector('#validation-input');

form.addEventListener('blur', callback);

function callback(event) {
    if (Number(event.target.value.length) === Number(form.dataset.length)) {
        form.classList.remove('invalid');
        form.classList.add('valid');
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        
    }
    
}