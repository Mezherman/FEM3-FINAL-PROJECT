import React from 'react';
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './_preview';
import PreviewList from '../Preview-list/preview-list';

export default function Preview({ products }) {
  const classes = useStyles();

  return (
    <div className={classes.allProducts}>
      <div className={classes.products}>
        <PreviewList products={products} />
      </div>
      <div className={classes.miniCart}>
        <p>
            There
          {products.length > 1 ? ' are' : ' is'}
          <span className={classes.items}>
            {products.length}
            {products.length > 1 ? ' items' : ' item'}
          </span>
            in your cart.
        </p>
        <Divider />
        <div className={classes.price}>
          <span>Cart Subtotal</span>
          <span>€300</span>
        </div>
        <Button
          size="medium"
          fullWidth
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          onClick={() => console.log('View shopping cart')}
        >
            View Shopping Cart
        </Button>
        <Button
          size="medium"
          fullWidth
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => console.log('Chechout')}
        >
            Checkout
        </Button>
      </div>
    </div>
  )
}

Preview.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

Preview.defaultProps = {
  products: []
};
