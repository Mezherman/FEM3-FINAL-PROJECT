import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@material-ui/core';
import 'typeface-roboto';

import Routes from './routes';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';
import getCategories from './services/getCategories';
import { catalogRequested, catalogLoaded, catalogError } from './redux/actions/categories';
import Notification from './components/Notification/notification'
import loginLoaded from './redux/actions/user';
import { mergeDBWithLocalStorage } from './redux/actions/CartActions';

function App(props) {
  const { catalogLoading, fetchCatalog, login, mergeCart } = props;

  useEffect(() => {
    fetchCatalog();
    login();
    mergeCart();
  }, [fetchCatalog]);
  return (
    <>
      {!catalogLoading &&
      (
        <>
          <Router>
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
    dispatch(catalogRequested());
    getCategories()
      .then((catalog) => dispatch(catalogLoaded(catalog)))
      .catch((err) => dispatch(catalogError(err)));
  },
  login: () => {
    dispatch(loginLoaded());
  },
  mergeCart: () => {
    dispatch(mergeDBWithLocalStorage());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  catalogLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  fetchCatalog: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  mergeCart: PropTypes.func.isRequired
};
