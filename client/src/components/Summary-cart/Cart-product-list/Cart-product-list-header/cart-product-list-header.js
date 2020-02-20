import React from 'react';
import { Grid } from '@material-ui/core';
import useHeaderStyles from './_cart-product-list-header';

export default function CartProductListHeader() {
  const classes = useHeaderStyles();

  return (
    <Grid container justify="center" className={`${classes.root} ${classes.underline}`}>
      <Grid item container md={3} >
        Product
      </Grid>
      <Grid item md={4} />
      <Grid item md={1} className={classes.alignRight}>
        Price
      </Grid>
      <Grid item md={2} className={classes.alignCenter}>
        Q-ty
      </Grid>
      <Grid item md={2} className={classes.alignRight}>
        Subtotal
      </Grid>
    </Grid>
  );
}
