import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper, Box, ClickAwayListener } from '@material-ui/core';

import NavBar from './Navbar/navbar';
import Categories from './Categories/categories';
import SubCategories from './SubCategories/subcategories';
import getCategories from '../../services/getCategories';
import setCatalog from '../../redux/actions/categories';

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

  const { catalog, setCatalog } = props;
  const { mainCategories, allCategories, catalogLoaded } = catalog;

  useEffect(() => {
    getCategories()
      .then((catalog) => {
        setCatalog(catalog);
      })
  }, []);

  const toggleCatalog = (event) => {
    categoriesVisible
      ? hideCatalog(event)
      : showCatalog(event)
  };

  const showCatalog = (event) => {
    if (event.relatedTarget &&
      (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('js_catalog-list-item'))) return;

    setFeatures({
      categoriesVisible: true,
      chosenCategory: null
    })
  };

  const hideCatalog = (event) => {
    if (!event.relatedTarget) {
      setFeatures({
        categoriesVisible: false,
        subCategoriesVisible: false,
        chosenCategory: null
      });
      return
    }

    if (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('js_catalog-list-item') ||
      event.relatedTarget.classList.contains('js_catalog-list')) return;

    if (event.relatedTarget.classList.contains('js_header-menu-list-item')) {
      setFeatures({
        ...features,
        subCategoriesVisible: false,
        chosenCategory: null
      })
    } else {
      setFeatures({
        categoriesVisible: false,
        subCategoriesVisible: false,
        chosenCategory: null
      })
    }
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

  const handleClickAwayCatalog = (event) => {
    if (event.target.textContent.toLowerCase() === 'catalog') return;

    setFeatures({
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
    })
  };

  return (
    <div className={classes.headerMenuWrapper}>
      <NavBar
        handleMouseEnter={showCatalog}
        handleMouseLeave={hideCatalog}
        toggleCatalog={toggleCatalog}
      />

      <ClickAwayListener onClickAway={handleClickAwayCatalog}>
        <Box
          className={classes.catalogWrapper}
          onMouseLeave={hideCatalog}
          // onMouseEnter={(event) => {
          //   const height = event.currentTarget.offsetHeight;
          //   setFeatures({
          //     ...features,
          //     categoryListHeight: height
          //   });
          // }}
        >
          <Paper className={classes.headerMenuCatalog}>
            {categoriesVisible && catalogLoaded &&
            (
              <Categories
                chosenCategory={chosenCategory}
                categories={mainCategories}
                toggleSubCategories={toggleSubCategories}
                toggleCatalog={toggleCatalog}
              />
            )}
            {subCategoriesVisible &&
            (
              <SubCategories
                chosenCategory={chosenCategory}
                toggleCatalog={toggleCatalog}
                features={features}
                setFeatures={setFeatures}
                allCategories={allCategories}
              />
            )}
          </Paper>
        </Box>
      </ClickAwayListener>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    catalog: state.categoriesReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCatalog: (allCategories) => {
      const mainCategories = allCategories.filter((category) => category.parentId === 'null');
      dispatch(setCatalog(allCategories, mainCategories))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavbar);

HeaderNavbar.propTypes = {
  catalog: PropTypes.objectOf(PropTypes.object).isRequired,
  setCatalog: PropTypes.func.isRequired,
};