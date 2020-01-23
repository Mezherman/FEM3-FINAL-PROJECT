import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = 'Bearer' +
  ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3ODk5Mjc5OSwiZXhwIjoxNTc5MDI4Nzk5fQ.DJHhj4JXSbmBO-zDmx6ia0USBGQpQ7ol7cEbm4GkFsk';


export default function addToFavorites(products) {
  return axios.put('/wishlist', products)
    .then((response) => console.log(response.data))
}
//Array of ItemNo
export function getFavoritesList() {
  return axios.get('/wishlist')
    .then((response) => console.log('favorites.js friom DB', response.data))
}

//Array of Favorite Prod
export function getFavoriteProducts(itemNoArr) {
  const itemNoString = itemNoArr.join(',');
  return axios.get(`/products/filter?itemNo=${itemNoString}`)
    .then((response) => response.data.products)
}

