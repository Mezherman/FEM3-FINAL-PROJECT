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

function filterType(payload) {
  return {
    type: 'FILTER_TYPE',
    payload
  }
}

function resetFilterType() {
  return {
    type: 'RESET_FILTER_TYPE'
  }
}

export {
  getFilterProducts,
  filterParamsLoaded,
  filterType,
  resetFilterType
}
