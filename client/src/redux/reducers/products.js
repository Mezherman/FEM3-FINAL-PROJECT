import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SORTING_PRODUCTS,
  RESET_SORTING
} from '../actions/actionTypes'

export const initialState = {
  products: [],
  error: null,
  productsLoading: true,
  sorting: '',
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products: [],
        error: null,
        productsLoading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        error: null,
        productsLoading: false
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        error: action.payload.error,
        productsLoading: false
      };
    case SORTING_PRODUCTS:
      return {
        ...state,
        sorting: action.payload.sorting,
        products: action.payload.products
      };
    case RESET_SORTING:
      return {
        ...state,
        sorting: ''
      };

    default: {
      return state
    }
  }
}
