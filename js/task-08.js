// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
const btn = form.querySelector("button")

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {currentTarget: {elements: {email, password}}} = event;

    if(!email.value.trim() && !password.value.trim()) {
        alert("Всі поля повинні бути заповнені")
    } else {
       const data = {
            email: email.value,
            password: password.value
        }
        console.log(data); 
    }
    event.currentTarget.reset();
}





// const formRef = document.querySelector('.login-form');
// formRef.addEventListener('submit', handleSubmitForm);

// function handleSubmitForm(event) {
//     event.preventDefault();
//     const email = event.currentTarget.elements.email.value;
//     const password = event.currentTarget.elements.password.value;
//     if (!email.trim() || !password.trim()) {
//         alert('Please enter email and password');
//     } 
//     console.log({ email, password });
//     event.currentTarget.reset();
// }

