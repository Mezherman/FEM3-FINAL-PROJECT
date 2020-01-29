import React from 'react';
import { Grid, Divider, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RoutesName from '../../routes-list';
import useStyles from './_footer';

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footerWrapper}>
        <Container maxWidth="xl">
          <Grid container justify="space-between" spacing={2} className={classes.container}>
            <Grid xs={12} md={5} item container wrap="nowrap" alignItems="flex-start">
              <Link to={RoutesName.home}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/wmf-footer.jpg`}
                  alt="WMF"
                  className={classes.img}
                />
              </Link>
              <div>
                <h2 className={classes.title}>The culinary experts</h2>
                <p>
              For more than 160 years, the brands that make up the WMF Group have represented the
              best in cooking, drinking and dining.
                </p>
              </div>
            </Grid>
            <Grid xs={12} md={7} item>
              <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={3}>
                  <Grid container item direction="column">
                    <h2 className={classes.title}>Company</h2>
                    <Divider />
                    <Link to={RoutesName.home} className={classes.links}>Home</Link>
                    <Link to={RoutesName.aboutUs} className={classes.links}>About us</Link>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid container item direction="column">
                    <h2 className={classes.title}>Account</h2>
                    <Divider />
                    <Link to={RoutesName.signUp} className={classes.links}>Sign up</Link>
                    <Link to={RoutesName.signIn} className={classes.links}>Sign in</Link>
                    <Link to={RoutesName.cart} className={classes.links}>Shopping cart</Link>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Grid container item direction="column">
                    <h2 className={classes.title}>Contacts</h2>
                    <Divider />
                    <Link to={RoutesName.contacts} className={classes.links}> Contact list </Link>
                    <span>Professional Contacts</span>
                    <span>WMF Coffeemachines</span>
                    <span>WMF Professional Hotel Equipment</span>
                    <span>+38 (044) 123-456-789</span>
                    <span>+38 (050) 123-456-789</span>
                    <span>Mo-Fr: 08:00 - 18:00</span>
                  </Grid>
                </Grid>
              </Grid>
              <p>&copy; 2020 all rights reserved</p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}
