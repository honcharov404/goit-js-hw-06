const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
console.log(list);

ingredients.forEach(function (ingredient) {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item');
  list.after(ingredientsItem);
});
