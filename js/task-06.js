const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputCheck);

const correctAmount = Number(inputEl.dataset.length);

function onInputCheck(e) {
  if (inputEl.value.length === correctAmount) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
