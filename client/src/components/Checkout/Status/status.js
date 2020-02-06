import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import RoutesName from '../../../routes-list';

export default function CheckoutStatus(props) {
  const { location: { state: { orderDone, orderNo, message } } } = props;
  // console.log('STATE= ', props.location.state);
  //
  // const storeState = useSelector((state) => state);
  // console.log('STATE =', storeState);

  return (
    <Container maxWidth="xl" style={{minHeight: '52vh'}}>
      {orderDone
        ? (
          <h2>Your order <strong>№{orderNo}</strong> has been successfully placed. Thank you for
            your choice!</h2>
        )
        : (
          <>
            <h1>Your order wasn't placed. </h1>
            <p>{message}.</p>
            <p>Please, try again later.</p>
          </>
        )
      }
      <p>Go back to <Link to={RoutesName.home}>HOME</Link> page.</p>
      <p>Go back to <Link to={RoutesName.cart}>CART</Link> page.</p>
    </Container>
  )
}
