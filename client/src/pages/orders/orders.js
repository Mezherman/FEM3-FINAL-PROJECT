import React from 'react';
import { Container } from '@material-ui/core';
import OrderList from '../../components/My-account/Orders/Order-list/order-list';
import usePersonalDataStyles from '../profile/_profile'
import HelpPanel from '../../components/Summary-cart/Help-panel/help-panel';
import ContinueBtn from '../../components/Summary-cart/Continue-btn/continue-btn';

const Orders = () => {
  const pdClasses = usePersonalDataStyles();
  return (
    <Container maxWidth="xl" className={pdClasses.container}>
      <h1>Your Orders</h1>
      <OrderList />
      <HelpPanel />
      <ContinueBtn />
    </Container>
  )
};

export default Orders;
