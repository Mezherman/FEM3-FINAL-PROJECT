import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ProductList from './components/Product-list/product-list';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render () {
    return (
      <>
        <Header />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <div
              style={
                {
                  height: '100%',
                  backgroundColor: 'tomato',
                  fontSize: '54px'
                }
              }
            >
FILTER
            </div>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProductList />
          </Grid>
        </Grid>
        <Footer />
      </>
    )
  }
}
