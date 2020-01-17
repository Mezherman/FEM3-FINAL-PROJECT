import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox, Link, Grid, Box,
  Typography,
  Container,
  List,
  ListItem,
  FormControl,
  InputAdornment,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  Divider,
  Modal,
  Fade,
  Backdrop
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import RoutesName from '../../routes-list';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './_sign-up';

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
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();

  const handleSelectCountry = (event) => {
    setSelectCountry(event.target.value);
  };

  return (
    <Container component="main" disableGutters>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" align="center" className={classes.title}>
          Your registration for the myWMF Customer Club
        </Typography>

        <form className={classes.form} noValidate >
          <Grid
            container
            spacing={3}
            direction="row-reverse"
            alignItems="center"
            alignContent="flex-end"
            justify="space-evenly"
          >
            <Grid item xs={12} sm={10} md={5} className={classes.accountContentLeft}>
              <Typography component="p" align="justify" variant="body2" className={classes.benefitText}>
                For cooking enthusiasts and epicureans, lovers of elegant design and long-lasting
                quality: Register now, secure your welcome bonus and benefit from the many
                advantages of the myWMF Club!
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

              <Typography align="justify" variant="body2" gutterBottom className={classes.helperBonus}>
                * To receive the welcome bonus, you must give your consent to the use of your
                personal data. Redeemable in all WMF stores and in the WMF online shop, €50 minimum
                order value applies.
              </Typography>
            </Grid>
            <Divider light orientation="vertical" className={classes.dividerSignUp} />
            <Grid item xs={12} sm={10} md={5} className={classes.accountContentRight}>
              <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
                Please enter the following information:
              </Typography>

              <RadioGroup defaultValue="Mr" aria-label="gender" name="customized-radios" className={classes.radioGender}>
                <FormControlLabel value="Mr" control={<Radio className={classes.radioLabel} />} label="Mr" />
                <FormControlLabel value="Mrs" control={<Radio className={classes.radioLabel} />} label="Mrs" />
              </RadioGroup>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label={(
                      <FormLabel
                        className={classes.labelText}
                        required
                      >
                        First Name
                      </FormLabel>
                    )}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="lastName"
                    label={(
                      <FormLabel
                        className={classes.labelText}
                        required
                      >
                        Last Name
                      </FormLabel>
                    )}
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <InputAdornment htmlFor="birthdayDay" className={classes.labelBirthday}>
                      Do you fancy a birthday surprise?
                      <InfoOutlinedIcon
                        fontSize="small"
                        className={classes.infoIcon}
                        type="button"
                        onClick={handleOpenInfo}
                      />
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modalInfoIcon}
                        open={openInfo}
                        onClose={handleCloseInfo}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={openInfo}>
                          <div className={classes.paperInfoIcon}>
                            <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
                              Birthday gift
                              <CloseIcon
                                className={classes.modalInfoClose}
                                color="action"
                                onClick={handleCloseInfo}
                              />
                            </h2>
                            <p id="transition-modal-description" className={classes.modalInfoText}>
                              Let us surprise you – with a WMF gift on your birthday. Let us know
                              your date of birth and you will receive an e-mail every year
                              containing a birthday voucher, which you can then redeem in the
                              online shop or in one of our stores.
                            </p>
                          </div>
                        </Fade>
                      </Modal>
                    </InputAdornment>

                    <Grid container>
                      <TextField
                        variant="outlined"
                        helperText={(
                          <FormHelperText
                            className={classes.helperBirth}
                          >
                            DD
                          </FormHelperText>
                        )}
                        id="birthdayDay"
                        className={classes.inputBirthDay}
                      />
                      <TextField
                        variant="outlined"
                        helperText={(
                          <FormHelperText
                            className={classes.helperBirth}
                          >
                            MM
                          </FormHelperText>
                        )}
                        id="birthdayMonth"
                        className={classes.inputBirthMonth}
                      />
                      <TextField
                        variant="outlined"
                        helperText={(
                          <FormHelperText
                            className={classes.helperBirth}
                          >
                            YYYY
                          </FormHelperText>
                        )}
                        id="birthdayYear"
                        className={classes.inputBirthYear}
                      />

                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="emailSignUp"
                    label={(
                      <FormLabel
                        className={classes.labelText}
                        required
                      >
                        Email Address
                      </FormLabel>
                    )}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="password"
                    label={(
                      <FormLabel
                        className={classes.labelText}
                        required
                      >
                        Password
                      </FormLabel>
                    )}
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
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <LanguageIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  >
                    {selectCountryList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>

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
                <FormControlLabel
                  control={<Checkbox value="agreeCreateProfile" className={classes.radioLabel} />}
                  label={(
                    <FormLabel className={classes.labelAgreement}>
                      I agree that the WMF Group may create a personal profile based on my
                      personal data, purchasing and usage behaviour, in order to better tailor
                      advertising and web offers to my personal interests and to send me these
                      offers and a newsletter on products, innovations and special promotions by
                      e-mail. You may revoke your consent at any time, e.g. in your myWMF customer
                      account in the “My communication” section.
                    </FormLabel>
                  )}
                  className={classes.labelControl}
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Become a myWMF Club member now
              </Button>
              <Grid container>
                <Grid item>
                  <RouteLink to={RoutesName.home}>
                    <Link
                      variant="body2"
                      className={classes.linkSignIn}
                    >
                      Already have an account? Sign in
                    </Link>
                  </RouteLink>
                </Grid>
              </Grid>

            </Grid>

          </Grid>

        </form>
      </div>
    </Container>
  );
}
