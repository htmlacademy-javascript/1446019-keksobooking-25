const successElement = document.querySelector('#success').content.querySelector('.success');
const errorElement = document.querySelector('#error').content.querySelector('.error');

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

export {showErrorMessage, showSuccessMessage};
