import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_NqCT8Nwkxuj6edZ1OwQGKuojQMkYLWj7L4oQ3fZLryh0xj2BQo0SHp9dUXgOOBta';

export function fetchBreeds(URL) {
  return axios.get(URL).then(result => {
    return result.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then(result => {
      return result.data[0];
    });
}
