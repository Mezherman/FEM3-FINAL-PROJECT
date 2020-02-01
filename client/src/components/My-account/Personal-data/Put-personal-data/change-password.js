import React, { useState } from 'react';
import { Field } from 'redux-form';
import { useSelector } from 'react-redux';
import {
  Backdrop,
  Button,
  Container,
  Fade,
  Modal,
  Grid,
} from '@material-ui/core';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from '../_personal-data';
import renderPasswordField from '../../../Render-password-field/render-password-field';

function ChangePasswordForm () {
  const { invalid } = useSelector((state) => state.passwordForm);
  const classes = useStyles();
  const pdClasses = usePdstyles();

  const [errorModal, setErrorModal] = useState(false);

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

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

export default ChangePasswordForm;
