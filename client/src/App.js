import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

import Catalog from './components/Catalog/catalog';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render () {
    return (
      <>
        <Catalog />
      </>
    )
  }
}
