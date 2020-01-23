import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Divider,
  Button,
  Modal,
  Fade,
  Backdrop
} from '@material-ui/core';

import SignUpInfo from './SignUp-info/signUp-info';
import SignUpForm from './SignUp-form/signUp-form';
import SignUpFooter from './SignUp-footer/signUp-footer';
import validate from './validate';
import useStyles from './_sign-up';
import postNewUser from '../../services/postNewUser';


let SignUp = (props) => {
  const { handleSubmit } = props;
  const classes = useStyles();
  const [signUpModal, setSignUpModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleOpenSignUpModal = () => {
    setSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setSignUpModal(false);
    setRedirect(true);
  };
  const handleOpenSetErrorModal = () => {
    setErrorModal(true);
  };

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />
    }
  };

  const submitNewUser = (values) => {
    // console.log(values);
    postNewUser(values, handleOpenSignUpModal, handleOpenSetErrorModal);
    // axios
    //   .post('/customers', values)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.statusText === 'OK') {
    //       handleOpenSignUpModal();
    //     }
    //   })
    //   .catch((error) => {
    //     handleOpenSetErrorModal();
    //     console.log(error.response.data);
    //   });
  };

  return (
    <Container component="div" disableGutters>
      <CssBaseline />
      {redirect && renderRedirect()}
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          className={classes.title}
        >
          Your registration for the myWMF Customer Club
        </Typography>

        <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitNewUser)}>
          <Grid
            container
            spacing={3}
            direction="row-reverse"
            alignItems="center"
            alignContent="flex-end"
            justify="space-evenly"
          >
            <SignUpInfo />
            <Divider
              light
              orientation="vertical"
              className={classes.dividerSignUp}
            />
            <SignUpForm />
            <SignUpFooter />
          </Grid>
        </form>
        {/*<Button onClick={handleOpenSignUpModal}>Open registration modal</Button>*/}
        { signUpModal &&
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modalInfoIcon}
            open={signUpModal}
            onClose={handleCloseSignUpModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
        >
          <Fade in={signUpModal}>
            <div className={classes.paperInfoIcon}>
              <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
                Your account was successfully registered
              </h2>
              <Button
                  onClick={handleCloseSignUpModal}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                OK
              </Button>
            </div>
          </Fade>
        </Modal>
        }

        { errorModal &&
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
        }

      </div>
    </Container>
  );
};

SignUp = reduxForm({
  form: 'registration',
  validate,
})(SignUp);

export default SignUp;
