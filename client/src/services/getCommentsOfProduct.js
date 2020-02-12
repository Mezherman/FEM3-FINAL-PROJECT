import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function getCommentsOfProducts(productId) {
  // console.log(productId);
  return axios
    .get(`/comments/product/${productId}`)
    .then((comments) => comments.data)
    .catch(err => {
      console.log(err.response.data);
    });
}

export default getCommentsOfProducts;
