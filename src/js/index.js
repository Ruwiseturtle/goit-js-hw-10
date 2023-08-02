import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

import {
  createMarkupOptions,
  createMarkupCatShow,
} from '../templates/functions.js';
import { fetchBreeds, fetchCatByBreed } from '../js/cat-api.js';

const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT = '/breeds';
const API_KEY =
  'live_NqCT8Nwkxuj6edZ1OwQGKuojQMkYLWj7L4oQ3fZLryh0xj2BQo0SHp9dUXgOOBta';
const wholeURL = BASE_URL + END_POINT + '?api_key=' + API_KEY;

const selectBreed = document.getElementById('selectBreed');
const loaderItem = document.querySelector('.loader');
const divInfoCat = document.querySelector('div.cat-info');
const sectionLoad = document.querySelector('.section-load');

//витягуємо дані про котиків із сервера
fetchBreeds(wholeURL).then(renderData).catch(errorfetchData);

function renderData(dataCat) {
  const markup = createMarkupOptions(dataCat);
  selectBreed.innerHTML = markup;

  loaderItem.hidden = true;
  selectBreed.hidden = false;
    sectionLoad.hidden = true;
    
    new SlimSelect({
        select: '#selectBreed'
    });
  
}

function errorfetchData() {
  loaderItem.hidden = true;
  //   errorItem.hidden = false;
}

//слідкуємо за тим, яку породу користувач вибрав
selectBreed.addEventListener('change', showInfoBreed);

function showInfoBreed(e) {
  fetchCatByBreed(e.target.value).then(showCat).catch(errorGetInfoCat);
}

function showCat(infoCat) {
  console.log(infoCat);
  const markup = createMarkupCatShow(infoCat);
  divInfoCat.innerHTML = markup;
}

function errorGetInfoCat(error) {
  // Notiflix.Notify.warning(error);
  console.log('x');
}
