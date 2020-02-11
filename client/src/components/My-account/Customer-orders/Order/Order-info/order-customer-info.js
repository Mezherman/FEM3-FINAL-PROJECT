import React from 'react';
import { List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import OrderParamsTemplates from './Order-function-templates/order-params-templates';

const OrderCustomerInfo = (props) => {
  const { classes, shipping, country, city, address, postal, paymentInfo, email, mobile } = props;
  return (
    <List component="div" disablePadding>
      <ListItem component="div" className={classes.mainBlock} button>
        <OrderParamsTemplates
          name="Shipping: "
          value={shipping}
          className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
          style={{ display: 'none' }}
        />
        <OrderParamsTemplates
          name="Delivery Address: "
          value={` ${country}, ${city}, ${address}, ${postal}`}
          className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
          style={{ display: 'none' }}
        />
        <OrderParamsTemplates
          name="Payment: "
          value={paymentInfo}
          className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
          style={{ display: 'none' }}
        />
        <OrderParamsTemplates
          name="Email: "
          value={email}
          className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
          style={{ display: 'none' }}
        />
        <OrderParamsTemplates
          name="Mobile: "
          value={mobile}
          className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
          style={{ display: 'none' }}
        />
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
