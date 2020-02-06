import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getCategories() {
  return axios.get('/catalog')
    .then((response) => { console.log(response); return response.data})
    .catch((err) => {
      console.log('ERROR = ', err);
    });
}

function getCategory(id) {
  return axios.get(`catalog/${id}`)
    .then((response) => {
      // console.log(response.data.topSellers)
      return response.data
    })
    .catch((err) => {
      console.log('ERROR = ', err);
    });
}

export {
  getCategory,
}
