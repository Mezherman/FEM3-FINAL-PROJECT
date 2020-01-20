import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';
import CartProductList from './Cart-product-list/cart-product-list';
import Summary from './Summary/summary';
import * as cartActions from '../../redux/actions/CartActions'
import { Grid } from '@material-ui/core';

function SummaryCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  )

  return (
    <Grid container spacing={4} alignItems="flex-start">
      <CartProductList products={cart.products} actions={actions} />
      <Summary totalCartPrice={cart.totalCartPrice} />
    </Grid>
  );
}
export default SummaryCart;