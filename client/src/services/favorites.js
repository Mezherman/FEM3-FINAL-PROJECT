import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

export function getFavoriteProducts() {
  return axios.get('/wishlist')
    .then((response) => response.data)
    .catch((err) => err);
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
    .catch((err) => err);
}

export function deleteFavoritesList() {
  return axios.delete('/wishlist')
}