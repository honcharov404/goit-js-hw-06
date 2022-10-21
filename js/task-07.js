const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onHandleInputRange);

function onHandleInputRange(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}
