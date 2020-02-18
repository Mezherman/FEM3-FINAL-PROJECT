import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Divider,
  Drawer
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import GroupIcon from '@material-ui/icons/Group';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import useStyles from './_navbar';
import RoutesName from '../../../routes-list';

export default function NavBar({ toggleCatalog, hideCatalog, children, drawer, toggleDrawer }) {
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      border: '1px solid transparent',
      transition: 'fontWeight 6s',
      '&:hover': {
        borderLeft: `1px solid ${theme.palette.background.primary}`,
        borderRight: `1px solid ${theme.palette.background.primary}`,
        fontWeight: 600,
        backgroundColor: 'transparent',
      },
    },
  }))(MenuItem);

  const classes = useStyles();
  const theme = useTheme();
  const { mainCategories, allCategories } = useSelector((state) => state.categoriesReducer.catalog);
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawerCat, drawerCatIsOpen] = useState(false);
  const [drawerSubCat, drawerSubCatIsOpen] = useState(false);
  const [subCategory, setSubCategory] = useState('');

  const toggleDrawerCat = (open) => {
    drawerCatIsOpen(open);
  };
  const toggleDrawerSubCat = (value, open) => {
    setSubCategory(value);
    drawerSubCatIsOpen(open)
  };

  const toggleLastDrawer = (open) => {
    drawerSubCatIsOpen(open);
  };

  const listItemIcon = (menuItem) => {
    switch (menuItem) {
      case 'HOME': {
        return (<HomeIcon />)
      }
      case 'CATALOG': {
        return (<RestaurantMenuIcon />)
      }
      case 'ABOUT US': {
        return (<GroupIcon />)
      }
      case 'DELIVERY & PAYMENT': {
        return (<LocalShippingIcon />)
      }
      case 'CONTACTS': {
        return (<PlaceIcon />)
      }
      default:
        return (<HomeIcon />)
    }
  };
  const link = {
    HOME: RoutesName.home,
    'ABOUT US': RoutesName.aboutUs,
    'DELIVERY & PAYMENT': RoutesName.delivery,
    CONTACTS: RoutesName.contacts,
  };

  const renderMainMenu = () => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
      {['HOME', 'CATALOG', 'ABOUT US', 'DELIVERY & PAYMENT', 'CONTACTS'].map((text) => {
        if (text === 'CATALOG') {
          return (
            <Fragment key={text}>
              <ListItem
                onClick={() => {
                  toggleDrawerCat(true);
                  toggleDrawer(false);
                }}
                className={classes.nestedMenuItem}
              >
                <span className={classes.headerMenuListHyperlink}>
                  <ListItemIcon className={classes.icon}>{listItemIcon(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </span>
                <KeyboardArrowRightIcon />
              </ListItem>
              <Divider />
            </Fragment>
          )
        }

        return (
          <Fragment key={text}>
            <ListItem
              onClick={() => {
                toggleDrawer(false);
                // console.log({RoutesName.${text})
              }}
            >
              <Link
                to={link[text]}
                className={classes.headerMenuListHyperlink}
              >
                <ListItemIcon className={classes.icon}>{listItemIcon(text)}</ListItemIcon>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
            <Divider />
          </Fragment>
        )
      })}
    </List>
  );

  const renderCatalogMenu = () => (
    <List>
      <MenuItem
        onClick={() => {
          toggleDrawerCat(false);
          toggleDrawer(true);
        }}
        className={classes.headerMenuListHyperlink}
      >
        <KeyboardArrowLeftIcon className={classes.icon} />
        CATALOG
      </MenuItem>
      <Divider />

      {mainCategories.map((category) => (
        <MenuItem
          onClick={() => {
            toggleDrawerSubCat(category.id, true);
            toggleDrawerCat(false);
          }}
          key={category.id}
          className={classes.nestedMenuItem}
          label={category.name}
        >
          <Link
            to={`${RoutesName.products}/${category.id}`}
            key={category.id}
            className={classes.headerMenuListHyperlink}
          >
            {category.name}
          </Link>
          <KeyboardArrowRightIcon />
        </MenuItem>
      ))}
    </List>
  );

  const renderSubCatalogMenu = () => (
    <List>
      <MenuItem
        onClick={() => {
          toggleLastDrawer(false);
          toggleDrawerCat(true)
        }}
        className={classes.headerMenuListHyperlink}
      >
        <KeyboardArrowLeftIcon className={classes.icon} />
        {subCategory}
      </MenuItem>
      <Divider />

      <MenuItem
        onClick={() => {
          toggleLastDrawer(false);
        }}
      >
        <Link
          to={`${RoutesName.products}/${subCategory}`}
          className={classes.headerMenuListHyperlink}
        >
          Shop all
        </Link>
      </MenuItem>

      {allCategories.filter(
        (category) => category.parentId === subCategory
      )
        .map((subCategory) => (
          <MenuItem
            key={subCategory.id}
            onClick={() => {
              // toggleDrawer(false);
              toggleLastDrawer(false);
            }}
          >
            <Link
              to={`${RoutesName.products}/${subCategory.id}`}
              className={classes.headerMenuListHyperlink}
              key={subCategory.id}
            >
              {subCategory.name}
            </Link>
            {/* <KeyboardArrowRightIcon /> */}
          </MenuItem>
        ))}
    </List>
  );

  const renderDesktopMenu = () => (
    <>
      {['CATALOG', 'ABOUT US', 'DELIVERY & PAYMENT', 'CONTACTS'].map((menuItem) => {
        if (menuItem === 'CATALOG') {
          return (
            <StyledMenuItem
              className={`js_header-menu-list-item ${classes.headerMenuListItem}`}
              onMouseLeave={hideCatalog}
              onClick={toggleCatalog}
              key={menuItem}
            >
              {menuItem}
            </StyledMenuItem>
          )
        }
        return (
          <StyledMenuItem
            className={classes.menuItem}
            key={menuItem}
          >
            <Link to={link[menuItem]} className={classes.headerMenuListHyperlink}>
              {menuItem}
            </Link>
          </StyledMenuItem>
        )
      })}
    </>
  );

  return (
    // mobile
    <>
      {!isDesktop && (
        <>
          <Drawer
            open={drawer}
            onClose={() => toggleDrawer(false)}
            transitionDuration={500}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {renderMainMenu()}
          </Drawer>

          {/* Category */}
          <Drawer
            open={drawerCat}
            onClose={() => toggleDrawerCat(false)}
            transitionDuration={500}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {renderCatalogMenu()}
          </Drawer>
          {/* Subcategory */}
          <Drawer
            open={drawerSubCat}
            onClose={() => toggleDrawerSubCat(false)}
            transitionDuration={500}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {renderSubCatalogMenu()}
          </Drawer>
        </>
      )}

      {/* Desktop */}
      {isDesktop && (
        <>
          {renderDesktopMenu()}
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
