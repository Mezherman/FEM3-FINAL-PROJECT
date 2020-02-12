import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from '../Spinner/spinner';
import RoutesName from '../../routes-list'
import { Container } from '@material-ui/core';

import ProductList from '../Product-list/product-list';
import { favoritesUpdated } from '../../redux/actions/favorites';
import { productsRequested, productsLoaded, productsError } from '../../redux/actions/products';

function Favorites(props) {
  const {
    productsLoading,
    productsLoaded,
    productsRequested,
    productsError,
    products,
    loggedIn,
    favorites
  } = props;

  useEffect(() => {
    productsRequested();
    if (loggedIn) {
      productsLoaded(favorites)
    } else {
      productsError()
    }
  }, [favorites, loggedIn, productsError, productsLoaded, productsRequested]);

  if (loggedIn) {
    return (
      <Container maxWidth="xl" style={{minHeight: '52vh'}}>
        {
          !favorites.length
            ? <h2>NOTHING ADDED TO FAVORITES LIST.</h2>
            : !productsLoading && <ProductList products={products} />
        }
      </Container>
    )
  }

  return <Redirect to={RoutesName.home} />
}

const mapStateToProps = (state) => ({
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

Favorites.propTypes = {
  productsLoading: PropTypes.bool.isRequired,
  productsLoaded: PropTypes.func.isRequired,
  productsRequested: PropTypes.func.isRequired,
  productsError: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
};

Favorites.defaultProps = {
  products: []
};
