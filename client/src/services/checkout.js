import axios from 'axios';

function placeOrderToDB(newOrder) {
  return axios
    .post('/orders', newOrder)
    .then((response) => {
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
