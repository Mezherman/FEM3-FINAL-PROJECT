import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMWUxZDMzNGZlMDVmMGJkY2I0MDJiZCIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Nzk3NzQ1NjEsImV4cCI6MTU3OTgxMDU2MX0.UTOpNMTWpPcAQ2IGOPcjJWuLLKMP5NAA9de6z0fEmM4';


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
export function getFavoriteProducts(itemIdArr) {
  const itemIdString = itemIdArr.join(',');
  return axios.get(`/products/filter?_id=${itemIdString}`)
    .then((response) => response.data.products)
}

export function addFavoritesToDB(itemId) {
  console.log(itemId);
  return axios
    .put(`/wishlist/${itemId}`)
    .then(updatedWishlist => {
      console.log('upd favor =', updatedWishlist);
      return updatedWishlist
    })
    .catch(err => err);

}
