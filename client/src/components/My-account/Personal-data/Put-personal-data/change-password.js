import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Backdrop,
  Button, Container, Fade, FormControl,
  FormControlLabel,
  FormHelperText,
  Modal,
  FormLabel,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import validate from '../../validate';
import usePdstyles from '../_personal-data';
import putUserData from '../../../../services/putUserData';
import { fetchCustomerData } from '../../../../redux/actions/user';
import putPassword from '../../../../services/putPassword'

function ChangePasswordForm (props) {
  const { cancel, handleSubmit } = props;
  const classes = useStyles();
  const pdClasses = usePdstyles();

  const [errorModal, setErrorModal] = useState(false);

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  const renderTextField = ({
    label,
    name,
    type,
    value,
    meta: { touched, error },
    // input: { onBlur, onChange }
    input,
  }) => (
    <TextField
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      {...input}
      // onBlur={onBlur}
      // onChange={(event) => onChange(event.target.value)}
      value={value}
      className={classes.root}
      label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
    />
  );

  const submitEditedUserPassword = (values) => {
    // event.preventDefault();
    // console.log(newUserData);
    console.log(values);
    putPassword(values)
      .then((response) => {
        console.log(response);
        fetchCustomerData();
        cancel();
        // if (response.statusText === 'OK') {
        //
        // }
      })
      .catch((error) => {
        // setMessage(error.message);
        console.log(error);
      });
  };

  return (
    <Container maxWidth="xl">
      <h2>Edit Form</h2>
      <form
        className={classes.form}
        noValidate={false}
        onSubmit={handleSubmit(submitEditedUserPassword)}
      >
        <Grid
          item
          xs={12}
          container
          justify="center"
          // direction="column"
        >
          <Grid item xs={12} sm={5} lg={4} className={pdClasses.passwordInputs}>
            <Field
              component={renderTextField}
              name="password"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item xs={12} sm={5} lg={4} className={pdClasses.passwordInputs}>
            <Field
              component={(args) => renderTextField(args)}
              name="newPassword"
              label="New Password"
              type="password"
            />
          </Grid>
        </Grid>
        <div className={pdClasses.buttonsContainer}>
          <Button
            variant="contained"
            color="secondary"
            className={`${classes.submit} ${pdClasses.button}`}
            onClick={cancel}
          >
            CANCEL
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={`${classes.submit} ${pdClasses.button}`}
          >
            SAVE
          </Button>
        </div>
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

ChangePasswordForm = reduxForm({
  form: 'changePassword',
  validate,
})(ChangePasswordForm);

export default ChangePasswordForm;
