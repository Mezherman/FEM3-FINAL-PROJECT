import React from 'react';
import EmptyCart from '../Empty-cart/empty-cart';
import CartProductItem from '../Cart-product-item/cart-product-item';
import CartProductListHeader from '../Cart-product-list-header/cart-product-list-header';
import { Grid } from '@material-ui/core';

export default function cartProductList(props) {
  const { products, actions } = props;
  if (!Object.keys(products).length) {
    return (
      <EmptyCart />
    )
  }
  const list = [];
  for (const productId in products) {
    list.push(<CartProductItem product={products[productId]} onSetProductQuantity={actions.setProductQuantity} onRemoveProduct={actions.removeProductFromCart}/>)
  }
  return (
    <Grid item lg={9}>
      <CartProductListHeader />
      {list}
    </Grid>
  );
}