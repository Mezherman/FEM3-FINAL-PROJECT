const initialState = {
  productsList: [],
  topProducts: [],
  error: null,
  errorTop: null,
  productsListLoading: true,
  topProductsLoading: true
};

export default function carouselReducer(state = initialState, action) {
  // console.log('reducer', state);
  switch (action.type) {
    case 'FETCH_TOP_PRODUCTS_LIST_REQUEST':
      return {
        ...state,
        productsList: [],
        productsListLoading: true,
      };
    case 'FETCH_TOP_PRODUCTS_LIST_SUCCESS':
      return {
        ...state,
        productsList: action.payload.productsList.topSellers,
        error: null,
        productsListLoading: false
      };
    case 'FETCH_TOP_PRODUCTS_LIST_FAILURE':
      return {
        ...state,
        productsList: [],
        error: action.payload.error,
        productsListLoading: false
      };
    case 'FETCH_TOP_PRODUCTS_REQUEST':
      return {
        ...state,
        productsList: [],
        productsListLoading: true,
      };
    case 'FETCH_TOP_PRODUCTS_SUCCESS':
      return {
        ...state,
        productsList: action.payload.products,
        errorTop: null,
        productsListLoading: false
      };
    case 'FETCH_TOP_PRODUCTS_FAILURE':
      return {
        ...state,
        productsList: [],
        errorTop: action.payload.error,
        productsListLoading: false
      };
    default: {
      return state
    }
  }
}