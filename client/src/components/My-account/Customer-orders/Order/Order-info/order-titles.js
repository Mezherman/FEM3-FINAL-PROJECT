import React from 'react';
import { Divider, Grid, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const OrderTitles = ({ classes, handleClick, orderNo, date, status, totalSum, products, open }) => (
  <ListItem component="div" className={classes.mainBlock} button onClick={handleClick}>
    <Grid
      component="div"
      item
      container
      className={`${classes.orderInfo} ${classes.title}`}
    >
      <span>Order №:</span>
      <span>{` ${orderNo}`}</span>
      <Divider orientation="horizontal" variant="middle" component="div" />
    </Grid>
    <Grid
      component="div"
      item
      container
      className={`${classes.orderInfo} ${classes.title}`}
    >
      <span>Date:</span>
      <span>{` ${date.slice(0, 10)}`}</span>
      <Divider orientation="horizontal" variant="middle" component="div" />
    </Grid>
    <Grid
      component="div"
      item
      container
      className={`${classes.orderInfo} ${classes.title}`}
    >
      <span>Status: </span>
      <span>{` ${status}`}</span>
      <Divider orientation="horizontal" variant="middle" component="div" />
    </Grid>
    <Grid
      component="div"
      item
      container
      className={`${classes.orderInfo} ${classes.title}`}
    >
      <span>Total Sum:</span>
      <span>{` €${totalSum}`}</span>
      <Divider orientation="horizontal" variant="middle" component="div" />
    </Grid>
    <Grid
      component="div"
      item
      container
      className={`${classes.orderInfo} ${classes.title}`}
    >
      <span>Item&apos;s quantity: </span>
      <span>{` ${products.length}`}</span>
      <Divider orientation="horizontal" variant="middle" component="div" />
    </Grid>
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
);

export default OrderTitles;

OrderTitles.propTypes = {
  classes: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  orderNo: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalSum: PropTypes.string.isRequired,
  products: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
  open: PropTypes.bool.isRequired,
};
