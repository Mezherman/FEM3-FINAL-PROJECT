import React from 'react';
import * as ServicesCart from '../../services/cart';

const db = (store) => (next) => async (action) => {
  const storeCart = { ...store.getState().cart };
  const { loggedIn, token } = store.getState().userReduser;
  if (loggedIn && token) {
    const { cart } = { ...action.payload };
    switch (action.type) {
      case 'ADD_PRODUCT': {
        let newCart = await ServicesCart.addProductToCart(action.payload.product._id);
        if (!newCart) {
          newCart = { ...storeCart };
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({ ...action, type: 'ADD_PRODUCT_SUCCESS', payload: { ...action.payload, newCart } });
      }
      case 'UPDATE_CART': {
        let newCart = await ServicesCart.updateCart(action.payload.cart);
        if (!newCart) {
          newCart = { ...storeCart };
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({ ...action, type: 'UPDATE_CART_SUCCESS', payload: { ...action.payload, newCart } });
      }
      case 'REMOVE_PRODUCT': {
        let newCart = await ServicesCart.deleteProductFromCart(action.payload.productId);
        if (!newCart) {
          newCart = { ...storeCart };
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({ ...action, type: 'REMOVE_PRODUCT_SUCCESS', payload: { ...action.payload, newCart } });
      }
      default: return next(action);
    }
  }
  return next(action);
}

export default db;