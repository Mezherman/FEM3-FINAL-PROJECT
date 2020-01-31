import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getOrders() {
  return axios.get('/orders')
    .then((response) => response.data)
}
