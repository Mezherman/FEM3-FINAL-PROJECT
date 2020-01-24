import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuItem, useTheme, Divider } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CollapsingItem from '../../Product-detail/Product-detail-collapse/collapsing-item';
import useStyles from './_navbar';
import RoutesName from '../../../routes-list';
import store from '../../../index';

export default function NavBar({ toggleCatalog, hideCatalog, children, drawer, toggleDrawer }) {
  const classes = useStyles();
  const theme = useTheme();
  const { mainCategories } = store.getState().categoriesReducer.catalog;
  const { allCategories } = store.getState().categoriesReducer.catalog;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // console.log('mob', isMobile);
  // console.log('tab', isTablet);
  // console.log('desc', !isDesktop);

  return (
  // mobile
    <>
      {!isDesktop && (
        <>
          <Drawer
            open={drawer}
            onClose={() => toggleDrawer(false)}
          >
            <List
              className={classes.root}
              disablePadding
              component="nav"
              aria-labelledby="nested-list-subheader"

            >
              <CollapsingItem border={1} label="CATALOG">

                {mainCategories.map((category) => (
                  <>
                    <CollapsingItem
                      className={classes.category}
                      label={category.name}
                    >
                      {allCategories.filter(
                        (subCategory) => subCategory.parentId === category.id
                      )
                        .map((subCategory) => (
                          <>
                            <Divider />
                            <MenuItem
                              onClick={() => toggleDrawer(false)}
                            >
                              <Link
                                to={`${RoutesName.products}/${subCategory.id}`}
                                key={category.id}
                              >
                                {subCategory.name}
                              </Link>
                            </MenuItem>
                          </>
                        ))}
                    </CollapsingItem>
                    <Divider />
                  </>
                ))}
                <Divider />
              </CollapsingItem>
              <MenuItem>
                <Link to={RoutesName.aboutUs} className={classes.headerMenuListHyperlink}>
              ABOUT US
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Link to={RoutesName.delivery} className={classes.headerMenuListHyperlink}>
              DELIVERY & PAYMENT TERMS
                </Link>
              </MenuItem>
              <Divider />

              <MenuItem>
                <Link to={RoutesName.contacts} className={classes.headerMenuListHyperlink}>
              CONTACTS
                </Link>
              </MenuItem>
              <Divider />
            </List>
          </Drawer>
        </>
      )}

      {/* Desktop */}
      {isDesktop && (
        <>
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
        </>
      )}
      {children}
    </>
  )
}

NavBar.propTypes = {
  toggleCatalog: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  hideCatalog: PropTypes.func.isRequired,
  drawer: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};