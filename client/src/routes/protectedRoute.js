import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home/home';
import LoginModal from '../components/Login-modal-window/login-modal-window';

export default function ProtectedRoute (props) {
  const { component: Component, loggedIn, closeModal, modalIsVisible, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) => (loggedIn ? <Component {...props} /> : (
        <div>
          <Home />
          <LoginModal
            isLoggedIn={loggedIn}
            onModalClose={closeModal}
            open={modalIsVisible}
          />
        </div>
      ))}
    />
  )
}