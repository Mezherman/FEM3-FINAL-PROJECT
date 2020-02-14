import React from 'react';
import PropTypes from 'prop-types'
import Home from '../home/home';
import LoginModal from '../../components/Login-modal-window/login-modal-window';

const Login = ({ close, visible }) => (
  <div>
    <Home />
    <LoginModal onModalClose={close} open={visible} />
  </div>
);

export default Login;

Login.propTypes = {
  close: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
