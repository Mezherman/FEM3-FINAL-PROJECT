const axios = require('axios');

export default function getAllCards () {
  return axios.get(`${window.location.origin}/items.json`)
    .then((response) => response.data)
}
