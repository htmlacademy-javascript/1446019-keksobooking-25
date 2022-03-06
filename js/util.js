const getRandomInteger = (min, max) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('ошибка');
};

const getRandomFloat = (min, max, point) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(point);
  }
  throw new Error('Ошибка');
};

let currentId = 0;
const getAvatarUrl = () => {
  currentId += 1;
  return `img/avatars/user${currentId.toString().padStart(2, '0')}.png`;
};

export {getRandomInteger,getRandomFloat,getAvatarUrl};
