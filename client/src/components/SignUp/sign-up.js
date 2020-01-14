import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox, Link, Grid, Box,
  Typography,
  Container,
  List,
  ListItem,
  Radio,
  FormControl,
  InputLabel,
  OutlinedInput,
  Input,
  FormHelperText,
  InputAdornment,
  MenuItem,
  FormLabel
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import { RoutesName } from '../../routes'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './_sign-up';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const selectCountryList = [
  {
    value: 'Austria',
    label: 'Austria',
  },
  {
    value: 'Germany',
    label: 'Germany',
  }
];

export default function SignUp() {
  const [selectCountry, setSelectCountry] = React.useState('Austria');
  const [checked, setChecked] = React.useState(true);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();

  const handleSelectCountry = (event) => {
    setSelectCountry(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs" disableGutters>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" align="center" className={classes.title}>
          Your registration for the myWMF Customer Club
        </Typography>

        <form className={classes.form} noValidate >

          <div className={classes.accountContentLeft}>
            <Typography component="p" align="justify" variant="body2">
              For cooking enthusiasts and epicureans, lovers of elegant design and long-lasting
              quality: Register now, secure your welcome bonus and benefit from the many advantages
              of the myWMF Club!
            </Typography>

            <List className={classes.list}>
              <ListItem alignItems="flex-start" disableGutters className={classes.listItem}>
                €10 welcome bonus
                <em>*</em>
              </ListItem>
              <ListItem alignItems="flex-start" disableGutters className={classes.listItem}>
                Personal birthday gift every year
              </ListItem>
              <ListItem alignItems="flex-start" disableGutters className={classes.listItem}>
                Invitations to the VIP sale and events
              </ListItem>
              <ListItem alignItems="flex-start" disableGutters className={classes.listItem}>
                Simple and easy management of your customer data, orders and much more
              </ListItem>
            </List>

            <Typography align="justify" variant="body2" gutterBottom>
              *To receive the welcome bonus, you must give your consent to the use of your
              personal data. Redeemable in all WMF stores and in the WMF online shop, €50 minimum
              order value applies.
            </Typography>
          </div>

          <div className={classes.accountContentRight}>
            <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
              Please enter the following information:
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <FormControl>
                  <InputAdornment htmlFor="birthdayDay" className={classes.labelBirthday}>
                    Do you fancy a birthday surprise?
                    <InfoOutlinedIcon fontSize="small" color="action" />
                  </InputAdornment>

                  <Grid container>
                    <TextField
                      variant="outlined"
                      helperText="DD"
                      id="birthdayDay"
                      className={classes.inputBirthDay}
                    />
                    <TextField
                      variant="outlined"
                      helperText="MM"
                      id="birthdayMonth"
                      className={classes.inputBirthMonth}
                    />
                    <TextField
                      variant="outlined"
                      helperText="YYYY"
                      id="birthdayYear"
                      className={classes.inputBirthYear}
                    />

                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="emailSignUp"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="passwordSignUp"
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-select-country"
                  select
                  value={selectCountry}
                  onChange={handleSelectCountry}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LanguageIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  {selectCountryList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </div>

          <div className={classes.accountContentFooter}>
            <Typography paragraph variant="subtitle2">
              Secure your welcome bonus!
            </Typography>
            <Typography paragraph variant="body2" align="justify">
              Receive a €10 welcome bonus for your next purchase as well as information and special
              invitations to the VIP sale and events. For this, we need your consent to use your
              data:
            </Typography>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="agreeCreateProfile" />}
                label={(
                  <FormLabel className={classes.labelAgreement}>
                    I agree that the WMF Group may create a personal profile based on my
                    personal data, purchasing and usage behaviour, in order to better tailor
                    advertising and web offers to my personal interests and to send me these offers
                    and a newsletter on products, innovations and special promotions by e-mail.
                    You may revoke your consent at any time, e.g. in your myWMF customer account in
                    the “My communication” section.
                  </FormLabel>
                )}
                className={classes.labelControl}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Become a myWMF Club member now
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href={RoutesName.home}
                  variant="body2"
                  className={classes.linkSignIn}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </div>

        </form>
      </div>
    </Container>
  );
}
