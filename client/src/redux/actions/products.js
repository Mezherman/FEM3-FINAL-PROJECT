const productsRequested = () => ({
  type: 'FETCH_PRODUCTS_REQUEST'
});

const productsLoaded = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: { products }
});

const productsError = (error) => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: {
    products: [],
    error
  }
});

export {
  productsRequested,
  productsLoaded,
  productsError
}