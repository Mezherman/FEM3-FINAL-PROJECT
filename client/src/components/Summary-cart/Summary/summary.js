import React from 'react';
import { Grid } from '@material-ui/core';
import SummaryItem from '../Summary-item/summary-item';
import useStyles from './_summary';

export default function Summary({ totalCartPrice }) {
  const classes = useStyles();
  return (
    <Grid item lg={3} className={classes.root}>
      <SummaryItem title="Summary" type="title" />
      <SummaryItem title="Grand Total" value={totalCartPrice} type="total" />
    </Grid>
  );
}