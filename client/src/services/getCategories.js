const axios = require('axios');

export default function getCategories() {
  return axios.get(`${window.location.origin}/categories.json`)
    .then((response) => response.data)
}
