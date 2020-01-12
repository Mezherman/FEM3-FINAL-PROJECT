import React from 'react';
import { Divider, Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RoutesName } from '../../../routes';
import useStyles from './_preview-block';

import PreviewList from '../Preview-list/preview-list';
import PreviewListCarousel from '../Preview-list-carousel/preview-list-carousel';

export default function PreviewBlock(props) {
  const classes = useStyles();
  const { products, onClose } = props;

  return (
    <div className={classes.wrapper}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={8}>
          <div className={classes.mobile}>
            <PreviewListCarousel products={products} slidesToShow={1} />
          </div>
          <div className={classes.desktop}>
            {products.length > 3
              ? <PreviewListCarousel products={products} slidesToShow={4} />
              : <PreviewList products={products} />}
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
                onClick={onClose}
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
                onClick={onClose}
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

PreviewBlock.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func.isRequired
};

PreviewBlock.defaultProps = {
  products: []
};
