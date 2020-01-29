import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CheckoutStatus(props) {
  console.log(props);
  const orderNo = '123456';
  const orderMade = false;

  return (
    <>
      {orderMade
        ? (
          <>
            <h1>
Your order
              {orderNo}
              {' '}
has been successfully placed.
            </h1>
            <p>
Go back to
              <Link to="/">HOME</Link>
              {' '}
page.
            </p>
          </>
        )
        : (
          <>
            <h1>Your order wasn't placed due to technical problems. Please, try again.</h1>
            <p>
Go back to
              <Link to="/">HOME</Link>
              {' '}
page.
            </p>
          </>
        )}

    </>
  )
}