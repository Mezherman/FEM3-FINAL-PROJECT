export default function setProducts(products) {
  return {
    type: 'GET_PRODUCTS',
    payload: {
      products
    }
  }
}