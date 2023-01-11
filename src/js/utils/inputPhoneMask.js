function addInputPhoneMask() {
  const form = document.querySelector('.contact-form');
  const phoneInputs = form.querySelectorAll('input[data-tel-input]');
  const regExp = /\D/g;
  const getInputNumbersValue = (input) => input.value.replace(regExp, '');

  const onInputHandler = (event) => {
    const input = event.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = '';
    const { selectionStart } = input;

    if (!inputNumbersValue) {
      input.value = '';
      return;
    }

    if (input.value.length !== selectionStart) {
      if (event.data && regExp.test(event.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') {
        inputNumbersValue = `7${inputNumbersValue}`;
      }

      const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
      formattedInputValue = `${firstSymbols} `;

      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  };

  const onKeyDownHanler = (event) => {
    const input = event.target;
    const inputValue = input.value.replace(/\D/g, '');
    const DELETE_KEY_CODE = 8;
    if (event.keyCode === DELETE_KEY_CODE && inputValue.length === 1) {
      input.value = '';
    }
  };

  const onPasteHandler = (event) => {
    const input = event.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = event.clipboardData || window.Clipboard;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (regExp.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  phoneInputs.forEach((input) => {
    input.addEventListener('input', onInputHandler, false);
    input.addEventListener('keydown', onKeyDownHanler);
    input.addEventListener('paste', onPasteHandler, false);
  });
}
addInputPhoneMask();
