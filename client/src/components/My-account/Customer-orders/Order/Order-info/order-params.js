import React from 'react';
import { ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import OrderParamsTemplates from './Order-function-templates/order-params-templates';

const OrderParams = ({ classes, handleClick, orderNo, date, status, totalSum, products, open }) => (
  <ListItem component="div" className={classes.mainBlock} button onClick={handleClick}>
    <OrderParamsTemplates name="Order №: " value={orderNo} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name="Date: " value={` ${date.slice(0, 10)}`} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name="Status: " value={status} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name="Total Sum: " value={`€${totalSum}`} className={`${classes.orderInfo} ${classes.title}`} />
    <OrderParamsTemplates name={'Item\'s quantity: '} value={`${products.length}`} className={`${classes.orderInfo} ${classes.title}`} />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
);

export default OrderParams;

OrderParams.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
  orderNo: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalSum: PropTypes.number.isRequired,
  products: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]).isRequired,
  open: PropTypes.bool.isRequired,
};
