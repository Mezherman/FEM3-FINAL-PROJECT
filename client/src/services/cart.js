import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3ODk5Mjc5OSwiZXhwIjoxNTc5MDI4Nzk5fQ.DJHhj4JXSbmBO-zDmx6ia0USBGQpQ7ol7cEbm4GkFsk';

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
