import React, { useState } from 'react';
import { Field } from 'redux-form';

import {
  Backdrop,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Box,
  IconButton
} from '@material-ui/core';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import CloseIcon from '@material-ui/icons/Close';
import useStyles from './_sign-up-form';

const SignUpForm = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [gender, setGender] = useState('Mr');
  const [eyeToggle, setEyeToggle] = useState(true);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const togglePasswordMask = () => {
    setEyeToggle((prev) => (setEyeToggle(!prev)));
  };
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const classes = useStyles();

  const renderRadioGroup = ({ input, name, ...rest }) => (
    <RadioGroup
      {...input}
      {...rest}
      value={gender}
      // value={input.value}
      aria-label="gender"
      defaultValue="Mr"
      // defaultValue={input.checked}
      className={classes.radioGender}
      name={name}
      onChange={(event, value) => {
        input.onChange(value);
        setGender(event.target.value);
      }}
    />
  );

  const renderTextField = ({ input, label, name, value, type, meta: { touched, error }, ...custom }) => (
    <TextField
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      {...input}
      {...custom}
      className={classes.root}
      label={
        (<FormLabel className={classes.root} required>{label}</FormLabel>)
      }
    />
  );

  const renderFirstField = ({ input, label, name, value, type, meta: { touched, error }, ...custom }) => (
    <TextField
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      autoFocus
      id={`${label}id`}
      error={!!(touched && error)}
      helperText={touched && error}
      {...input}
      {...custom}
      className={classes.root}
      label={
        (<FormLabel className={classes.root} required>{label}</FormLabel>)
      }
    />
  );

  const renderPasswordField = ({ input, label, name, value, type, meta: { touched, error }, ...custom }) => (
    <TextField
      type={eyeToggle ? 'password' : 'text'}
      name={name}
      variant="outlined"
      fullWidth
      id={name + type}
      error={!!(touched && error)}
      helperText={touched && error}
      {...input}
      {...custom}
      className={classes.root}
      label={
        (<FormLabel className={classes.root} required>{label}</FormLabel>)
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePasswordMask}
              // onMouseDown={handleMouseDownPassword}
            >
              {eyeToggle ? <Visibility /> : <VisibilityOff />}
            </IconButton>

            {/* { eyeToggle */}
            {/*    ? */}
            {/*    <VisibilityIcon className={classes.eye} onClick={togglePasswordMask} /> */}
            {/*    : */}
            {/*    <VisibilityOffIcon className={classes.eye} onClick={togglePasswordMask} /> */}
            {/* } */}
          </InputAdornment>
        )
      }}
    />
  );

  const renderBirthdayField = ({ input, label, name, value, meta: { touched, error }, ...custom }) => (
    <TextField
      error={!!(touched && error)}
      name={name}
      type="number"
      variant="outlined"
      className={`${classes.inputBirthDay} ${classes.input}`}
      // className={classes.inputBirthDay}
      {...custom}
      {...input}
      helperText={touched && error || (
        <FormHelperText className={classes.helperBirth} component="span">
          {label}
        </FormHelperText>
      )}
    />
  );

  // const renderSelectField = ({ input, label, value, meta: { touched, error }, children, ...custom }) => (
  //     <TextField
  //         select
  //         variant="outlined"
  //         fullWidth
  //         label={(<FormLabel className={classes.labelText}>{selectCountry}</FormLabel>)}
  //         value={value}
  //         {...input}
  //         onChange={(event, index, value) => {
  //           input.onChange(event.target.value);
  //           setSelectCountry(event.target.value);
  //         }}
  //         children={children}
  //         {...custom}
  //     >
  //     </TextField>
  // );

  return (
    <Grid item xs={12} sm={10} md={5} >
      <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
          Please enter the following information:
      </Typography>

      <Field name="gender" component={renderRadioGroup} >
        <FormControlLabel
          className={classes.root}
          value="Mr"
          label="Mr"
          name="gender"
          control={<Radio className={classes.radioLabel} />}
        />
        <FormControlLabel
          className={classes.root}
          value="Mrs"
          label="Mrs"
          name="gender"
          control={<Radio className={classes.radioLabel} />}
        />
      </Field>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field name="firstName" component={renderTextField} label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name="lastName" component={renderTextField} label="Last Name" />
        </Grid>
      </Grid>

      <Box mb={1} mt={2}>
        <Field name="login" component={renderTextField} label="Login" type="text" />
      </Box>

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
      </FormControl>

      <Grid item>
        <Box mb={2}>
          <Field name="birthdayDay" component={renderBirthdayField} label="DD" value="birthdayDay" />
          <Field name="birthdayMonth" component={renderBirthdayField} label="MM" value="birthdayMonth" />
          <Field name="birthdayYear" component={renderBirthdayField} label="YYYY" value="birthdayYear" />
        </Box>
      </Grid>

      <Box mb={2}>
        <Field name="email" component={renderTextField} label="Email Address" type="email" />
      </Box>
      <Box mb={2}>
        <Field name="password" component={renderPasswordField} label="Password" type="password" />
      </Box>
      <Box mb={2}>
        <Field name="telephone" component={renderTextField} label="Phone number" type="tel" />
      </Box>

      {/* <Field name="country" component={renderSelectField} label={selectCountry}> */}
      {/*  <MenuItem value='Austria'>Austria</MenuItem> */}
      {/*  <MenuItem value='Germany'>Germany</MenuItem> */}
      {/* </Field> */}

    </Grid>
  )
}

export default SignUpForm;
// import React from 'react';
// import { Field } from 'redux-form';
//
// import {
//   Backdrop,
//   Fade,
//   FormControl,
//   FormControlLabel,
//   FormHelperText,
//   FormLabel,
//   Grid,
//   InputAdornment,
//   MenuItem,
//   Modal,
//   Radio,
//   RadioGroup,
//   TextField,
//   Typography,
//   Box
// } from '@material-ui/core';
//
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import CloseIcon from '@material-ui/icons/Close';
// import useStyles from './_sign-up-form';
//
// const SignUpForm = () => {
//   const [openInfo, setOpenInfo] = React.useState(false);
//   const [selectCountry, setSelectCountry] = React.useState('Austria');
//
//   const handleOpenInfo = () => {
//     setOpenInfo(true);
//   };
//   const handleCloseInfo = () => {
//     setOpenInfo(false);
//   };
//
//   const classes = useStyles();
//
//   const renderRadioGroup = ({ input, name, ...rest }) => (
//       <RadioGroup {...input} {...rest}
//           value={input.value}
//           aria-label="gender"
//           defaultValue={input.checked}
//           className={classes.radioGender}
//           name={name}
//           onChange={(event, value) => input.onChange(value)}
//       />
//   );
//
//   const renderTextField = ({ input, label, name, value, type, meta: { touched, error }, ...custom }) => (
//       <TextField
//           type={type}
//           name={name}
//           variant="outlined"
//           fullWidth
//           id={name}
//           error={!!(touched && error)}
//           helperText={touched && error}
//           {...input}
//           {...custom}
//           className={classes.root}
//           label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
//       />
//   );
//   const renderBirthdayField = ({ input, label, name, value, meta: { touched, error }, ...custom }) => (
//       <TextField
//           error={!!(touched && error)}
//           name={name}
//           type="number"
//           variant="outlined"
//           className={classes.inputBirthDay}
//           {...custom}
//           {...input}
//           helperText={ touched && error ||
//               <FormHelperText className={classes.helperBirth} component="span">
//                 {label}
//               </FormHelperText>
//           }
//       />
//   );
//
//   const renderSelectField = ({ input, label, value, meta: { touched, error }, children, ...custom }) => (
//       <TextField
//           select
//           variant="outlined"
//           fullWidth
//           label={(<FormLabel className={classes.labelText}>{selectCountry}</FormLabel>)}
//           value={value}
//           {...input}
//           onChange={(event, index, value) => {
//             input.onChange(event.target.value);
//             setSelectCountry(event.target.value);
//           }}
//           children={children}
//           {...custom}
//       >
//       </TextField>
//   );
//
//   return (
//       <Grid item xs={12} sm={10} md={5} >
//         <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
//           Please enter the following information:
//         </Typography>
//
//         <Field name="gender" component={renderRadioGroup} >
//           <FormControlLabel className={classes.root} value="Mr" label="Mr" name="gender"
//               control={<Radio className={classes.radioLabel} />}
//           />
//           <FormControlLabel className={classes.root} value="Mrs" label="Mrs" name="gender"
//               control={<Radio className={classes.radioLabel} />}
//           />
//         </Field>
//
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <Field name="firstName" component={renderTextField} label="First Name" />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Field name="lastName" component={renderTextField} label="Last Name" />
//           </Grid>
//         </Grid>
//
//         <Box mb={1} mt={2}>
//           <Field name="login" component={renderTextField} label="Login" type="text" />
//         </Box>
//
//
//         <FormControl>
//           <InputAdornment htmlFor="birthdayDay" className={classes.labelBirthday}>
//             Do you fancy a birthday surprise?
//             <InfoOutlinedIcon
//                 fontSize="small"
//                 className={classes.infoIcon}
//                 type="button"
//                 onClick={handleOpenInfo}
//             />
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modalInfoIcon}
//                 open={openInfo}
//                 onClose={handleCloseInfo}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                   timeout: 500,
//                 }}
//             >
//               <Fade in={openInfo}>
//                 <div className={classes.paperInfoIcon}>
//                   <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
//                     Birthday gift
//                     <CloseIcon
//                         className={classes.modalInfoClose}
//                         color="action"
//                         onClick={handleCloseInfo}
//                     />
//                   </h2>
//                   <p id="transition-modal-description" className={classes.modalInfoText}>
//                     Let us surprise you – with a WMF gift on your birthday. Let us know
//                     your date of birth and you will receive an e-mail every year
//                     containing a birthday voucher, which you can then redeem in the
//                     online shop or in one of our stores.
//                   </p>
//                 </div>
//               </Fade>
//             </Modal>
//           </InputAdornment>
//         </FormControl>
//
//         <Grid item>
//           <Box mb={2}>
//             <Field name="birthdayDay" component={renderBirthdayField} label="DD" value="birthdayDay" />
//             <Field name="birthdayMonth" component={renderBirthdayField} label="MM" value="birthdayMonth" />
//             <Field name="birthdayYear" component={renderBirthdayField} label="YYYY" value="birthdayYear" />
//           </Box>
//         </Grid>
//
//         <Box mb={2}>
//           <Field name="email" component={renderTextField} label="Email Address" type="email" />
//         </Box>
//         <Box mb={2}>
//           <Field name="password" component={renderTextField} label="Password" type="password" />
//         </Box>
//         <Box mb={2}>
//           <Field name="telephone" component={renderTextField} label="Phone number" type="tel" />
//         </Box>
//
//         {/*<Field name="country" component={renderSelectField} label={selectCountry}>*/}
//         {/*  <MenuItem value='Austria'>Austria</MenuItem>*/}
//         {/*  <MenuItem value='Germany'>Germany</MenuItem>*/}
//         {/*</Field>*/}
//
//       </Grid>
//   )
// }
//
// export default SignUpForm;
