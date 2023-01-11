function removeError(inputBlock) {
  const errorBlock = inputBlock.querySelector('.input__error');

  if (!errorBlock.classList.contains('display-none')) {
    errorBlock.classList.add('display-none');
  }
}

function createError(inputBlock, text) {
  const errorBlock = inputBlock.querySelector('.input__error');
  const errorMessage = inputBlock.querySelector('.input__error-message');

  errorMessage.textContent = text;
  errorBlock.classList.remove('display-none');
}

function formValidation(form) {
  let isValid = true;
  const inputBlocks = form.querySelectorAll('.input');

  inputBlocks.forEach((inputBlock) => {
    const input = inputBlock.querySelector('input');
    const { value, dataset } = input;

    removeError(inputBlock);

    if (input.hasAttribute('data-email-input')) {
      const regExp =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regExp.test(input.value)) {
        createError(inputBlock, 'Неверный Email');
        isValid = false;
      }
    }

    if (dataset.minLength && value.trim().length < dataset.minLength) {
      createError(inputBlock, `Мин-е кол-во символов: ${dataset.minLength}`);
      isValid = false;
    }

    if (dataset.maxLength && value.trim().length > dataset.maxLength) {
      createError(inputBlock, `Макс. кол-во символов: ${dataset.maxLength}`);
      isValid = false;
    }

    if (dataset.required === 'true') {
      if (!value) {
        createError(inputBlock, 'Поле не заполнено');
        isValid = false;
      }
    }
  });

  return isValid;
}
function checkValidationFormOnSubmit() {
  const form = document.querySelector('.contact-form');
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (formValidation(form)) {
      const name = form.querySelector('input[data-name-input]');
      const tel = form.querySelector('input[data-tel-input]');
      const email = form.querySelector('input[data-email-input]');
      const formData = {
        name: name.value,
        phone: tel.value,
        email: email.value,
      };

      console.log('formData: ', JSON.stringify(formData, null, 2));
      alert('Данные формы валидна! (вывел в консоль)');
    }
  };

  form.addEventListener('submit', onSubmitHandler);
}
checkValidationFormOnSubmit();
