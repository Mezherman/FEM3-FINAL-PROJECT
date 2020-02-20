import axios from 'axios';

export default function getProductsByItemNo(itemNo) {
  return axios
    .get(`/api/products/${itemNo}`)
    .then((product) => product)
    .catch((err) => alert(err.message));
}
