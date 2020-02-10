import React, { useState, useCallback, useEffect } from 'react';
import {
  Grid,
  Typography,
  Divider,
  ListItem,
  List,
  ListItemText,
  Container,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import PutPersonalData from './Put-personal-data/put-personal-data';
import useStyles from '../../SignUp/Sign-up-form/_sign-up-form';
import usePersonalDataStyles from './_personal-data';
import RoutesName from '../../../routes-list';
import ChangePasswordForm from './Put-personal-data/put-password';
import validate from './validate';
import putUserData from '../../../services/put-user-data';
import { fetchCustomerData } from '../../../redux/actions/user';
import { invalidPassword, validPassword } from '../../../redux/actions/password-validation';
import { newNotification } from '../../../redux/actions/notification';
import { loadAllDataAfterLogin } from '../../../redux/actions/load-all-data';
import logoutAction from '../../../redux/actions/logout';
import putPassword from '../../../services/put-password';
import CancelSaveButtons from './Put-personal-data/cancel-save-buttons';

export default function PersonalData ({ handleSubmit }) {
  const pdClasses = usePersonalDataStyles();
  const classes = useStyles();

  const [personalDataForm, setEditForm] = useState(false);
  const [passwordForm, setChangePasswordForm] = useState(false);

  const handleEditForm = () => setEditForm(true);
  const handleChangePassword = () => setChangePasswordForm(true);
  const cancelEditForm = () => setEditForm(false);
  const cancelPasswordForm = () => setChangePasswordForm(false);

  const dispatch = useDispatch();

  const handlerInvalidPassword = useCallback(() => {
    dispatch(invalidPassword());
  }, [dispatch]);

  const handlerValidPassword = useCallback(() => {
    dispatch(validPassword());
  }, [dispatch]);

  const handlerCustomerData = useCallback(() => {
    dispatch(loadAllDataAfterLogin());
  }, [dispatch]);

  const handlerNotification = useCallback((type, message) => {
    dispatch(newNotification(type, message));
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  }, [dispatch]);

  const {
    gender,
    firstName,
    lastName,
    telephone,
    email,
    login,
  } = useSelector((state) => state.user.customer);
  const { logout } = useSelector((state) => state.logout);

  const listItem = [
    { text: 'Gender:', userData: gender ?? null },
    { text: 'First Name:', userData: firstName ?? null },
    { text: 'Last Name:', userData: lastName ?? null },
    { text: 'Phone number:', userData: telephone ?? null },
    { text: 'Email:', userData: email ?? null },
    { text: 'Login:', userData: login ?? null },
  ];

  const submitEditedUser = (values) => {
    putUserData({
      ...values
    })
      .then(() => {
        handlerNotification('success', 'Personal data was successfully changed');
        handlerCustomerData();
        fetchCustomerData();
        cancelEditForm();
      })
      .catch(() => {
        handlerNotification('error', 'Something go wrong. Try it later, please');
      });
  };

  const submitEditedUserPassword = (values) => {
    putPassword({ password: values.password, newPassword: values.newPassword })
      .then((response) => {
        fetchCustomerData();
        if (response.data.message) {
          handlerNotification('success', 'Password was successfully changed');
          setChangePasswordForm(false);
          handlerValidPassword()
        } else {
          handlerInvalidPassword()
        }
      })
      .catch(() => {
        handlerNotification('error', 'Something go wrong. Try it later, please');
      });
  };

  const CustomerData = () => (
    <Grid component="div" xs={12} sm={7} item>
      <List component="div" dense>
        {listItem.map(({ text, userData }, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            <ListItem component="div" key={text} className={pdClasses.userData}>
              <ListItemText id={labelId} primary={text} />
              <div>
                <ListItem component="div" key={userData}>
                  <ListItemText id="2" primary={userData} />
                </ListItem>
              </div>
              <Divider component="div" absolute />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );

  PersonalData.propTypes = {
    handleSubmit: PropTypes.func
  };

  // if (passwordForm) {
  //   PersonalData.defaultProps = {
  //     handleSubmit: () => submitEditedUserPassword
  //   };
  // }
  // if (personalDataForm) {
  //   PersonalData.defaultProps = {
  //     handleSubmit: () => submitEditedUser()
  //   };
  // }
  // if (!personalDataForm && !passwordForm) {
  //   PersonalData.defaultProps = {
  //     handleSubmit: () => {}
  //   };
  // }

  const MainCustomerPage = () => (
    <Grid
      component="div"
      item
      xs={12}
      container
      direction="column"
    >
      <h1>Personal Details</h1>
      <Grid
        component="div"
        item
        xs={12}
        container
        justify="center"
      >
        <CustomerData />

        <Grid component="div" xs={12} sm={5} item>
          <div className={pdClasses.linkContainer}>
            <Divider component="div" orientation="vertical" light className={pdClasses.divider} />
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
                component="div"
                variant="subtitle1"
                className={pdClasses.button}
              >
                View your orders
              </Typography>
            </Link>
            <Link to={RoutesName.home} onClick={handleLogout}>
              <Typography
                component="div"
                variant="subtitle1"
                className={`${pdClasses.button} ${pdClasses.logout}`}
              >
                Logout
              </Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );

  if (passwordForm) {
    return (
      <form
        className={`${classes.passwordForm} ${pdClasses.container}`}
        noValidate={false}
        onSubmit={handleSubmit(submitEditedUserPassword)}
      >
        <ChangePasswordForm cancel={cancelPasswordForm} />
      </form>
    )
  }

  if (personalDataForm) {
    return (
      <form
        className={`${classes.passwordForm} ${pdClasses.container}`}
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

  return (
    <Container maxWidth="xl" className={pdClasses.container}>
      {!passwordForm && !personalDataForm && <MainCustomerPage />}
      {logout && <Redirect to={RoutesName.home} />}
    </Container>
  );
}

PersonalData = reduxForm({
  form: 'put',
  validate,
})(PersonalData);

// PersonalData.propTypes = {
//   handleSubmit: PropTypes.func
// };
