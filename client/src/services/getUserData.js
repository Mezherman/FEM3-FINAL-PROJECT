import axios from 'axios';

export default function getUserData() {
  return axios
    .get('/customers/customer')
}
