import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Avatar, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStylesSingIn from './_sign-in';
import postLoginData from '../../services/post-login-data';
import { loadAllDataAfterLogin } from '../../redux/actions/load-all-data';
import { enterRegistrationPage } from '../../redux/actions/moving-around-registration';
import SignInForm from './Sign-in-form/sign-in-form'

function SignIn ({ onClose }) {
  const classes = useStylesSingIn();

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const handleRegistrationRoute = useCallback(() => {
    onClose();
    dispatch(enterRegistrationPage())
  }, [dispatch, onClose]);

  const handleOnChangeLogin = (event) => {
    setLogin(event.target.value)
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
  };

  function handleClick (event) {
    event.preventDefault();
    const userData = {
      loginOrEmail: login,
      password
    };
    postLoginData(userData)
      .then((loginResult) => {
        localStorage.setItem('token', `${loginResult.data.token}`);
        dispatch(loadAllDataAfterLogin());
        onClose();
        setErrorMessage(null);
      })
      .catch(() => {
        setErrorMessage('Incorrect password or login');
      });
  }

  const [eyeToggle, setEyeToggle] = useState(true);
  const togglePasswordMask = () => {
    setEyeToggle((prev) => (setEyeToggle(!prev)));
  };

  return (
    <Container maxWidth="xs" className={classes.paper}>
      <Avatar className={classes.avatar} component="div">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">Sign In</Typography>
      <Typography className={classes.errorText} component="h3" variant="inherit">
        {errorMessage}
      </Typography>
      <SignInForm
        handleClick={handleClick}
        classes={classes}
        eyeToggle={eyeToggle}
        handleOnChangeLogin={handleOnChangeLogin}
        handleOnChangePassword={handleOnChangePassword}
        handleRegistrationRoute={handleRegistrationRoute}
        togglePasswordMask={togglePasswordMask}
      />
    </Container>
  );
}

export default SignIn;

SignIn.propTypes = {
  onClose: PropTypes.func,
};

SignIn.defaultProps = {
  onClose: () => {
  }
};
