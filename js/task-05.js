const inputEl = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  if (e.currentTarget.value > 0) {
    nameLabel.textContent = e.currentTarget.value;
  } else {
    nameLabel.textContent = 'Anonymous';
  }
}
