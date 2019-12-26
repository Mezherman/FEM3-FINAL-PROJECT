const axios = require('axios');

export default function getAllCards () {
  return axios.get('./items.json')
    .then((response) => response.data)
}
