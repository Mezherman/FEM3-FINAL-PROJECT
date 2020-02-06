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

const sortingProducts = (products, sortingType) => ({
  type: 'SORTING_PRODUCTS',
  payload: {
    products,
    sorting: sortingType
  }
});

const sortingReset = () => ({
  type: 'RESET_SORTING'
});

export {
  productsRequested,
  productsLoaded,
  productsError,
  sortingProducts,
  sortingReset
}
