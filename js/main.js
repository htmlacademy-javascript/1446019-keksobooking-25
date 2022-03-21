import {createAnnouncement} from './data.js';
import {createOffersElement} from './template.js';
import './form.js';
const mapCanvas = document.querySelector('#map-canvas');
const announcements = Array.from({length: 10}, createAnnouncement);
// eslint-disable-next-line
console.log(announcements);

const offersElement = createOffersElement(announcements);
mapCanvas.appendChild(offersElement);
