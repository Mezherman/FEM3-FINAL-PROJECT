import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function getFilteredProducts(value) {
  return axios
    .get(`/products/filter?${value}`)
    .then((response) => response.data.products)
    .catch((error) => console.log(error))
}

function getColors() {
  return axios('/colors').then((response) => (response.data))
}

function getBrands() {
  return axios('/filters/brands').then((response) => (response.data))
}

function getManufacturer() {
  return axios('/filters/manufacturers').then((respronse) => respronse.data)
}

export {
  getFilteredProducts,
  getColors,
  getBrands,
  getManufacturer,
}