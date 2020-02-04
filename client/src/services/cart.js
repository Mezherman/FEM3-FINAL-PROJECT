import axios from 'axios';
import enhancerAxios from './enhancer-axios';

axios.defaults.baseURL = 'http://localhost:5000';

export function getCart() {
  return enhancerAxios('/cart', { method: 'get' });
}

export function addProductToCart(productId) {
  return enhancerAxios(`/cart/${productId}`, { method: 'put' });
}
export function updateCart(updatedCart) {
  return enhancerAxios('/cart', { method: 'put' }, updatedCart);
}
export function deleteProductFromCart(productId) {
  return enhancerAxios(`/cart/${productId}`, { method: 'delete' });
}
export function deleteCartFromDB() {
  return enhancerAxios('/cart', { method: 'delete' });
}

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
