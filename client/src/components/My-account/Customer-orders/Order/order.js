import React, { useState } from 'react';
import { Collapse, Divider, List } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStylesOrderItem from '../Order-list/_order-list';
import OrderCustomerInfo from './Order-info/order-customer-info';
import OrderParams from './Order-info/order-params';
import OrderTitles from './Order-info/order-titles';
import OrderDetails from './Order-info/order-details';

const Order = ({ item }) => {
  const classes = useStylesOrderItem();

  const {
    products,
    deliveryAddress,
    paymentInfo,
    shipping,
    email,
    mobile,
    status,
    orderNo,
    date,
    totalSum
  } = item;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const { country, city, address, postal } = deliveryAddress;
  return (
    <List
      key={orderNo}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <OrderTitles
        classes={classes}
        open={open}
        date={date}
        handleClick={handleClick}
        orderNo={orderNo}
        products={products}
        status={status}
        totalSum={totalSum}
      />
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        onClick={handleClick}
      >
        <OrderCustomerInfo
          classes={classes}
          address={address}
          city={city}
          country={country}
          email={email}
          mobile={mobile}
          paymentInfo={paymentInfo}
          postal={postal}
          shipping={shipping}
        />
        <Divider variant="middle" component="div" />
      </Collapse>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        onClick={handleClick}
      >
        <OrderParams classes={classes} />
      </Collapse>
      {products.map((its) => (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          key={its.product.itemNo}
        >
          <Divider variant="middle" component="div" />
          <OrderDetails classes={classes} cartQuantity={its.cartQuantity} product={its.product} />
        </Collapse>
      ))}
    </List>
  )
};

export default Order;

Order.propTypes = {
  item: PropTypes.element.isRequired
};
