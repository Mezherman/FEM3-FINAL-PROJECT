import axios from 'axios';


export default function getOrders() {
  return axios.get('/orders')
    .then((response) => response.data)
}
