import axios from 'axios';

function getCommentsOfProducts(productId) {
  return axios
    .get(`/comments/product/${productId}`)
    .then((comments) => comments.data)
    .catch((err) => err.response.data);
}

export default getCommentsOfProducts;
