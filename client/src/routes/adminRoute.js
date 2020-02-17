import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../pages/home/home';
import LoginModal from '../components/Login-modal-window/login-modal-window';
import RoutesName from '../routes-list';

export default function AdminRoute({ component: Component, loggedIn, customer, closeModal, modalIsVisible, ...rest }) {
  if (!loggedIn) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <div>
            <Home />
            <LoginModal
              isLoggedIn={loggedIn}
              onModalClose={closeModal}
              open={modalIsVisible}
            />
          </div>
        )}
      />
    );
  }
  if (!customer.isAdmin) {
    return <Redirect to={RoutesName.forbidden} />;
  }
  return <Route {...rest} component={Component} />;
}
