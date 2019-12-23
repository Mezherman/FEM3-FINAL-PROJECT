import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Carousels from './components/Nuka-carousel/nukaCarousel';

import Catalog from './components/Catalog/catalog';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render () {
    return (
      <>
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
