import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import useHeaderStyles from './_cart-product-list-header';

export default function CartProductListHeader() {
  const classes = useHeaderStyles();
  // const classes = useStyles();
  return (
    <Grid container justify="space-between" className={`${classes.root} ${classes.underline}`}>
      <Grid item lg={3} >
        Product
      </Grid>
      <Grid item lg={3} />
      <Grid item lg={1} className={classes.alignRight}>
        Price
      </Grid>
      <Grid item lg={2} className={classes.alignCenter}>
        In stock
      </Grid>
      <Grid item lg={2} className={classes.alignRight}>
        Subtottal
      </Grid>
      <Grid item lg={1}/>
    </Grid>

  );
}