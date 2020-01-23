import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ProductCard from '../Product-card/product-card';
import Spinner from '../Spinner/spinner';
import { getFavoriteProducts } from '../../services/favorites';
import { favoritesAdded } from '../../redux/actions/favorites';

import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import { productsRequested, productsLoaded, productsError } from '../../redux/actions/products';

import useStyles from '../Product-list/_product-list';
import ProductList from '../Product-list/product-list';

function Favorites(props) {
  const { productsLoading, productsLoaded, productsRequested, products, loggedIn, favorites, favoritesAdded } = props;
  // console.log('PROPS =', props);
  // console.log('loggedIn =', loggedIn);
  useEffect(() => {
    productsRequested();
    if (loggedIn) {
      // console.log('FAVORITES =', favorites);
      productsLoaded(favorites)
    } else {
      getFavoriteProducts()
        .then((response) => {
          // console.log('PRODUCTS =', products);
          return response ? productsLoaded(response.products) : productsLoaded([]);
        })
    }
  }, []);

  return (
    <>
      {
        productsLoading
          ? <Spinner />
          : <ProductList products={products} />
      }
    </>
  )
}

const mapStateToProps = (state) => {
  // console.log('STATE =', state);
  return {
    productsLoading: state.productsReducer.productsLoading,
    loggedIn: false,
    favorites: state.favoritesReducer.favorites
  };
};

const mapDispatchToProps = {
  productsLoaded,
  productsRequested,
  favoritesAdded
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

// ProductList.propTypes = {
//   assortment: PropTypes.string.isRequired,
//   products: PropTypes.arrayOf(PropTypes.object).isRequired,
//   productsLoading: PropTypes.bool.isRequired,
//   fetchProducts: PropTypes.func.isRequired
// };