import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';

import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Divider
} from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';

import SignUpInfo from './SignUp-info/signUp-info';
import SignUpForm from './SignUp-form/signUp-form';
import SignUpFooter from './SignUp-footer/signUp-footer';
import useStyles from './_sign-up';

let SignUp = () => {
  const classes = useStyles();
  const [newUserData, setNewUserData] = useState({
    gender: 'Mr',
    firstName: '',
    lastName: '',
    // birthday: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
    email: '',
    password: '',
    country: 'Austria',
    agreement: false,
    isAdmin: false,
  });

  const handleChange = (key) => (event) => {
    if (key === 'agreement') {
      setNewUserData({ ...newUserData, [key]: event.target.checked });
    } else {
      setNewUserData({ ...newUserData, [key]: event.target.value });
    }
  };

  const submitNewUser = (event) => {
    event.preventDefault();
    console.log(newUserData);
    // axios
    //   .post('/customers', newUserData)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.statusText === 'OK') {
    //       // setRegistration(true);
    //       console.log(response);
    //     }
    //   })
    //   .catch((error) => {
    //     // setMessage(error.message);
    //     console.log(error.response.data);
    //   });
  };

  return (
    <Container component="div" disableGutters>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          className={classes.title}
        >
          Your registration for the myWMF Customer Club
        </Typography>

        <ValidatorForm
          className={classes.form}
          noValidate={false}
          onSubmit={submitNewUser}
        >
          <Grid
            container
            spacing={3}
            direction="row-reverse"
            alignItems="center"
            alignContent="flex-end"
            justify="space-evenly"
          >
            <SignUpInfo />
            <Divider
              light
              orientation="vertical"
              className={classes.dividerSignUp}
            />
            <SignUpForm
              handleChange={handleChange}
            />
            <SignUpFooter
              submitNewUser={submitNewUser}
              handleChange={handleChange}
            />

          </Grid>
        </ValidatorForm>
      </div>
    </Container>
  );
}

SignUp = reduxForm({
  form: 'registration'
})(SignUp);

export default SignUp;
