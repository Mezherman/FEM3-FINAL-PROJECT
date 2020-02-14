import React, { useCallback } from 'react';
import { Divider, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import RoutesName from '../../../../routes-list';
import usePersonalDataStyles from '../_personal-data'
import logoutAction from '../../../../redux/actions/logout';

const MainCustomerPage = ({ handleEditForm, handleChangePassword }) => {
  const pdClasses = usePersonalDataStyles();

  const dispatch = useDispatch();

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

  const listItem = [
    { text: 'Gender:', userData: gender ?? null },
    { text: 'First Name:', userData: firstName ?? null },
    { text: 'Last Name:', userData: lastName ?? null },
    { text: 'Phone number:', userData: telephone ?? null },
    { text: 'Email:', userData: email ?? null },
    { text: 'Login:', userData: login ?? null },
  ];

  const customerData = () => (
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

  const profileMenu = () => (
    <Grid component="div" xs={12} sm={5} item >
      <div className={pdClasses.linkContainer}>
        <Divider component="div" orientation="vertical" light className={pdClasses.divider} />
        <Typography component="a" variant="subtitle1" className={pdClasses.button} onClick={handleEditForm}>
          Edit personal data
        </Typography>
        <Typography component="a" variant="subtitle1" className={pdClasses.button} onClick={handleChangePassword}>
          Change password
        </Typography>
        <Link to={RoutesName.myOrders} className={pdClasses.link}>
          <Typography component="div" variant="subtitle1" className={pdClasses.button}>
            View your orders
          </Typography>
        </Link>
        <Typography onClick={handleLogout} component="div" variant="subtitle1" className={`${pdClasses.button} ${pdClasses.logout}`}>
          Logout
        </Typography>
      </div>
    </Grid>
  );

  return (
    <Grid component="div" item xs={12} container direction="column">
      <h1>Personal Details</h1>
      <Grid component="div" item xs={12} container justify="center">
        {customerData()}
        {profileMenu()}
      </Grid>
    </Grid>
  )
};

export default MainCustomerPage;

MainCustomerPage.propTypes = {
  handleEditForm: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
};
