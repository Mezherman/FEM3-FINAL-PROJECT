import React, { useState, useEffect, useCallback } from 'react';
import {
  Grid,
  Typography,
  Divider,
  ListItemSecondaryAction,
  ListItem,
  List,
  ListItemText,
  Container, Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import PutPersonalData from './Put-personal-data/put-personal-data';
import useStyles from '../../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from './_personal-data';
import RoutesName from '../../../routes-list';
import ChangePasswordForm from './Put-personal-data/change-password';
import validate from './validate';
import putUserData from '../../../services/putUserData';
import { fetchCustomerData } from '../../../redux/actions/user';
import { invalidPassword, validPassword } from '../../../redux/actions/password-validation';
import putPassword from '../../../services/putPassword';
import ModalResponse from '../../SignUp/Modal-response/modal-response';
import CancelSaveButtons from './Put-personal-data/cancel-save-buttons';

export default function PersonalData ({ handleSubmit }) {
  const [successModal, setSuccessModal] = useState(false);
  const dispatch = useDispatch();

  const handlerInvalidPassword = useCallback(() => {
    dispatch(invalidPassword());
  }, []);

  const handlerValidPassword = useCallback(() => {
    dispatch(validPassword());
  }, []);

  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
    cancelEditForm();
  };
  const pdClasses = usePdstyles();
  const classes = useStyles();
  const {
    gender,
    firstName,
    lastName,
    telephone,
    email,
    login,
    birthdate
  } = useSelector((state) => state.user.customer);
  const { loggedIn } = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const [editForm, setEditForm] = useState(false);
  const [passwordForm, setChangePasswordForm] = useState(false);
  const handleEditForm = () => setEditForm(true);
  const handleChangePassword = () => setChangePasswordForm(true);
  const cancelEditForm = () => setEditForm(false);
  const cancelPasswordForm = () => setChangePasswordForm(false);
  // const [checked, setChecked] = useState([1]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];
  //
  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };

  const listItem = [
    {
      text: 'Gender:',
      userData: loggedIn ? gender : null
    },
    {
      text: 'First Name:',
      userData: loggedIn ? firstName : null
    },
    {
      text: 'Last Name:',
      userData: loggedIn ? lastName : null
    },
    {
      text: 'Birthday:',
      userData: loggedIn ? birthdate : null
    },
    {
      text: 'Phone number:',
      userData: loggedIn ? telephone : null
    },
    {
      text: 'Email:',
      userData: loggedIn ? email : null
    },
    {
      text: 'Login:',
      userData: loggedIn ? login : null
    },
  ];

  const submitEditedUser = (values) => {
    // event.preventDefault();
    // console.log(newUserData);
    putUserData({
      ...values
    })
      .then((response) => {
        console.log(response);
        fetchCustomerData();
        cancelEditForm();
      })
      .catch((error) => {
        // setMessage(error.message);
        console.log(error);
      });
  };

  const submitEditedUserPassword = (values) => {
    putPassword(values)
      .then((response) => {
        // console.log(response);
        fetchCustomerData();
        if (response.data.message) {
          setChangePasswordForm(false);
          setSuccessModal(true);
          handlerValidPassword()
        } else {
          handlerInvalidPassword()
        }
      })
      .catch((error) => {
        // setMessage(error.message);
        console.log(error);
      });
  };

  if (editForm) {
    return (
      <form
        className={classes.passwordForm}
        noValidate={false}
        onSubmit={handleSubmit(submitEditedUser)}
      >
        <PutPersonalData
          gender={gender}
          firstName={firstName}
          lastName={lastName}
          telephone={telephone}
          email={email}
          login={login}
        />
        <CancelSaveButtons cancel={cancelEditForm} />
      </form>
    )
  }

  if (passwordForm) {
    return (
      <form
        className={classes.passwordForm}
        noValidate={false}
        onSubmit={handleSubmit(submitEditedUserPassword)}
      >
        <ChangePasswordForm />
        <CancelSaveButtons cancel={cancelPasswordForm} />
      </form>
    )
  }

  return (
    <Container maxWidth="xl">
      <Grid
        item
        xs={12}
        container
        direction="column"
      >
        <h1>Personal Details</h1>
        <Grid
          item
          xs={12}
          container
          justify="center"
        >
          <Grid xs={12} sm={7}>
            <List
              dense
            >
              {listItem.map(({ text, userData }, index) => {
                const labelId = `checkbox-list-secondary-label-${index}`;
                return (
                  <ListItem key={text} className={pdClasses.userData}>
                    <ListItemText id={labelId} primary={text} />
                    <ListItemSecondaryAction>
                      <ListItem
                        key={userData}
                      >
                        <ListItemText id="2" primary={userData} />
                      </ListItem>
                    </ListItemSecondaryAction>
                    <Divider absolute />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={12} sm={5}>
            <div className={pdClasses.linkContainer}>
              <Divider orientation="vertical" light className={pdClasses.divider} />
              <Typography
                component="a"
                variant="subtitle1"
                className={pdClasses.button}
                onClick={handleEditForm}
              >
                Edit personal data
              </Typography>
              <Typography
                component="a"
                variant="subtitle1"
                className={pdClasses.button}
                onClick={handleChangePassword}
              >
                Change password
              </Typography>
              <Link to={RoutesName.myOrders} className={pdClasses.link}>
                <Typography
                  component="a"
                  variant="subtitle1"
                  className={pdClasses.button}
                >
                  View your orders
                </Typography>
              </Link>
              <Typography
                component="a"
                variant="subtitle1"
                className={`${pdClasses.button} ${pdClasses.logout}`}
                onClick={handleLogout}
              >
                Logout
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      { successModal && (
        <ModalResponse
          openModal={successModal}
          handleClose={handleCloseSuccessModal()}
          inModal={successModal}
          classModal={pdClasses.paperInfoIcon}
          value="Your password was successfully changed"
          submitClass={pdClasses.submit}
        />
      )}
      {/*{ errorModal && (*/}
      {/*  <ModalResponse*/}
      {/*    openModal={errorModal}*/}
      {/*    handleClose={handleCloseSetErrorModal}*/}
      {/*    inModal={errorModal}*/}
      {/*    classModal={usePdstyles.paperInfoError}*/}
      {/*    value='Something go wrong. Try again'*/}
      {/*    submitClass={usePdstyles.submit}*/}
      {/*  />*/}
      {/*)}*/}
    </Container>
  );
}

PersonalData = reduxForm({
  form: 'put',
  validate,
})(PersonalData);

PersonalData.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
