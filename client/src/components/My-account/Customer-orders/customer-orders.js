import React from 'react';
import { Container } from '@material-ui/core';
import CollapseOrderItem from './Order-list/order-list';
import usePdstyles from '../Personal-data/_personal-data'

const CustomerOrders = () => {
  const pdClasses = usePdstyles();
  return (
    <Container maxWidth="xl" className={pdClasses.container}>
      <h1>Your Orders</h1>
      <CollapseOrderItem />
    </Container>
  )
};

export default CustomerOrders;
