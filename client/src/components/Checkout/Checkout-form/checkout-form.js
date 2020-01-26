import React from 'react';
import { connect, useSelector } from 'react-redux';
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

import useStyles from './_checkout-form';

export default function CheckoutForm() {
  const classes = useStyles();

  const renderRadioGroup = ({ input, name, ...rest }) => (
    <RadioGroup
      {...input}
      {...rest}
      value={input.value}
      aria-label="gender"
      defaultValue={input.checked}
      className={classes.radioGender}
      name={name}
      onChange={(event, value) => input.onChange(value)}
    />
  );

  return (
    <Container>
      <Grid>
        <Field name="gender" component={renderRadioGroup}>
          <FormControlLabel
            className={classes.root}
            value="Mr"
            label="Mr"
            name="gender"
            control={<Radio className={classes.radioLabel} />}
          />
          <FormControlLabel
            className={classes.root}
            value="Mrs"
            label="Mrs"
            name="gender"
            control={<Radio className={classes.radioLabel} />}
          />
        </Field>
      </Grid>
    </Container>
  )
}