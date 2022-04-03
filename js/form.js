import {sendData} from './api.js';
import {getErrorMessage, showAlert} from './util.js';
import { resetMap } from './map.js';
const form = document.querySelector('.ad-form');
const roomType = form.querySelector('[name="type"]');
const priceField = form.querySelector('[name="price"]');
const amountRooms = form.querySelector('[name="rooms"]');
const amountGuests = form.querySelector('[name="capacity"]');
const checkInTime = form.querySelector('[name="timein"]');
const checkOutTime = form.querySelector('[name="timeout"]');
const typeField = document.querySelector('#type');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');

const slider = document.querySelector('.ad-form__slider');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text'
});

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

function validatePriceField(value) {
  return value >= minPrice[roomType.value];
}

function getPriceFieldErrorMessage() {
  return `Минимальная цена ${minPrice[roomType.value]} руб.`;
}

const rooms = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

function validateСapacity() {
  return rooms[amountRooms.value].includes(amountGuests.value);
}

function getСapacityErrorMessage() {
  return 'Неверное количество комнат';
}

const initForm = () => {
  pristine.addValidator(priceField, validatePriceField, getPriceFieldErrorMessage);
  pristine.addValidator(amountGuests, validateСapacity, getСapacityErrorMessage);
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

  slider.noUiSlider.on('slide', () => {
    priceField.value = slider.noUiSlider.get();
  });

  roomType.addEventListener('change', () => {
    priceField.placeholder = minPrice[roomType.value];
  });

  checkOutTime.addEventListener('change', (evt) => {
    checkInTime.value = evt.target.value;
  });

  checkInTime.addEventListener('change', (evt) => {
    checkOutTime.value = evt.target.value;
  });

  priceField.addEventListener('change', () => {
    slider.noUiSlider.updateOptions({
      start: priceField.value,
    });
  });

  typeField.addEventListener('change', () => {
    slider.noUiSlider.set([minPrice[typeField.value],
      null
    ]);
  });
};

const resetForm = () => {
  form.reset();
  priceField.placeholder = minPrice[typeField.value];
  slider.noUiSlider.set(priceField.placeholder);
  resetMap();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const blockSubmitButton = () => {
  submitButton.style.pointerEvents = 'none';
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется..';
};

const unblockSubmitButton = () => {
  submitButton.style.pointerEvents = 'auto';
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      unblockSubmitButton();
      sendData(() => {
        onSuccess();
        resetForm();
      },
      () => {
        showAlert('Проблемы с сервером. Попробуйте позже');
      },
      new FormData(evt.target)
      );
    } else {
      getErrorMessage();
    }
  });
};
export {initForm,setUserFormSubmit,resetForm};
