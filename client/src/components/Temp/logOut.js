import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import loginLoaded from '../../redux/actions/user'

export default function LogOut() {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          localStorage.setItem('token', '');
          refreshPage();
        }}
      >
        LogOut
      </Button>
    </div>
  )
}
