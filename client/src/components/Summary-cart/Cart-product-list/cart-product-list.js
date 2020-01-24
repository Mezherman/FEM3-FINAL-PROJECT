import React from 'react';
import { Grid } from '@material-ui/core';
import EmptyCart from '../Empty-cart/empty-cart';
import CartProductItem from '../Cart-product-item/cart-product-item';
import CartProductListHeader from '../Cart-product-list-header/cart-product-list-header';

export default function cartProductList(props) {
  const { products, actions } = props;
  const list = [];
  products.forEach((product) => {
    list.push(<CartProductItem key={product.product._id} product={product} onSetProductQuantity={actions.setProductQuantity} onRemoveProduct={actions.removeProductFromCart} />);
  })
  return (
    <Grid item lg={9}>
      <CartProductListHeader />
      {list}
    </Grid>
  );
}