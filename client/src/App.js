import React, { Component } from 'react';
import 'typeface-roboto';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Carousels from './components/Nuka-carousel/nukaCarousel';

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
        <Carousels
          isProductSlider={false}
          autoPlay={true}
          autoplayInterval={2000}
          wrapAround={true}
          slideIndex={0}
          slidesToShow={1}
        />
        <Carousels
          autoPlay={true}
          autoplayInterval={2000}
          wrapAround={true}
          slideIndex={0}
          slidesToShow={1}
        />
      </>
    )
  }
}
