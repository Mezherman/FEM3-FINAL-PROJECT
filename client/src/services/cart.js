import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getCart() {
  return axios.get('/cart')
    .then((response) => response.data)
}

export function addProductToCart(productId) {
  return axios.put(`/cart/${productId}`)
    .then((response) => response.data)
}
export function updateCart(updatedCart) {
  return axios.put('/cart', updatedCart)
    .then((response) => response.data)
}
export function deleteProductFromCart(productId) {
  return axios.put(`/cart/${productId}`)
    .then((response) => response.data)
}
export function deleteCart() {
  return axios.delete('/cart')
    .then((response) => response.data)
}
