import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoutesName from '../../../../routes-list';
import useStyles from '../../_header';

const BurgerAndLogoIcons = ({ toggleDrawer, mobileMenuId }) => {
  const classes = useStyles();
  return (
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
  )
};

export default BurgerAndLogoIcons

BurgerAndLogoIcons.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  mobileMenuId: PropTypes.bool.isRequired
};
