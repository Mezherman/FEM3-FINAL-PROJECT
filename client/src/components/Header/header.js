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
  withStyles,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import StarsIcon from '@material-ui/icons/Stars'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import PersonIcon from '@material-ui/icons/Person'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import RoutesName from '../../routes-list';

import './header.scss';
import useStyles from './_header.js';

import Search from '../Search/search'
import HeaderNavbar from '../Header-navbar/header-navbar';
import PreviewBlock from '../Preview-block/preview-cart';
import SignIn from '../Autorization-block/authorization';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    backgroundcolor="transparent"
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  />
));

function Header(props) {
  const { cartQuantity } = props.cart;
  const [anchorElLogin, setAnchorElLogin] = useState(null);
  const handleClick = (event) => {
    setAnchorElLogin(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorElLogin(null);
  };

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const [prevBlockIsVisible, setPrevBlockIsVisible] = useState(false);

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
    <Container maxWidth="xl" disableGutters className={classes.grow}>
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
              useMap="#products"
            />
            <map name="products">
              <Link to={`${process.env.PUBLIC_URL}/products/cooking`}>
                <area
                  shape="poly"
                  coords="13,10,33,2,52,3,64,11,40,37"
                  label="Cooking"
                  title="Cooking"
                />
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/products/drinking`}>
                <area
                  shape="poly"
                  coords="9,13,37,39,12,65,2,49,2,30"
                  label="Drinking"
                  title="Drinking"
                />
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/products/dining`}>
                <area
                  shape="poly"
                  coords="14,69,38,41,64,66,45,76,32,76"
                  alt="Dining"
                  title="Dining"
                />
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/products/preparing`}>
                <area
                  shape="poly"
                  coords="67,66,41,41,66,13,76,31,76,48"
                  alt="Preparing"
                  title="Preparing"
                />
              </Link>
            </map>
          </Box>

          <Box className={classes.iconButtonBox}>
            <MenuItem className={classes.headerMenuItem}>
              <IconButton edge="end" className={classes.iconButton}>
                <StarsIcon fontSize="large" className={classes.iconsStyle} />
              </IconButton>
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
            <StyledMenu
              className="customized-menu"
              id="customized-menu"
              anchorEl={anchorElLogin}
              keepMounted
              open={Boolean(anchorElLogin)}
              onClose={handleClose}
            >
              <MenuItem style={{ display: 'none' }} />
              <SignIn />
            </StyledMenu>
            <Divider orientation="vertical" className={classes.dividerStyle} />
            <MenuItem className={classes.headerMenuItem} onClick={handleChange}>
              <IconButton edge="end" aria-label="card" className={classes.iconButton}>
                <Badge badgeContent={cartQuantity.toString()} color="error">
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
      <Search />
      <HeaderNavbar />
    </Container>
  );
}

function mapStateToProps (state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Header);
