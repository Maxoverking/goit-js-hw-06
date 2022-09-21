// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

let inputText = document.getElementById('name-input');
let outputText = document.getElementById('name-output');

inputText.addEventListener('input', typingText)

function typingText () {

    if (inputText.value === '') {
        outputText.innerHTML = "Anonymous";
    }else{
        outputText.innerHTML = inputText.value;
    }
};
