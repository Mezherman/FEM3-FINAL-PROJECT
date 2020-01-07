import React, { useState, useEffect } from 'react';
import { Paper, Box, ClickAwayListener } from '@material-ui/core';
import { Link } from 'react-router-dom';

import getCategories from '../../services/getCategories';

import './header-navbar.scss';
// import SignIn from './autorization';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from '@material-ui/core/styles';


export default function FormFromCatalog() {
  const [features, setFeatures] = useState({
    categoriesVisible: false,
    categoryListHeight: null
  });

  const { categoriesVisible } = features;



  const toggleCatalog = (event) => {
    if (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('catalog-list-item')) {
      return;
    }

    setFeatures(
      {
        ...features,
        categoriesVisible: !categoriesVisible,
        subCategoriesVisible: !categoriesVisible,
        chosenCategory: null
      }
    )
  };



  const onCategoryLeave = (event) => {
    // console.log('target = ', e.target);
    // console.log('relatedTarget = ', e.relatedTarget);
    if (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('catalog-list-item') ||
      event.relatedTarget.classList.contains('catalog-list')) {
      return;
    }

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null
    });
  };

  const onSubCategoryLeave = (event) => {
    if (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('catalog-list-item')) {
      return;
    }

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
    })
  };

  const handleClickAwayCatalog = (event) => {
    if (event.target.textContent.toLowerCase() === 'catalog') return;

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
      categoryListHeight: null
    })
  };





  return (
    <div className="header-menu-wrapper">
      <div onMouseEnter={() => {
        const height = document.querySelector('.catalog-wrapper').offsetHeight;
        setFeatures({ ...features, categoriesVisible: true, categoryListHeight: height })
      }}
        onMouseLeave={toggleCatalog}>
      <Link to="/products" className="header-menu-list-hyperlink">CATALOG</Link>
    </div>
      <ClickAwayListener onClickAway={handleClickAwayCatalog}>
        <Box
          className="catalog-wrapper"
          onMouseEnter={(event) => {
            const height = event.currentTarget.offsetHeight;
            setFeatures({
              ...features,
              categoryListHeight: height
            });
          }}
          onMouseLeave={toggleCatalog}
        >
          <Paper className="header-menu-catalog">
            {categoriesVisible &&
            (
              <SignIn onCategoryLeave={onCategoryLeave}/>
            )}
          </Paper>
        </Box>
      </ClickAwayListener>
    </div>
  )
}






const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignIn (props) {
  const {onCategoryLeave} = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline/>
      <div className={classes.paper} onMouseLeave={(event) => onCategoryLeave(event)}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

