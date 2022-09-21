//Счетчик состоит из спана и кнопок, которые, при 
//клике, должны увеличивать и уменьшать его значение на единицу.
//Создай переменную counterValue в которой будет храниться текущее 
//значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.

const buttons = {
    minusValue : document.querySelector('[data-action="decrement"]'),
    plusValue : document.querySelector('[data-action="increment"]'),
    valueNum : document.getElementById('value'),};
// console.log("buttons", buttons);
buttons.minusValue.addEventListener('click', decrement);
buttons.plusValue.addEventListener('click', increment);

let counterValue = 0;

function decrement (){ counterValue -= 1;
    buttons.valueNum.textContent = counterValue;};

function increment() { counterValue += 1;
    buttons.valueNum.textContent = counterValue;};
