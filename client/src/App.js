import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

import HeaderNavbar from './components/Header-navbar/header-navbar';
import Header from './components/Header/header'
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
      </>
    )
  }
}
