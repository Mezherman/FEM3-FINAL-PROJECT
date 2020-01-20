const initialState = {
  products: [],
  error: null,
  productsLoading: true
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        products: [],
        error: null,
        productsLoading: true
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        products: action.payload.products,
        error: null,
        productsLoading: false
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        products: [],
        error: action.payload.error,
        productsLoading: false
      };

    default: {
      return state
    }
  }
}