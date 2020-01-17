const initialState = { products: [] };

export default function productsReducer(state = initialState, action) {
  // console.log('IN REDUCER =', action);
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        products: action.payload.products
      };

    default: {
      return state
    }
  }
}