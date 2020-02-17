import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Container, CssBaseline, Divider, Grid, Typography } from '@material-ui/core';

import SignUpInfo from '../../components/Sign-up/Sign-up-info/signUp-info';
import SignUpForm from '../../components/Sign-up/Sign-up-form/sign-up-form';
import SignUpFooter from '../../components/Sign-up/Sign-up-footer/sign-up-footer';
import ModalResponse from '../../components/Sign-up/Modal-response/modal-response';
import validate from '../../components/Sign-up/validate';
import postNewUser from '../../services/postNewUser';
import useStyles from './_sign-up';
import { leaveRegistrationPage } from '../../redux/actions/moving-around-registration';
import RoutesName from '../../routes-list'

function SignUp (props) {
  const { handleSubmit } = props;
  const classes = useStyles();
  const [signUpModal, setSignUpModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorText, setErrorText] = useState('Something go wrong. Try again');

  const dispatch = useDispatch();

  useEffect(() => () => dispatch(leaveRegistrationPage()), [dispatch]);

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
  // const handleOpenSetErrorModal = () => {
  //   setErrorModal(true);
  // };
  const handleOpenSetErrorModal = (errorAnswer) => {
    setErrorModal(true);
    setErrorText(errorAnswer);
  };

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/" />
    }
    return null
  };

  const birthDayFunc = (birthdayDay, birthdayMonth, birthdayYear) => {
    let day;
    let month;
    let year;

    !birthdayDay ? (day = 'XX') : day = birthdayDay;
    !birthdayMonth ? (month = 'XX') : month = birthdayMonth;
    !birthdayYear ? (year = 'XXXX') : year = birthdayYear;

    (day.length === 1) && (day = `0${day}`);
    (month.length === 1) && (month = `0${month}`);

    return `${day}.${month}.${year}`;
  };

  const submitNewUser = (values) => {
    const { birthdayDay, birthdayMonth, birthdayYear } = values;

    const newUser = {
      ...initialState,
      ...values,
      birthdate: birthDayFunc(birthdayDay, birthdayMonth, birthdayYear)
    };

    // console.log(newUser);
    postNewUser(newUser, handleOpenSignUpModal, handleOpenSetErrorModal);
  };
  const { loggedIn } = useSelector((state) => state.user);

  if (loggedIn) {
    return <Redirect to={RoutesName.home} />
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

        <form
          className={classes.passwordForm}
          noValidate={false}
          onSubmit={handleSubmit(submitNewUser)}
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
            <Divider light orientation="vertical" className={classes.dividerSignUp} />
            <SignUpForm />
            <SignUpFooter />
          </Grid>
        </form>

        { signUpModal && (
          <ModalResponse
            openModal={signUpModal}
            handleClose={handleCloseSignUpModal}
            inModal={signUpModal}
            classModal={classes.paperInfoIcon}
            value="Your account was successfully registered"
            submitClass={classes.submit}
          />
        )}
        { errorModal && (
          <ModalResponse
            openModal={errorModal}
            handleClose={handleCloseSetErrorModal}
            inModal={errorModal}
            classModal={classes.paperInfoError}
            value={errorText}
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
