const topProductListRequested = () => ({
  type: 'FETCH_TOP_PRODUCTS_LIST_REQUEST'
});

const topProductListLoaded = (productsList) => ({
  type: 'FETCH_TOP_PRODUCTS_LIST_SUCCESS',
  payload: { productsList }
});

const topProductsListError = (error) => ({
  type: 'FETCH_TOP_PRODUCTS_LIST_FAILURE',
  payload: {
    products: [],
    error
  }
});

const topProductRequested = () => ({
  type: 'FETCH_TOP_PRODUCTS_REQUEST'
});

const topProductLoaded = (topProducts) => ({
  type: 'FETCH_TOP_PRODUCTS_SUCCESS',
  payload: { topProducts }
});

const topProductsError = (error) => ({
  type: 'FETCH_TOP_PRODUCTS_FAILURE',
  payload: {
    products: [],
    error
  }
});

export {
  topProductListRequested,
  topProductListLoaded,
  topProductsListError,
  topProductRequested,
  topProductLoaded,
  topProductsError
}
