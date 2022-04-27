const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 

const listOfIngredients = [];

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement('li')
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  listOfIngredients.push(ingredientEl);
}

document.querySelector('#ingredients').append(...listOfIngredients)

