import React from 'react';
import * as ServicesCart from '../../services/cart';

export function getCartQuantity (products) {
  return products.reduce(
    (totalQuantity, current) => totalQuantity + current.cartQuantity,
    0
  );
}
export function getTotalCartPrice (products) {
  return products.reduce(
    (totalPrice, current) => totalPrice + (current.cartQuantity * current.product.currentPrice),
    0
  );
}
export function findProductById (products, productId) {
  if (products.length > 0) {
    return products.indexOf(products.find((el) => el.product._id === productId));
  }
  return -1;
}
const localStorage = (store) => (next) => (action) => {
  const { cart } = store.getState();
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const { product } = action.payload;
      const productQuantity = action.payload.quantity ?? 1;
      if (!product || !product._id) {
        return next({ ...action, type: 'ADD_PRODUCT_FAIL' });
      }
      const productIndex = findProductById(cart.products, product._id);
      // set quantity
      if (productIndex < 0) {
        cart.products.push({
          product,
          cartQuantity: productQuantity
        });
        ServicesCart.addProductToCart(product._id, cart);
      } else if (productIndex >= 0 || productQuantity > 1) {
        cart.products[productIndex].cartQuantity++;
        ServicesCart.updateCart(cart)
      }
      const newCart = {
        ...cart,
        totalCartQuantity: getCartQuantity(cart.products),
        totalCartPrice: getTotalCartPrice(cart.products)
      };

      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return next({ ...action, type: 'ADD_PRODUCT_SUCCESS', payload: newCart });
    }
    case 'REMOVE_PRODUCT': {
      const productId = action.payload;
      const productIndex = findProductById(cart.products, productId);
      if (!productId || productIndex < 0) {
        return next({ ...action, type: 'REMOVE_PRODUCT_FAIL' });
      }

      cart.products.splice(productIndex, 1);
      ServicesCart.deleteProductFromCart(productId, cart);
      const newCart = {
        ...cart,
        totalCartQuantity: getCartQuantity(cart.products),
        totalCartPrice: getTotalCartPrice(cart.products)
      };
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return next({
        ...action,
        type: 'REMOVE_PRODUCT_SUCCESS',
        payload: newCart
      });
    }
    case 'SET_PRODUCT_QUANTITY': {
      const newQuantity = action.payload.quantity;
      const _id = action.payload.productId;
      if (newQuantity < 1 || !_id) {
        return next({ ...action, type: 'SET_PRODUCT_QUANTITY_FAIL' });
      }
      const productIndex = findProductById(cart.products, _id);
      if (!productIndex && !cart.products[productIndex]) {
        return next({ ...action, type: 'SET_PRODUCT_QUANTITY_FAIL' });
      }
      cart.products[productIndex].cartQuantity = newQuantity;
      ServicesCart.updateCart(cart);
      const newCart = {
        ...cart,
        totalCartQuantity: getCartQuantity(cart.products),
        totalCartPrice: getTotalCartPrice(cart.products)
      };

      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return next({
        ...action,
        type: 'SET_PRODUCT_QUANTITY_SUCCESS',
        payload: newCart
      });
    }
    default: return next(action);
  }
}

export default localStorage;