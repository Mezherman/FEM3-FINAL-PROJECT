import React from 'react';
import Button from '@material-ui/core/Button'
import { Divider, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './_preview';
import MyCarousel from '../Carousel/pilushch-carousel';

export default function Preview(props) {
  const classes = useStyles();
  const { products } = props;

  return (
    <div className={classes.wrapper}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={8}>
          <div className={classes.mobile}>
            <MyCarousel
              wrapAround
              renderBottomCenterControls={null}
              transitionMode="scroll"
              cellSpacing={5}
              slidesToScroll={1}
              slidesToShow={1}
              products={products}
              price
            />
          </div>
          <div className={classes.desktop}>
            <MyCarousel
              wrapAround
              renderBottomCenterControls={null}
              transitionMode="scroll"
              cellSpacing={5}
              slidesToScroll={1}
              slidesToShow={4}
              products={products}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container justify="center">
            <Grid item xs={12} sm={6} md={12} className={classes.miniCart}>
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Preview.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

Preview.defaultProps = {
  products: []
};
