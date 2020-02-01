import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Divider,
  ListItemSecondaryAction,
  ListItem,
  List,
  ListItemText,
  Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import PutPersonalData from './Put-personal-data/put-personal-data';
import useStyles from '../../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from './_personal-data';
import RoutesName from '../../../routes-list';
import ChangePasswordForm from './Put-personal-data/change-password';
import validate from '../validate';
import putUserData from '../../../services/putUserData';
import { fetchCustomerData } from '../../../redux/actions/user';
import putPassword from '../../../services/putPassword';
import ModalResponse from '../../SignUp/Modal-response/modal-response';

export default function PersonalData ({ handleSubmit }) {
  const [signUpModal, setSignUpModal] = useState(false);
  const handleCloseSignUpModal = () => {
    setSignUpModal(false);
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

    window.location.reload(); // window.location.reload()
  };

  const [checked, setChecked] = useState([1]);
  const [editForm, setEditForm] = useState(false);
  const [passwordForm, setChangePasswordForm] = useState(false);
  const handleEditForm = () => setEditForm(true);
  const handleChangePassword = () => setChangePasswordForm(true);
  const cancelEditForm = () => setEditForm(false);
  const cancelPasswordForm = () => setChangePasswordForm(false);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
        // if (response.statusText === 'OK') {
        //
        // }
      })
      .catch((error) => {
        // setMessage(error.message);
        console.log(error.response.data);
      });
  };

  const submitEditedUserPassword = (values) => {
    // event.preventDefault();
    // console.log(newUserData);
    // console.log(values);
    putPassword(values)
      .then((response) => {
        console.log(response);
        fetchCustomerData();
        setChangePasswordForm(false);
        if (response.data.message) {
          // cancelPasswordForm();
          setSignUpModal(true);

        }
      })
      .catch((error) => {
        // setMessage(error.message);
        console.log(error);
      });
  };

  if (editForm) {
    return (
      <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitEditedUser)}>
        <PutPersonalData
          cancel={cancelEditForm}
          gender={gender}
          firstName={firstName}
          lastName={lastName}
          telephone={telephone}
          email={email}
          login={login}
        />
      </form>
    )
  }

  if (passwordForm) {
    return (
      <form
        className={classes.form}
        noValidate={false}
        onSubmit={handleSubmit(submitEditedUserPassword)}
      >
        <ChangePasswordForm cancel={cancelPasswordForm} />
      </form>
    )
  }

  // if (signUpModal) {
  //   return (
  //     <ModalResponse
  //       openModal={signUpModal}
  //       handleClose={handleCloseSignUpModal}
  //       inModal={signUpModal}
  //       classModal={classes.paperInfoIcon}
  //       value="Your password was successfully changed"
  //       submitClass={classes.submit}
  //     />
  //   )
  // }

  return (
    <Container maxWidth="xl">
      <Grid
        item
        xs={12}
        // sm={10}
        // md={5}
        container
        direction="column"
        // justify="center"
        // alignContent="center"
        // alignItems="center"
      >
        {/* <Typography */}
        {/*  component="h1" */}
        {/*  variant="h5" */}
        {/*  align="center" */}
        {/*  className={pdClasses.header} */}
        {/* > */}
        {/* </Typography> */}
        <h1>Personal Details</h1>
        <Grid
          item
          xs={12}
          // sm={10}
          // md={5}
          container
          // direction="column"
          justify="center"
          // alignContent="center"
          // alignItems="center"
        >
          <Grid xs={12} sm={7}>
            <List
              dense
              // className={classes.root}
            >
              {listItem.map(({ text, userData }, index) => {
                const labelId = `checkbox-list-secondary-label-${index}`;
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <ListItem key={`${text}${index}`} className={pdClasses.userData}>
                    <ListItemText id={labelId} primary={text} />
                    <ListItemSecondaryAction>
                      <ListItem
                        key={`${userData}`}
                        // button
                        // className={classes.root}
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
      { signUpModal && (
        <ModalResponse
          openModal={signUpModal}
          handleClose={handleCloseSignUpModal}
          inModal={signUpModal}
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
  // }
  // return ()
}

PersonalData = reduxForm({
  form: 'put',
  validate,
})(PersonalData);

PersonalData.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
