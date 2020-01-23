const initialState = {
  favorites: [],
  error: null,
  favoritesLoading: true
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITES_SUCCESS':
      // console.log('in reducer', action.payload);
      return {
        favorites: action.payload,
        error: null,
        favoritesLoading: false
      };
    case 'SHOW_FAVORITES':
      return {
        favorites: action.payload
      }
    default:
      return state
  }
}