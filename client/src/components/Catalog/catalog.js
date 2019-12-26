import Grid from '@material-ui/core/Grid';
import React from 'react';
import ProductList from '../Product-list/product-list';
import ContainerFilter from '../Filter/filter';
import {Container} from "@material-ui/core";

const Catalog = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item md={12} lg={3}>
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
      <Grid item md={12} lg={9}>
        <ProductList />
      </Grid>
    </Grid>
  </Container>
);

export default Catalog;
