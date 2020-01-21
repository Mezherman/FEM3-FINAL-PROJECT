import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import 'typeface-roboto';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { bindActionCreators } from 'redux'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import * as cartActions from '../../redux/actions/CartActions';

import useStyles from './_product-card';
import AddToCart from '../Add-to-cart/add-to-cart';
import RoutesName from '../../routes-list';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  )
  const { imageUrls, name, currentPrice, previousPrice, itemNo, getFavorites } = product;
  const classes = useStyles();
  console.log(getFavorites);
  const [modalIsVisible, setModalVisibility] = useState(false);
  const closeModal = () => {
    setModalVisibility(false)
  };
  const [isFavorite, setFavorite] = useState(false);
  const addToFavorite = () => {
    setFavorite(!isFavorite);
    console.log('favorite', itemNo);
  };
  return (
    <>
      <AddToCart
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ imageUrls, name, currentPrice, previousPrice }}
      />

      <div className={classes.card}>
        <Divider />
        <div className={classes.iconWrapper}>

          {/*<IconButton onClick={addToFavorite} onClick={getFavorites}>*/}
          <IconButton onClick={getFavorites}>
            {isFavorite
              ? <FavoriteIcon color="primary" />
              : <FavoriteBorderIcon color="primary" /> }
          </IconButton>

        </div>

        <Link
          to={`${RoutesName.products}/${itemNo}`}
          className={classes.link}
        >
          <Container maxWidth="sm">
            <div className={classes.imgWrapper}>
              <img
                src={imageUrls[0]}
                className={classes.img}
                alt={name}
              />
            </div>
            <Divider variant="middle" />
            <h3 className={classes.title}>{name.toUpperCase()[0] + name.slice(1)}</h3>
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
              actions.addProductToCart(product);
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

export default ProductCard;

ProductCard.propTypes = {
  product:
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.number])
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
