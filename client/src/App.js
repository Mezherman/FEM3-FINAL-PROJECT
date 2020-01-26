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
import { loginLoaded, userLoadedData } from './redux/actions/user';
import { mergeDBWithLocalStorage } from './redux/actions/CartActions';
import { getFavoritesFromDB } from './redux/actions/favorites'
// import getUserData from './services/getUserData'

function App(props) {
  const { catalogLoading, userData, login, mergeCart, fetchFavorites, fetchCatalog } = props;
  // console.log('loading=', catalogLoading);
  useEffect(() => {
    fetchCatalog();
    login();
    userData();
    // getUserData()
    //   .then((response) => {
    //     userData({ ...response.data });
    //   })
    //   .catch((err) => {
    //     console.log("ERROR, Don't have an access to customer data", err);
    //     /* Do something with error */
    //   });
    mergeCart();
    fetchFavorites();
  }, []);
  return (
    <>
      {!catalogLoading &&
      (
        <>
          <Router>
            <Header />
            <ScrollToAnchor />
            {/*<Routes loggedIn={loggedIn} />*/}
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
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatalog: () => {
    dispatch(getCatalogFromDB())
    // dispatch(catalogRequested());
  },
  login: () => dispatch(loginLoaded()),
  userData: (params) => { dispatch(userLoadedData(params)) },
  mergeCart: () => dispatch(mergeDBWithLocalStorage()),
  fetchFavorites: () => dispatch(getFavoritesFromDB())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  catalogLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  fetchCatalog: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  mergeCart: PropTypes.func.isRequired,
  userData: PropTypes.func.isRequired
};
