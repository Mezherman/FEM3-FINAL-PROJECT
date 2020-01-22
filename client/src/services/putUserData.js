import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = localStorage.getItem('token');

export default function putUserData(newUserData) {
  return axios
    .put('/customers', newUserData)
}
