import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Backdrop, Button, Fade,
  FormControl,
  FormControlLabel, FormHelperText, FormLabel,
  Grid, InputAdornment, MenuItem, Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { Link } from 'react-router-dom';
import useStyles from '../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from './_personal-data'
import RoutesName from '../../routes-list';

import getUserData from '../../services/getUserData'
import putUserData from '../../services/putUserData'

// kpXVCJ9.eyJpZCI6IjVlMWUxNGFmNjAzMzg5MWMxYzQ1OWY0ZiIsImZpcnN0TmFtZSI6IlBlYWNlZnVsIiwibGFzdE
// 5hbWUiOiJXYXJyaW9yIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTc5NjIyMzkwLCJleHAiOjE1Nzk2NT
// gzOTB9.9P7-73ASL9H8c02BChYYrrYbRnlReydUHxDdjVoUDUY';

// axios.defaults.baseURL = 'http://localhost:5000';

function EditPersonalData (props) {
  const [selectCountry, setSelectCountry] = React.useState('Austria');
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const [newUserData, setNewUserData] = useState({
    gender: 'Mr',
    firstName: '',
    lastName: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
    email: '',
    telephone: '',
    // password: '',
    country: 'Austria',
    agreement: false,
    isAdmin: false,
  });

  const classes = useStyles();
  const pdClasses = usePdstyles();

  useEffect(() => {
    getUserData()
      .then((loggedInCustomer) => {
        setNewUserData({
          ...newUserData,
          ...loggedInCustomer.data
        });
        /* Do something with loggedInCustomer */
      })
      .catch((err) => {
        console.log('ERROR', err);
        /* Do something with error */
      });
  }, [newUserData]);
  // console.log(newUserData);

  const {
    gender,
    firstName,
    lastName,
    birthdayDay,
    birthdayMonth,
    birthdayYear,
    email,
    password,
    country,

  } = newUserData;
  // console.log(firstName);
  // console.log(lastName);
  // console.log(newUserData);

  // const updatedCustomer = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   login: 'jDoe',
  //   email: 'jDoe@gmail.com'
  // };
  // axios
  // .put("/customers", updatedCustomer)
  // .then(updatedCustomer => {/*Do something with customer*/})
  // .catch(err => {/*Do something with error, e.g. show error to customer*/})

  const handleChange = (key) => (event) => {
    setNewUserData({ ...newUserData, [key]: event.target.value });
  };

  const inputsData = {
    radioGender: ['Mr', 'Mrs'],
    fullNameInputs: [
      {
        value: 'First Name',
        name: 'firstName',
      },
      {
        value: 'Last Name',
        name: 'lastName',
      }
    ],
    birthDayInputs: [
      {
        helper: 'DD',
        name: 'birthdayDay',
        birthdayValue: birthdayDay
      },
      {
        helper: 'MM',
        name: 'birthdayMonth',
        birthdayValue: birthdayMonth
      },
      {
        helper: 'YYYY',
        name: 'birthdayYear',
        birthdayValue: birthdayYear
      },
    ],
    registrationInfo: [
      {
        label: 'Email Address',
        name: 'email',
        value: email
      },
      {
        label: 'Password',
        name: 'password',
        // value: password
      }
    ],
    selectCountryList: ['Austria', 'Germany']
  };

  const submitEditedUser = (event) => {
    event.preventDefault();
    // console.log(newUserData);
    putUserData(newUserData)
      .then((response) => {
        console.log(response);
        if (response.statusText === 'OK') {
          // setRegistration(true);
          console.log(response);
        }
      })
      .catch((error) => {
        // setMessage(error.message);
        console.log(error.response.data);
      });
  };

  return (
    <Grid item xs={12} sm={10} md={5} >
      <Typography
        component="h1"
        variant="h5"
        align="center"
        className={`${classes.title} ${pdClasses.header}`}
      >
        Your information for the myWMF Customer Club
      </Typography>

      <Typography paragraph component="p" variant="subtitle2" className={`${classes.rightTitle} ${pdClasses.title}`}>
        Please edit what you need:
      </Typography>

      <RadioGroup
        defaultValue={gender}
        aria-label="gender"
        name="customized-radios"
        className={classes.radioGender}
        onChange={handleChange('gender')}
      >
        {inputsData.radioGender.map((item) => (
          <FormControlLabel
            className={classes.root}
            value={item}
            key={item}
            control={
              <Radio className={classes.radioLabel} />
            }
            label={item}
          />
        ))}
      </RadioGroup>

      <Grid container spacing={2}>

        {/* {inputsData.fullNameInputs.map(({ value, name }) => ( */}
        {/*  <Grid item xs={12} sm={6} key={name}> */}
        {/*    <TextField */}
        {/*      autoComplete={value} */}
        {/*      name={name} */}
        {/*      variant="outlined" */}
        {/*      fullWidth */}
        {/*      id={name} */}
        {/*      autoFocus */}
        {/*      defaultValue={} */}
        {/*      label={( */}
        {/*        <FormLabel className={classes.labelText}>{value}</FormLabel> */}
        {/*      )} */}
        {/*      onChange={handleChange(name)} */}
        {/*    /> */}
        {/*  </Grid> */}
        {/* ))} */}

        <Grid item xs={12} sm={6} key="firstName">
          <TextField
            autoComplete="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            id="firstName"
            autoFocus
            value={firstName}

            // required
            label={(
              <FormLabel className={classes.labelText} required>First Name</FormLabel>
            )}
            onChange={handleChange('firstName')}
          />
        </Grid>

        <Grid item xs={12} sm={6} key="lastName">
          <TextField
            autoComplete="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            id="lastName"
            autoFocus
            value={lastName}
            label={(
              <FormLabel className={classes.labelText}>Last Name</FormLabel>
            )}
            onChange={handleChange('lastName')}
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
                      {/* <CloseIcon */}
                      {/*  className={classes.modalInfoClose} */}
                      {/*  color="action" */}
                      {/*  onClick={handleCloseInfo} */}
                      {/* /> */}
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
              { inputsData.birthDayInputs.map(({ helper, name }) => (
                <TextField
                  variant="outlined"
                  key={name}
                  className={classes.inputBirthDay}
                  helperText={(
                    <FormHelperText className={classes.helperBirth} component="span">
                      {helper}
                    </FormHelperText>
                  )}
                  onChange={handleChange(name)}
                />
              ))}
            </Grid>

          </FormControl>
        </Grid>

        { inputsData.registrationInfo.map(({ label, name, value }) => (
          <Grid item xs={12} key={name}>
            <TextField
              variant="outlined"
              fullWidth
              value={value}
              id={`${name}signUp`}
              label={(
                <FormLabel
                  className={classes.labelText}
                  required
                >
                  {label}
                </FormLabel>
              )}
              name={name}
              autoComplete={name}
              onChange={handleChange(name)}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <TextField
            id="outlined-select-country"
            select
            value={selectCountry}
            variant="outlined"
            fullWidth
            onChange={handleChange('country')}

          >
            {inputsData.selectCountryList.map((option) => (
              <MenuItem
                key={option}
                value={option}
              >
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <div className={pdClasses.buttonsContainer}>
        <Link to={RoutesName.home}>
          <Button
            // size="large"
            variant="contained"
            color="secondary"
            className={`${classes.submit} ${pdClasses.button}`}
            // disableElevation
          >
        CANCEL
          </Button>
        </Link>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={`${classes.submit} ${pdClasses.button}`}
          onSubmit={submitEditedUser}
        >
        SAVE
        </Button>
      </div>
    </Grid>

  )
}

export default EditPersonalData;
