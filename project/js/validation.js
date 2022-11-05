(() => {
  var phoneElement = document.querySelector(".input-tel");

  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(phoneElement);

  validation = new window.JustValidate('.showroom__form', {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid #D11616',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#D11616',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать 3 буквы'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может содержать более 30 символов'
    },
    {
      rule: 'required',
      errorMessage: 'Как вас зовут?'
    }
  ])
  .addField('.input-tel', [
    {
      validator: () => {
        const phone = phoneElement.inputmask.unmaskedvalue();
        const result = Number(phone) && phone.length === 10;
        return result === 0 ? false : result;
      },
      errorMessage: 'Укажите ваш телефон',
    }
  ]);
  })();
