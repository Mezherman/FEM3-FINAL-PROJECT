import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getCategories() {
  return axios.get('/catalog')
    .then((response) => response.data)
}
