import React, { Component } from 'react';
import 'typeface-roboto';

import Header from './components/Header/header'
import CategoryList from './components/Category-list/category-list'
import Footer from './components/Footer/footer'
import ProductList from './components/Product-list/product-list';
import ContainerFilter from './components/Filter/filter';
import HeaderNavbar from './components/Header-navbar/header-navbar';
import Carousels from './components/Nuka-carousel/nukaCarousel';
import Catalog from './components/Catalog/catalog';
import ExampleColor from './components/Example-color/example-color';
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HeaderNavbar />
        <ScrollToAnchor/>
        <Carousels
          isProductSlider={false}
          autoPlay
          autoplayInterval={2000}
          wrapAround
          slideIndex={0}
          slidesToShow={1}
        />
        <CategoryList/>
        <Carousels
          autoPlay
          autoplayInterval={2000}
          wrapAround
          slideIndex={0}
          slidesToShow={1}
        />
        <Footer />
        <Catalog />
        <ScrollTop {...this.props}/>
      </>
    )
  }
}
