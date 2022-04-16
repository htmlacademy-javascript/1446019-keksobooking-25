const successElement = document.querySelector('#success').content.querySelector('.success');
const errorElement = document.querySelector('#error').content.querySelector('.error');

const ALERT_SHOW_TIME = 5000;

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

const closeSuccessMessage = () => {
  successElement.remove();
  document.removeEventListener('click', handleSuccessMessageClick);
  document.removeEventListener('keydown', handleSuccessMessageKeydown);
};

function handleSuccessMessageClick() {
  closeSuccessMessage();
}

function handleSuccessMessageKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
  }
}

const closeErrorMessage = () => {
  errorElement.remove();
  document.removeEventListener('click', handleErrorMessageClick);
  document.removeEventListener('keydown', handleErrorMessageKeydown);
};

function handleErrorMessageClick() {
  closeErrorMessage();
}

function handleErrorMessageKeydown (evt){
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
}

const showSuccessMessage = () => {
  document.body.append(successElement);
  document.addEventListener('click', handleSuccessMessageClick);
  document.addEventListener('keydown', handleSuccessMessageKeydown);
};

const showErrorMessage = () => {
  document.body.append(errorElement);
  document.addEventListener('click', handleErrorMessageClick);
  document.addEventListener('keydown', handleErrorMessageKeydown);
};

export {showErrorMessage, showSuccessMessage,showAlert};
