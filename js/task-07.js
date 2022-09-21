
//Напиши скрипт, который реагирует на изменение значения input#font-size-control
//(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.

let inputFontElements = document.querySelector('#font-size-control');
let text = document.getElementById('text');

inputFontElements.addEventListener('input',rangeControl);

function rangeControl(){
    text.style.fontSize = inputFontElements.value + "px";
}