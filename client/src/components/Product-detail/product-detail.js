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
import './product-detail.scss'
import useStyles from './_product-detail';

import AddToBasket from '../Add-to-basket/add-to-basket';
import MyGallery from './carousel-react'

export default function ProductDetail({ product }) {
  const { imageUrls, name, currentPrice, specialPrice, highlights, productDescription, specifications } = product;
  const classes = useStyles();
  const [modalIsVisible, setModalVisibility] = useState(false);
  const closeModal = () => {
    setModalVisibility(false)
  };
  const priceClassName = {
    className: specialPrice ? 'old-price' : 'regular-price'
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
                <List className={classes.MuiListRoot}>
                  <ListItem>
                WMF
                  </ListItem>
                  <ListItem>
                Cutlery set
                  </ListItem>
                  <ListItem>
                60-pcs.
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12} xl={6}>
              <Box
                className={classes.productShopArea}
                fontSize={{ sm: '12px', md: '24px', lg: '36px' }}
              >
                <Container>
                  <div className={classes.priceBox}>
                    <span className={priceClassName.className}>{currentPrice}</span>
                    {specialPrice &&
                    <span className="special-price">{specialPrice}</span>}
                  </div>
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
      <Grid container>
        <Grid item xs={12} md={6} className={classes.highlights}>
          Highlights:
          <ul>
            {highlights.map((text) => (<li key={text}>{text}</li>))}
          </ul>
          Product description:
          {productDescription.map((text) => (<p key={text}>{text}</p>))}
        </Grid>
        <Grid item xs={12} md={6}>
          Specifications:
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
