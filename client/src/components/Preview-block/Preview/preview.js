import React from 'react';
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './_preview';
import MyCarousel from '../Carousel/pilushch-carousel';

export default function Preview(props) {
  const classes = useStyles();
  const { products } = props;

  const test = 600;

  return (
    <div className={classes.wrapper}>
      <div className={classes.products}>
        <MyCarousel
          wrapAround
          renderBottomCenterControls={null}
          transitionMode="scroll"
          cellSpacing={5}
          slidesToScroll={1}
          slidesToShow={(test > 800) ? 4 : 1}
          products={products}
        />
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
        >
            View Shopping Cart
        </Button>
        <Button
          size="medium"
          fullWidth
          variant="contained"
          color="primary"
          disableElevation
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
