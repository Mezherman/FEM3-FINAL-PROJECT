import Grid from '@material-ui/core/Grid';
import React from 'react';
import ProductList from '../Product-list/product-list';
import ContainerFilter from '../Filter/filter';

const Catalog = () => (
  <>
    <Grid container spacing={2}>
      <Grid item sm={12} md={3}>
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
      <Grid item sm={12} md={9}>
        <ProductList />
      </Grid>
    </Grid>
  </>
);

export default Catalog;
