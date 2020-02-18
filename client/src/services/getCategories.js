import axios from 'axios';


export default function getCategories() {
  return axios.get('/catalog')
    .then((response) => response.data)
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
