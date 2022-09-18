const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ulList = document.getElementById('ingredients');
console.log("ulList", ulList);

const vegetablesIngredients = ingredients.forEach(ingredient => {
  //Создать елементы разметки 'li'
  let itemsLi = document.createElement('li');
  console.log(itemsLi);

//Добавить класс всем 'li'
  itemsLi.classList.add("item");

//Добавить ингридиенты в елемент 'li' и выводим в документ 
  itemsLi.innerHTML = ingredient;

  // Вставляем все <li> в список ul#ingredients
  ulList.append(itemsLi);
})


