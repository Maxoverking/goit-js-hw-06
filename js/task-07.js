
//Напиши скрипт, который реагирует на изменение значения input#font-size-control
//(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.

//<input id="font-size-control" type="range" min="16" max="96" />
//<br />
//<span id="text">Abracadabra!</span>


let inputFont = document.querySelector('#font-size-control');
let text = document.getElementById('text');

inputFont.addEventListener('input',inputRange);

function inputRange(){
    text.style.fontSize = inputFont.value + "px";
    // console.log("inputFont.value", inputFont.value );
}