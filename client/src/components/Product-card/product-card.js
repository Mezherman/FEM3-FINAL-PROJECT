import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import TransitionsModal from '../Modal/modal';

import './product-card.scss'

const ProductCard = ({ url, title, price, specialPrice = false }) => {
  const priceClassName = {
    className: specialPrice ? 'product-card-old-price' : 'product-card-regular-price'
  };
  // const style = {
  //   color: specialPrice ? '#e00000' : '#000'
  // };

  const [modal, setModal] = useState({
    modalHeader: 'test',
    modalIsVisible: false,
    card: {
      label: 'Football',
      article: '11111111',
      price: '$199.99',
      src: '#',
      modalTitle: 'modalConfirmPurchase'
    },
  });

  const { modalTitle, modalIsVisible, card } = modal;

  return (
    <>
      <TransitionsModal
        open={modalIsVisible}
        onClick={() => {
          console.log('in product card');
          setModal({
            ...modal,
            modalIsVisible: false
          })
        }}
      />
      <div className="product-card">
        <Divider />
        <Container maxWidth="sm">
          <div className="product-card-image">
            <img src={url} />
          </div>
          <Divider variant="middle" />
          <h1 className="product-card-title">{title}</h1>
          <div className="product-card-price-box">
            <span className={priceClassName.className}>{price}</span>
            <span className="product-card-special-price">{specialPrice}</span>
          </div>
          <Button
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => {
              console.log('Add to Cart');
              setModal({
                ...modal,
                modalIsVisible: true
              })
            }}
          >
            <ShoppingCartOutlinedIcon />
          </Button>
        </Container>
      </div>
    </>
  )
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  specialPrice: PropTypes.string,
};

export default ProductCard;
