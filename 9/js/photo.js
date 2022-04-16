const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#images');
const preview = document.querySelector('.ad-form__photo');
const futureImage = document.createElement('img');

futureImage.style.maxWidth = '100%';
futureImage.style.maxHeight = '100%';

preview.appendChild(futureImage);

fileChooser.addEventListener(('change'), () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches){
    futureImage.src = URL.createObjectURL(file);
  }
});
