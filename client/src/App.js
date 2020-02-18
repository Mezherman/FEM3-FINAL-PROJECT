import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-roboto';

import Routes from './routes/routes';
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

  return (
    <>
      {isFetchingLoadData && (<Spinner />) }
      {!isFetchingLoadData && (
        <div style={{position: 'relative', 'padding-bottom': 'calc(100vh - 300px)'}}>
          <Router>
            <ScrollToTopOnMount />
            <Header />
            <ScrollToAnchor />
            <Routes />
            <Notification />
            <Footer />
          </Router>
          <ScrollTop />
        </div>
      )}
    </>
  )
};

export default App;
