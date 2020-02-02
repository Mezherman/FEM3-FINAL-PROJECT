import React, { useState, useCallback } from 'react';
import {
  Grid,
  Typography,
  Divider,
  ListItemSecondaryAction,
  ListItem,
  List,
  ListItemText,
  Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import PutPersonalData from './Put-personal-data/put-personal-data';
import useStyles from '../../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from './_personal-data';
import RoutesName from '../../../routes-list';
import ChangePasswordForm from './Put-personal-data/put-password';
import validate from './validate';
import putUserData from '../../../services/putUserData';
import { fetchCustomerData } from '../../../redux/actions/user';
import { invalidPassword, validPassword } from '../../../redux/actions/password-validation';
import { loadAllDataAfterLogin } from '../../../redux/actions/load-all-data';
import putPassword from '../../../services/putPassword';
import ModalResponse from '../../SignUp/Modal-response/modal-response';
import CancelSaveButtons from './Put-personal-data/cancel-save-buttons';
import ErrorMessage from '../../Modal-error-message/modal-error';

export default function PersonalData ({ handleSubmit }) {
  const pdClasses = usePdstyles();
  const classes = useStyles();

  const [errorModal, setErrorModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [passwordForm, setChangePasswordForm] = useState(false);

  const handleEditForm = () => setEditForm(true);
  const handleChangePassword = () => setChangePasswordForm(true);
  const cancelEditForm = () => setEditForm(false);
  const cancelPasswordForm = () => setChangePasswordForm(false);

  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
    cancelEditForm();
  };

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

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

  const {
    gender,
    firstName,
    lastName,
    telephone,
    email,
    login,
    birthdate
  } = useSelector((state) => state.user.customer);

  const submitEditedUser = (values) => {
    if (values.birthdayDay || values.birthdayMonth || values.birthdayYear) {
      putUserData({
        ...values,
        birthdate: `${values.birthdayDay}.${values.birthdayMonth}.${values.birthdayYear}`
      })
        .then((response) => {
          handlerCustomerData();
          // console.log(response);
          fetchCustomerData();
          cancelEditForm();
          setSuccessModal(true)
        })
        .catch((error) => {
          setErrorModal(true);
          // console.log(error);
        });
    } else {
      putUserData({
        ...values
      })
        .then((response) => {
          handlerCustomerData();
          // console.log(response);
          fetchCustomerData();
          cancelEditForm();
          setSuccessModal(true)
        })
        .catch((error) => {
          setErrorModal(true);
          // console.log(error);
        });
    }
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
        setErrorModal(true);
        // console.log(error);
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
          birthdate={birthdate}
        />
        <CancelSaveButtons cancel={cancelEditForm} />
        <ErrorMessage error={errorModal} classes={classes} handleClose={handleCloseSetErrorModal} />
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
        <ErrorMessage error={errorModal} classes={classes} handleClose={handleCloseSetErrorModal} />
      </form>
    )
  }

  const listItem = [
    {
      text: 'Gender:',
      userData: gender ?? null
    },
    {
      text: 'First Name:',
      userData: firstName ?? null
    },
    {
      text: 'Last Name:',
      userData: lastName ?? null
    },
    {
      text: 'Birthday:',
      userData: birthdate ?? null
    },
    {
      text: 'Phone number:',
      userData: telephone ?? null
    },
    {
      text: 'Email:',
      userData: email ?? null
    },
    {
      text: 'Login:',
      userData: login ?? null
    },
  ];

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
      <ModalResponse
        success={successModal}
        openModal={successModal}
        handleClose={handleCloseSuccessModal}
        inModal={successModal}
        classModal={pdClasses.paperInfoIcon}
        value="Your data was successfully changed"
        submitClass={pdClasses.submit}
      />
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
