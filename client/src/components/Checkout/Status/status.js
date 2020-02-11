import React from 'react';
import { PropTypes } from 'prop-types'
import { Container } from '@material-ui/core';

import useStyles from './_status';

export default function CheckoutStatus(props) {
  const classes = useStyles();
  const { location: { state: { orderDone, orderNo, message } } } = props;

  return (
    <Container maxWidth="xl" style={{ minHeight: '52vh' }}>
      {orderDone && (
        <>
          <h2>
            Your order
            {' '}
            <strong>
              №
              {orderNo}
            </strong>
            {' '}
            has been successfully placed.
          </h2>
          <p className={classes.statusText}>Thank you for your choice!</p>
        </>
      )}
      {!orderDone && (
        <>
          <h2>Your order wasn&apos;t placed. </h2>
          <p className={classes.statusText}>
            {message}
            .
          </p>
          <p className={classes.statusText}>Please, try again later.</p>
        </>
      )}
    </Container>
  )
}

CheckoutStatus.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};
