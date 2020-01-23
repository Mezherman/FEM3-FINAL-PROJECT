import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Box } from '@material-ui/core';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import RoutesName from '../../../routes-list';

import useStyles from '../_header-navbar';
import TemporaryDrawer from '../../drawer';
import CollapsingItem from '../../Product-detail/Product-detail-collapse/collapsing-item';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RangeSlider from '../../Filter/Range/range';
import store from '../../../index';

export default function NavBar({ toggleCatalog, hideCatalog, children }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const mainCategories = store.getState().categoriesReducer.catalog.mainCategories;
  console.log(mainCategories);
  const toggleDrawer = (open) => {
    setDrawer(open)
  }

  // const test = mainCategories.map((category) => (
  //   <CollapsingItem disablePadding label={category.name} />
  // ))
  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>Open</Button>
      <Drawer
        open={drawer}
        onClose={() => toggleDrawer(false)}
      >
        {/* <Box className={classes.headerMenuList}> */}
        {/*<ExpansionPanelSummary square className={classes.root}>*/}
        {/*  <ExpansionPanelSummary*/}
        {/*    expandIcon={<ExpandMoreIcon />}*/}
        {/*    aria-controls="value"*/}
        {/*    id="value-header"*/}
        {/*  >*/}
        {/*    <ListItem disablePadding>CATALOG*/}
        {/*    </ListItem>*/}
        {/*  </ExpansionPanelSummary>*/}

        {/*  <ExpansionPanelSummary*/}
        {/*    expandIcon={<ExpandMoreIcon />}*/}
        {/*    aria-controls="value"*/}
        {/*    id="value-header"*/}
        {/*  >*/}
        {/*    <ListItem>COOCKING*/}
        {/*    </ListItem>*/}

        {/*  </ExpansionPanelSummary>*/}

        {/*  <ExpansionPanelSummary*/}
        {/*    expandIcon={<ExpandMoreIcon />}*/}
        {/*    aria-controls="value"*/}
        {/*    id="value-header"*/}
        {/*  >*/}

        {/*  <ListItem>DINING*/}
        {/*  </ListItem>*/}
        {/*  </ExpansionPanelSummary>*/}
        {/*</ExpansionPanelSummary>*/}


        <List
          disablePadding
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <CollapsingItem border={1} label="CATALOG">
            <CollapsingItem disablePadding label="COOCKING">
              <ListItem disablePadding button>POTS</ListItem>
              <ListItem disablePadding button>FRYING</ListItem>
            </CollapsingItem>
            <CollapsingItem disablePadding label="DINING"/>
            <CollapsingItem disablePadding label="DRINKING"/>
            <CollapsingItem disablePadding label="PREPARING"/>
          </CollapsingItem>

          <ListItem
            className={`js_header-menu-list-item ${classes.headerMenuListItem}`}
            onMouseLeave={hideCatalog}
            onClick={toggleCatalog}
          >
            CATALOG
          </ListItem>
          <ListItem>
            <Link to={RoutesName.aboutUs} className={classes.headerMenuListHyperlink}>
              ABOUT US
            </Link>
          </ListItem>
          <ListItem>
            <Link to={RoutesName.delivery} className={classes.headerMenuListHyperlink}>
              DELIVERY & PAYMENT TERMS
            </Link>
          </ListItem>
          <ListItem>
            <Link to={RoutesName.contacts} className={classes.headerMenuListHyperlink}>
              CONTACTS
            </Link>
          </ListItem>
          {children}
        </List>
      </Drawer>
    </>
  )
}

NavBar.propTypes = {
  toggleCatalog: PropTypes.func.isRequired,
  hideCatalog: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};