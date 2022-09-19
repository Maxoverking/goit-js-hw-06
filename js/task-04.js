//Счетчик состоит из спана и кнопок, которые, при 
//клике, должны увеличивать и уменьшать его значение на единицу.

//Создай переменную counterValue в которой будет храниться текущее 
//значение счетчика и инициализируй её значением 0.

//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.


const buttons = {
    minus : document.querySelector('[data-action="decrement"]'),
    plus : document.querySelector('[data-action="increment"]'),
    valueNum : document.getElementById('value'),
};
console.log("buttons", buttons);

let counterValue = 0;

const decrement = function(){
    counterValue -= 1;
    buttons.valueNum.textContent = counterValue;
};

const increment = function () {
    counterValue += 1;
    buttons.valueNum.textContent = counterValue;
};

buttons.minus.addEventListener('click', decrement);
buttons.plus.addEventListener('click', increment);

// console.log("trying", trying)