import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'typeface-roboto';
import Routes from './routes';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Header />
          <ScrollToAnchor />
          <Routes />
        </Router>
        <Footer />
        <ScrollTop {...this.props} />
      </Container>
    )
  }
}
