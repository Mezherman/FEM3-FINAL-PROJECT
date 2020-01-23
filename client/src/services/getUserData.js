import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getUserData() {
  return axios
    .get('/customers/customer')
}
