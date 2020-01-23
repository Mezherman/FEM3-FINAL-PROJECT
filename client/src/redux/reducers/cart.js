const initialState = {
  products: [

  ],
  totalCartQuantity: 0,
  totalCartPrice: 0
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_SUCCESS':
    case 'REMOVE_PRODUCT_SUCCESS':
    case 'UPDATE_CART_SUCCESS': {
      const { newCart } = action.payload;
      console.log('newCart', newCart);

      if (newCart) {
        return {
          ...state,
          ...newCart
        };
      }
    }
    default: return { ...state };
  }
}