import React from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Box
} from '@material-ui/core';
import { Field } from 'redux-form';

import { RenderTextField, RenderRadioGroup } from './form-components';

import useStyles from './_checkout-form';

export default function DeliveryPaymentInfo() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.blockTitle}>2. PAYMENT METHODS</Typography>
      <Field name="paymentMethod" component={(args) => {
        const className = 'radioPaymentMethods';
        const newArgs = { ...args, className };
        return RenderRadioGroup(newArgs)
      }}
      >
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
      <Field name="delivery" component={(args) => {
        const className = 'deliveryMethod';
        const newArgs = { ...args, className };
        return RenderRadioGroup(newArgs)
      }}
      >
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