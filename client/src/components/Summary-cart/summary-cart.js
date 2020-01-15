import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CartProductItem from './Cart-product-item/cart-product-item';
import EmptyCart from './Empty-cart/empty-cart';
import * as cartActions from '../../redux/actions/CartActions'

function SummaryCart(props) {
  const { cart } = props;
  console.log(cart);
  console.log(cart.products[Object.keys(cart.products)[0]]);

  if (!Object.keys(cart.products).length) {
    return (
      <EmptyCart />
    )
  }
  return (
    <CartProductItem product={cart.products[Object.keys(cart.products)[0]]} />
  );
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SummaryCart)