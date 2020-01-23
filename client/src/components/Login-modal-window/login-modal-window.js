import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Grid, IconButton, Divider, Button, Box, Paper } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RoutesName from '../../routes-list';

import ModalWindow from '../Modal-window/modal-window';
import SignIn from '../Sign-in/sign-in';

export default function LoginModal({ open, onModalClose, onSuccessLogin }) {
  // if (open) {
  return (
    <ModalWindow
      open={open}
      onModalClose={onModalClose}
    >
      <SignIn onClose={() => {}} onSuccessLogin={onSuccessLogin} />
    </ModalWindow>
  );
  // }
  // return <Redirect to={RoutesName.home} />
}

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onSuccessLogin: PropTypes.func.isRequired
};
