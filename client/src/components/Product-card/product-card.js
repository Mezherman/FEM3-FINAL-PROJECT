import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as cartActions from '../../redux/actions/CartActions';

import { Link } from 'react-router-dom';
import useStyles from './_product-card';
import './product-card.scss';
import AddToBasket from '../Add-to-basket/add-to-basket';
import RoutesName from '../../routes-list';

function ProductCard({ product, cartActionsList }) {
  const { imageUrls, name, currentPrice, previousPrice, itemNo } = product;
  const classes = useStyles();
  // const priceClassName = {
  //   className: previousPrice ? 'product-card-old-price' : 'product-card-regular-price'
  // };

  const [modalIsVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false)
  };
  return (
    <>
      <AddToBasket
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ imageUrls, name, currentPrice, specialPrice: previousPrice }}
      />

      <div className={classes.card}>
        <Link
          to={`${RoutesName.products}/${itemNo}`}
          className={classes.link}
        >
          <Divider />
          <Container maxWidth="sm">
            <div className={classes.imgWrapper}>
              <img
                src={imageUrls[0]}
                className={classes.img}
                alt={name}
              />
            </div>
            <Divider variant="middle" />
            <h3 className={classes.title}>{name}</h3>
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
          </Container>
        </Link>
        <Container maxWidth="sm">
          <Button
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => {
              console.log('add product', product);
              cartActionsList.addProductToCart(product);
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

function mapStateToProps () {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    cartActionsList: bindActionCreators(cartActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

ProductCard.propTypes = {
  product:
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.boolean])
  ).isRequired,
  // name: PropTypes.string.isRequired,
  // imageUrls: PropTypes.array.isRequired,
  // currentPrice: PropTypes.string.isRequired,
  // specialPrice: PropTypes.string,
};

// ProductCard.defaultProps = {
//   specialPrice: false,
//   enabled: true
// };
