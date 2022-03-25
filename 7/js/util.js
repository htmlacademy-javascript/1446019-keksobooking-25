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

export {getRandomInteger,getRandomFloat};
