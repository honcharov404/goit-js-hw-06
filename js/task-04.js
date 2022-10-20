const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementBtnClick);

incrementBtn.addEventListener('click', onIncrementBtnClick);

// function onDecrementBtnClick(e) {
//   valueEl.textContent -= 1;
// }

// function onIncrementBtnClick(e) {
//   valueEl.textContent = Number(valueEl.textContent) + 1;
// }

let counterValue = 0;

function onDecrementBtnClick(e) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementBtnClick(e) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
