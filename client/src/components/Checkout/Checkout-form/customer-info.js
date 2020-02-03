import React from 'react';
import { Grid, Typography, FormControlLabel, Radio } from '@material-ui/core';
import { Field } from 'redux-form';

// import { RenderTextField, RenderRadioGroup } from './form-components';
import RenderTextField from './form-components/text-field';
import RenderRadioGroup from './form-components/radio-group';

import useStyles from './_checkout-form';
import renderRadioGroup from '../../SignUp/render-radio-group';
import renderTextField from '../../Render-text-field/render-text-field';
import textArea from './form-components/text-area';

export default function CustomerInfo({ customer }) {
  // console.log(customer);
  const classes = useStyles();

  return (
    <>
      <Grid>
        <Typography className={classes.blockTitle}>1. CUSTOMER INFO</Typography>
        <Field name="gender" component={RenderRadioGroup} classes={classes}>
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
              component={RenderTextField}
              classes={classes}
              defaultValue={customer.firstName}
              label="First Name"
            />
            {/*<Field*/}
            {/*  name="firstName"*/}
            {/*  component={(args) => {*/}
            {/*    // console.log('ARGS =', args);*/}
            {/*    const defaultValue = customer.firstName || '';*/}
            {/*    const newArgs = { ...args, defaultValue };*/}
            {/*    return RenderTextField(newArgs)*/}
            {/*  }}*/}
            {/*  label="First Name"*/}
            {/*/>*/}
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field
              name="lastName"
              component={RenderTextField}
              classes={classes}
              defaultValue={customer.lastName}
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="email"
              component={RenderTextField}
              classes={classes}
              defaultValue={customer.email}
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="mobile"
              component={RenderTextField}
              classes={classes}
              defaultValue={customer.telephone}
              label="Mobile"
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Field name="street" component={RenderTextField} classes={classes} label="Street" />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Field name="flat" component={RenderTextField} classes={classes} label="Flat" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field
              name="postalCode"
              component={RenderTextField}
              label="Postal code"
              classes={classes}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Field name="city" component={RenderTextField} label="City" classes={classes} />
          </Grid>
          <Grid item xs={12}>
            <Field name="comments" component={textArea} label="Comments" classes={classes} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}