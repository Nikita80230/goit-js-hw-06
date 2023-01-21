// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listOfCategories = document.querySelector("#categories");
console.log("Number of categories: ", listOfCategories.children.length);
[...listOfCategories.children].forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent} 
    Elements: ${item.querySelector("ul").children.length}`)});














































// const categories = document.querySelectorAll('.item');
// console.log("Number of categories: ", categories.length);

// for (const category of categories) {
//     console.log("Category: ", category.firstElementChild.textContent);
//     console.log("Elements: ", category.querySelectorAll('li').length);
// }
