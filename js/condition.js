const adForm = document.querySelector('.ad-form');
const fieldSet = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapElFilters = mapFilters.querySelectorAll('.map__filter');

const deactivePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  fieldSet.forEach((element) => {
    element.setAttribute('disabled','disabled');
  });

  mapElFilters.forEach((element) => {
    element.setAttribute('disabled','disabled');
  });
};

deactivePage();

const activePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  fieldSet.forEach((element) => {
    element.removeAttribute('disabled','disabled');
  });

  mapElFilters.forEach((element) => {
    element.removeAttribute('disabled','disabled');
  });
};

export {activePage};
