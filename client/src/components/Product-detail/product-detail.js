import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme, createStyles, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core';
import './carousel-react.scss';
import StopIcon from '@material-ui/icons/Stop';

import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import InputBase from '@material-ui/core/InputBase';
import ProductDetailCollapse from './Product-detail-collapse/product-detail-collapse';
import AddToCart from '../Add-to-cart/add-to-cart';
import MyGallery from './carousel-react'
import FeatureItem from './feature-item';
import ProductDetailTab from './Product-detail-tab/product-detail-tab';

import useStyles from './_product-detail';
import AddToFavoriteBtn from '../Add-to-favorites/Add-to-favorite-btn';
import IncreaseBlock from '../Increase-block/increase-block';

function ProductDetail({ product, favorites }) {
  const {
    imageUrls,
    name,
    currentPrice,
    previousPrice,
    myCustomParams,
    brand,
    enabled,
    itemNo,
    _id: itemId
  } = product;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  const closeModal = () => {
    setModalVisibility(false)
  };

  const images = imageUrls.map((url) => (
    {
      original: url,
      thumbnail: url
    }
  ));

  return (
    <Container maxWidth="xl">
      <AddToCart
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ imageUrls, name, currentPrice }}
      />
      <h1 className={classes.title}>{name.toUpperCase()[0] + name.slice(1)}</h1>
      <p className={classes.itemNo}>
        Item.No
        {' '}
        {itemNo}
      </p>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={12} md={6} xl={5}>
          <Box display="flex" justifyContent="flex-end">
            <AddToFavoriteBtn
              favorites={favorites}
              itemId={itemId}
            />
          </Box>
          <Container>
            <MyGallery
              images={images}
            />
          </Container>
          {!isTablet && <Divider />}
        </Grid>
        <Grid item md={1} xl={3} />
        <Grid item xs={12} sm={12} md={5} xl={4}>
          <Grid container spacing={1}>
            {!isTablet && (
              <Grid item xs={12} sm={6} md={12} xl={6}>
                <Box
                  border={1}
                  borderColor="text.primary"
                  className={classes.productFeatures}
                >
                  <ul className={classes.MuiListRoot}>
                    <li>
                      {brand}
                    </li>
                    <li>
                    Collection:
                      {' '}
                      {myCustomParams.collection}
                    </li>
                    <li>
                      {myCustomParams.setSize > 1 ? `${myCustomParams.setSize}-pcs.` : `${myCustomParams.setSize}-pc.`}
                    </li>
                  </ul>
                </Box>
              </Grid>
            )}
            <Grid item xs={12} sm={6} md={12} xl={12}>
              <Box
                className={classes.productShopArea}
              >
                <Container>
                  <div className={classes.priceBox}>
                    {previousPrice && (
                      <span className={classes.oldPrice}>
                        &#8364;
                        {previousPrice}
                      </span>
                    )}
                    <span
                      className={previousPrice ? classes.specialPrice : classes.regularPrice}
                    >
                      &#8364;
                      {currentPrice}
                    </span>
                  </div>
                  <p className={classes.fact}>
                    Incl. Tax / Excl.
                    {' '}
                    <a href="#">Shipping</a>
                  </p>

                  <IncreaseBlock
                    qty={quantity}
                    onChange={handleChange}

                  />
                  <div className={classes.disableBlock}>

                    <span>Deliverable:</span>
                    {enabled
                      ? (
                        <span >
                          <StopIcon className={classes.inStock} />
                    In stock
                        </span>
                      )
                      : (
                        <span>
                          <StopIcon />
                    Out of stock
                        </span>
                      )}
                  </div>
                  <div className={classes.addToCart}>
                    <Button
                      size="large"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disableElevation
                      onClick={() => {
                        setModalVisibility(true)
                      }}
                    >
                      <ShoppingCartOutlinedIcon />
                    </Button>
                  </div>
                </Container>
              </Box>
            </Grid>
            <Grid item xl={6} />
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={6} md={12} xl={12}>
                  <FeatureItem label="Free delivery over 49€" />
                  <FeatureItem label="Free returns" />
                </Grid>
                <Grid item xs={12} sm={6} md={12} xl={12}>
                  <FeatureItem label="Secure payment" />
                  <FeatureItem label="Certified online shop" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {!isDesktop && <Divider />}
      <Grid container>
        <Grid item xs={12} >
          <h3
            className={classes.sectionTitle}
          >
            Product details
          </h3>
          {isDesktop && <ProductDetailTab data={product} />}
          {!isDesktop && <ProductDetailCollapse data={product} />}
          {!isTablet && <Divider />}
        </Grid>
      </Grid>
    </Container>
  );
}
const mapStateToProps = (state) => state.favoritesReducer;

export default connect(mapStateToProps)(ProductDetail);

ProductDetail.propTypes = {
  product:
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.boolean])
  )
    .isRequired,
};
