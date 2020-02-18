import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../components/Login/login';

export default function ProtectedRoute (props) {
  const { component: Component, loggedIn, closeModal, modalIsVisible, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) => (loggedIn ? <Component {...props} /> : (
        <Login close={closeModal} visible={modalIsVisible} />
      ))}
    />
  )
}
