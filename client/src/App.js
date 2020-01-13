import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-roboto';
import Routes from './routes';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';

import login from './services/backend';
import { testJson } from './services/test';

export default function App(props) {
  testJson();
  return (
    <Container maxWidth="xl">
      <Router>
        <Header />
        <ScrollToAnchor />
        <Routes />
      </Router>
      <Footer />
      <ScrollTop {...props} />
    </Container>
  )
}
