import React from 'react';
import { fade, makeStyles, styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import MoreIcon from '@material-ui/icons/MoreVert';

import './header.scss';
import { Box } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import Search from '../Search/search'
import HeaderNavbar from '../Header-navbar/header-navbar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  justify: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
    border: '1px solid #666666',
    opacity: '0.4'
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    right: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '.3'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchMore, setSearchMore] = React.useState(true);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handlerSearchMobile = () => {
    setSearchMore(!searchMore)
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileSearchId = 'primary-search--mobile'
  const renderSearchInput = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      elevation={0}
    >
      <MenuItem>
        Categories
        <ArrowForwardIosIcon fontSize="small" />
      </MenuItem>
      <MenuItem className="header-login" onClick={handleProfileMenuOpen} aria-haspopup="true">
        <img src="./img/header/my_wmf.png" />
        Login
        <ArrowForwardIosIcon fontSize="small" />
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit" elevation="0">
        <Toolbar className={classes.justify}>
          <Box>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <IconButton edge="start" href="#">
              <img
                src="./img/header/wmf-logo-30x35.svg"
                className="header-icon header-icon-logo"
              />
            </IconButton>
          </Box>

          <Box>
            <IconButton
              aria-label="show more"
              aria-controls={mobileSearchId}
              aria-haspopup="true"
              onClick={handlerSearchMobile}
            >
              <img src="./img/header/search_black.svg" className="header-icon" alt="search-icon" />
            </IconButton>
            <IconButton><PersonIcon fontSize="large" /></IconButton>
            <IconButton edge="end" aria-label="card">
              <Badge badgeContent="0" color="error">
                <img
                  src="./img/header/basket_black.svg"
                  className="header-icon"
                  alt="basket-icon"
                />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderSearchInput}
      <Search />
      <HeaderNavbar />
    </div>
  );
}
// import React from 'react';
// import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   }
// }));
//
// function Header () {
//   const classes = useStyles()
//
//   return (
//     <div className={classes.root}>
//       <AppBar position='static' color='inherit' elevation={0}>
//         <Toolbar>
//           <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
//             <img src='./img/header/wmf-logo-30x35.svg' alt='logo' />
//           </IconButton>
//
//           <Typography>
//             <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
//               <img src='./img/header/my_wmf.png' alt='logo' />
//             </IconButton>
//
//             <Button color='inherit'>Login</Button>
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
//
// export default Header;
