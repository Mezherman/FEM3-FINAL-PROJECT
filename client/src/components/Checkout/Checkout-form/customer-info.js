import React from 'react';
import { Container, Grid, Typography, FormControlLabel, Radio } from '@material-ui/core';
import { Field } from 'redux-form';

import { RenderTextField, RenderRadioGroup } from './form-components';

import useStyles from './_checkout-form';

export default function CustomerInfo({ customer }) {
  // console.log(customer);
  const classes = useStyles();

  return (
    <>
      <Grid>
        <Typography className={classes.blockTitle}>1. CUSTOMER INFO</Typography>
        <Field name="gender" component={(args) => {
          const className = 'radioGender';
          const newArgs = { ...args, className }
          return RenderRadioGroup(newArgs)
        }}
        >
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
            <Field
              name="firstName"
              component={(args) => {
                // console.log('ARGS =', args);
                const defaultValue = customer.firstName || '';
                const newArgs = { ...args, defaultValue };
                return RenderTextField(newArgs)
              }}
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field
              name="lastName"
              component={(args) => {
                const defaultValue = customer.lastName || '';
                const newArgs = { ...args, defaultValue };
                return RenderTextField(newArgs)
              }}
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="email"
              component={(args) => {
                const defaultValue = customer.email || '';
                const newArgs = { ...args, defaultValue };
                return RenderTextField(newArgs)
              }}
              label="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="mobile"
              component={(args) => {
                const defaultValue = customer.telephone || '';
                const newArgs = { ...args, defaultValue };
                return RenderTextField(newArgs)
              }}
              label="mobile"
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Field name="street" component={RenderTextField} label="Street" type="street" />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Field name="house" component={RenderTextField} label="Flat" type="house" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field
              name="postalCode"
              component={RenderTextField}
              label="Postal code"
              type="postalCode"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field name="city" component={RenderTextField} label="City" type="city" />
          </Grid>
          <Grid item xs={12}>
            <Field name="country" component={RenderTextField} label="Country" type="country" />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}