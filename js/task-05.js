// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

let inputElement = document.getElementById('name-input');
let outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', checkInputValue);

function checkInputValue () {
    if (inputElement.value === '') {
        outputElement.innerHTML = "Anonymous";
    }else{
        outputElement.innerHTML = inputElement.value;
    }
};
