const successElement = document.querySelector('#success').content.querySelector('.success');
const errorElement = document.querySelector('#error').content.querySelector('.error');

const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100000;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '50%';
  alertContainer.style.width = '600px';
  alertContainer.style.top = '300px';
  alertContainer.style.transform = 'translateX(-50%)';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#d3d3d3';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const closeModalMessage = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
  successElement.remove();
  errorElement.remove();
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalMessage();
  }
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeModalMessage();
  }
});

const getSuccessMessage = () => {
  document.body.append(successElement);
  document.addEventListener('click', () => {
    successElement.remove();
  });
};

const getErrorMessage = () => {
  document.body.append(errorElement);
  document.addEventListener('click', () => {
    errorElement.remove();

  });
};

export {getRandomInteger,getRandomFloat,getErrorMessage,getSuccessMessage,showAlert};
