const favoritesUpdated = (favorites) => ({
  type: 'UPDATE_FAVORITES_SUCCESS',
  payload: favorites
});

const favoritesCleared = () => ({
  type: 'CLEAR_FAVORITES'
});

const getFavoritesFromDB = () => ({
  type: 'SET_FAVORITES_FROM_DB'
});

export {
  favoritesUpdated,
  getFavoritesFromDB,
  favoritesCleared
}