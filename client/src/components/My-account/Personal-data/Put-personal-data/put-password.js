import React, { useState } from 'react';
import { Field } from 'redux-form';
import { useSelector } from 'react-redux';
import { Container, Grid, } from '@material-ui/core';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from '../_personal-data';
import renderPasswordField from '../../../Render-password-field/render-password-field';

function ChangePasswordForm () {
  const { invalid } = useSelector((state) => state.passwordForm);
  const classes = useStyles();
  const pdClasses = usePdstyles();

  const [eyeToggle, setEyeToggle] = useState(true);
  const togglePasswordMask = () => {
    setEyeToggle((prev) => (setEyeToggle(!prev)));
  };

  return (
    <Container maxWidth="xl">
      <h2>Edit Form</h2>
      <Grid
        item
        xs={12}
        container
        justify="center"
      >
        <Grid item xs={12} sm={5} lg={4} className={pdClasses.passwordInputs}>
          <Field
            name="password"
            component={renderPasswordField}
            invalid={invalid}
            classes={classes}
            label={invalid ? 'Invalid Password' : 'Password'}
            type="password"
            eyeToggle={eyeToggle}
            togglePasswordMask={togglePasswordMask}
          />
        </Grid>
        <Grid item xs={12} sm={5} lg={4} className={pdClasses.passwordInputs}>
          <Field
            name="newPassword"
            component={renderPasswordField}
            classes={classes}
            label="New Password"
            type="password"
            eyeToggle={eyeToggle}
            togglePasswordMask={togglePasswordMask}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ChangePasswordForm;
