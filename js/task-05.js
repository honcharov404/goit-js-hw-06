const inputEl = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  nameLabel.textContent = e.currentTarget.value;
}
