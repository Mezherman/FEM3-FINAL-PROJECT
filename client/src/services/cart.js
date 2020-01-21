import axios from 'axios';
import login from './customer';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common.Authorization = window.localStorage.getItem('auth-token');

export default async function getCart(cart) {
  if (axios.defaults.headers.common.Authorization) {
    const newCart = await axios.get('/cart').then((response) => {
      return response.data
    });
    if (newCart) {
      cart.products = newCart.products;
    }
  }
}

export async function addProductToCart(productId, cart) {
  await login();
  console.log(window.localStorage.getItem('auth-token'));
  console.log(axios.defaults.headers.common.Authorization);
  if (axios.defaults.headers.common.Authorization) {
    const newCart = await axios.put(`/cart/${productId}`).then((response) => response.data);
    if (newCart) {
      cart.products = newCart.products;
    }
  }
}
export async function updateCart(cart) {
  if (axios.defaults.headers.common.Authorization) {
    const newCart = await axios.put('/cart', cart).then((response) => response.data);
    if (newCart) {
      cart.products = newCart.products;
    }
  }
}
export async function deleteProductFromCart(productId, cart) {
  if (axios.defaults.headers.common.Authorization) {
    const newCart = await axios.put(`/cart/${productId}`).then((response) => response.data);
    if (newCart) {
      cart.products = newCart.products;
    }
  }
}
export async function deleteCart(cart) {
  if (axios.defaults.headers.common.Authorization) {
    const newCart = await axios.delete('/cart').then((response) => response.data);
    if (newCart) {
      cart.products = newCart.products;
    }
  }
}