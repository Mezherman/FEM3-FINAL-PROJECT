import axios from 'axios';

export default function putPassword(passwords) {
  return axios
    .put('/customers/password', passwords)
}
