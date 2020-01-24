import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Box } from '@material-ui/core';

import RoutesName from '../../../routes-list';

import useStyles from '../_header-navbar';
import LogOut from '../../Temp/logOut';

export default function NavBar({ toggleCatalog, hideCatalog, children }) {
  const classes = useStyles();

  return (
    <Box className={classes.headerMenuList}>
      <MenuItem
        className={`js_header-menu-list-item ${classes.headerMenuListItem}`}
        onMouseLeave={hideCatalog}
        onClick={toggleCatalog}
      >
        CATALOG
      </MenuItem>
      <MenuItem>
        <Link to={RoutesName.aboutUs} className={classes.headerMenuListHyperlink}>
          ABOUT US
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to={RoutesName.delivery} className={classes.headerMenuListHyperlink}>
          DELIVERY & PAYMENT TERMS
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to={RoutesName.contacts} className={classes.headerMenuListHyperlink}>
          CONTACTS
        </Link>
      </MenuItem>
      {children}
      <LogOut />
    </Box>
  )
}

NavBar.propTypes = {
  toggleCatalog: PropTypes.func.isRequired,
  hideCatalog: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};