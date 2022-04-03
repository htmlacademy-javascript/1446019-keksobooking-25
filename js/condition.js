const adForm = document.querySelector('.ad-form');
const fieldSet = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapElFilters = mapFilters.querySelectorAll('.map__filter');

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  fieldSet.forEach((element) => {
    element.setAttribute('disabled','disabled');
  });

  mapElFilters.forEach((element) => {
    element.setAttribute('disabled','disabled');
  });
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  fieldSet.forEach((element) => {
    element.removeAttribute('disabled','disabled');
  });

  mapElFilters.forEach((element) => {
    element.removeAttribute('disabled','disabled');
  });
};

export {activatePage,deactivatePage};
