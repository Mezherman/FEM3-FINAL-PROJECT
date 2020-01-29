import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function CheckoutStatus(props) {
  const { location: { state: { orderDone, orderNo } } } = props;
  console.log('STATE= ', props.location.state);
  return (
    <Container maxWidth="xl">
      {orderDone
        ? <h2>
          Your order <strong>№{orderNo}</strong> has been successfully placed. Thank you for your
          choice!
        </h2>
        : <h1>Your order wasn't placed due to technical problems. Please, try again.</h1>}
      <p>Go back to <Link to="/">HOME</Link> page.</p>
    </Container>
  )
}
