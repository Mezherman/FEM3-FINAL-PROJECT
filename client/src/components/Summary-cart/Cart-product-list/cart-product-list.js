import React from 'react';
import PropTypes from 'prop-types';
import { Hidden, Box } from '@material-ui/core';
import CartProductItem from '../Cart-product-item/cart-product-item';
import CartProductListHeader from '../Cart-product-list-header/cart-product-list-header';
import useStyles from './_cart-product-list';

const CartProductList = React.memo(({ products, actions }) => {
  const list = [];
  products.forEach((product) => {
    list.push(<CartProductItem key={product.product._id} product={product} onSetProductQuantity={actions.setProductQuantity} onRemoveProduct={products.length > 1 ? actions.removeProductFromCart : actions.removeCart} />);
  })
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Hidden xsDown>
        <CartProductListHeader />
      </Hidden>
      {list}
    </Box>
  );
})
export default CartProductList;
CartProductList.propTypes = {
  products: PropTypes.objectOf(
    PropTypes.object,
    PropTypes.array
  ).isRequired,
  actions: PropTypes.objectOf(
    PropTypes.object,
    PropTypes.array
  ).isRequired,
}