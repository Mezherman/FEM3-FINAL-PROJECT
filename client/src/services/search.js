import axios from 'axios';

export default function getSearchedProducts(searchedValue) {
  const searchItem = {
    query: searchedValue
  };

  return axios
    .post('/products/search', searchItem)
    .then((response) => response.data)
    .catch((error) => error)
}