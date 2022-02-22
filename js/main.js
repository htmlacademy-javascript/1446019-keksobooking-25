const getRandom = (min, max) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw new Error('ошибка');
  }
};
getRandom(1,5);

const getRandomSwim = (min, max, point) => {
  if (min>=0 && max>=0 && max>min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(point);
  } else {
    throw new Error('ошибка');
  }
};

getRandomSwim(2,5,4);
