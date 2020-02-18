import React from 'react';
import { Container } from '@material-ui/core';
import OrderList from '../../components/My-account/Orders/Order-list/order-list';
import useProfileStyles from '../profile/_profile'
import HelpPanel from '../../components/Summary-cart/Help-panel/help-panel';
import ContinueBtn from '../../components/Summary-cart/Continue-btn/continue-btn';

const Orders = () => {
  const profileClasses = useProfileStyles();
  return (
    <Container maxWidth="xl" className={profileClasses.container}>
      <h1>Your Orders</h1>
      <OrderList />
      <HelpPanel />
      <ContinueBtn />
    </Container>
  )
};

export default Orders;
