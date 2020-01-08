import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import useStyles from './_product-card';
import './product-card.scss';
import AddToBasket from '../Add-to-basket/add-to-basket';

export default function ProductCard({ url, title, price, specialPrice = false }) {
  const classes = useStyles();
  const priceClassName = {
    className: specialPrice ? 'product-card-old-price' : 'product-card-regular-price'
  };

  const [modalIsVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false)
  };

  return (
    <>
      <AddToBasket
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ url, title, price, specialPrice }}
      />
      <div className={classes.card}>
        <Divider />
        <Container maxWidth="sm">
          <div className={classes.imgWrapper}>
            <img src={url} className={classes.img} alt="" />
          </div>
          <Divider variant="middle" />
          <h1 className={classes.title}>{title}</h1>
          <div className={classes.priceBox}>
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
              console.log('Add to Cart');
              setModalVisibility(true)
            }}
          >
            <ShoppingCartOutlinedIcon />
          </Button>
        </Container>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  specialPrice: PropTypes.string,
}
