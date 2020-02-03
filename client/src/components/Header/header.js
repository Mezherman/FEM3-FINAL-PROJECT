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

import Collapse from '@material-ui/core/Collapse';

import { useTheme } from '@material-ui/core/styles';
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

import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import LoginModal from '../Login-modal-window/login-modal-window';
import PreviewBlock from '../Preview-block/preview-cart';
import HeaderNavbar from '../Header-navbar/header-navbar';
import Search from '../Search/search'
import useStyles from './_header';

// import store from '../../index';
// import connect from 'react-redux'

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

  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleClick = () => {
    setModalVisibility(true);
  };

  const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const { loggedIn } = useSelector((state) => state.user);
  // console.log('ISLOGGEDIN AAAAAAAAA', loggedIn);
  // const [anchorElLogin, setAnchorElLogin] = useState(null);

  // const handleClose = () => {
  //   setAnchorElLogin(null);
  // };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [prevBlockIsVisible, setPrevBlockIsVisible] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [searchIsShown, setSearchIsShow] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  // console.log('Mobile', isMobile);
  // console.log('Tablet', isTablet);
  // console.log('Desctop', isDesktop);

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
    // console.log(event);
  }
  // toggle side navbar
  const toggleDrawer = (open) => {
    setDrawer(open)
  };

  const toggleSearch = () => {
    setSearchIsShow((prev) => !prev)
  };

  const handleSearchAway = () => {
    setSearchIsShow(false)
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

  // MY-ACCOUNT-ICON

  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.reload(); // window.location.reload()
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <CssBaseline />
      <Box className={classes.delivery}>
        <Container maxWidth="xl">
          <p className={classes.deliveryTitle}>Free shipping on all orders over &#8364;100</p>
        </Container>
      </Box>
      <AppBar position="sticky" top="0" color="inherit" elevation={0}>
        <Container maxWidth="xl" disableGutters className={classes.grow}>
          <Toolbar className={classes.justify}>
            <Box className={classes.boxLogo}>

              <IconButton
                onClick={() => toggleDrawer(true)}
                edge="start"
                className={classes.menuButton}
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
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

            <HeaderNavbar
              drawer={drawer}
              toggleDrawer={toggleDrawer}
            />


            {/* {isMobile && searchIsShown && */}
            {/* <Search />} */}
            {/* {isTablet && <Search searchIsShown />}*/}
            {/* { <div style={{backgroundColor: 'red'}}><Search /></div>} */}
            <ClickAwayListener onClickAway={handleSearchAway}>
              <div>
                <Box className={classes.iconButtonBox}>
                  {/*{isMobile && <Search searchIsShown={searchIsShown} />}*/}
                  {isDesktop && <Search searchIsShown={searchIsShown}/> }
                  <MenuItem
                    className={classes.headerMenuItem}
                  >

                    <IconButton
                      onClick={toggleSearch}
                      edge="end"
                      className={classes.iconButton}
                    >
                      <SearchIcon fontSize="large" className={classes.iconsStyle} />
                      <span className={classes.menuTitle}>Search</span>
                    </IconButton>

                  </MenuItem>
                  <Divider orientation="vertical" className={classes.dividerStyle} />

                  <MenuItem className={classes.headerMenuItem}>
                    <Link to={RoutesName.favorites}>
                      <IconButton edge="end" className={classes.iconButton}>
                        <FavoriteBorderIcon fontSize="large" className={classes.iconsStyle} />
                      </IconButton>
                      <span className={classes.menuTitle}>Favorites</span>
                    </Link>
                  </MenuItem>
                  <Divider orientation="vertical" className={classes.dividerStyle} />

                  <MenuItem
                    className={classes.headerMenuItem}
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    onClick={loggedIn ? handleToggle : handleClick}
                    component=""
                    href={RoutesName.signIn}
                    ref={loggedIn ? anchorRef : null}
                  >
                    <IconButton edge="end" className={classes.iconButton}>
                      <PersonIcon fontSize="large" className={loggedIn ? classes.iconLoggedIn : classes.iconsStyle} />
                    </IconButton>
                    <span className={classes.menuTitle}>{loggedIn ? 'My Account' : 'Login'}</span>
                  </MenuItem>
                  {loggedIn
                    ? (
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                  <Link to={RoutesName.personalData} className={classes.menuLink}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                  </Link>
                                  <Link to={RoutesName.myOrders} className={classes.menuLink}>
                                    <MenuItem onClick={handleClose}>My orders</MenuItem>
                                  </Link>
                                  <MenuItem onClick={handleLogout} className={classes.menuLink}>
                                Logout
                                  </MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    )
                    : (
                      <LoginModal
                        // isLoggedIn={loggedIn}
                        // onSuccessLogin={onSuccessLogin}
                        onModalClose={closeModal}
                        open={modalIsVisible}
                      />
                    )}
                  {/* <LoginModal */}
                  {/*  // isLoggedIn={loggedIn} */}
                  {/*  // onSuccessLogin={onSuccessLogin} */}
                  {/*  onModalClose={closeModal} */}
                  {/*  open={modalIsVisible} */}
                  {/* /> */}
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
                  <MenuItem className={classes.headerMenuItem}>
                    <Link to={RoutesName.cart}>
                      <IconButton edge="end" aria-label="card" className={classes.iconButton}>
                        <Badge badgeContent={totalCartQuantity.toString()} color="error">
                          {/* <div> */}
                          {/* <MenuItem */}
                          {/*  className={classes.headerMenuItem} */}
                          {/*  aria-controls="customized-menu" */}
                          {/*  aria-haspopup="true" */}
                          {/*  variant="contained" */}
                          {/*  // onClick={handleClick} */}
                          {/*  component="" */}
                          {/*  ref={anchorRef} */}
                          {/*  // aria-controls={open ? 'menu-list-grow' : undefined} */}
                          {/*  // aria-haspopup="true" */}
                          {/*  onClick={handleToggle} */}
                          {/* // href={RoutesName.signIn} */}
                          {/* > */}
                          {/*  <IconButton edge="end" className={classes.iconButton}> */}
                          {/*    <PersonIcon fontSize="large" className={classes.iconsStyle} /> */}
                          {/*  </IconButton> */}
                          {/*  <span className={classes.menuTitle}>MyACC</span> */}
                          {/* </MenuItem> */}
                          {/* <Popper */}
                          {/*  open={open} */}
                          {/*  anchorEl={anchorRef.current} */}
                          {/*  role={undefined} */}
                          {/*  transition */}
                          {/*  disablePortal */}
                          {/* > */}
                          {/*  {({ TransitionProps, placement }) => ( */}
                          {/*    <Grow */}
                          {/*      {...TransitionProps} */}
                          {/*      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }} */}
                          {/*    > */}
                          {/*      <Paper> */}
                          {/*        <ClickAwayListener onClickAway={handleClose}> */}
                          {/*          <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}> */}
                          {/*            <Link to={RoutesName.personalData}> */}
                          {/*              <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                          {/*            </Link> */}
                          {/*            <Link to={RoutesName.myOrders}> */}
                          {/*              <MenuItem onClick={handleClose}>My orders</MenuItem> */}
                          {/*            </Link> */}
                          {/*            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                          {/*          </MenuList> */}
                          {/*        </ClickAwayListener> */}
                          {/*      </Paper> */}
                          {/*    </Grow> */}
                          {/*  )} */}
                          {/* </Popper> */}
                          {/* </div> */}
                          <ShoppingCartOutlinedIcon fontSize="large" className={classes.iconsStyle} />
                        </Badge>
                      </IconButton>
                    </Link>
                    <span className={classes.menuTitle}>Cart</span>
                  </MenuItem>
                </Box>
              </div>
            </ClickAwayListener>
          </Toolbar>
        </Container>
        <Divider />
      </AppBar>

      {prevBlockIsVisible ? (
        <PreviewBlock
          checked={prevBlockIsVisible}
          onClose={handleChange}
        />
      ) : null}
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

export default Header;
