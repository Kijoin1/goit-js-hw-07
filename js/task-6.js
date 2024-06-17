const controlsElem = document.querySelector('#controls');
const boxesElem = document.querySelector('#boxes');
const inputElem = document.querySelector('input');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
boxesElem.innerHTML = '';
}
function createBoxes(amount){
destroyBoxes()
const markup = document.createDocumentFragment();
let size = 30;

for (let i = 0; i < amount; i++) { 
const div =
document.createElement('div');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = getRandomHexColor();
  div.style.margin = '5px';
  size += 10;
markup.appendChild(div);
}
boxesElem.appendChild(markup);
}

createBtn.addEventListener('click', () => {
let inputNum = parseInt(inputElem.value);
if (inputNum >= 1 && inputNum <= 100) {
  createBoxes(inputNum);
} else {
  alert('Error. The number is incorrect. Enter a number from 1 to 100');
}
inputElem.value = '';
});

