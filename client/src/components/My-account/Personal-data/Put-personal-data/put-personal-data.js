import React from 'react';
import { Container, Grid, Typography, } from '@material-ui/core';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import RenderEditTextField from '../../../Render-text-field/render-edit-text-field'
import RenderEditBirthdayField from '../../../Render-birthday-field/render-edit-birthday-field';

function PutPersonalData (props) {
  const {
    // gender,
    firstName,
    lastName,
    telephone,
    email,
    login,
    birthdate,
  } = props;

  const classes = useStyles();

  const birth = () => {
    if (birthdate) {
      const splitedBirthDate = birthdate.split('.');
      const bDay = splitedBirthDate[0];
      const bMonth = splitedBirthDate[1];
      const bYear = splitedBirthDate[2];
      return (
        <Grid item xs={12} sm={6}>
          <Field
            name="birthdayDay"
            component={RenderEditBirthdayField}
            defaultValue={bDay}
            classes={classes}
            label="DD"
          />
          <Field
            name="birthdayMonth"
            component={RenderEditBirthdayField}
            defaultValue={bMonth}
            classes={classes}
            label="MM"
          />
          <Field
            name="birthdayYear"
            component={RenderEditBirthdayField}
            defaultValue={bYear}
            classes={classes}
            label="YYYY"
          />
        </Grid>
      )
    }
    return (
      <Grid item xs={12} sm={6}>
        <Field
          name="birthdayDay"
          component={RenderEditBirthdayField}
          defaultValue=""
          classes={classes}
          label="DD"
        />
        <Field
          name="birthdayMonth"
          component={RenderEditBirthdayField}
          defaultValue=""
          classes={classes}
          label="MM"
        />
        <Field
          name="birthdayYear"
          component={RenderEditBirthdayField}
          defaultValue=""
          classes={classes}
          label="YYYY"
        />
      </Grid>
    )
  };

  return (
    <Container>
      <h2>Edit Form</h2>
      <Grid item xs={12}>
        <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
            Please edit the information you want:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field
              name="firstName"
              component={RenderEditTextField}
              defaultValue={firstName}
              classes={classes}
              label="First Name"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="lastName"
              component={RenderEditTextField}
              defaultValue={lastName}
              classes={classes}
              label="Last Name"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field
              name="login"
              component={RenderEditTextField}
              defaultValue={login}
              classes={classes}
              label="Login"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="email"
              component={RenderEditTextField}
              defaultValue={email}
              classes={classes}
              label="Email"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field
              name="telephone"
              component={RenderEditTextField}
              defaultValue={telephone}
              classes={classes}
              label="Phone number"
              type="tel"
            />
          </Grid>

          {birth()}

        </Grid>
      </Grid>
    </Container>
  )
}

PutPersonalData.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
};

export default PutPersonalData;
