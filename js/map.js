import {createPopupElement} from './template.js';
const address = document.querySelector('#address');

const centerCoordinates = {
  lat: 35.6834,
  lng: 139.7799,
};

const ZOOM_LEVEL = 12;

let map;

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const commonPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(centerCoordinates, {
  draggable: true,
  icon: mainPinIcon,
}, );

const renderIcons = (cards) => {
  cards.forEach((element) => {
    const {
      location: {
        lat,
        lng
      }
    } = element;
    const similarMarker = L.marker([lat, lng], {
      icon: commonPinIcon
    });
    similarMarker.addTo(map);
    similarMarker.bindPopup(createPopupElement(element));
  });
};

const setDefaultAddress = (value) => {
  address.value = value;
};

setDefaultAddress(`${centerCoordinates.lat}, ${centerCoordinates.lng}`);

mainPinMarker.on('moveend', (evt) => {
  const markerLocation  = evt.target.getLatLng();
  address.value = `${markerLocation .lat.toFixed(4)}  ${markerLocation .lng.toFixed(4)}`;
});

const resetMap = () => {
  mainPinMarker.setLatLng(centerCoordinates,ZOOM_LEVEL);
  map.setView(centerCoordinates,ZOOM_LEVEL);
  map.closePopup();
  setDefaultAddress(`${centerCoordinates.lat}, ${centerCoordinates.lng}`);
};

const initMap = (onLoad) => {
  map = L.map('map-canvas')
    .on('load', onLoad)
    .setView(centerCoordinates, ZOOM_LEVEL);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPinMarker.addTo(map);
};

export {initMap,renderIcons,resetMap};
