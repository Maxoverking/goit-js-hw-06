const ingredients = ['Potatoes','Mushrooms','Garlic','Tomatos','Herbs','Condiments'];
//Получаем доступ к ul#ingredients
let ulList = document.getElementById('ingredients');

// Проходим по каждому елементу в массиве  ingredients = []
const vegetablesIngredients = ingredients.forEach( ingredient => {

  //Создать елементы разметки 'li'
  let itemsLi = document.createElement('li');
//Добавить класс всем 'li'
  itemsLi.classList.add("item");

//Добавить ингридиенты в елемент 'li' и выводим в документ 
  itemsLi.innerHTML = ingredient;

  // Вставляем все <li> в список ul#ingredients
  ulList.append(itemsLi);
})

//==========================================================

// const ulEl = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// console.log("list", list);

// ulEl.innerHTML = list;

//=================================================

// let listOfIngredients = document.querySelector('ul#ingredients');
// // console.log(listOfIngredients);
// // listOfIngredients = []
// for (let i = 0; i < ingredients.length; i += 1) {
//   let aNewListItem = document.createElement('li');
//   aNewListItem.textContent = ingredients[i];
//   aNewListItem.classList.add('item');
//   listOfIngredients.append(aNewListItem)
// }
// console.log(listOfIngredients)