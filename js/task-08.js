const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formData = {
    email: '',
    password: '',
  };
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Необходимо заполнить все поля');
  }

  formData.email = email.value;
  formData.password = password.value;

  console.log(formData);

  e.currentTarget.reset();
}
