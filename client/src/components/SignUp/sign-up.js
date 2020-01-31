import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Divider
} from '@material-ui/core';

import SignUpInfo from './Sign-up-info/signUp-info';
import SignUpForm from './Sign-up-form/sign-up-form';
import SignUpFooter from './Sign-up-footer/sign-up-footer';
import ModalResponse from './Modal-response/modal-response';
import validate from './validate';
import postNewUser from '../../services/postNewUser';
import useStyles from './_sign-up';

let SignUp = (props) => {
  const { handleSubmit } = props;
  const classes = useStyles();
  const [signUpModal, setSignUpModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const initialState = {
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
    setSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setSignUpModal(false);
    setRedirect(true);
  };
  const handleOpenSetErrorModal = () => {
    setErrorModal(true);
  };

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/" />
    }
  };

  const submitNewUser = (values) => {
    const newUser = {
      ...initialState,
      ...values,
      birthdate: `${values.birthdayDay}.${values.birthdayMonth}.${values.birthdayYear}`
    };

    console.log(newUser);
    postNewUser(newUser, handleOpenSignUpModal, handleOpenSetErrorModal);
  };
  const { loggedIn } = useSelector((state) => state.user);

  if (loggedIn) {
    return <Redirect />
  }

  return (
    <Container component="div" disableGutters>
      <CssBaseline />
      {redirect && renderRedirect()}
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          className={classes.title}
        >
          Your registration for the myWMF Customer Club
        </Typography>

        <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitNewUser)}>
          <Grid
            container
            spacing={3}
            direction="row-reverse"
            alignItems="center"
            alignContent="flex-end"
            justify="space-evenly"
          >
            <SignUpInfo />
            <Divider light orientation="vertical" className={classes.dividerSignUp} />
            <SignUpForm />
            <SignUpFooter />
          </Grid>
        </form>

        {/* <Button onClick={handleOpenSignUpModal}>Open registration modal</Button> */}
        { signUpModal && (
          <ModalResponse
            openModal={signUpModal}
            handleClose={handleCloseSignUpModal}
            inModal={signUpModal}
            classModal={classes.paperInfoIcon}
            value='Your account was successfully registered'
            submitClass={classes.submit}
          />
        )}
        { errorModal && (
          <ModalResponse
            openModal={errorModal}
            handleClose={handleCloseSetErrorModal}
            inModal={errorModal}
            classModal={classes.paperInfoError}
            value='Something go wrong. Try again'
            submitClass={classes.submit}
          />
        )}

      </div>
    </Container>
  );
};

SignUp = reduxForm({
  form: 'registration',
  validate,
})(SignUp);

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default SignUp;
