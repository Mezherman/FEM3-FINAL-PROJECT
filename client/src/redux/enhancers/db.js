import React from 'react';
import * as ServicesCart from '../../services/cart';
import { getFavoriteProducts } from '../../services/favorites';
import getCategories from '../../services/getCategories';

const db = (store) => (next) => async (action) => {
  // console.log('ACTION =', action);
  const storeCart = { ...store.getState().cart };
  const { loggedIn, token } = store.getState().userReducer;

  switch (action.type) {
    case 'SET_CATALOG_FROM_DB': {
      // console.log('middleware catalog worked');
      const catalog = await getCategories();
      // console.log('CATALOG =', catalog);
      return next({
        type: 'FETCH_CATALOG_SUCCESS',
        payload: {
          catalog: {
            allCategories: catalog,
            mainCategories: catalog.filter((category) => category.parentId === 'null')
          },
          error: null
        }
      })
    }
  }

  if (loggedIn && token) {
    const { cart } = { ...action.payload };
    switch (action.type) {
      case 'ADD_PRODUCT': {
        const newCart = await ServicesCart.addProductToCart(action.payload.product._id);
        if (!newCart) {
          return next({
            ...action,
            type: 'OPEN_NEW_NOTIFICATION',
            payload: { type: 'error', message: 'Can not add product' }
          });
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({
          ...action,
          type: 'ADD_PRODUCT_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }
      case 'SET_CART_FROM_DB': {
        const cartFromDB = await ServicesCart.getCart();
        let products = []
        if (cartFromDB && cartFromDB.products.length) {
          products = cartFromDB.products;
        }
        if (!products.length) {
          return next({ ...action, type: 'SET_CART_FAIL' });
        }
        const newCart = { products };
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({
          ...action,
          type: 'UPDATE_CART_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }
      case 'SET_CART_FROM_LOCAL_WITH_DB': {
        const { localStorageProducts } = action.payload;
        const cartFromDB = await ServicesCart.getCart();
        let products = []
        if (cartFromDB && cartFromDB.products && cartFromDB.products.length) {
          products = cartFromDB.products;
        }
        if (!products.length) {
          products = localStorageProducts;
        } else {
          localStorageProducts.forEach((el, index) => {
            if (ServicesCart.findProductById(products, el.product._id) < 0) {
              products.push(el);
            }
          });
        }
        action.payload.cart = {
          products
        }
      }
      case 'UPDATE_CART': {
        const newCart = await ServicesCart.updateCart(action.payload.cart);
        if (!newCart) {
          return next({
            ...action,
            type: 'OPEN_NEW_NOTIFICATION',
            payload: { type: 'error', message: 'Can not update cart' }
          });
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        window.localStorage.removeItem('cart');
        return next({
          ...action,
          type: 'UPDATE_CART_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }
      case 'REMOVE_PRODUCT': {
        const newCart = await ServicesCart.deleteProductFromCart(action.payload.productId);
        if (!newCart) {
          return next({
            ...action,
            type: 'OPEN_NEW_NOTIFICATION',
            payload: { type: 'error', message: 'Can not remove product from cart' }
          });
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({
          ...action,
          type: 'REMOVE_PRODUCT_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }

      case 'SET_FAVORITES_FROM_DB': {
        const favorites = await getFavoriteProducts();
        // console.log(favorites);
        return favorites
          ? next({
            type: 'UPDATE_FAVORITES_SUCCESS',
            payload: favorites.products
          })
          : next({
            type: 'UPDATE_FAVORITES_SUCCESS',
            payload: []
          });
      }

      default:
        return next(action);
    }
  }
  return next(action);
};

export default db;