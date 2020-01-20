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
import axios from 'axios';

import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { FormLabel } from '@material-ui/core';
import useStylesSingIn from './_sign-in';
import RoutesName from '../../routes-list';

export default function SignIn(props) {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [length, setLenght] = useState(1);

  const { onClose } = props;
  const classes = useStylesSingIn();

  // const userData = {
  //   loginOrEmail: 'ivanr',
  //   password: '123456789'
  // };
  // console.log(handleOnChangeLogin);

  // const [labelWidth, setLabelWidth] = React.useState(0);
  // const [name, setName] = React.useState('Composed TextField');
  // const labelRef = React.useRef(null);
  //
  // React.useEffect(() => {
  //   setLabelWidth(labelRef.current.offsetWidth);
  // }, []);
  //
  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };
  //

  const colorChanger = (event) => {
    if (event.target.value.length > 0) {
      setLenght(event.target.length)
    }
  };

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
      password
    };
    axios
      .post('/customers/login', userData)
      .then((loginResult) => {
        onClose();
        localStorage.setItem('token', `${loginResult.data.token}`);
        const token = localStorage.getItem('token');
        setErrorMessage(null);
        console.log(token)

        /* Do something with jwt-token if login successed */
      })
      .catch((err) => {
        setErrorMessage('Incorrect password or login');
        // console.log(err);
        Promise.reject(err)
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
        <Typography className={classes.errorText} component="h3" variant="inherit">
          {errorMessage}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            // color={length ? 'secondary' : 'primary'}
            id="email"
            label={(
              <FormLabel
                className={classes.labelText}
                required
              >
                Email Address
              </FormLabel>
            )}
            name="email"
            autoComplete="email"
            autoFocus
            onBlur={handleOnChangeLogin}
            onChange={colorChanger}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label={(
              <FormLabel
                className={classes.labelText}
                required
              >
                Password
              </FormLabel>
            )}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleOnChangePassword}
          />
          {/* <FormControl variant="outlined"> */}
          {/*  <InputLabel ref={labelRef} htmlFor="component-outlined"> */}
          {/*    Name */}
          {/*  </InputLabel> */}
          {/*  <OutlinedInput */}
          {/*    id="component-outlined" */}
          {/*    value={name} */}
          {/*    onChange={handleChange} */}
          {/*    labelWidth={labelWidth} */}
          {/*  /> */}
          {/* </FormControl> */}
          {/* <FormControl variant="filled"> */}
          {/*  <InputLabel htmlFor="component-filled">Name</InputLabel> */}
          {/*  <FilledInput id="component-filled" value={name} onChange={handleChange} /> */}
          {/* </FormControl> */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" className={classes.checkBox}/>}
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
