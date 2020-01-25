import React from 'react';
import Button from '@material-ui/core/Button';

export default function Checkout() {

  return (
    <>
      <span>I am CHECKOUT page</span>
      <Button onClick={() => console.log('order placed')}>
        PLACE ORDER
      </Button>
    </>
  )
}