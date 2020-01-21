const initialState = {
  filters: [],
  currentPrice: [],
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
        currentPrice: action.payload
      };

    default:
      return state
  }
}
