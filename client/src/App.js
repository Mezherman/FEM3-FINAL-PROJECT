import React, { Component } from 'react';
import 'typeface-roboto';

import Header from './components/Header/header'
import HeaderNavbar from './components/Header-navbar/header-navbar';
import Carousels from './components/Nuka-carousel/nukaCarousel';
import Catalog from './components/Catalog/catalog';
import Footer from './components/Footer/footer'
import ExampleColor from './components/Example-color/example-color';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousels
          isProductSlider={false}
          autoPlay
          autoplayInterval={2000}
          wrapAround
          slideIndex={0}
          slidesToShow={1}
        />
        <Carousels
          autoPlay
          autoplayInterval={2000}
          wrapAround
          slideIndex={0}
          slidesToShow={1}
        />
        <Catalog />
        <Footer />
      </>
    )
  }
}
