import {
  GET_FILTER_PRODUCTS,
  FETCH_FILTER_PARAMS_SUCCESS,
  FILTER_TYPE,
  RESET_FILTERS
} from './actionTypes'

function getFilterProducts(filterResults) {
  return {
    type: GET_FILTER_PRODUCTS,
    payload: filterResults
  }
}

function filterParamsLoaded(filterTitle, params) {
  return {
    type: FETCH_FILTER_PARAMS_SUCCESS,
    payload: {
      filterTitle,
      params
    }
  }
}

function filterType(payload) {
  return {
    type: FILTER_TYPE,
    payload
  }
}

function resetFilters() {
  return {
    type: RESET_FILTERS
  }
}

export {
  getFilterProducts,
  filterParamsLoaded,
  filterType,
  resetFilters
}
