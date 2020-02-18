import axios from 'axios';

export function getFavoriteProducts() {
  return axios.get('/wishlist')
    .then((response) => response.data)
}

export function addFavoriteProduct(itemId) {
  return axios
    .put(`/wishlist/${itemId}`)
    .then((updatedWishlist) => updatedWishlist.data)
    .catch((err) => err);
}

export function deleteFavoriteProduct(itemId) {
  return axios.delete(`/wishlist/${itemId}`)
    .then((response) => response.data)
}

export function deleteFavoritesList() {
  return axios.delete('/wishlist')
}