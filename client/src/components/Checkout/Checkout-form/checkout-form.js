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
      onChange={(event, value) => {
        console.log('123', event, value);
        return input.onChange(value)
      }}
    />
  );

  const renderTextField = (props) => {
    console.log(props);
    const { input, label, name, value, type, meta: { touched, error }, ...custom } = props;
    return <TextField
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      {...input}
      {...custom}
      className={classes.root}
      label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
    />
  };

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
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Field name="firstName" component={renderTextField} label="First Name" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field name="lastName" component={renderTextField} label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <Field name="email" component={renderTextField} label="Email Address" type="email" />
            <Field name="telephone" component={renderTextField} label="Phone number" type="tel" />
          </Grid>
          <Grid item xs={12} xl={8}>
            <Field name="street" component={renderTextField} label="Street" type="street" />
          </Grid>
          <Grid item xs={12} xl={4}>
            <Field name="house" component={renderTextField} label="House No" type="house" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field name="zipCode" component={renderTextField} label="Postal code" type="zipCode" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field name="city" component={renderTextField} label="City" type="city" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}