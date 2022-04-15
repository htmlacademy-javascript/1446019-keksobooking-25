import {getData} from './api.js';
import {activatePage, deactivatePage} from './condition.js';
import {initMap ,renderIcons} from './map.js';
import {initForm,setUserFormSubmit} from './form.js';
import {showSuccessMessage} from './message-popups.js';
import {initFilter} from './filters.js';
import './avatar.js';
import './photo.js';

deactivatePage();

initMap(activatePage);

initForm();

getData((offers) => {
  renderIcons(offers);
  initFilter(offers, renderIcons);
});

setUserFormSubmit(showSuccessMessage);
