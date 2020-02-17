import { STORE_SEARCH_VALUE } from './actionTypes';

const storeSearchedValue = (searchedValue) => {
  return {
    type: STORE_SEARCH_VALUE,
    payload: searchedValue
  }
};

export default storeSearchedValue;