const createFavoritesList = (products) => ({
  type: 'FETCH_FAVORITES_REQUEST',
  payload: { products }
})

const favoritesAdded = (favorites) => ({
  type: 'ADD_FAVORITES_SUCCESS',
  payload: favorites
});

export {
  favoritesAdded,
}