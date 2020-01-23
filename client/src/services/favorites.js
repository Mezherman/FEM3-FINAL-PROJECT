import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = 'Bearer' +
  ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3OTgxMDY5MywiZXhwIjoxNTc5ODQ2NjkzfQ.UvlgObA5TOhw8PXmSMOEoNFKJMPVWtCTYEpyaiHQRz4';

export default function addToFavorites(products) {
  return axios.put('/wishlist', products)
    .then((response) => response.data)
}
//Array of ItemNo
export function getFavoritesList() {
  return axios.get('/wishlist')
    .then((response) => console.log('favorites.js friom DB', response.data))
}

//Array of Favorite Prod
export function getFavoriteProducts() {
  // const itemIdString = itemIdArr.join(',');
  return axios.get('/wishlist')
    .then((response) => {
      console.log('RESPONSE =', response);
      return response.data
    })
}

export function addFavoritesToDB(itemId) {
  // console.log(itemId);
  return axios
    .put(`/wishlist/${itemId}`)
    .then(updatedWishlist => {
      console.log('upd favor after ADD =', updatedWishlist.data.products);
      return updatedWishlist.data
    })
    .catch(err => err);
}

export function deleteFavoriteProducts(itemId) {
  return axios.delete(`/wishlist/${itemId}`)
    .then((response) => {
      console.log('upd favor after DEL =', response.data.products);
      return response.data
    })
}