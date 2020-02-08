import React from 'react';
import { ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import OrderParamsTemplates from './Order-text-templates/order-params-templates';

const OrderTitles = ({ classes, handleClick, orderNo, date, status, totalSum, products, open }) => (
  <ListItem component="div" className={classes.mainBlock} button onClick={handleClick}>
    <OrderParamsTemplates name="Order №: " value={orderNo} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name="Date: " value={` ${date.slice(0, 10)}`} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name="Status: " value={status} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name="Total Sum: " value={`€${totalSum}`} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name={'Item\'s quantity: '} value={`${products.length}`} className={`${classes.orderInfo} ${classes.title}`} />
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
