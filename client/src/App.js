import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import NukaCarousel from './components/Nuka-carousel/nukaCarousel';

import Catalog from './components/Catalog/catalog';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render () {
    return (
      <>
        <Catalog />
        <NukaCarousel />
      </>
    )
  }
}
