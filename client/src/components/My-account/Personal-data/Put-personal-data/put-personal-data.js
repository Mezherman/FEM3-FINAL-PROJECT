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
import { Link, Redirect } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, connect } from 'react-redux';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import postNewUser from '../../../../services/postNewUser';
import validate from '../../validate';
import usePdstyles from '../_personal-data';
import RoutesName from '../../../../routes-list';
import putUserData from '../../../../services/putUserData';
// import usePdstyles from './_personal-data';
// import editCustomerData from '../../redux/actions/form'
import { fetchCustomerData } from '../../../../redux/actions/user';
import RenderTextField from './renderTextField'

function PutPersonalData (props) {
  const {
    gender,
    firstName,
    lastName,
    telephone,
    email,
    login,
    // handleSubmit,
    // editCustomerData,
    cancel
  } = props;
  // console.log(firstName);

  // useEffect(() => {
  //   return editCustomerData({ firstName, lastName, telephone, email, login })
  // }, []);

  // console.log('USER NAME =>', firstName);

  const classes = useStyles();
  const pdClasses = usePdstyles();

  // SignUP

  const [errorModal, setErrorModal] = useState(false);

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  // const submitEditedUser = (values) => {
  //   // event.preventDefault();
  //   // console.log(newUserData);
  //   putUserData({
  //     ...values
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       fetchCustomerData();
  //       cancel();
  //       // if (response.statusText === 'OK') {
  //       //
  //       // }
  //     })
  //     .catch((error) => {
  //       // setMessage(error.message);
  //       console.log(error.response.data);
  //     });
  // };

  // const renderTextField = ({
  //   label,
  //   name,
  //   type,
  //   defaultValue,
  //   meta: { touched, error },
  //   input: { value, onBlur, onChange, onFocus },
  //   input
  // }) => {
  //   console.log('INPUT', input);
  //   // console.log('INPUT', onFocus);
  //   // console.log('INPUT', onBlur);
  //   return (
  //   <TextField
  //     type={type}
  //     name={name}
  //     variant="outlined"
  //     fullWidth
  //     id={name}
  //     error={!!(touched && error)}
  //     helperText={touched && error}
  //     onBlur={(event) => onBlur(event)}
  //     onFocus={(event) => onFocus(event)}
  //     onChange={(event) => onChange(event.target.value)}
  //     defaultValue={value || defaultValue}
  //     className={classes.root}
  //     label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
  //   />
  // )};

  // const renderBirthdayField = ({
  //   input, label, name, value, meta: { touched, error }, ...custom
  // }) => (
  //   <TextField
  //     error={!!(touched && error)}
  //     name={name}
  //     type="number"
  //     variant="outlined"
  //     className={`${classes.inputBirthDay} ${classes.input}`}
  //     // className={classes.inputBirthDay}
  //     {...custom}
  //     {...input}
  //     helperText={(touched && error) || (
  //       <FormHelperText className={classes.helperBirth} component="span">
  //         {label}
  //       </FormHelperText>
  //     )}
  //   />
  // );

  return (
    <Container>
      <h2>Edit Form</h2>
      {/* <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitEditedUser)}> */}
      <Grid item xs={12}>
        <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
            Please enter the following information and check it:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field
              name="firstName"
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: firstName
                };
                return <RenderTextField {...newArgs} />
              }}
              label="First Name"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: lastName
                };
                return <RenderTextField {...newArgs} />
                // return renderTextField(newArgs)
              }}
              name="lastName"
              label="Last Name"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field
              name="login"
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: login
                };
                return <RenderTextField {...newArgs} />
                // return renderTextField(newArgs)
              }}
              label="Login"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="email"
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: email
                };
                return <RenderTextField {...newArgs} />
                // return renderTextField(newArgs)
              }}
              label="Email Address"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="telephone"
              component={(args) => {
                const newArgs = {
                  ...args,
                  defaultValue: telephone
                };
                return <RenderTextField {...newArgs} />
                // return renderTextField(newArgs)
              }}
              label="Phone number"
              type="tel"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/*  <Field name="birthdayDay" component={(args) => { */}
            {/*    const newArgs = { */}
            {/*      ...args, */}
            {/*      defaultValue: login */}
            {/*    }; */}
            {/*    return renderBirthdayField(newArgs) */}
            {/*  }} label="DD" value="birthdayDay" /> */}
            {/*  <Field name="birthdayMonth" component={renderBirthdayField} label="MM" value="birthdayMonth" /> */}
            {/*  <Field name="birthdayYear" component={renderBirthdayField} label="YYYY" value="birthdayYear" /> */}
          </Grid>
        </Grid>
      </Grid>
      <div className={pdClasses.buttonsContainer}>
        {/* <Link to={RoutesName.home}> */}
        <Button
          variant="contained"
          color="secondary"
          className={`${classes.submit} ${pdClasses.button}`}
          onClick={() => cancel()}
        >
            CANCEL
        </Button>
        {/* </Link> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={`${classes.submit} ${pdClasses.button}`}
        >
            SAVE
        </Button>
      </div>
      {/* </form> */}
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

// PutPersonalData = reduxForm({
//   form: 'edit',
//   validate,
// })(PutPersonalData);

// const mapStateToProps = (state) =>
//   ({
//     form: state.form
//   });
//
// const mapDispatchToProps = (dispatch) => ({
//   editCustomerData: (data) => dispatch(editCustomerData(data))
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(PutPersonalData)

export default PutPersonalData;
