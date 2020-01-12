import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Box, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './carousel-react.scss';
import EuroIcon from '@material-ui/icons/Euro';
import StopIcon from '@material-ui/icons/Stop';
import Icon from '@material-ui/core/Icon';
import useStyles from './_product-detail';

import AddToBasket from '../Add-to-basket/add-to-basket';
import MyGallery from './carousel-react'

export default function ProductDetail({ product }) {
  const { imageUrls, name, currentPrice, previousPrice, specialPrice } = product;
  const classes = useStyles();

  const [modalIsVisible, setModalVisibility] = useState(false);
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
    <>
      <AddToBasket
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ imageUrls, name, currentPrice, specialPrice }}
      />
      <h2 className={classes.title}>{name}</h2>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={12} md={7} xl={6}>
          <MyGallery
            images={images}
            // key={imageUrls: [0]}
          />

          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={5} xl={6} >
          <Grid container spacing={1} >
            <Grid item xs={12} sm={12} md={12} >
              <Typography align="right">
                <a href="#">Submit a review</a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={12} xl={6}>
              <Box
                border={1}
                borderColor="text.primary"
                className={classes.MuiBoxRoot}
              >
                <ul className={classes.MuiListRoot}>
                  <li>
                WMF
                  </li>
                  <li>
                Cutlery set
                  </li>
                  <li>
                60-pcs.
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12} xl={6}>
              <Box
                className={classes.productShopArea}
                fontSize={{ sm: '12px', md: '24px', lg: '36px' }}
              >
                <Container>
                  <div className={classes.priceBox}>
                    {previousPrice && (
                      <span className={classes.oldPrice}>
                        <Icon style={{ fontSize: 16 }}>euro_sign</Icon>
                        {previousPrice}
                      </span>
                    )}
                    <span
                      className={previousPrice ? classes.specialPrice : classes.regularPrice}
                    >
                      <EuroIcon />
                      {currentPrice}
                    </span>
                  </div>
                  <div className={classes.disableBlock}>
                    <span>Disable:</span>
                    <span>
                      <StopIcon />
                      In stock
                    </span>

                  </div>
                  <Divider />
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
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

ProductDetail.propTypes = {
  // product: PropTypes.objectOf(PropTypes.string).isRequired,

  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
  // name: PropTypes.string.isRequired,
  // imageUrls: PropTypes.array.isRequired,
  // currentPrice: PropTypes.string.isRequired,
  // specialPrice: PropTypes.string,
};

// ProductDetail.defaultProps = {
//   specialPrice: false,
//   enabled: 'true'
// };
