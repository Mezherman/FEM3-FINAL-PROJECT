import React from 'react';
import * as ServicesCart from '../../services/cart';

const localStorage = (store) => (next) => (action) => {
  const { loggedIn, token } = store.getState().userReduser;
  if (!loggedIn || !token) {
    const cart = { ...action.payload };
    switch (action.type) {
      case 'ADD_PRODUCT':
      case 'UPDATE_CART':
      case 'REMOVE_PRODUCT': {
        const newCart = { ...action.payload.cart };
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        return next({ ...action, type: `${action.type}_SUCCESS`, payload: newCart });
      }
      default: return next(action);
    }
  }
  return next(action);
}

export default localStorage;