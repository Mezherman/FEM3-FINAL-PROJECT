import React, { useCallback, useEffect, useState } from 'react'
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-roboto';

import Routes from './routes';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';
import Notification from './components/Notification/notification'
import ScrollToTopOnMount from './components/Pages-scroll-to-top/Pages-scroll-top-top';
import Spinner from './components/Spinner/spinner';
import { loadAllData, fetchResponse } from './redux/actions/load-all-data';

function App() {
  const dispatch = useDispatch();
  const loadData = useCallback(
    () => dispatch(loadAllData()),
    [dispatch]
  );

  useEffect(() => {
    loadData().then(() => dispatch(fetchResponse()));
  }, [loadData]);

  const categories = useSelector((state) => state.categoriesReducer.catalog.mainCategories);
  const isFetchingLoadData = useSelector((state) => state.isFetchingLoadData.isFetching);

  const { logout } = useSelector((state) => state.logout);
  if (logout) setTimeout(() => window.location.reload(), 0);

  return (
    <>
      {isFetchingLoadData ? (<Spinner />)
        : (
          <>
            <Router>
              <ScrollToTopOnMount />
              <Header />
              <ScrollToAnchor />
              <Routes />
              <Notification />
              <Footer />
            </Router>
            {/*<ScrollTop {...props} />*/}
            <ScrollTop />
          </>
        )}
    </>
  )
}

export default App;

// App.propTypes = {
//   catalogLoading: PropTypes.bool.isRequired,
//   loggedIn: PropTypes.bool.isRequired,
//   fetchCatalog: PropTypes.func.isRequired,
//   login: PropTypes.func.isRequired,
//   mergeCart: PropTypes.func.isRequired
// };
