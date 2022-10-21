const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputCheck);

function onInputCheck(e) {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    return inputEl.classList.add('valid');
  }
  return inputEl.classList.add('invalid');
}
