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
  Divider,
  // withStyles,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import StarsIcon from '@material-ui/icons/Stars'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import PersonIcon from '@material-ui/icons/Person'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RoutesName from '../../routes-list';

import './header.scss';
import useStyles from './_header';

import Search from '../Search/search'
import HeaderNavbar from '../Header-navbar/header-navbar';
import PreviewBlock from '../Preview-block/preview-cart';
import LoginModal from '../Login-modal-window/login-modal-window';
import SearchIcon from '@material-ui/icons/Search';

// const StyledMenu = withStyles({
//   // paper: {
//   //   border: '1px solid #d3d4d5',
//   // },
// })((props) => (
//   <Menu
//     elevation={0}
//     backgroundcolor="transparent"
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     /* eslint-disable-next-line react/jsx-props-no-spreading */
//     {...props}
//   />
// ));

function Header() {
  const [modalIsVisible, setModalVisibility] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const onSuccessLogin = () => {
  //   setIsLoggedIn(true)
  // };
  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleClick = () => {
    setModalVisibility(true);
  };

  const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  // const [anchorElLogin, setAnchorElLogin] = useState(null);

  // const handleClose = () => {
  //   setAnchorElLogin(null);
  // };

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const [prevBlockIsVisible, setPrevBlockIsVisible] = useState(false);
  // const [sideBar, openSideBar] = useState(false)

  // const toggleDrawer = (open) => {
  //     openSideBar(true )
  // };
  // console.log(sideBar);
  const handleChange = () => {
    setPrevBlockIsVisible((prev) => !prev);
  };

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
    console.log(event);
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
        <ArrowForwardIosIcon fontSize="small" alt="arrow_icon" />
      </MenuItem>
    </Menu>
  )

  return (
    <Box >
      <CssBaseline />
      <Box className={classes.delivery}>
        <Container maxWidth="xl" >
          <h3 className={classes.deliveryTitle}>Free shipping on all orders over &#8364;100</h3>
        </Container>
      </Box>
      <Container maxWidth="xl" disableGutters className={classes.grow}>
        <AppBar position="sticky" color="inherit" elevation={0}>
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
              <Link to={RoutesName.home}>
                <IconButton edge="start" className={classes.logoIcon}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/header/wmf-logo-30x35.svg`}
                    alt="logo"
                    className="header-logo"
                  />
                </IconButton>
              </Link>
            </Box>

            {/* <Box className={classes.mainBoxLogo}> */}
            {/*  <img */}
            {/*    src={`${process.env.PUBLIC_URL}/img/header/wmf-group-logo.png`} */}
            {/*    alt="headerMainLogo" */}
            {/*    className={classes.mainHeaderLogo} */}
            {/*  /> */}
            {/*  <img */}
            {/*    src={`${process.env.PUBLIC_URL}/img/header/03_wmf-kompass_essen_167x167px.jpg`} */}
            {/*    alt="headerMainLogo" */}
            {/*    className={classes.mainHeaderLogoImg} */}
            {/*  /> */}
            {/* </Box> */}

            <HeaderNavbar />

            <Box className={classes.iconButtonBox}>
              <MenuItem className={classes.headerMenuItem}>
                <IconButton edge="end" className={classes.iconButton}>
                  <SearchIcon fontSize="large" className={classes.iconsStyle} />
                </IconButton>
                <span className={classes.menuTitle}>Search</span>
              </MenuItem>
              <Divider orientation="vertical" className={classes.dividerStyle} />

              <MenuItem className={classes.headerMenuItem}>
                <Link to={RoutesName.favorites}>
                  <IconButton edge="end" className={classes.iconButton}>
                    <FavoriteBorderIcon fontSize="large" className={classes.iconsStyle} />
                  </IconButton>
                </Link>
                <span className={classes.menuTitle}>Favorites</span>
              </MenuItem>
              <Divider orientation="vertical" className={classes.dividerStyle} />
              <MenuItem
                className={classes.headerMenuItem}
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
                component=""
                href={RoutesName.signIn}
              >
                <IconButton edge="end" className={classes.iconButton}>
                  <PersonIcon fontSize="large" className={classes.iconsStyle} />
                </IconButton>
                <span className={classes.menuTitle}>Login</span>
              </MenuItem>
              <LoginModal
                // isLoggedIn={loggedIn}
                // onSuccessLogin={onSuccessLogin}
                onModalClose={closeModal}
                open={modalIsVisible}
              />
              {/* <StyledMenu */}
              {/*  className="customized-menu" */}
              {/*  id="customized-menu" */}
              {/*  anchorEl={anchorElLogin} */}
              {/*  keepMounted */}
              {/*  open={Boolean(anchorElLogin)} */}
              {/*  onClose={handleClose} */}
              {/* > */}
              {/*  <MenuItem style={{ display: 'none' }} /> */}
              {/*  <SignIn onClose={handleClose} /> */}
              {/* </StyledMenu> */}
              <Divider orientation="vertical" className={classes.dividerStyle} />
              <MenuItem className={classes.headerMenuItem} onClick={handleChange}>
                <IconButton edge="end" aria-label="card" className={classes.iconButton}>
                  <Badge badgeContent={totalCartQuantity.toString()} color="error">
                    <ShoppingCartOutlinedIcon fontSize="large" className={classes.iconsStyle} />
                  </Badge>
                </IconButton>
                <span className={classes.menuTitle}>Cart</span>
              </MenuItem>
            </Box>
          </Toolbar>
        </AppBar>

        {prevBlockIsVisible ? (
          <PreviewBlock
            checked={prevBlockIsVisible}
            onClose={handleChange}
          />
        ) : null}
        {renderMobileMenu}
        {renderMenu}
        {/* <Search /> */}
      </Container>
      <Divider />
    </Box>
  );
}

export default Header;
