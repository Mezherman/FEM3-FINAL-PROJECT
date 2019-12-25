import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Carousels from './components/Nuka-carousel/nukaCarousel';

import HeaderNavbar from './components/Header-navbar/header-navbar';
import Header from './components/Header/header'
import CategoryList from './components/Category-list/category-list'
import Footer from './components/Footer/footer'
import ProductList from './components/Product-list/product-list';
import ContainerFilter from './components/Filter/filter';
import Catalog from './components/Catalog/catalog';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />

        <HeaderNavbar />
        <CategoryList/>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <div
              style={
                {
                  height: '50%',
                  backgroundColor: 'tomato',
                  fontSize: '54px'
                }
              }
            >
              FILTER
              <ContainerFilter />
            </div>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProductList />
          </Grid>
        </Grid>
        <Footer />
        <Catalog />
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
