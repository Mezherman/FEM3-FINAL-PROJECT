import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Box, Container, Divider } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import StarsIcon from '@material-ui/icons/Stars'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import PersonIcon from '@material-ui/icons/Person'

import './header.scss';
// eslint-disable-next-line import/extensions
import useStyles from './header-style.js'

import Search from '../Search/search'
import HeaderNavbar from '../Header-navbar/header-navbar';

export default function Header () {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
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
      <MenuItem className="header-login" onClick={handleProfileMenuOpen}>
        <img src="./img/header/my_wmf.png" alt="My_wnf" />
        <ArrowForwardIosIcon fontSize="small" />
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
            <IconButton edge="start" href="#" className={classes.logoIcon}>
              <img
                src="./img/header/wmf-logo-30x35.svg"
                className="header-logo"
                alt="Header logo"
              />
            </IconButton>
          </Box>

          <Box className={classes.mainBoxLogo}>
            <img src="./img/header/wmf-group-logo.png" alt="headerMainLogo" className={classes.mainHeaderLogo} />
            <img src="./img/header/03_wmf-kompass_essen_167x167px.jpg" alt="headerMainLogo" className={classes.mainHeaderLogoImg} />
          </Box>

          <Box className={classes.iconButtonBox}>
            <MenuItem className={classes.headerMenuItem}>
              <IconButton edge="end" className={classes.iconButton}>
                <StarsIcon fontSize="large" className={classes.iconsStyle} />
              </IconButton>
              <span className={classes.menuTitle}>Favorites</span>
            </MenuItem>

            <Divider orientation="vertical" className={classes.dividerStyle} />
            <MenuItem className={classes.headerMenuItem}>
              <IconButton edge="end" className={classes.iconButton}>
                <PersonIcon fontSize="large" className={classes.iconsStyle} />
              </IconButton>
              <span className={classes.menuTitle}>Login</span>
            </MenuItem>

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
      <Search />
      <HeaderNavbar />
    </Container>
  );
}
