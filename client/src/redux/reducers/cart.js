const initialState = {
  products: {
    '5e1ce3c0afe1f2447c932b9b': {
      product: {
        enabled: true,
        imageUrls:
          [
            '/img/products/preparing/knives/4000530678515/1.jpg',
            '/img/products/preparing/knives/4000530678515/2.jpg',
            '/img/products/preparing/knives/4000530678515/3.jpg',
            '/img/products/preparing/knives/4000530678515/4.jpg',
            '/img/products/preparing/knives/4000530678515/5.jpg',
            '/img/products/preparing/knives/4000530678515/6.jpg',
            '/img/products/preparing/knives/4000530678515/7.jpg',
            '/img/products/preparing/knives/4000530678515/8.jpg'
          ],
        quantity: 10,
        _id: '5e1ce3c0afe1f2447c932b9b',
        name: 'knife block with knives 8-pc',
        currentPrice: 359,
        categories: 'knives',
        color: 'stainless steel',
        productUrl: '/knife-block-with-knives-8-pc-4000530678515',
        brand: 'WMF',
        manufacturer: 'WMF Corp',
        manufacturerCountry: 'Germany',
        myCustomParams: { EAN: 4000530678515, collection: 'Grand Gourmet', material: 'Special blade steel', setSize: 8, fragile: false },
        itemNo: '44543',
        date: '2020-01-13T21:40:16.778Z'
      },
      cartQuantity: 2,
    }
  },
  totalCartQuantity: 2,
  totalCartPrice: 0
};

export default function cart(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const product = action.payload;
      if (!product || !product._id) return state;

      const products = { ...state.products };
      if (products[product._id]) {
        products[product._id].cartQuantity++;
      } else {
        products[product._id] = {
          product,
          cartQuantity: 1
        };
      }
      const newState = {
        ...state,
        products,
        totalCartQuantity: getCartQuantity(products),
        totalCartPrice: getTotalCartPrice(products)
      };
      return newState;
    }
    case 'REMOVE_PRODUCT': {
      const productId = action.payload;
      if (!productId) return state;
      const products = { ...state.products };
      if (!products[productId]) {
        return state;
      }

      delete products[productId];
      const newState = {
        ...state,
        products,
        totalCartQuantity: getCartQuantity(products),
        totalCartPrice: getTotalCartPrice(products)
      };
      return newState;
    }
    case 'SET_PRODUCT_QUANTITY': {
      const newQuantity = action.payload.quantity;
      const _id = action.payload.productId;
      if (newQuantity < 1) return { ...state };
      if (!_id) return { ...state };
      const { products } = state;
      if (!products[_id]) return { ...state };
      products[_id].cartQuantity = +newQuantity;
      return {
        ...state,
        products,
        totalCartQuantity: getCartQuantity(products),
        totalCartPrice: getTotalCartPrice(products)
      }
    }
    default: return { ...state };
  }

  function getCartQuantity (products) {
    return Object.values(products).reduce(
      (totalQuantity, current) => totalQuantity + current.cartQuantity,
      0
    );
  }
  function getTotalCartPrice (products) {
    return Object.values(products).reduce(
      (totalPrice, current) => totalPrice + (current.cartQuantity * current.product.currentPrice),
      0
    );
  }
}