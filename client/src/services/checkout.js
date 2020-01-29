import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function placeOrderToDB(newOrder) {
  // console.log('ORDER IN SERVICES =', newOrder);
  return axios
    .post('/orders', newOrder)
    .then((placedOrder) => {
      // console.log('OK =', placedOrder);
      return placedOrder
    })
    .catch((error) => {
      // console.log('ERROR =', error);
      return error
    })
}

export {
  placeOrderToDB
}
