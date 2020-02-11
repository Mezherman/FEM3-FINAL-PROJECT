import React from 'react';
import { ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import OrderParamsTemplates from './Order-function-templates/order-params-templates';

const OrderParams = ({ classes, handleClick, orderNo, date, status, totalSum, products, open }) => {
  const params = [
    { name: 'Order №: ', value: orderNo },
    { name: 'Date: ', value: ` ${date.slice(0, 10)}` },
    { name: 'Status: ', value: status },
    { name: 'Total Sum: ', value: `€${totalSum}` },
    { name: 'Item\'s quantity: ', value: `${products.length}` },
  ];

  const Params = () => params.map((param) => {
    const { name, value } = param;
    return (
      <OrderParamsTemplates
        name={name}
        value={value}
        classContainer={classes.orderInfo}
        classTitle={classes.title}
      />
    )
  });

  return (
    <ListItem component="div" className={classes.mainBlock} button onClick={handleClick}>
      <Params />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  )
};

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
