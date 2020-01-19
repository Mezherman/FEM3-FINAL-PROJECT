import React from 'react';
import {
  Backdrop,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Field } from 'redux-form';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './_signUp-form';

const inputsData = {
  radioGender: ['Mr', 'Mrs'],
  fullNameInputs: [
    {
      value: 'First Name',
      name: 'firstName'
    },
    {
      value: 'Last Name',
      name: 'lastName'
    }
  ],
  birthDayInputs: [
    {
      helper: 'DD',
      name: 'birthdayDay'
    },
    {
      helper: 'MM',
      name: 'birthdayMonth'
    },
    {
      helper: 'YYYY',
      name: 'birthdayYear'
    },
  ],
  registrationInfo: [
    {
      label: 'Email Address',
      name: 'email'
    },
    {
      label: 'Password',
      name: 'password'
    }
  ],
  selectCountryList: ['Austria', 'Germany']
};

const SignUpForm = ({ handleChange }) => {
  const [selectCountry, setSelectCountry] = React.useState('Austria');
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={10} md={5} >
      <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
        Please enter the following information:
      </Typography>

      <RadioGroup
        defaultValue="Mr"
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

        {inputsData.fullNameInputs.map(({ value, name }) => (
          <Grid item xs={12} sm={6} key={name}>
            <TextField
              autoComplete={value}
              name={name}
              variant="outlined"
              fullWidth
              id={name}
              autoFocus
              label={(
                <FormLabel className={classes.labelText}>{value}</FormLabel>
              )}
              onChange={handleChange(name)}
            />
          </Grid>
        ))}

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

        { inputsData.registrationInfo.map(({ label, name }) => (
          <Grid item xs={12} key={name}>
            <TextField
              variant="outlined"
              fullWidth
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
    </Grid>

  )
}

export default SignUpForm;
