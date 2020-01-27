import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, Redirect } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormLabel } from '@material-ui/core';
import jwtDecode from 'jwt-decode';
import useStylesSingIn from './_sign-in';
import RoutesName from '../../routes-list';
import postLoginData from '../../services/postLoginData'
import loginLoaded, { fetchCustomerData } from '../../redux/actions/user';
import { mergeDBWithLocalStorage } from '../../redux/actions/CartActions';
import { getFavoritesFromDB } from '../../redux/actions/favorites';

function SignIn(props) {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [length, setLength] = useState(1);

  const { onClose, user, loginLoaded, userLoadedData, mergeCart, fetchFavorites } = props;
  // console.log('USER =', user);
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

  function handleClick(event) {
    event.preventDefault();
    const userData = {
      loginOrEmail: login,
      password
    };
    postLoginData(userData)
      .then((loginResult) => {
        localStorage.setItem('token', `${loginResult.data.token}`);
        loginLoaded();
        onClose();
        mergeCart();
        fetchCustomerData();
        fetchFavorites();
        // localStorage.setItem('L', `${loginResult.data.token}`);
        // const token = localStorage.getItem('token');
        // console.log(token)

        setErrorMessage(null);

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
            control={<Checkbox value="remember" color="primary" className={classes.checkBox} />}
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

const mapStateToProps = (state) => {
  // console.log('STATE =', state);
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => ({
  loginLoaded: () => { dispatch(loginLoaded()) },
  mergeCart: () => { dispatch(mergeDBWithLocalStorage()) },
  fetchCustomerData: () => dispatch(fetchCustomerData()),
  fetchFavorites: () => dispatch(getFavoritesFromDB())
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

SignIn.propTypes = {
  onClose: PropTypes.func,
};

SignIn.defaultProps = {
  onClose: () => {}
};
