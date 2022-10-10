
//Напиши скрипт, который реагирует на изменение значения input#font-size-control
//(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.

let inputFontElements = document.getElementById('font-size-control');

// console.log("🚀 ~ inputFontElements", inputFontElements);

let text = document.getElementById('text');

// console.log("🚀 ~ text", text);

inputFontElements.addEventListener('input',rangeControl);

function rangeControl() {
    // console.log(inputFontElements.value + 'px');
    text.style.fontSize = inputFontElements.value + "px";
}

