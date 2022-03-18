import {getRandomInteger, getRandomFloat} from './util.js';
const announcementTitles = [
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

const roomTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkinTimes = [
  '12:00',
  '13:00',
  '14:00'
];

const roomFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const roomDescriptions = [
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

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let currentId = 0;
const getAvatarUrl = () => {
  currentId += 1;
  return `img/avatars/user${currentId.toString().padStart(2, '0')}.png`;
};

const createAnnouncement = () => {
  const locationLat = getRandomFloat(35.65000,35.70000,5);
  const locationLon = getRandomFloat(139.7000,139.8000,5);
  return {
    author:{
      avatar: getAvatarUrl()
    },
    offer:{
      title: getRandomArrayElement(announcementTitles),
      address: `${locationLat}, ${locationLon}`,
      price: getRandomInteger(1,100000),
      type: getRandomArrayElement(roomTypes),
      rooms: getRandomInteger(1,100),
      guests: getRandomInteger(1,100),
      checkin: getRandomArrayElement(checkinTimes),
      checkout: getRandomArrayElement(checkinTimes),
      features: getRandomArrayElement(roomFeatures),
      description: getRandomArrayElement(roomDescriptions),
      photos: getRandomArrayElement(photos)
    },
    location:{
      lat: locationLat,
      lng: locationLon
    }
  };
};
export {createAnnouncement};
