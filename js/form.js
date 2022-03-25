const form = document.querySelector('.ad-form');
const roomType= form.querySelector('[name="type"]');
const priceField = form.querySelector('[name="price"]');
const amountRooms = form.querySelector('[name="rooms"]');
const amountGuests = form.querySelector('[name="capacity"]');
const checkInTime = form.querySelector('[name="timein"]');
const checkOutTime = form.querySelector('[name="timeout"]');
const typeField = document.querySelector('#type');

const slider = document.querySelector('.ad-form__slider');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text'
});


//Цена за ночь
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

roomType.addEventListener('change', () => {
  priceField.placeholder = minPrice[roomType.value];
});

function validatePriceField (value) {
  return value >= minPrice[roomType.value];
}

function getPriceFieldErrorMessage () {
  return `Минимальная цена ${minPrice[roomType.value]} руб.`;
}
pristine.addValidator(priceField, validatePriceField, getPriceFieldErrorMessage);


//Количество комнат
const rooms = {
  '1': ['1'],
  '2': ['1','2'],
  '3': ['1','2','3'],
  '100': ['0']
};

function validateСapacity () {
  return rooms[amountRooms.value].includes(amountGuests.value);
}

function getСapacityErrorMessage () {
  return 'Неверное количество комнат';
}

pristine.addValidator(amountGuests, validateСapacity, getСapacityErrorMessage);

checkOutTime.addEventListener('change', (evt) => {
  checkInTime.value = evt.target.value;
});

checkInTime.addEventListener('change', (evt) => {
  checkOutTime.value = evt.target.value;
});

//Слайдер

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100000,
  },
  start: minPrice[roomType.value],
  step: 500,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

slider.noUiSlider.on('update', () => {
  priceField.value = slider.noUiSlider.get();
});

priceField.addEventListener('change', () => {
  slider.noUiSlider.updateOptions({
    start: priceField.value,
  });
});

typeField.addEventListener('change', () =>  {
  slider.noUiSlider.set([minPrice[typeField.value],
    null]);
});


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line
    console.log('Можно отправлять');
  } else {
    // eslint-disable-next-line
    console.log('Форма невалидна');
  }
});
