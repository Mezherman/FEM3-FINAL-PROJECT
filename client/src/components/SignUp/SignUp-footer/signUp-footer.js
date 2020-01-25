import React from 'react';
import { Field } from 'redux-form';
import { Link as RouteLink } from 'react-router-dom';

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  Typography
} from '@material-ui/core';
import RoutesName from '../../../routes-list';

import useStyles from './_signUp-footer';

const SignUpFooter = () => {
  const classes = useStyles();

  const renderCheckboxField = ({ input, name, ...rest }) => (
    <FormControlLabel
      className={classes.root}
      control={(
        <Checkbox value="agreeCreateProfile" className={classes.radioLabel}
                  onChange={(event, value) => input.onChange(value)}
        />
      )}
      label={(
        <FormLabel className={classes.labelAgreement}>
          I agree that the WMF Group may create a personal profile based on my
          personal data, purchasing and usage behaviour, in order to better tailor
          advertising and web offers to my personal interests and to send me these
          offers and a newsletter on products, innovations and special promotions by
          e-mail. You may revoke your consent at any time, e.g. in your myWMF
          customer
          account in the “My communication” section.
        </FormLabel>
      )}
    />
  );

  return (
    <Grid item xs={12} md={11} className={classes.accountContentFooter}>
      <Typography paragraph variant="subtitle2">
        Secure your welcome bonus!
      </Typography>
      <Typography paragraph variant="body2" align="justify">
        Receive a €10 welcome bonus for your next purchase as well as information and
        special invitations to the VIP sale and events. For this, we need your consent to
        use your data:
      </Typography>

      <Grid item xs={12}>
        <Field name="agreement" component={renderCheckboxField} />
      </Grid>

      <Button type="submit" variant="contained" color="primary" className={classes.submit}
        // onSubmit={handleSubmit}
      >
        Become a myWMF Club member now
      </Button>
      <RouteLink
        to={RoutesName.home}
        className={classes.linkSignIn}
      >
        Already have an account?
        {' '}
        <b>Sign in</b>
      </RouteLink>

    </Grid>
  )
}

export default SignUpFooter;
