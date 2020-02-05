import axios from 'axios';


export default function search(value) {
  return axios
    .post('/products/search', value)
    .then((response) => response.data)
    .catch((error) => error)
}
