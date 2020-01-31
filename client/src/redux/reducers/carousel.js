const initialState = {
  products: [],
  error: null,
};

export default function carouselReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TOP_PRODUCT_LIST':
      return {
        ...state,
        topProducts: action.payload.products,
        error: null,
      };
    default: {
      return state
    }
  }
}