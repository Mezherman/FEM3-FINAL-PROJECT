import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MyGallery from './carousel-react'
import './carousel-react.scss';
import useStyles from './style';
import AddToBasket from '../Add-to-basket/add-to-basket';

const ProductDetail = ({ url, title, price, id, specialPrice = false }) => {
  const classes = useStyles();
  const [modalIsVisible, setModalVisibility] = useState(false);
  const closeModal = () => {
    setModalVisibility(false)
  };

  const images = [
    {
      original: url,
      thumbnail: url,
    },
    {
      original: url,
      thumbnail: url,
    },
    {
      original: url,
      thumbnail: url,
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
          <h1 className={classes.productDetailTitle}>{title}</h1>
          <MyGallery images={images} />

          {/* <div className="product-card-image"> */}
          {/*  <img src={url} alt="" /> */}
          {/* </div> */}
          <Divider variant="middle" />
          <div className="product-card-price-box">
            <span>{price}</span>
            <span>{specialPrice}</span>
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
      </Grid>
    </>
  );
  ProductDetail.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    specialPrice: PropTypes.string,
  };
};
export default ProductDetail
