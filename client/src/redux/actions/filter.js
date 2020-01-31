function getFilterProducts(filterResults) {
  return {
    type: 'GET_FILTER_PRODUCTS',
    payload: filterResults
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
  filterParamsLoaded
}