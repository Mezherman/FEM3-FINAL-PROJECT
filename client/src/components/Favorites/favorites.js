import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Spinner from '../Spinner/spinner';
import { getFavoriteProducts } from '../../services/favorites';

import { productsLoaded } from '../../redux/actions/products';

import useStyles from '../Product-list/_product-list';
import ProductList from '../Product-list/product-list';

function Favorites(props) {
  const { favorites, favoritesLoading, productsLoaded, products } = props;
  getFavoriteProducts()
    .then((products) => {
      productsLoaded(products)
    });

  return (
    <>
      {
        favoritesLoading
          ? <Spinner />
          : <ProductList products={products} />
      }
    </>
  )
}

//
const mapStateToProps = (state) => {
  console.log('STATE =', state);
  return {
    favorites: state.favoritesReducer.favorites
  };
}
//
const mapDispatchToProps = {
  productsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
//
// ProductList.propTypes = {
//   assortment: PropTypes.string.isRequired,
//   products: PropTypes.arrayOf(PropTypes.object).isRequired,
//   productsLoading: PropTypes.bool.isRequired,
//   fetchProducts: PropTypes.func.isRequired
// };