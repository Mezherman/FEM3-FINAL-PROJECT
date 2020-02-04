import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function placeOrderToDB(newOrder) {
  console.log('ORDER IN SERVICES =', newOrder);
  return axios
    .post('/orders', newOrder)
    .then((response) => {
      console.log('OK =', response);
      if (response.data.productAvailibilityInfo) {
        return {
          orderIsPlaced: false,
          placedOrder: {},
          message: response.data.message
        }
      }
      return {
        orderIsPlaced: true,
        placedOrder: response.data.order,
        message: ''
      }
    })
    .catch((error) => {
      console.log('ERROR =', error);
      return error
    })
}

export {
  placeOrderToDB
}
