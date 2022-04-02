const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

function getType(type) {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
    default:
      return 'Неизвестно';
  }
}

function getPhotos(photos, card) {
  const resultFragment = document.createDocumentFragment();
  const popupPhoto = card.querySelector('.popup__photo').cloneNode(true);
  popupPhoto.src = photos;
  resultFragment.appendChild(popupPhoto);
  return resultFragment;
}

const createPopupElement = (offers) => {

  const cardElement = cardTemplate.cloneNode(true);
  if (offers.author.avatar) {
    cardElement.querySelector('.popup__avatar').src = offers.author.avatar;
  } else {
    cardElement.querySelector('.popup__avatar').remove();

  }
  if (offers.offer.title) {
    cardElement.querySelector('.popup__title').textContent = offers.offer.title;
  } else {
    cardElement.querySelector('.popup__title').remove();
  }

  if (offers.offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = offers.offer.address;
  } else {
    cardElement.querySelector('.popup__text--address').remove();
  }

  if (offers.offer.price) {
    cardElement.querySelector('.popup__text--price').textContent = `${offers.offer.price} ₽/ночь.`;
  } else {
    cardElement.querySelector('.popup__text--price').remove();
  }
  if (offers.offer.rooms && offers.offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${offers.offer.rooms} комнаты для ${offers.offer.guests} гостей`;
  } else {
    cardElement.querySelector('.popup__text--capacity').remove();
  }

  if (offers.offer.checkin && offers.offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offers.offer.checkin}, выезд до ${offers.offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').remove();
  }

  if (offers.offer.description) {
    cardElement.querySelector('.popup__description').textContent = offers.offer.description;
  } else {
    cardElement.querySelector('.popup__description').remove();
  }

  if (offers.offer.type) {
    cardElement.querySelector('.popup__type').textContent = getType(offers.offer.type);
  } else {
    cardElement.querySelector('.popup__type').remove();
  }
  const featuresContainer = cardElement.querySelector('.popup__features');

  if (offers.offer.features) {
    featuresContainer.innerHTML = '';
    offers.offer.features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature');
      featureElement.classList.add(`popup__feature--${feature}`);
      featuresContainer.appendChild(featureElement);
    });
  }

  if (offers.offer.photos) {
    cardElement.querySelector('.popup__photos').replaceChild(getPhotos(offers.offer.photos, cardElement), cardElement.querySelector('.popup__photo'));
  } else {
    cardElement.querySelector('.popup__photos').remove();
  }

  return cardElement;
};

export {createPopupElement};
