let create = document.querySelector('[data-create]');
let destroy = document.querySelector('[data-destroy]');
let boxes = document.getElementById('boxes');

create.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);


function getAmount() {
  let amount = document.querySelector('#controls input').value;
  
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} `;
    fragment.append(div);
  }
  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
