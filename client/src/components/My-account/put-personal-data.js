import React, { useEffect, useState } from 'react';
import {
  Backdrop,
  Box, Button, Container, Fade, FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid, InputAdornment, MenuItem, Modal, Radio,
  RadioGroup,
  TextField,
  Typography
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import InfoOutlinedIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { Redirect } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import useStyles from '../SignUp/Sign-up-form/_sign-up-form';
import postNewUser from '../../services/postNewUser';
import validate from '../SignUp/validate';
import usePdstyles from './_personal-data';
// import getUserData from '../../services/getUserData';

function PutPersonalData (props) {
  // const [newUserData, setNewUserData] = useState({
  //   gender: 'Mr',
  //   firstName: '',
  //   lastName: '',
  //   // birthdayDay: '',
  //   // birthdayMonth: '',
  //   // birthdayYear: '',
  //   email: '',
  //   telephone: '',
  //   // password: '',
  //   // country: 'Austria',
  //   agreement: false,
  //   isAdmin: false,
  // });

  // const { gender, firstName, lastName } = newUserData;

  const { handleSubmit } = props;
  const {
    gender,
    firstName,
    lastName,
    telephone,
    email,
    login,
    // handleSubmit
  } = props;
  console.log(firstName);

  // console.log('USER NAME =>', firstName);

  const classes = useStyles();

  // SignUP

  // const [signUpModal, setSignUpModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  // const handleOpenSignUpModal = () => {
  //   setSignUpModal(true);
  // };

  // const handleCloseSignUpModal = () => {
  //   setSignUpModal(false);
  //   setRedirect(true);
  // };
  // const handleOpenSetErrorModal = () => {
  //   setErrorModal(true);
  // };
  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  // const renderRedirect = () => {
  //   if (redirect) {
  //     return <Redirect to="/" />
  //   }
  //   return null
  // };

  // const [redirect, setRedirect] = useState(false);

  const submitNewUser = (values) => {}

  const renderTextField = ({
    label,
    name,
    type,
    defaultValue,
    meta: { touched, error },
    input: { value, onBlur, onChange }
  }) => (
    <TextField
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      onBlur={onBlur}
      onChange={(event) => onChange(event.target.value)}
      // defaultValue={!touched ? defaultValue : value}
      value={value || defaultValue}
      className={classes.root}
      label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
    />
  );

  return (
    <Container>
      <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitNewUser)}>
        <Grid item xs={12} sm={10} md={5}>
          <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
            Please enter the following information:
          </Typography>
          {/* <Field name="gender" component={renderRadioGroup} > */}
          {/*  <FormControlLabel */}
          {/*    className={classes.root} */}
          {/*    value="Mr" */}
          {/*    label="Mr" */}
          {/*    name="gender" */}
          {/*    control={<Radio className={classes.radioLabel} />} */}
          {/*  /> */}
          {/*  <FormControlLabel */}
          {/*    className={classes.root} */}
          {/*    value="Mrs" */}
          {/*    label="Mrs" */}
          {/*    name="gender" */}
          {/*    control={<Radio className={classes.radioLabel} />} */}
          {/*  /> */}
          {/* </Field> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* <Field name="firstName" component={CustomInput} label="First Name" /> */}
              <Field
                name="firstName"
                component={(args) => {
                  const newArgs = {
                    ...args,
                    defaultValue: firstName
                  };
                  return renderTextField(newArgs)
                }}
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={(args) => {
                  const newArgs = {
                    ...args,
                    defaultValue: lastName
                  };
                  return renderTextField(newArgs)
                }}
                name="lastName"
                label="Last Name"
              />
            </Grid>
          </Grid>
          <Box mb={1} mt={2}>
            <Field
              name="login"
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: login
                };
                return renderTextField(newArgs)
              }}
              label="Login"
              type="text"
            />
          </Box>
          {/* <FormControl> */}
          {/*  <InputAdornment htmlFor="birthdayDay" className={classes.labelBirthday}> */}
          {/* Do you fancy a birthday surprise? */}
          {/*    <InfoOutlinedIcon */}
          {/*      fontSize="small" */}
          {/*      className={classes.infoIcon} */}
          {/*      type="button" */}
          {/*      onClick={handleOpenInfo} */}
          {/*    /> */}
          {/*    <Modal */}
          {/*      aria-labelledby="transition-modal-title" */}
          {/*      aria-describedby="transition-modal-description" */}
          {/*      className={classes.modalInfoIcon} */}
          {/*      open={openInfo} */}
          {/*      onClose={handleCloseInfo} */}
          {/*      closeAfterTransition */}
          {/*      BackdropComponent={Backdrop} */}
          {/*      BackdropProps={{ */}
          {/*        timeout: 500, */}
          {/*      }} */}
          {/*    > */}
          {/*      <Fade in={openInfo}> */}
          {/*        <div className={classes.paperInfoIcon}> */}
          {/*          <h2 id="transition-modal-title" className={classes.modalInfoTitle}> */}
          {/*        Birthday gift */}
          {/*            <CloseIcon */}
          {/*              className={classes.modalInfoClose} */}
          {/*              color="action" */}
          {/*              onClick={handleCloseInfo} */}
          {/*            /> */}
          {/*          </h2> */}
          {/*          <p id="transition-modal-description" className={classes.modalInfoText}> */}
          {/*        Let us surprise you – with a WMF gift on your birthday. Let us know */}
          {/*        your date of birth and you will receive an e-mail every year */}
          {/*        containing a birthday voucher, which you can then redeem in the */}
          {/*        online shop or in one of our stores. */}
          {/*          </p> */}
          {/*        </div> */}
          {/*      </Fade> */}
          {/*    </Modal> */}
          {/*  </InputAdornment> */}
          {/* </FormControl> */}
          {/* <Grid item> */}
          {/*  <Box mb={2}> */}
          {/*    <Field name="birthdayDay" component={renderBirthdayField} label="DD" value="birthdayDay" /> */}
          {/*    <Field name="birthdayMonth" component={renderBirthdayField} label="MM" value="birthdayMonth" /> */}
          {/*    <Field name="birthdayYear" component={renderBirthdayField} label="YYYY" value="birthdayYear" /> */}
          {/*  </Box> */}
          {/* </Grid> */}
          <Box mb={2}>
            <Field
              name="email"
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: email
                };
                return renderTextField(newArgs)
              }}
              label="Email Address"
              type="email"
            />
          </Box>
          {/* <Box mb={2}> */}
          {/*  <Field name="password" component={renderTextField} label="Password" type="password" /> */}
          {/* </Box> */}
          <Box mb={2}>
            <Field
              name="telephone"
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: telephone
                };
                return renderTextField(newArgs)
              }}
              label="Phone number"
              type="tel"
            />
          </Box>
          {/* <Field name="country" component={renderSelectField} label={selectCountry}> */}
          {/*  <MenuItem value="Austria">Austria</MenuItem> */}
          {/*  <MenuItem value="Germany">Germany</MenuItem> */}
          {/* </Field> */}
        </Grid>
      </form>
      {errorModal && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modalInfoIcon}
          open={errorModal}
          onClose={handleCloseSetErrorModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={errorModal}>
            <div className={classes.paperInfoError}>
              <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
                Something go wrong. Try again
              </h2>
              <Button
                onClick={handleCloseSetErrorModal}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                OK
              </Button>
            </div>
          </Fade>
        </Modal>
      )}
    </Container>
  )
}

PutPersonalData = reduxForm({
  form: 'edit',
  validate,
})(PutPersonalData);

export default PutPersonalData
