import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper, Box, ClickAwayListener, Divider } from '@material-ui/core';

import NavBar from './Navbar/navbar';
import Categories from './Categories/categories';
import SubCategories from './SubCategories/subcategories';

import useStyles from './_header-navbar';

function HeaderNavbar(props) {
  // console.log('props =', props);
  const classes = useStyles();
  const [features, setFeatures] = useState({
    categoriesVisible: false,
    subCategoriesVisible: false,
    chosenCategory: null,
  });
  const { categoriesVisible, subCategoriesVisible, chosenCategory } = features;

  const { catalog, drawer, toggleDrawer } = props;
  const { mainCategories, allCategories } = catalog;

  // console.log('cat =', catalog);
  const toggleCatalog = () => {
    categoriesVisible
      ? hideCatalog()
      : showCatalog()
  };

  const showCatalog = () => {
    setFeatures({
      categoriesVisible: true,
      chosenCategory: null
    })
  };

  const hideCatalog = () => {
    setFeatures({
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null
    });
  };

  const toggleSubCategories = (event) => {
    const chosenCategory = event.currentTarget.id;
    const haveSubCategories = !!allCategories.find((category) => (
      category.parentId === chosenCategory
    ));
    setFeatures({
      ...features,
      subCategoriesVisible: haveSubCategories,
      chosenCategory
    })
  };

  return (
    <>
      <div className={classes.headerMenuWrapper}>
        <NavBar
          drawer={drawer}
          toggleDrawer={toggleDrawer}
          hideCatalog={hideCatalog}
          toggleCatalog={toggleCatalog}
        >
          <Box
            className={classes.catalogWrapper}
            onMouseLeave={hideCatalog}
          >
            <Paper className={classes.headerMenuCatalog}>
              {categoriesVisible &&
              (
                <Categories
                  chosenCategory={chosenCategory}
                  mainCategories={mainCategories}
                  toggleSubCategories={toggleSubCategories}
                  toggleCatalog={toggleCatalog}
                />
              )}
              {subCategoriesVisible &&
              (
                <SubCategories
                  chosenCategory={chosenCategory}
                  allCategories={allCategories}
                  toggleCatalog={toggleCatalog}
                />
              )}
            </Paper>
          </Box>
        </NavBar>
      </div>
      <Divider />
    </>
  )
}

const mapStateToProps = (state) => ({
  catalog: state.categoriesReducer.catalog,
});

export default connect(mapStateToProps)(HeaderNavbar);

HeaderNavbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawer: PropTypes.bool.isRequired,
  catalog: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.bool])
  ).isRequired
};