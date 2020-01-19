const initialState = {
  brand: [],
  price: [],
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BRAND_PRODUCTS':
      return {
        ...state,
        brand: action.payload
      }

    case 'GET_PRICE_PRODUCTS':
      return {
        ...state,
        price: action.payload
      }

    default:
      return state
  }
}
