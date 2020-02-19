import axios from 'axios';

export default function getCategories() {
  return axios.get('/catalog')
    .then((response) => response.data)
    .catch((err) => alert(err.response.message))
}

function getCategory(id) {
  return axios.get(`catalog/${id}`)
    .then((response) => {
      console.log('in services =', response);
      return response.data
    })
    .catch((err) => {
      console.log('in services error =', err);
      alert(err.response.message)
    })
}

export {
  getCategory,
}
