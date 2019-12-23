import React, { Component } from 'react';
import 'typeface-roboto';

import HeaderNavbar from './components/Header-navbar/header-navbar';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Catalog from './components/Catalog/catalog';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />

        <HeaderNavbar />
        <Catalog />
        <Footer />
      </>
    )
  }
}
