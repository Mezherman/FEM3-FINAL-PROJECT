import React, { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container, Box } from '@material-ui/core';
import Summary from '../../components/Summary-cart/Summary/summary';
import * as cartActions from '../../redux/actions/CartActions'
import CartProductList from '../../components/Summary-cart/Cart-product-list/cart-product-list';
import EmptyCart from '../../components/Summary-cart/Empty-cart/empty-cart'
import CartProductListHeader from '../../components/Summary-cart/Cart-product-list/Cart-product-list-header/cart-product-list-header'
import HelpPanel from '../../components/Summary-cart/Help-panel/help-panel'
import useStyles from './_cart';
import ContinueBtn from '../../components/Summary-cart/Continue-btn/continue-btn';

function Cart() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  )
  const bottomBlock = (
    <>
      <HelpPanel />
      <ContinueBtn />
    </>
  );

  let mainContainer = (
    <Grid container spacing={4} alignItems="flex-start" className={classes.root}>
      <Grid item container sm={9} xs={12}>
        <CartProductList products={cart.products} actions={actions} />
        <Grid item xs={12}>
          {bottomBlock}
        </Grid>
      </Grid>
      <Grid item sm={3} xs={12} className={`${classes.summary} ${classes.sticky}`}>
        <Summary totalCartPrice={cart.totalCartPrice} />
      </Grid>
    </Grid>
  );

  if (!cart.products.length) {
    mainContainer = (
      <Box>
        <EmptyCart />
        {bottomBlock}
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <h1>Your Shopping Cart</h1>
      {mainContainer}
    </Container>
  );
}
export default Cart;
