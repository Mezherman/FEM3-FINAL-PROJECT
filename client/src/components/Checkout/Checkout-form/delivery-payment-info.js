import React from 'react';
import { Typography, FormControlLabel, Radio, } from '@material-ui/core';
import { Field } from 'redux-form';

import RenderRadioGroup from './form-components/radio-group';

import useStyles from './_checkout-form';

export default function DeliveryPaymentInfo() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.blockTitle}>2. PAYMENT METHODS</Typography>
      <Field name="paymentMethod" component={RenderRadioGroup}>
        <FormControlLabel
          className={classes.root}
          value="creditCard"
          label="Credit card"
          name="paymentMethod"
          control={<Radio className={classes.radioLabel} />}
        />
        <FormControlLabel
          className={classes.root}
          value="cash"
          label="Cash"
          name="paymentMethod"
          control={<Radio className={classes.radioLabel} />}
        />
      </Field>
      <Typography className={classes.blockTitle}>3. DELIVERY OPTIONS</Typography>
      <Field name="delivery" component={RenderRadioGroup}>
        <FormControlLabel
          className={classes.root}
          value="DHL"
          label="DHL"
          name="deliveryMethod"
          control={<Radio className={classes.radioLabel} />}
        />
        <FormControlLabel
          className={classes.root}
          value="selfPickUp"
          label="Self pick-up"
          name="deliveryMethod"
          control={<Radio className={classes.radioLabel} />}
        />
      </Field>
    </>
  )
}