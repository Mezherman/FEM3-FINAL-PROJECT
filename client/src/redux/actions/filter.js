function getFilterProducts(filters) {
  // console.log('in action =', filters);
  return {
    type: 'GET_FILTER_PRODUCTS',
    payload: filters
  }
}

function getPriceProducts(currentPrice) {
  return {
    type: 'GET_PRICE_PRODUCTS',
    payload: currentPrice
  }
}

function filterParamsLoaded(filterTitle, params) {
  return {
    type: 'FETCH_FILTER_PARAMS_SUCCESS',
    payload: {
      filterTitle,
      params
    }
  }
}

export {
  getFilterProducts,
  getPriceProducts,
  filterParamsLoaded
}