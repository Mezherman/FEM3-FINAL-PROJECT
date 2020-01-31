import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default function putPassword(passwords) {
  return axios
    .put('/customers/password', passwords)
}
