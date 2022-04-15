const adForm = document.querySelector('.ad-form');
const fieldSet = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapElementFilters = mapFilters.querySelectorAll('.map__filter');
const FeaturesElements = mapFilters.querySelector('.map__features');

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  fieldSet.forEach((element) => {
    element.setAttribute('disabled','disabled');
  });

  mapFilters.classList.add('ad-form--disabled');
  mapElementFilters.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  FeaturesElements.setAttribute('disabled', 'disabled');
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldSet.forEach((element) => {
    element.removeAttribute('disabled','disabled');
  });

  mapFilters.classList.remove('ad-form--disabled');
  mapElementFilters.forEach((element) => {
    element.removeAttribute('disabled');
  });
  FeaturesElements.removeAttribute('disabled');
};

export {activatePage,deactivatePage};
