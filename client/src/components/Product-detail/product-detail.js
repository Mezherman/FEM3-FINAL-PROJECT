import React, { useEffect, useState } from 'react';
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

export default function ProductDetail({ url, url1, url2, title, price, id, specialPrice = false }) {
  const classes = useStyles();
  const [modalIsVisible, setModalVisibility] = useState(false);
  const closeModal = () => {
    setModalVisibility(false)
  };
  const priceClassName = {
    className: specialPrice ? 'old-price' : 'regular-price'
  };

  const images = [
    {
      original: url,
      thumbnail: url,
    },
    {
      original: url1,
      thumbnail: url1,
    },
    {
      original: url2,
      thumbnail: url2,
    },
  ];
  return (
    <>
      <AddToBasket
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ url, title, price, specialPrice }}
      />
      <h1 className={classes.title}>{title}</h1>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={12} md={7} xl={6}>
          <MyGallery
            images={images}
            key={url}
          />

          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={5} xl={6} >
          <Grid container spacing={1} >
            <Grid item xs={12} sm={12} md={12} >
              <Typography align="right">
                <a>Submit a review</a>
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
                  <span className={priceClassName.className}>{price}</span>
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
    </>
  );
}
ProductDetail.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  url1: PropTypes.string,
  url2: PropTypes.string,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  specialPrice: PropTypes.string,
};
