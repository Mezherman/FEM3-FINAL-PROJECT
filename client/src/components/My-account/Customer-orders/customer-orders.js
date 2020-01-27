import React from 'react';
import { Container, Grid, Hidden } from '@material-ui/core';
import CartProductListHeader
  from '../../Summary-cart/Cart-product-list-header/cart-product-list-header';
import CartProductItem from '../../Summary-cart/Cart-product-item/cart-product-item';
import useHeaderStyles from '../../Summary-cart/Cart-product-list-header/_cart-product-list-header';

const CustomerOrders = (props) => {
  const classes = useHeaderStyles();
  // const { products, actions } = props;
  // const list = ;
  // products.forEach((product) => {
  //   list.push(<CartProductItem key={product.product._id} product={product}
  //     onSetProductQuantity={actions.setProductQuantity}
  //     onRemoveProduct={actions.removeProductFromCart}/>);
  // })
  return (
    <Container maxWidth="xl">
      {/* <Grid item container sm={9} xs={12}> */}
      {/* <Hidden xsDown> */}
      <Grid
        container
        justify="space-between"
        sm={12}
        // xs={12}
        className={`${classes.root} ${classes.underline}`}
      >
        <Grid item lg={2}>
          Order
        </Grid>
        <Grid item lg={2}>
          Date
        </Grid>
        <Grid item lg={2} >
          Quantity
        </Grid>
        <Grid item lg={2} >
          Summary
        </Grid>
        <Grid item lg={2} className={classes.alignCenter}>
          Delivery Address
        </Grid>
        <Grid item lg={2} className={classes.alignRight}>
          Status
        </Grid>
        {/* <Grid item lg={1}/> */}
      </Grid>
      {/* </Hidden> */}
      {/* {list} */}
      {/* </Grid> */}
    </Container>
  )
};

export default CustomerOrders;
