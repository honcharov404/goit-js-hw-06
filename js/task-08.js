const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Необходимо заполнить все поля');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);

  e.currentTarget.reset();
}
