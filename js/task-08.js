const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (!email.trim() || !password.trim()) {
        alert('Please enter email and password');
    } 
    console.log({ email, password });
    event.currentTarget.reset();
}

