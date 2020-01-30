import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PutPersonalData from './put-personal-data'
import usePdstyles from './_personal-data';

export default function PersonalData () {
  const pdClasses = usePdstyles();
  const {
    gender,
    firstName,
    lastName,
    telephone,
    email,
    login
  } = useSelector((state) => state.user.customer);
  const { loggedIn } = useSelector((state) => state.user);

  const [checked, setChecked] = useState([1]);
  const [editForm, setEditForm] = useState(false);
  const handleEditForm = () => setEditForm(true);
  const canсelEditForm = () => setEditForm(false);

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
      // userData: `${birthdayDay}.${birthdayMonth}.${birthdayYear}`
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
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={5}
      container
      direction="column"
      justify="center"
      // alignContent="center"
      // alignItems="center"
    >
      <Typography
        component="h1"
        variant="h5"
        align="center"
        className={pdClasses.header}
      >
        Personal Details
      </Typography>
      <List
        dense
        // className={classes.root}
      >
        {listItem.map(({ text, userData }, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={`${text}${index}`} button>
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
      <div className={pdClasses.linkContainer}>
        <Button
          // size="large"
          variant="contained"
          color="secondary"
          className={pdClasses.button}
          onClick={handleEditForm}
          // disableElevation
        >
          EDIT YOUR PERSONAL INFO
        </Button>
        <Button
          // size="large"
          variant="contained"
          color="secondary"
          className={pdClasses.button}
          // disableElevation
        >
          CHANGE PASSWORD
        </Button>
        <Button
          // size="large"
          variant="contained"
          color="secondary"
          className={pdClasses.button}
          // disableElevation
        >
          VIEW MY ORDERS
        </Button>
        <Button
          // size="large"
          variant="contained"
          color="secondary"
          className={pdClasses.button}
          // disableElevation
        >
          LOGOUT
        </Button>
      </div>
    </Grid>
  );
  // }
  // return ()
}

PersonalData.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
