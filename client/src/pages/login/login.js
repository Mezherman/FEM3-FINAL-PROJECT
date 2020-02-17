import React from 'react';
import PropTypes from 'prop-types'
import Home from '../home/home';
import LoginModal from '../../components/Login-modal-window/login-modal-window';

const Login = ({ close, visible }) => (
  <>
    <Home />
    <LoginModal onModalClose={close} open={visible} />
  </>
);

export default Login;

Login.propTypes = {
  close: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
