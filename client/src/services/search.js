import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default function search(value) {
  return axios
    .post('/products/search', value)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
}