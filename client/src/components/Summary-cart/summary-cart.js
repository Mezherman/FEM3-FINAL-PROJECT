import React, { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container, Box } from '@material-ui/core';
import Summary from './Summary/summary';
import * as cartActions from '../../redux/actions/CartActions'
import CartProductList from './Cart-product-list/cart-product-list';
import EmptyCart from './Empty-cart/empty-cart'
import CartProductListHeader from './Cart-product-list-header/cart-product-list-header'
import HelpPanel from './Help-panel/help-panel'
import useStyles from './_summary-cart';
import ContinueBtn from './Continue-btn/continue-btn';

function SummaryCart() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch()
  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  )

  let mainContainer = (
    <Grid container spacing={4} alignItems="flex-start" className={classes.root}>
      <Grid item container sm={9} xs={12}>
        <CartProductList products={cart.products} actions={actions} />
        <Grid item xs={12}>
          <HelpPanel />
          <ContinueBtn />
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
        <HelpPanel />
        <ContinueBtn />
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
export default SummaryCart;