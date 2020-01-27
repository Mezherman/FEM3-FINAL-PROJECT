import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Divider,
  Button,
  Modal,
  Fade,
  Backdrop
} from '@material-ui/core';

import SignUpInfo from '../SignUp/SignUp-info/signUp-info';
import SignUpForm from '../SignUp/SignUp-form/signUp-form';
import SignUpFooter from '../SignUp/SignUp-footer/signUp-footer';
import validate from '../SignUp/validate';
import useStyles from '../SignUp/_sign-up';
import postNewUser from '../../services/postNewUser';
import CheckoutForm from './Checkout-form/checkout-form';

function CheckoutTest (props) {
  const { handleSubmit } = props;
  const classes = useStyles();
  const [signUpModal, setSignUpModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  let initialState = {
    gender: 'Mr',
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    birthdate: ''
  };

  const handleOpenSignUpModal = () => {
    // setSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    // setSignUpModal(false);
    // setRedirect(true);
  };
  const handleOpenSetErrorModal = () => {
    // setErrorModal(true);
  };

  const handleCloseSetErrorModal = () => {
    // setErrorModal(false);
  };

  const renderRedirect = () => {
    // if (redirect) {
    //   return <Redirect to='/' />
    // }
  };

  const submitNewUser = (values) => {
    const newUser = {
      ...initialState,
      ...values,
      birthdate: values.birthdayDay + '.' + values.birthdayMonth + '.' + values.birthdayYear
    };

    console.log(newUser);
    // postNewUser(newUser, handleOpenSignUpModal, handleOpenSetErrorModal);

    // axios
    //   .post('/customers', values)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.statusText === 'OK') {
    //       handleOpenSignUpModal();
    //     }
    //   })
    //   .catch((error) => {
    //     handleOpenSetErrorModal();
    //     console.log(error.response.data);
    //   });
  };

  return (
    <Container component="div" disableGutters>
        <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitNewUser)}>
            <CheckoutForm />
        </form>
    </Container>
  );
}

export default reduxForm({
  form: 'checkout',
  validate,
})(CheckoutTest);