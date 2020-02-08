import axios from 'axios';

export default function postLoginData (userData) {
  return axios
    .post('/customers/login', userData)
}
