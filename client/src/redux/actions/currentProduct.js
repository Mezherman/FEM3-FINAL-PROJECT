import { CURRENT_PRODUCT } from '../reducers/currentProduct';

function getCurrentProduct(currentProduct) {
  return {
    type: CURRENT_PRODUCT,
    payload: {
      currentProduct
    }
  }
}

export default getCurrentProduct;
