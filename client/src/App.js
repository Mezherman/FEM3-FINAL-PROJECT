import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-roboto';

import Routes from './routes';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';
import { getCatalogFromDB } from './redux/actions/categories';
import Notification from './components/Notification/notification'
import loginLoaded from './redux/actions/user';
import { mergeDBWithLocalStorage } from './redux/actions/CartActions';
import { getFavoritesFromDB } from './redux/actions/favorites'
import ScrollToTopOnMount from './components/Pages-scroll-to-top/Pages-scroll-top-top';

function App(props) {
  const { catalogLoading, login, mergeCart, fetchFavorites, fetchCatalog } = props;
  // console.log('loading=', catalogLoading);
  useEffect(() => {
    fetchCatalog();
    login();
    mergeCart();
    fetchFavorites();
  }, []);
  return (
    <>
      {!catalogLoading &&
      (
        <>
          <Router>
            <ScrollToTopOnMount />
            <Header />
            <ScrollToAnchor />
            <Routes />
            <Notification />
            <Footer />
          </Router>
          <ScrollTop {...props} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  catalogLoading: state.categoriesReducer.catalogLoading,
  error: state.categoriesReducer.error,
  notification: state.notification,
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatalog: () => {
    dispatch(getCatalogFromDB())
    // dispatch(catalogRequested());
  },
  login: () => dispatch(loginLoaded()),
  mergeCart: () => dispatch(mergeDBWithLocalStorage()),
  fetchFavorites: () => dispatch(getFavoritesFromDB())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  catalogLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  fetchCatalog: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  mergeCart: PropTypes.func.isRequired
};
