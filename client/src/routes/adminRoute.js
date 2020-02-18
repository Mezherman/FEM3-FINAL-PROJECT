import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import RoutesName from '../routes-list';
import Login from '../components/Login/login';

export default function AdminRoute({ component: Component, loggedIn, customer, closeModal, modalIsVisible, ...rest }) {
  if (!loggedIn) {
    return (
      <Route
        {...rest}
        render={() => (<Login close={closeModal} visible={modalIsVisible} />)}
      />
    );
  }
  if (!customer.isAdmin) {
    return <Redirect to={RoutesName.forbidden} />;
  }
  return <Route {...rest} component={Component} />;
}
