import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ProductCard from '../Product-card/product-card';
import Spinner from '../Spinner/spinner';
import { getFavoriteProducts } from '../../services/favorites';

import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import { productsRequested, productsLoaded, productsError } from '../../redux/actions/products';

import useStyles from '../Product-list/_product-list';
import ProductList from '../Product-list/product-list';

function Favorites(props) {
  console.log('PROPS =', props);
  console.log(1);
  const { favorites, favoritesLoading, productsLoaded, products } = props;
  console.log(favorites);
  getFavoriteProducts(favorites)
    .then((products) => {
      console.log('PRODUCTS =', products);
      productsLoaded(products)
    })

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