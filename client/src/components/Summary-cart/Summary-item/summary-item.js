import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './_summary-item';

export default function SummaryItem({ title, value, type = 'item' }) {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" className={`${classes.root} ${classes[type]}`}>
      <Grid item lg={9}>
        {title}
      </Grid>
      <Grid item lg={3}>
        {value}
      </Grid>
    </Grid>
  );
}