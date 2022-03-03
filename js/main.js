const getRandomInteger = (min, max) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('ошибка');
};
/* getRandomInteger(1,5); */

const getRandomFloat = (min, max, point) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(point);
  }
  throw new Error('Ошибка Ошибка');
};

/* getRandomFloat(2,5,4); */

const ANNOUNCEMENT_TITLE = [
  '2-к. квартира, 58 м², 3/3 эт.',
  '1-к. квартира, 36,4 м², 2/2 эт.',
  'Дом 183 м² на участке 7 сот.',
  'Дом 120 м² на участке 4,5 сот.',
  'Таунхаус 100 м² на участке 1 сот.',
  '3-к. квартира, 65 м², 2/9 эт.',
  '3-к. квартира, 75 м², 4/9 эт.',
  'Таунхаус 80 м² на участке 3 сот.',
  'Дом 53 м² на участке 33 сот.',
  'Таунхаус 100 м² на участке 1,1 сот.'
];

const TYPES_ROOMS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FESTURES_ROOMS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTION_ROOM = [
  'C игровой зоной',
  'дом находится в центре города',
  '5 минут до метро',
  'Можно с животным',
  'Есть кондиционер',
  'Для славян',
  'С прекрасным видом',
  'Не для шумных компаний',
  'Есть мангальная зона',
  'Есть бассейн с сауной'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


const AVATAR_ID = [1];
const getAvatarID = (AvatarID) => {
  AvatarID = AVATAR_ID[AVATAR_ID.length - 1];
  AVATAR_ID.push(AvatarID + 1);
  if (AvatarID < 10) {
    AvatarID =`0${AvatarID}`;
    /* window.console.log(AvatarID); */
  }
  return AvatarID;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createAnnouncement = () => {
  const LOCATION_LAT = getRandomFloat(35.65000,35.70000,5);
  const LOCATION_LNG = getRandomFloat(139.7000,139.8000,5);
  return {
    author:{
      avatar: `img/avatars/user${getAvatarID()}.png`
    },

    offer:{
      title: getRandomArrayElement(ANNOUNCEMENT_TITLE),
      address: `${LOCATION_LAT}, ${LOCATION_LNG}`,
      price: getRandomInteger(1,100000),
      type: getRandomArrayElement(TYPES_ROOMS),
      rooms: getRandomInteger(1,100),
      guests: getRandomInteger(1,100),
      checkin: getRandomArrayElement(CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(CHECKIN_CHECKOUT),
      features: getRandomArrayElement(FESTURES_ROOMS),
      description: getRandomArrayElement(DESCRIPTION_ROOM),
      photo: getRandomArrayElement(PHOTOS)
    },

    location:{
      lat: LOCATION_LAT,
      lng: LOCATION_LNG

    }
  };
};

const similarAnnouncement = Array.from({length: 10}, createAnnouncement);

window.console.log(similarAnnouncement);
