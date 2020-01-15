const initialState = {
  products: {
    12345: {
      product: {
        title: 'Set 66 DENVER',
        price: '304',
        specialPrice: '149',
        url: 'https://www.wmf.com/media/catalog/product/cache/2/small_image/265x/9df78eab33525d08d6e5fb8d27136e95/1/1/11_4800_6041_100.jpg',
        art: '592.213.49',
        color: 'light grey',
        id: '12345'
      },
      productQuantity: 1
    }
  },
  cartQuantity: 1
};

export default function cart(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const product = action.payload;
      if (!product || !product.id) return state;

      const products = { ...state.products };
      if (products[product.id]) {
        products[product.id].productQuantity++;
      } else {
        products[product.id] = {
          product,
          productQuantity: 1
        };
      }
      const newState = { ...state, products, cartQuantity: getCartQuantity(products) };
      console.log('newSate ', newState);
      return newState;
    }
    case 'GET_CART_QUANTITY': {
      return { ...state, cartQuantity: getCartQuantity(state.products) };
    }
    case 'SET_PRODUCT_QUANTITY': {
      const newQuantity = action.payload.quantity;
      const id = action.payload.productId;
      console.log('newQuantity', newQuantity);
      console.log('id', id);
      const { products } = state;
      if (!products[id]) return { ...state };
      products[id].productQuantity = +newQuantity;
      return { ...state, products, cartQuantity: getCartQuantity(products) }
    }
    default: return { ...state };
  }

  function getCartQuantity (products) {
    return Object.values(products).reduce(
      (totalQuantity, current) => totalQuantity + current.productQuantity,
      0
    );
  }
}