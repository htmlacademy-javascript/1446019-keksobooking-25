import {activePage} from './condition.js';
import {createOffersElement} from './template.js';
const resetButton = document.querySelector('.ad-form__reset');
const map = L.map('map-canvas')
  .on('load', () => {
    activePage();
  })
  .setView({
    lat: 35.6834,
    lng: 139.7799,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const markerPin = L.marker({
  lat: 35.6834,
  lng: 139.7799,
}, {
  draggable: true,
  icon: mainPinIcon,
}, );

markerPin.addTo(map);

const address = document.querySelector('#address');
markerPin.on('moveend', (evt) => {
  const markerLocation  = evt.target.getLatLng();

  address.value = `${markerLocation .lat.toFixed(4)}  ${markerLocation .lng.toFixed(4)}`;
});

const simplePinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


const renderPopup = (cards) => {
  cards.forEach((element) => {
    const {
      location: {
        lat,
        lng
      }
    } = element;
    const similarMarker = L.marker([lat, lng], {
      icon: simplePinIcon
    });
    similarMarker.addTo(map);
    similarMarker.bindPopup(createOffersElement(element));
  });
};

resetButton.addEventListener('click', () => {
  markerPin.setLatLng({
    lat: 35.6834,
    lng: 139.7799,
  });
});

export {renderPopup};
