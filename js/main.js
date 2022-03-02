const getRandomInteger = (min, max) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('ошибка');
};
getRandomInteger(1,5);

const getRandomFloat = (min, max, point) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(point);
  }
  throw new Error('Ошибка Ошибка');
};

getRandomFloat(2,5,4);


const AUTHOR = {
  avatar: `img/avatars/user${  getRandomFloat()  }.png`
};

const OFFER = {
  title: 'Заголовок',
  adress: 'aдрес',
  price: getRandomInteger(1,100),
  type: ['palace','flat','house','bungalow','hotel'],
  rooms: getRandomInteger(1,100),
  guests: getRandomInteger(1,100),
  checkin: ['12:00','13:00','14:00'],
  checkout: ['12:00','13:00','14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'описание помещения. Придумайте самостоятельно',
  photo: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
};

const LOCATION = {
  lat: getRandomFloat(35.65000,35.70000,5),
  lng: getRandomFloat(139.7000,139.8000,5)
};

window.console.log(LOCATION);
window.console.log(AUTHOR);
window.console.log(OFFER);
