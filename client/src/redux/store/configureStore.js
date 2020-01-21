import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import localStorage from '../enhancers/localStorage';
import getCart from '../../services/cart';
import { getCartQuantity, getTotalCartPrice } from '../enhancers/localStorage';

const initialCart = {
  products: [
    {
      product: {
        enabled: true,
        imageUrls:
          [
            '/img/products/preparing/knives/4000530678515/1.jpg',
            '/img/products/preparing/knives/4000530678515/2.jpg',
            '/img/products/preparing/knives/4000530678515/3.jpg',
            '/img/products/preparing/knives/4000530678515/4.jpg',
            '/img/products/preparing/knives/4000530678515/5.jpg',
            '/img/products/preparing/knives/4000530678515/6.jpg',
            '/img/products/preparing/knives/4000530678515/7.jpg',
            '/img/products/preparing/knives/4000530678515/8.jpg'
          ],
        quantity: 10,
        _id: '5e1ce3c0afe1f2447c932b9b',
        name: 'knife block with knives 8-pc',
        currentPrice: 359,
        categories: 'knives',
        color: 'stainless steel',
        productUrl: '/knife-block-with-knives-8-pc-4000530678515',
        brand: 'WMF',
        manufacturer: 'WMF Corp',
        manufacturerCountry: 'Germany',
        myCustomParams: { EAN: 4000530678515, collection: 'Grand Gourmet', material: 'Special blade steel', setSize: 8, fragile: false },
        itemNo: '44543',
        date: '2020-01-13T21:40:16.778Z'
      },
      cartQuantity: 2,
    }
  ],
};
let cart = {};
function initCart() {
  // if (window.localStorage.getItem('auth-token')) {
  //   getCart(cart);
  // }
  const localStorageCart = window.localStorage.getItem('cart');
  cart = localStorageCart ? JSON.parse(localStorageCart) : initialCart;

  cart = {
    ...cart,
    totalCartQuantity: getCartQuantity(cart.products),
    totalCartPrice: getTotalCartPrice(cart.products)
  }
}
initCart();
console.log('initialState', cart);
const initialState = {
  cart
};
export default function configureStore() {
  return createStore(rootReducer, initialState, applyMiddleware(localStorage));
}