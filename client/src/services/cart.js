import axios, { useState } from 'axios';
import login from './customer';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getCart() {
  return axios.get('/cart')
    .then((response) => response.data)
}

export async function addProductToCart(productId) {
  axios.defaults.headers.common.Authorization = '';
  if (!axios.defaults.headers.common.Authorization) {
    await login();
  }
  return axios.put(`/cart/${productId}`)
    .then((response) => response.data)
}
export async function updateCart(updatedCart) {
  if (!axios.defaults.headers.common.Authorization) {
    await login();
  }
  return axios.put('/cart', updatedCart)
    .then((response) => response.data)
}
export async function deleteProductFromCart(productId) {
  if (!axios.defaults.headers.common.Authorization) {
    await login();
  }
  return axios.put(`/cart/${productId}`)
    .then((response) => response.data)
}
export async function deleteCart() {
  if (!axios.defaults.headers.common.Authorization) {
    await login();
  }
  return axios.delete('/cart')
    .then((response) => response.data)
}

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}