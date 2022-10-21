const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeBgc);

function onChangeBgc(e) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor());

// 1 создать переменные для кнопки и спана

// 2 повесить слушателя на кнопку по событию клик

// 3 написать функцию для присвоения стиля бэкграунда и присвоению значения для спана
