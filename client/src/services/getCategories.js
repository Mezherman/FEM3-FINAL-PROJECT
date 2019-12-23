const axios = require('axios');

export default function getCategories() {
  return axios.get('./categories.json')
    .then((response) => response.data)
}