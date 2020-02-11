import React from 'react';
import { Container } from '@material-ui/core';
import CollapseOrderItem from './Order-list/order-list';
import usePersonalDataStyles from '../Personal-data/_personal-data'
import HelpPanel from '../../Summary-cart/Help-panel/help-panel';
import ContinueBtn from '../../Summary-cart/Continue-btn/continue-btn';

const CustomerOrders = () => {
  const pdClasses = usePersonalDataStyles();
  return (
    <Container maxWidth="xl" className={pdClasses.container}>
      <h1>Your Orders</h1>
      <CollapseOrderItem />
      <HelpPanel />
      <ContinueBtn />
    </Container>
  )
};

export default CustomerOrders;
