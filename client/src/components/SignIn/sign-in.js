import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import RoutesName from '../../routes-list';
import axios from 'axios';


import { useStylesSingIn } from './_sign-in';

export default function SignIn(props) {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const { onClose } = props;
  const classes = useStylesSingIn();

  // const userData = {
  //   loginOrEmail: 'ivanr',
  //   password: '123456789'
  // };
  // console.log(handleOnChangeLogin);

  const handleOnChangeLogin = (event) => {
    setLogin(event.target.value)
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
  };


  function handleClick(event) {
    event.preventDefault();
    // const password = handleOnChangePassword;
    const userData = {
      loginOrEmail: login,
      password: password
    };
    axios
      .post('/customers/login', userData)
      .then((loginResult) => {
        onClose();
        console.log('SUCCESS ', loginResult.data.token)
        /* Do something with jwt-token if login successed */
      })
      .catch((err) => {
        console.log(err);
        /* Show error to customer, may be incorrect password or something else */
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onBlur={handleOnChangeLogin}
            // onChange={handleOnChangeLogin}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleOnChangePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
              Sign In
          </Button>
          <Link
            variant="body2"
            className={classes.text}
            to={RoutesName.signUp}
            onClick={onClose}
          >
              Don&#8242;t have an account?
            <strong> Sign Up </strong>
          </Link>
        </form>
      </div>
    </Container>
  );
}

SignIn.propTypes = {
  onClose: PropTypes.func,
};

SignIn.defaultProps = {
  onClose: () => {}
};
