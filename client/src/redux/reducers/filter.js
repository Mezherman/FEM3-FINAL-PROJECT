const initialState = {
  filters: [],
  price: [],
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_FILTER_PRODUCTS':
      return {
        ...state,
        filters: action.payload
      };

    case 'GET_PRICE_PRODUCTS':
      return {
        ...state,
        price: action.payload
      };

    default:
      return state
  }
}
