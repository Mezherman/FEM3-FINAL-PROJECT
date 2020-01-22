import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = localStorage.getItem('token');

export default function getUserData() {
  return axios
    .get('/customers/customer')
}
