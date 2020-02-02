import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FormLabel,
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import useStylesSingIn from './_sign-in';
import RoutesName from '../../routes-list';
import postLoginData from '../../services/postLoginData'
import { loadAllDataAfterLogin } from '../../redux/actions/load-all-data'

function SignIn (props) {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [length, setLength] = useState(1);

  const {
    onClose,
    user,
    loadAllDataAfterLogin,
  } = props;
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
      setLength(event.target.length)
    }
  };

  const handleOnChangeLogin = (event) => {
    setLogin(event.target.value)
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
  };

  // if (localStorage.getItem('token')) {
  //   loginLoaded(localStorage.getItem('token'))
  // }

  function handleClick (event) {
    event.preventDefault();
    const userData = {
      loginOrEmail: login,
      password
    };
    postLoginData(userData)
      .then((loginResult) => {
        localStorage.setItem('token', `${loginResult.data.token}`);
        loadAllDataAfterLogin();
        onClose();
        // localStorage.setItem('L', `${loginResult.data.token}`);
        // const token = localStorage.getItem('token');
        // console.log(token)

        setErrorMessage(null);
      })
      .catch((err) => {
        setErrorMessage('Incorrect password or login');
        // console.log(err);
        Promise.reject(err)
        /* Show error to customer, may be incorrect password or something else */
      });
  }

  return (
    <Container maxWidth="xs">
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
        <form className={classes.passwordForm} noValidate>
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
          {/* <FormControlLabel */}
          {/* eslint-disable-next-line max-len */}
          {/*  control={<Checkbox value="remember" color="primary" className={classes.checkBox} />} */}
          {/*  label="Remember me" */}
          {/* /> */}
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

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  loadAllDataAfterLogin: () => {
    dispatch(loadAllDataAfterLogin())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

SignIn.propTypes = {
  onClose: PropTypes.func,
};

SignIn.defaultProps = {
  onClose: () => {
  }
};
