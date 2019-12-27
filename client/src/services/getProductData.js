const axios = require('axios');

export default function getProductData() {
  // params: {
  //   this.id = id
  // }
  return axios.get('./product-detail.json')
    .then((response) => response.data)
    .catch((error) => console.log(error))
}
