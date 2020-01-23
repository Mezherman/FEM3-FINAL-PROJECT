import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import Summary from './Summary/summary';
import * as cartActions from '../../redux/actions/CartActions'
import CartProductList from './Cart-product-list/cart-product-list';
import EmptyCart from './Empty-cart/empty-cart'
import CartProductListHeader from './Cart-product-list-header/cart-product-list-header'

function SummaryCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  )
  if (!cart.products.length) {
    return (
      <EmptyCart />
    )
  }
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <Grid container spacing={4} alignItems="flex-start">
        <CartProductList products={cart.products} actions={actions} />
        <Summary totalCartPrice={cart.totalCartPrice} />
      </Grid>
    </div>
  );
}
export default SummaryCart;