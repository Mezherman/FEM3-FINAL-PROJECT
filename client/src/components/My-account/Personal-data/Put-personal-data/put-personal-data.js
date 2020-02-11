import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import RenderEditTextField from '../../../Render-text-field/render-edit-text-field'

function PutPersonalData (props) {
  const {
    firstName,
    lastName,
    telephone,
    email,
    login,
  } = props;

  const classes = useStyles();

  const Fields = () => (
    <Grid component="div" container spacing={2} direction="column" alignContent="center" >
      <Grid component="div" container item xs={12} sm={6}>
        <Field
          name="firstName"
          component={RenderEditTextField}
          defaultValue={firstName}
          classes={classes}
          label="First Name"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={6}>
        <Field
          name="lastName"
          component={RenderEditTextField}
          defaultValue={lastName}
          classes={classes}
          label="Last Name"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={6}>
        <Field
          name="login"
          component={RenderEditTextField}
          defaultValue={login}
          classes={classes}
          label="Login"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={6}>
        <Field
          name="email"
          component={RenderEditTextField}
          defaultValue={email}
          classes={classes}
          label="Email"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={6}>
        <Field
          name="telephone"
          component={RenderEditTextField}
          placeholder="+380XXXXXXXXX"
          defaultValue={telephone}
          classes={classes}
          label="Phone number"
          type="tel"
        />
      </Grid>
    </Grid>
  );

  const MainContent = () => (
    <Grid component="div" item xs={12}>
      <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
        Please edit the information you want:
      </Typography>
      <Fields />
    </Grid>
  );

  return (
    <Container>
      <h2>Edit Form</h2>
      <MainContent />
    </Container>
  )
}

PutPersonalData.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

export default PutPersonalData;
