import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import getUserData from '../../services/getUserData';
import usePdstyles from './_personal-data';
import RoutesName from '../../routes-list';

export default function PersonalData () {
  const pdClasses = usePdstyles();

  const [newUserData, setNewUserData] = useState({
    gender: 'male',
    firstName: '',
    lastName: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
    email: '',
    password: '',
    country: 'Austria',
    agreement: false,
    isAdmin: false,
  });

  useEffect(() => {
    getUserData()
      .then((loggedInCustomer) => {
        setNewUserData({
          ...newUserData,
          ...loggedInCustomer.data
        });
        /* Do something with loggedInCustomer */
      })
      .catch((err) => {
        console.log('ERROR', err);
        /* Do something with error */
      });
  }, []);

  console.log(newUserData);

  // const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

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

  const {
    gender,
    firstName,
    lastName,
    birthdayDay,
    birthdayMonth,
    birthdayYear,
    telephone,
    login,
    email,
    password,
    country,

  } = newUserData;

  const listItem = [
    {
      text: 'Gender:',
      userData: gender
    },
    {
      text: 'First Name:',
      userData: firstName
    },
    {
      text: 'Last Name:',
      userData: lastName
    },
    {
      text: 'Birthday:',
      userData: `${birthdayDay}.${birthdayMonth}.${birthdayYear}`
    },
    {
      text: 'Phone number:',
      userData: telephone
    },
    {
      text: 'Email:',
      userData: email
    },
    {
      text: 'Login:',
      userData: login
    },
    {
      text: 'Country:',
      userData: country
    },

  ];

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
                  key="1"
                  button
                  // className={classes.root}
                >
                  <ListItemText id="2" primary={userData} />
                </ListItem>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Link to={RoutesName.editPersonalData} className={pdClasses.link}>
        <Button
        // size="large"
          variant="contained"
          color="secondary"
          className={pdClasses.button}
        // disableElevation
        >
        EDIT YOUR DATA
        </Button>
      </Link>
    </Grid>
  );
}
