import React from 'react';
import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import RoutesName from '../../routes-list'

export default function NoMatch() {
  return (
    <Container maxWidth="xl">
      <div style={{ minHeight: '52vh' }}>
        <h1>We&apos;re sorry, but we can&apos;t find the page you are looking for.</h1>
        <p>We&apos;re sorry, but we can&apos;t find the page you are looking for.</p>
        <p>How can we help you?</p>
        <ul>
          <li>
            Go to the
            <Link to={RoutesName.home}> homepage</Link>
          </li>
          <li>Use the search function at the top of the website</li>
        </ul>
        <p>Thank you for your understanding!</p>
      </div>
    </Container>
  );
}