//Напиши скрипт, который изменяет цвета фона элемента <body> 
//через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const changeColorBtn = document.querySelector('.change-color');
const changeColorText = document.querySelector('.color');

changeColorBtn.addEventListener('click' , bodyHexColor );

function bodyHexColor(){
document.body.style.backgroundColor = getRandomHexColor();
// changeColorBtn.style.backgroundColor = getRandomHexColor();//<-- Сделал специально так веселее
changeColorText.innerHTML = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}