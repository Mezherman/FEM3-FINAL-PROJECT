import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Spinner from '../Spinner/spinner';
import RoutesName from '../../routes-list'

import { favoritesUpdated } from '../../redux/actions/favorites';
import { productsRequested, productsLoaded, productsError } from '../../redux/actions/products';

import ProductList from '../Product-list/product-list';

function Favorites(props) {
  const { productsLoading, productsLoaded, productsRequested, productsError, products, loggedIn, favorites } = props;
  // console.log('PROPS =', props);
  // console.log('loggedIn =', loggedIn);

  useEffect(() => {
    productsRequested();
    if (loggedIn) {
      // console.log('FAVORITES =', favorites);
      productsLoaded(favorites)
    } else {
      productsError()
    }
  }, [favorites, loggedIn, productsError, productsLoaded, productsRequested]);

  if (loggedIn) {
    return (
      <Container maxWidth="xl">
        {
          favorites.length === 0
            ? <h2>NOTHING ADDED TO FAVORITES LIST.</h2>
            : <ProductList products={products} />
        }
      </Container>
    )
  }
  return <Redirect to={RoutesName.home} />
}

const mapStateToProps = (state) =>
  // console.log('STATE =', state);
  ({
    productsLoading: state.productsReducer.productsLoading,
    loggedIn: state.user.loggedIn,
    favorites: state.favoritesReducer.favorites
  });
const mapDispatchToProps = {
  productsRequested,
  productsLoaded,
  productsError,
  favoritesUpdated
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

// ProductList.propTypes = {
//   assortment: PropTypes.string.isRequired,
//   products: PropTypes.arrayOf(PropTypes.object).isRequired,
//   productsLoading: PropTypes.bool.isRequired,
//   fetchProducts: PropTypes.func.isRequired
// };
