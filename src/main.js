import fetchImages from './js/pixabay-api';
import {
  hideLoader,
  renderImages,
  showLoader,
  showMessage,
  showMessageErr,
} from './js/render-functions';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');
// const loaderBox = document.querySelector('.loader-box');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = input.value.trim();

  if (!searchText) return;

  input.value = '';

  showLoader();

  fetchImages(searchText)
    .then(data => handleSearchResults(data.data.hits))
    .catch(err => {
      // loaderBox.textContent = 'Something went wrong...';
      showMessageErr();
      console.log(err);
    });

  function handleSearchResults(images) {
    if (images.length == 0) {
      showMessage();
    }

    renderImages(images);
  }
}
