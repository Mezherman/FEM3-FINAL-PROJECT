import React from 'react';

export function increaseCartCount (count) {
  return {
    type: 'INCREASE_COUNT',
    payload: count
  }
}

export function addProductToCart (product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}
export function setProductQuantity (productId, quantity) {
  return {
    type: 'SET_PRODUCT_QUANTITY',
    payload: {
      productId,
      quantity
    }
  }
}