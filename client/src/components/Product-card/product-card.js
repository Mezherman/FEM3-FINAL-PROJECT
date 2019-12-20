import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import './product-card.scss'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

const ProductCard = ({ url, title, price }) => (
  <div className="product-card">
    <Divider />
    <Container maxWidth="sm">
      <div className="product-card-image">
        <img src={url} />
      </div>
      <Divider variant="middle" />
      <h1 className="product-card-title">{title}</h1>
      <span className="product-card-price">{price}</span>
      <Button
        size="large"
        fullWidth={true}
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => console.log('Add to Cart')}
      >
        <ShoppingCartOutlinedIcon />

      </Button>
    </Container>
  </div>
);

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default ProductCard;
