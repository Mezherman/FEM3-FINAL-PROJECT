import Grid from '@material-ui/core/Grid';
import React from 'react';
import ProductList from '../Product-list/product-list';
import ContainerFilter from '../Filter/filter';
import useStyles from './catalog-style';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';

export default function Catalog({ assortment }) {
  // console.log('category =', category);
  const classes = useStyles();

  return (
    <>
      <ProductBreadcrumbs assortment={assortment} />
      <Grid container spacing={2} className={classes.root}>
        <Grid item sm={12} md={4}>
          <div className={classes.filter}>
            <ContainerFilter />
          </div>
        </Grid>
        <Grid item sm={12} md={8}>
          <ProductList assortment={assortment} />
        </Grid>
      </Grid>
    </>
  )
}
