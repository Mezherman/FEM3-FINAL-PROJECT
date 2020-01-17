import Grid from '@material-ui/core/Grid';
import React from 'react';
import ProductList from '../Product-list/product-list';
import ContainerFilter from '../Filter/filter';
import useStyles from './catalog-style';

export default function Catalog({ category }) {
  // console.log('category =', category);
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item sm={12} md={4}>
          <div className={classes.filter}>
            <ContainerFilter />
          </div>
        </Grid>
        <Grid item sm={12} md={8}>
          <ProductList category={category} />
        </Grid>
      </Grid>
    </>
  )
}
