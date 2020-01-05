import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MyGallery from './carousel-react'
import './carousel-react.scss';
import useStyles from './_product-detail';
import AddToBasket from '../Add-to-basket/add-to-basket';

export default function ProductDetail({ url, url1, url2, title, price, id, specialPrice = false }) {
  const classes = useStyles();
  const [modalIsVisible, setModalVisibility] = useState(false);
  const closeModal = () => {
    setModalVisibility(false)
  };
  const priceClassName = {
    className: specialPrice ? 'product-card-old-price' : 'product-card-regular-price'
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

      <Grid item sm={12}>
        <Container>
          <h1 className={classes.title}>{title}</h1>
          <MyGallery
            images={images}
            key={url}
          />

          <Divider />
          <a>Submit a review</a>
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


          <Box
            bgcolor="background.default"
            fontSize={{ sm: '12px', md: '24px', lg: '36px' }}
          >
            <div className="product-card-price-box">
              <span className={priceClassName.className}>{price}</span>
              {specialPrice &&
              <span className="product-card-special-price">{specialPrice}</span>}
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
          </Box>
        </Container>
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
