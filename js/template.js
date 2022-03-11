import {createAnnouncement} from '/.data.js';
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
//const similarListElement = document.querySelector('.popup');
const getAnnouncements = createAnnouncement();
const similarListFragment = document.createDocumentFragment();
getAnnouncements.forEach(({offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.adress;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} Р/ночь`;
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  similarListFragment.appendChild(cardElement);
});

mapCanvas.appendChild(similarListFragment);

export {getAnnouncements};

