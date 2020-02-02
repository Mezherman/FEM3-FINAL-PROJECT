import { SORT_CARDS } from '../reducers/sorting';

function sendSortingProducts(sortedProducts, type) {
  return {
    type: SORT_CARDS,
    payload: {
      sortedProducts,
      type
    }
  }
}

export default sendSortingProducts;
