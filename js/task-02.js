const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
    const itemOfList = document.createElement("li");
    itemOfList.textContent = ingredient;
    itemOfList.classList.add("item");
    ingredientsList.append(itemOfList)
})


// const listOfIngredients = [];

// for (const ingredient of ingredients) {
//   const ingredientEl = document.createElement('li')
//   ingredientEl.classList.add('item');
//   ingredientEl.textContent = ingredient;
//   listOfIngredients.push(ingredientEl);
// }

// document.querySelector('#ingredients').append(...listOfIngredients)

