import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const OrderParams = ({ classes }) => (
  <List component="div" disablePadding>
    <ListItem component="div" className={classes.mainBlock}>
      <Grid
        component="div"
        item
        container
        xs={12}
        justify="space-between"
        alignItems="center"
        direction="row"
        className={classes.productContainer}
      >
        <Grid
          component="div"
          item
          container
          xs={12}
          sm={2}
          md={1}
          className={classes.imgContainer}
        />
        <Grid
          component="div"
          item
          container
          xs={12}
          sm={3}
          md={4}
          justify="center"
          className={`${classes.textCenter} ${classes.fontBold}`}
        >
          <span>Item-Num: </span>
        </Grid>
        <Grid
          component="div"
          item
          container
          xs={12}
          sm={3}
          md={3}
          justify="center"
          className={`${classes.textCenter} ${classes.fontBold}`}
        >
          <span>Product: </span>
        </Grid>
        <Grid
          component="div"
          item
          container
          xs={12}
          sm={1}
          md={2}
          justify="center"
          className={`${classes.textRight} ${classes.fontBold}`}
        >
          <span>Price: </span>
        </Grid>
        <Grid
          component="div"
          item
          container
          xs={12}
          sm={1}
          md={2}
          className={`${classes.textRight} ${classes.fontBold}`}
        >
          <span>Amount: </span>
        </Grid>
      </Grid>
    </ListItem>
  </List>
);

export default OrderParams;

OrderParams.propTypes = {
  classes: PropTypes.string.isRequired
};
