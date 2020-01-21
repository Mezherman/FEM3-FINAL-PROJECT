import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SummaryItem from '../Summary-item/summary-item';
import RoutesList from '../../../routes-list';
import useStyles from './_summary';

export default function Summary({ totalCartPrice }) {
  const classes = useStyles();
  return (
    <Grid item lg={3} className={classes.root}>
      <SummaryItem title="Summary" type="title" />
      <SummaryItem title="Grand Total" value={totalCartPrice} type="total" />
      <Grid container justify={"center"}>
        <Link to={RoutesList.checkout} >
          <Button  variant="contained" color="primary">
            Proceed to Checkout
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}