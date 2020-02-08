import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const OrderCustomerInfo = (
  { classes, shipping, country, city, address, postal, paymentInfo, email, mobile }
) => (
  <List component="div" disablePadding>
    <ListItem className={classes.mainBlock} button>
      <Grid
        item
        container
        className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
      >
        <span>Shipping: </span>
        <span>{` ${shipping}`}</span>
      </Grid>
      <Grid
        item
        container
        className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
      >
        <span>Delivery Address: </span>
        <span>{` ${country}, ${city}, ${address}, ${postal}`}</span>
      </Grid>
      <Grid
        item
        container
        className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
      >
        <span>Payment: </span>
        <span>{` ${paymentInfo}`}</span>
      </Grid>
      <Grid
        item
        container
        className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
      >
        <span>Email: </span>
        <span>{` ${email}`}</span>
      </Grid>
      <Grid
        item
        container
        className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
      >
        <span>Mobile: </span>
        <span>{` ${mobile}`}</span>
      </Grid>
    </ListItem>
  </List>
);

export default OrderCustomerInfo;

OrderCustomerInfo.propTypes = {
  classes: PropTypes.string.isRequired,
  shipping: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postal: PropTypes.string.isRequired,
  paymentInfo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
};
