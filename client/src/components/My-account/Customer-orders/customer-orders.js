import React from 'react';
import { Container } from '@material-ui/core';
import CollapseOrderItem from './Order-item/order-item';

const CustomerOrders = () => (
  <Container maxWidth="xl">
    <h1>Your Orders</h1>
    <CollapseOrderItem />
  </Container>
);

export default CustomerOrders;
