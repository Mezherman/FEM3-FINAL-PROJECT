import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

export default function getSearchedProducts(searchedValue) {
  const searchItem = {
    query: searchedValue
  };

  return axios
    .post('/products/search', searchItem)
    .then((response) => response.data)
    .catch((error) => {
      console.log('ERROR =', error);
      return error
    })
}
