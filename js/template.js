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

function getPhotos(photos, card){
  const resultFragment = document.createDocumentFragment();
  const popupPhoto = card.querySelector('.popup__photo').cloneNode(true);
  popupPhoto.src = photos;
  resultFragment.appendChild(popupPhoto);
  return resultFragment;
}

const createOffersElement = (offers) => {
  const fragment = document.createDocumentFragment();

  offers.forEach((offer) => {
    const cardElement = cardTemplate.cloneNode(true);
    if (offer.offer.title) {
      cardElement.querySelector('.popup__title').textContent = offer.offer.title;
    } else {
      cardElement.querySelector('.popup__title').remove();
    }

    if (offer.offer.address) {
      cardElement.querySelector('.popup__text--address').textContent = offer.offer.address;
    } else {
      cardElement.querySelector('.popup__text--address').remove();
    }

    if (offer.offer.price) {
      cardElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь.`;
    } else {
      cardElement.querySelector('.popup__text--price').remove();
    }
    if (offer.offer.rooms && offer.offer.guests) {
      cardElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
    } else {
      cardElement.querySelector('.popup__text--capacity').remove();
    }

    if (offer.offer.checkin && offer.offer.checkout) {
      cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
    } else {
      cardElement.querySelector('.popup__text--time').remove();
    }

    if (offer.offer.description) {
      cardElement.querySelector('.popup__description').textContent = offer.offer.description;
    } else {
      cardElement.querySelector('.popup__description').remove();
    }

    if (offer.author.avatar) {
      cardElement.querySelector('.popup__avatar').textContent = offer.author.avatar;
    } else {
      cardElement.querySelector('.popup__avatar').remove();
    }

    if(offer.offer.type){
      cardElement.querySelector('.popup__type').textContent = getType(offer.offer.type);
    }
    else{
      cardElement.querySelector('.popup__type').remove();
    }
    const featuresContainer = cardElement.querySelector('.popup__features');

    if (offer.features) {
      const featuresList = featuresContainer.querySelectorAll('.popup__feature');
      featuresList.forEach((item) => {
        const isNecessary = offer.offer.features.some(
          (feature) => item.classList.contains(`popup__feature--${feature}`),
        );
        if (!isNecessary) {
          item.remove();
        }
      });
    }
    if(offer.offer.photos){
      cardElement.querySelector('.popup__photos').replaceChild(getPhotos(offer.offer.photos, cardElement), cardElement.querySelector('.popup__photo'));
    }
    else{
      cardElement.querySelector('.popup__photos').remove();
    }
    fragment.appendChild(cardElement);
  });

  return fragment;
};

export {createOffersElement};
