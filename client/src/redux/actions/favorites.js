const createFavoritesList = (products) => ({
  type: 'FETCH_FAVORITES_REQUEST',
  payload: { products }
})

const favoritesAdded = (favorites) => ({
  type: 'ADD_FAVORITES_SUCCESS',
  payload: favorites
});

const favoritesShow = (favorites) => ({
  type: 'SHOW_FAVORITES',
  payload: favorites
});

export {
  favoritesAdded,
  favoritesShow
}