import React, { useCallback, useEffect } from 'react'
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
import { loadAllData } from './redux/actions/load-all-data';

const App = () => {
  const dispatch = useDispatch();
  const loadData = useCallback(
    () => dispatch(loadAllData()),
    [dispatch]
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  const isFetchingLoadData = useSelector((state) => state.isFetchingLoadData.isFetching);

  const { logout } = useSelector((state) => state.logout);
  if (logout) setTimeout(() => window.location.reload(), 0);

  return (
    <>
      {isFetchingLoadData && (<Spinner />) }
      {!isFetchingLoadData && (
        <>
          <Router>
            <ScrollToTopOnMount />
            <Header />
            <ScrollToAnchor />
            <Routes />
            <Notification />
            <Footer />
          </Router>
          <ScrollTop />
        </>
      )}
      </>
  )
}

export default App;
