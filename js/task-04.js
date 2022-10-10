//Счетчик состоит из спана и кнопок, которые, при 
//клике, должны увеличивать и уменьшать его значение на единицу.
//Создай переменную counterValue в которой будет храниться текущее 
//значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
//Обновляй интерфейс новым значением переменной counterValue.


const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const valueNum = document.getElementById('value');
// console.log("buttons", buttons);
minusBtn.addEventListener('click', decrement);
plusBtn.addEventListener('click', increment);

let counterValue = 0;

function decrement (){ counterValue -= 1;
    valueNum.textContent = counterValue;};

function increment() { counterValue += 1;
    valueNum.textContent = counterValue;};
