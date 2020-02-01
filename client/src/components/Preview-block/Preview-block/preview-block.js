import React from 'react';
import { Divider, Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RoutesName from '../../../routes-list';
import useStyles from './_preview-block';

import Carousels from '../../Carousel/carousel';
import PreviewItem from '../Preview-item/preview-item';

export default function PreviewBlock(props) {
  const classes = useStyles();
  const { products, onClose } = props;

  const previewList = (product) => (
    product.map((item) => (
      <div className={classes.item} key={item.id}>
        <PreviewItem item={item} />
      </div>
    ))
  );

  return (
    <div className={classes.wrapper}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={8}>
          <div className={classes.mobile}>
            <Carousels
              wrapAround
              renderBottomCenterControls={null}
              transitionMode="scroll"
              cellSpacing={5}
              slidesToScroll={1}
              slidesToShow={1}
            >
              {previewList(products)}
            </Carousels>
          </div>
          <div className={classes.desktop}>
            {products.length > 3
              ? (
                <Carousels
                  wrapAround
                  renderBottomCenterControls={null}
                  transitionMode="scroll"
                  cellSpacing={5}
                  slidesToScroll={1}
                  slidesToShow={4}
                >
                  {previewList(products)}
                </Carousels>
              )
              : <>{previewList(products)}</>}
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
                <span>&#8364;300</span>
              </div>
              <Link to={RoutesName.cart}>
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
              </Link>
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
