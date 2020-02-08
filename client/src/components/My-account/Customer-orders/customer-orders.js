import React from 'react';
import { Container } from '@material-ui/core';
import CollapseOrderItem from './Order-list/order-list';
import usePersonalDataStyles from '../Personal-data/_personal-data'

const CustomerOrders = () => {
  const pdClasses = usePersonalDataStyles();
  return (
    <Container maxWidth="xl" className={pdClasses.container}>
      <h1>Your Orders</h1>
      <CollapseOrderItem />
    </Container>
  )
};

export default CustomerOrders;
