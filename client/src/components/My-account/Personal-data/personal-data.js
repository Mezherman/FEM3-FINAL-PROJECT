import React, { useState } from 'react';
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
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PutPersonalData from './put-personal-data'
import usePdstyles from './_personal-data';
import RoutesName from '../../../routes-list';
import ChangePasswordForm from './change-password';

export default function PersonalData () {
  const pdClasses = usePdstyles();
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
  const canсelEditForm = () => setEditForm(false);
  const canсelPasswordForm = () => setChangePasswordForm(false);

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

  if (editForm) {
    return (
      <PutPersonalData
        cancel={canсelEditForm}
        gender={gender}
        firstName={firstName}
        lastName={lastName}
        telephone={telephone}
        email={email}
        login={login}
      />
    )
  }

  if (passwordForm) {
    return (
      <ChangePasswordForm cancel={canсelPasswordForm} />
    )
  }

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
        {/*<Typography*/}
        {/*  component="h1"*/}
        {/*  variant="h5"*/}
        {/*  align="center"*/}
        {/*  className={pdClasses.header}*/}
        {/*>*/}
        {/*</Typography>*/}
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
    </Container>
  );
  // }
  // return ()
}

PersonalData.propTypes = {
  // isLoggedIn: PropTypes.bool.isRequired
};