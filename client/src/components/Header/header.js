import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Box,
  Container,
  Divider, withStyles, makeStyles
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import StarsIcon from '@material-ui/icons/Stars'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import PersonIcon from '@material-ui/icons/Person'

import './header.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import useStyles from './header-style'

import Search from '../Search/search'
import Button from '@material-ui/core/Button';
import SignIn from '../Autorization-block/authorization';
import CustomizedMenus3 from '../Autorization-block/blockOnHover3';
// import HeaderNavbar from '../Header-navbar/header-navbar';




const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


// function CustomizedMenus3() {
//
//   const [anchorEl, setAnchorEl] = useState(null);
//
//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };
//
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//
//   return (
//     <div>
//       <Button
//         aria-controls="customized-menu"
//         aria-haspopup="true"
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//       >
//         Open Menu
//       </Button>
//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <SignIn />
//       </StyledMenu>
//     </div>
//   );
// }



// const useStylesLogin = makeStyles({
//   login: {
//     position: 'relative',
//   },
// }
// );




export  default function Header() {
  // const loginClass = useStylesLogin();

  const [anchorElLogin, setAnchorElLogin] = useState(null);

  const handleClick = event => {
    setAnchorElLogin(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElLogin(null);
  };


  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
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
    />
  )

  // const renderSearchInput = (
  //   <div className={classes.search}>
  //     <div className={classes.searchIcon}>
  //       <SearchIcon />
  //     </div>
  //     <InputBase
  //       placeholder='Search'
  //       classes={{
  //         root: classes.inputRoot,
  //         input: classes.inputInput
  //       }}
  //       inputProps={{ 'aria-label': 'search' }}
  //     />StyledMenu
  //   </div>
  // )

  const mobileMenuId = 'primary-search-account-menu-mobile';
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
      <MenuItem className="header-login" onClick={handleProfileMenuOpen}>
        <img src={`${process.env.PUBLIC_URL}/img/header/my_wmf.png`} alt="" />
        <ArrowForwardIosIcon fontSize="small" alt="" />
      </MenuItem>
    </Menu>
  )

  return (
    <Container disableGutters className={classes.grow}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar className={classes.justify}>
          <Box className={classes.boxLogo}>
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
            <Link to="/">
              <IconButton edge="start" className={classes.logoIcon}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/header/wmf-logo-30x35.svg`}
                  alt=""
                  className="header-logo"
                />
              </IconButton>
            </Link>
          </Box>

          <Box className={classes.mainBoxLogo}>
            <img
              src={`${process.env.PUBLIC_URL}/img/header/wmf-group-logo.png`}
              alt="headerMainLogo"
              className={classes.mainHeaderLogo}
            />
            <img
              src={`${process.env.PUBLIC_URL}/img/header/03_wmf-kompass_essen_167x167px.jpg`}
              alt="headerMainLogo"
              className={classes.mainHeaderLogoImg}
            />
          </Box>

          <Box className={classes.iconButtonBox}>
            <MenuItem className={classes.headerMenuItem}>
              <IconButton edge="end" className={classes.iconButton}>
                <StarsIcon fontSize="large" className={classes.iconsStyle} />
              </IconButton>
              <span className={classes.menuTitle}>Favorites</span>
            </MenuItem>

            <Divider orientation="vertical" className={classes.dividerStyle} />

            {/*<CustomizedMenus3 />*/}

            <MenuItem
              className={classes.headerMenuItem}
              // onMouseEnter={() => console.log("enter")}
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleClick}
              button={IconButton}
              component=''
            >
              <IconButton edge="end" className={classes.iconButton} href="#">
                <PersonIcon fontSize="large" className={classes.iconsStyle} />
              </IconButton>
              <span className={classes.menuTitle}>Login</span>

            </MenuItem>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorElLogin}
              keepMounted
              open={Boolean(anchorElLogin)}
              onClose={handleClose}
            >
              <SignIn />
            </StyledMenu>

            <Divider orientation="vertical" className={classes.dividerStyle} />

            <MenuItem className={classes.headerMenuItem}>
              <IconButton edge="end" aria-label="card" className={classes.iconButton}>
                <Badge badgeContent="0" color="error">
                  <ShoppingCartOutlinedIcon fontSize="large" className={classes.iconsStyle} />
                </Badge>
              </IconButton>
              <span className={classes.menuTitle}>Cart</span>
            </MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* {renderSearchInput} */}
      <Search />
      {/*<HeaderNavbar />*/}
    </Container>
  );
}




