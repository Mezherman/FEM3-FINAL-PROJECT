import React from 'react';
import { Divider, Container } from '@material-ui/core';

import useStyles from './_about-us';

import About from '../../components/About-us/About/about'
import Video from '../../components/About-us/Video/video'
import Brands from '../../components/About-us/Brands/brands'
import Awards from '../../components/About-us/Awards/awards'

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.text}>
      <h2>About us</h2>
      <Divider />
      <About />
      <Video />
      <Brands />
      <Awards />
    </Container>
  )
}

export default AboutUs;
