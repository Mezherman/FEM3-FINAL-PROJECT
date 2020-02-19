import axios from 'axios';

export default function getCategories() {
  return axios.get('/catalog')
    .then((response) => response.data)
    .catch((err) => alert(err.message))
}

function getCategory(id) {
  return axios.get(`catalog/${id}`)
    .then((response) => response.data)
    .catch((err) => alert(err.message))
}

export {
  getCategory,
}
