export function getBrandProducts(products) {
  return {
    type: 'GET_BRAND_PRODUCTS',
    payload: products
  }
}

export function getPriceProducts(price) {
  return {
    type: 'GET_PRICE_PRODUCTS',
    payload: price
  }
}