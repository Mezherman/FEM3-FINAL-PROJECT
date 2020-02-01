function getTopProductList(products) {
  return {
    type: 'GET_TOP_PRODUCT_LIST',
    payload: products
  }
}
export default {
  getTopProductList
}