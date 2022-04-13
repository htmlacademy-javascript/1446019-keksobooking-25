import {getData} from './api.js';
import {activatePage, deactivatePage} from './condition.js';
import {initMap ,renderIcons} from './map.js';
import {initForm,setUserFormSubmit} from './form.js';
import {getSuccessMessage} from './util.js';
import './avatar.js';
import './photo.js';

deactivatePage();

initMap(activatePage);

initForm();

const RENDER_POPUP_COUNT = 10;

getData((offers) => {
  renderIcons(offers.slice(0, RENDER_POPUP_COUNT));
});

setUserFormSubmit(getSuccessMessage);

