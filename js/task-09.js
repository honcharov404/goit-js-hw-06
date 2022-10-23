const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeBgc);

function onChangeBgc(e) {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
