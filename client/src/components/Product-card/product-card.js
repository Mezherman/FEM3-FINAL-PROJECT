import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import 'typeface-roboto';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import * as cartActions from '../../redux/actions/CartActions';

import useStyles from './_product-card';
import AddToCart from '../Add-to-cart/add-to-cart';
import RoutesName from '../../routes-list';
import AddToFavoriteBtn from '../Add-to-favorites/Add-to-favorite-btn';
import AddToCartButton from '../Add-to-cart-button/add-to-cart-button'

function ProductCard({ product }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  );

  const { imageUrls, name, currentPrice, previousPrice, itemNo, _id: itemId, quantity } = product;
  const { loggedIn } = useSelector((state) => state.user);
  const { favorites } = useSelector((state) => state.favoritesReducer);

  const [modalIsVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false)
  };

  return (
    <>
      <AddToCart
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ imageUrls, name, currentPrice, previousPrice, itemNo, itemId, maxQty: quantity }}
      />

      <div className={classes.card}>
        <Divider />
        <div className={classes.iconWrapper}>
          <span className={classes.itemNo}>
Item.No
            {itemNo}
          </span>
          {loggedIn && <AddToFavoriteBtn favorites={favorites} itemId={itemId} />}
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
          <AddToCartButton
            handleClick={() => {
              // console.log('add product', product);
              actions.addProductToCart(product, 1);
              setModalVisibility(true)
            }}
            quantity={quantity}
          />
          {/* <Button */}
          {/*  size="large" */}
          {/*  fullWidth */}
          {/*  variant="contained" */}
          {/*  color="primary" */}
          {/*  disableElevation */}
          {/*  onClick={() => { */}
          {/*    // console.log('add product', product); */}
          {/*    actions.addProductToCart(product, 1); */}
          {/*    setModalVisibility(true) */}
          {/*  }} */}
          {/* > */}
          {/*  <ShoppingCartOutlinedIcon /> */}
          {/* </Button> */}
        </Container>
      </div>
    </>
  )
}

const mapStateToProps = (state) => state.favoritesReducer;

export default connect(mapStateToProps)(ProductCard);

ProductCard.propTypes = {
  product:
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object
    ])
  ).isRequired,
  // name: PropTypes.string.isRequired,
  // imageUrls: PropTypes.array.isRequired,
  // currentPrice: PropTypes.string.isRequired,
  // specialPrice: PropTypes.string,
};

// ProductCard.defaultProps = {
// //   specialPrice: false,
//   enabled: true
// };
