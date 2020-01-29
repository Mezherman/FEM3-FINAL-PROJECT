import React from 'react';
import { Container } from '@material-ui/core';
import useStyleOrders from './_customer-orders'
import CollapseOrderItem from './Order-item/order-item';

const CustomerOrders = () => {
  const classes = useStyleOrders();
  return (
    <Container maxWidth="xl">
      <h1>Your Orders</h1>
      <CollapseOrderItem />
    </Container>
  )
};

export default CustomerOrders;
