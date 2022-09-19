const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Получаем доступ к ul#ingredients
let ulList = document.getElementById('ingredients');
console.log("ulList", ulList);
// Проходим по каждому елементу в массиве  ingredients = []

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


