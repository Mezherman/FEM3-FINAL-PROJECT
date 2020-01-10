import React from 'react';
import Button from '@material-ui/core/Button'
import { Divider, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './_preview-block';
import Carousels from '../../Carousel/carousel';
import useStyles2 from '../Preview-list/_preview-list';
import PreviewList from '../Preview-list/preview-list';

export default function PreviewBlock(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { products } = props;

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
              {products.map((product) => (
                <div className={classes2.product} key={product.art}>
                  <img src={product.imageUrls[0]} className={classes2.image} alt="products" />
                  <Divider />
                  <div className={classes2.text}>
                    <p className={classes2.title}>{product.name}</p>
                    <p className={classes2.price}>
                      €
                      {product.specialPrice ? product.specialPrice : product.currentPrice}
                    </p>
                    <Divider />
                    <Button onClick={() => console.log('work!')}>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
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
                  {products.map((product) => (
                    <div className={classes2.product} key={product.art}>
                      <img src={product.imageUrls[0]} className={classes2.image} alt="products" />
                      <Divider />
                      <div className={classes2.text}>
                        <p className={classes2.title}>{product.name}</p>
                        <p className={classes2.price}>
                      €
                          {product.specialPrice ? product.specialPrice : product.currentPrice}
                        </p>
                        <Divider />
                        <Button onClick={() => console.log('work!')}>
                      Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </Carousels>
              ) : <PreviewList products={products} />}
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

PreviewBlock.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

PreviewBlock.defaultProps = {
  products: []
};
