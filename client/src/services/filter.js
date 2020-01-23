import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';


export default function getAllFilterProducts() {
  return axios
    .get('products/filter/')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
}

// export async function getFilterProducts(filter) {
//   return axios
//     .get(`/products/filter?${filter}`)
//     .then((response) => console.log('getFilterProducts = ', response))
//     .catch((err) => {
//       console.log('ERROR = ', err);
//     });
// }