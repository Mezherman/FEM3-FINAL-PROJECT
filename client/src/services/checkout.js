import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

export default function placeOrderToDB(newOrder) {
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
      alert(error.response.message);
      return error
    })
}

