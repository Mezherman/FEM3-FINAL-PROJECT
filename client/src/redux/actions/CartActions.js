import React from 'react';
import * as ServicesCart from '../../services/cart';

export function increaseCartCount (count) {
  return {
    type: 'INCREASE_COUNT',
    payload: count
  }
}

export function addProductToCart (product) {
  ServicesCart.addProductToCart(product._id)
    .then((data) => {
      console.log('response', data);
    })
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}
export function removeProductFromCart (productId) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: productId
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