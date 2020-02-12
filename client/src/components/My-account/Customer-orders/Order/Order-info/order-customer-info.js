import React from 'react';
import { List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import OrderParamsTemplates from './Order-function-templates/order-params-templates';

const OrderCustomerInfo = (props) => {
  const { classes, shipping, country, city, address, postal, paymentInfo, email, mobile } = props;
  const params = [
    { name: 'Shipping: ', value: shipping },
    { name: 'Delivery Address: ', value: ` ${country}, ${city}, ${address}, ${postal}` },
    { name: 'Payment: ', value: paymentInfo },
    { name: 'Email: ', value: email },
    { name: 'Mobile: ', value: mobile },
  ];

  const Params = () => params.map((param) => {
    const { name, value } = param;
    return (
      <OrderParamsTemplates
        key={name}
        name={name}
        value={value}
        className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
        style={{ display: 'none' }}
      />
    )
  });

  return (
    <List component="div" disablePadding>
      <ListItem component="div" className={classes.mainBlock} button>
        <Params />
      </ListItem>
    </List>
  )
};

export default OrderCustomerInfo;

OrderCustomerInfo.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  shipping: PropTypes.string.isRequired,
  country: PropTypes.string,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postal: PropTypes.string.isRequired,
  paymentInfo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
};
OrderCustomerInfo.defaultProps = {
  country: 'Ukraine',
};
