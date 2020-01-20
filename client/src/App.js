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

function App(props) {
  const { catalogLoading, fetchCatalog } = props;
  useEffect(() => {
    fetchCatalog();
  }, []);
  return (
    <>
      {!catalogLoading &&
      (
        <Container maxWidth="xl">
          <Router>
            <Header />
            <ScrollToAnchor />
            <Routes />
            <Footer />
          </Router>
          <ScrollTop {...props} />
        </Container>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  catalogLoading: state.categoriesReducer.catalogLoading,
  error: state.categoriesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatalog: () => {
    dispatch(catalogRequested());
    getCategories()
      .then((catalog) => dispatch(catalogLoaded(catalog)))
      .catch((err) => dispatch(catalogError(err)))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  catalogLoading: PropTypes.bool.isRequired,
  fetchCatalog: PropTypes.func.isRequired
};