import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';

export default class HeaderNavbar extends Component {
  render() {
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs align="center">aaaaaaaaaa</Grid>
          <Grid item xs>bbbbbbbbbb</Grid>
          <Grid item xs>cccccccccc</Grid>
        </Grid>
        {/*<Container>test</Container>*/}
      </>
    )
  }
}