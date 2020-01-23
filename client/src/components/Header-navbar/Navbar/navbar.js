import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Box } from '@material-ui/core';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CollapsingItem from '../../Product-detail/Product-detail-collapse/collapsing-item';
import useStyles from './_navbar';
import RoutesName from '../../../routes-list';
import RangeSlider from '../../Filter/Range/range';
import store from '../../../index';

export default function NavBar({ toggleCatalog, hideCatalog, children }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const { mainCategories } = store.getState().categoriesReducer.catalog;
  const { allCategories } = store.getState().categoriesReducer.catalog;
  console.log(mainCategories);
  console.log(allCategories);
  const toggleDrawer = (open) => {
    setDrawer(open)
  }

  // const mainCategoryArr = mainCategories.map((category) => (
  //   <CollapsingItem disablePadding label={category.name} />
  // ));
  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>Open</Button>
      <Drawer
        open={drawer}
        onClose={() => toggleDrawer(false)}
      >
        <List
          disablePadding
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <CollapsingItem border={1} label="CATALOG">
            {mainCategories.map((category) => (
              <CollapsingItem disablePadding label={category.name}>
                {allCategories.filter((subCategory) => {
                  return subCategory.parentId === category.id;
                  console.log(subCategory.name);
                }).map((subCategory) => (
                  <MenuItem >
                    <Link
                      to={`${RoutesName.products}/${subCategory.id}`}
                      key={category.id}
                    >
                    {subCategory.name}
                    </Link>
                  </MenuItem>
                ))}
              </CollapsingItem>
            ))}

            {/* <CollapsingItem disablePadding label="COOCKING"> */}
            {/*  */}
            {/*  <MenuItem disablePadding button>POTS</MenuItem> */}
            {/*  <MenuItem disablePadding button>FRYING</MenuItem> */}
            {/* </CollapsingItem> */}
            {/* <CollapsingItem disablePadding label="DINING"/> */}
            {/* <CollapsingItem disablePadding label="DRINKING"/> */}
            {/* <CollapsingItem disablePadding label="PREPARING"/> */}
          </CollapsingItem>

        </List>
      </Drawer>
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
    </>
  )
}

NavBar.propTypes = {
  toggleCatalog: PropTypes.func.isRequired,
  hideCatalog: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};