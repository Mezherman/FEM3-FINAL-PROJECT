import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem'

import RoutesName from '../../../routes-list';

import useStyles from '../_header-navbar';

export default function NavBar({ handleMouseEnter, handleMouseLeave, toggleCatalog }) {
  const classes = useStyles();
  return (
    <ul className={classes.headerMenuList}>
      <MenuItem
        className={`js_header-menu-list-item ${classes.headerMenuListItem}`}
        onMouseEnter={(event) => handleMouseEnter(event)}
        onMouseLeave={(event) => handleMouseLeave(event)}
        onClick={(event) => toggleCatalog(event)}
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
    </ul>
  )
}

NavBar.propTypes = {
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  toggleCatalog: PropTypes.func,

};

NavBar.defaultProps = {
  handleMouseEnter: () => {
  },
  handleMouseLeave: () => {
  },
  toggleCatalog: () => {
  }
};

{/*<ul className={classes.headerMenuList}>*/}
{/*  <li*/}
{/*    className={`js_header-menu-list-item ${classes.headerMenuListItem}`}*/}
{/*    onMouseEnter={(event) => handleMouseEnter(event)}*/}
{/*    onMouseLeave={(event) => handleMouseLeave(event)}*/}
{/*    onClick={(event) => toggleCatalog(event)}*/}
{/*  >*/}
{/*    CATALOG*/}
{/*  </li>*/}
{/*  <li className={`js_header-menu-list-item ${classes.headerMenuListItem}`}>*/}
{/*    <Link to={RoutesName.aboutUs} className={classes.headerMenuListHyperlink}>*/}
{/*      ABOUT US*/}
{/*    </Link>*/}
{/*  </li>*/}
{/*  <li className={`js_header-menu-list-item ${classes.headerMenuListItem}`}>*/}
{/*    <Link to={RoutesName.delivery} className={classes.headerMenuListHyperlink}>*/}
{/*      DELIVERY & PAYMENT TERMS*/}
{/*    </Link>*/}
{/*  </li>*/}
{/*  <li className={`js_header-menu-list-item ${classes.headerMenuListItem}`}>*/}
{/*    <Link to={RoutesName.contacts} className={classes.headerMenuListHyperlink}>*/}
{/*      CONTACTS*/}
{/*    </Link>*/}
{/*  </li>*/}
{/*</ul>*/}