const initialState = {
  favorites: [],
  error: null,
  favoritesLoading: true
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITES_SUCCESS':
      console.log('in red', action.payload);
      return {
        favorites: action.payload,
        error: null,
        favoritesLoading: false
      }
    default:
      return state
  }
}