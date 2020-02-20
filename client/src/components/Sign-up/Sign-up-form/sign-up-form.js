import React, { useState } from 'react';
import { Field } from 'redux-form';

import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  Typography,
  Box,
} from '@material-ui/core';

import renderTextField from '../../Render-text-field/render-text-field';
import renderPasswordField from '../../Render-password-field/render-password-field';
import renderBirthdayField from '../../Render-birthday-field/render-birthday-field';
import renderRadioGroup from '../render-radio-group';
import ModalBirthdayInfo from '../Modal-birthday-info/modal-birthday-info';

import useStyles from './_sign-up-form';

const SignUpForm = () => {
  const [gender, setGender] = useState('Male');
  const [eyeToggle, setEyeToggle] = useState(true);

  const togglePasswordMask = () => {
    setEyeToggle((prev) => (setEyeToggle(!prev)));
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={10} md={5} >
      <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
          Please enter the following information:
      </Typography>

      <Field name="gender" component={renderRadioGroup} classes={classes} setGender={setGender} gender={gender} >
        <FormControlLabel
          className={classes.root}
          value="male"
          label="Male"
          name="gender"
          control={
            <Radio className={classes.radioLabel} />
          }
        />
        <FormControlLabel
          className={classes.root}
          value="female"
          label="Female"
          name="gender"
          control={
            <Radio className={classes.radioLabel} />
          }
        />
      </Field>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field name="firstName" component={renderTextField} classes={classes} label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name="lastName" component={renderTextField} classes={classes} label="Last Name" />
        </Grid>
      </Grid>

      <Box mb={1} mt={2}>
        <Field name="login" component={renderTextField} classes={classes} label="Login" type="text" />
      </Box>

      <FormControl>
        <InputAdornment htmlFor="birthdayDay" className={classes.labelBirthday} position="start">
            Do you fancy a birthday surprise?
          <ModalBirthdayInfo />
        </InputAdornment>
      </FormControl>

      <Grid item>
        <Box mb={2}>
          <Field name="birthdayDay" component={renderBirthdayField} label="DD" value="birthdayDay" classes={classes} />
          <Field name="birthdayMonth" component={renderBirthdayField} label="MM" value="birthdayMonth" classes={classes} />
          <Field name="birthdayYear" component={renderBirthdayField} label="YYYY" value="birthdayYear" classes={classes} />
        </Box>
      </Grid>

      <Box mb={2}>
        <Field name="email" component={renderTextField} classes={classes} label="Email Address" type="email" />
      </Box>
      <Box mb={2}>
        <Field
          name="password"
          component={renderPasswordField}
          classes={classes}
          label="Password"
          type="password"
          eyeToggle={eyeToggle}
          togglePasswordMask={togglePasswordMask}
        />
      </Box>
      <Box mb={2}>
        <Field name="telephone" component={renderTextField} classes={classes} label="Phone number" type="tel" placeholder="+380XXX XX XX XX" />
      </Box>
    </Grid>
  )
};

export default SignUpForm;