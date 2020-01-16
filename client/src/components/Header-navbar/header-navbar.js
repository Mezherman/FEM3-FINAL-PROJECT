import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper, Box, ClickAwayListener } from '@material-ui/core';
import { Link } from 'react-router-dom';
import getCategories from '../../services/getCategories';
import RoutesName from '../../routes-list';
import getCatalog from '../../redux/actions/categories';

import './header-navbar.scss';

function HeaderNavbar(props) {
  const [features, setFeatures] = useState({
    categoriesVisible: false,
    subCategoriesVisible: false,
    chosenCategory: null,
    categoryListHeight: null
  });

  const { categoriesVisible, subCategoriesVisible } = features;
  const { catalog, setCatalog } = props;
  const { mainCategories, allCategories } = catalog;
  console.log('props =', props);

  useEffect(() => {
    getCategories()
      .then((catalog) => {
        // console.log('topLevelCat =', topLevelCategories);
        setCatalog(catalog);
      })
  }, []);

  const toggleCatalog = (event) => {
    if (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('catalog-list-item')) {
      return;
    }

    setFeatures(
      {
        ...features,
        categoriesVisible: !categoriesVisible,
        subCategoriesVisible: !categoriesVisible,
        chosenCategory: null
      }
    )
  };

  const toggleSubCategories = (event) => {
    const chosenCategory = event.currentTarget.id;
    const haveSubCategories = !!allCategories.find((category) => (
      category.parentId === chosenCategory
    ));
    // console.log('check subCat = ', haveSubCategories);
    setFeatures({
      ...features,
      subCategoriesVisible: haveSubCategories,
      chosenCategory
    })
  };

  const onCategoryLeave = (event) => {
    // console.log('target = ', e.target);
    // console.log('relatedTarget = ', e.relatedTarget);
    if (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('catalog-list-item') ||
      event.relatedTarget.classList.contains('catalog-list')) {
      return;
    }

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null
    });
  };

  const onSubCategoryLeave = (event) => {
    if (!event.relatedTarget.classList ||
      event.relatedTarget.classList.contains('catalog-list-item')) {
      return;
    }

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
    })
  };

  const handleClickAwayCatalog = (event) => {
    if (event.target.textContent.toLowerCase() === 'catalog') return;

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
      categoryListHeight: null
    })
  };

  const SubCategories = () => {
    const { chosenCategory } = features;
    const subCategories = allCategories.filter((category) => category.parentId === chosenCategory);
    const subCategoriesList = subCategories.map((subCategory) => (
      <Link to={`${RoutesName.products}/${chosenCategory}/${subCategory.id}`} key={subCategory.id}>
        <span
          key={subCategory.id}
          className="catalog-list-item sub-category"
        >
          <div className="square">img</div>
          {subCategory.name}
        </span>
      </Link>
    ));

    return (

      <div
        className="catalog-list sub-category"
        // style={{
        //   height: categoryListHeight
        // }}
        onMouseLeave={onSubCategoryLeave}
      >
        {subCategoriesList}
      </div>
    )
  };

  const NavBar = () => (
    (
      <ul className="header-menu-list">
        <li
          className="header-menu-list-item"
          onMouseEnter={() => {
            const height = document.querySelector('.catalog-wrapper').offsetHeight;
            setFeatures({ ...features, categoriesVisible: true, categoryListHeight: height })
          }}
          onMouseLeave={toggleCatalog}
        >
          <Link to={RoutesName.products} className="header-menu-list-hyperlink">CATALOG</Link>
        </li>
        <li className="header-menu-list-item">
          <Link to={RoutesName.aboutUs}>
            <span className="header-menu-list-hyperlink">About us</span>
          </Link>
        </li>
        <li className="header-menu-list-item">
          <a href={process.env.PUBLIC_URL} className="header-menu-list-hyperlink">Delivery &
            Payment
            terms
          </a>
        </li>
        <li className="header-menu-list-item">
          <Link to={RoutesName.contacts}>
            <span className="header-menu-list-hyperlink">Contacts</span>
          </Link>
        </li>
      </ul>
    )
  );

  const { chosenCategory } = features;

  return (
    <div className="header-menu-wrapper">
      {NavBar()}
      <ClickAwayListener onClickAway={handleClickAwayCatalog}>
        <Box
          className="catalog-wrapper"
          onMouseEnter={(event) => {
            const height = event.currentTarget.offsetHeight;
            setFeatures({
              ...features,
              categoryListHeight: height
            });
          }}
          onMouseLeave={toggleCatalog}
        >
          <Paper className="header-menu-catalog">
            {categoriesVisible &&
            (
              <Categories
                categories={mainCategories}
                chosenCategory={chosenCategory}
                toggleSubCategories={toggleSubCategories}
                onCategoryLeave={onCategoryLeave}
              />
            )}
            {subCategoriesVisible && SubCategories()}
          </Paper>
        </Box>
      </ClickAwayListener>
    </div>
  )
}

const Categories = (props) => {
  const { chosenCategory, toggleSubCategories, onCategoryLeave, categories } = props;
  const categoryList = categories.map((category) => {
    const classNames = `catalog-list-item ${category.name === chosenCategory ? ' _hover' : ''}`;
    return (
      <Link to={`${RoutesName.products}/${category.id}`} key={category.id}>
        <li
          key={category.id}
          id={category.id}
          className={classNames}
          onMouseEnter={(event) => toggleSubCategories(event)}
          onMouseLeave={(event) => onCategoryLeave(event)}
        >
          {category.name}
        </li>
      </Link>
    )
  });

  return (
    <ul className="catalog-list">
      {categoryList}
    </ul>
  )
};

function mapStateToProps(state) {
  return {
    catalog: state.Categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCatalog: (allCategories) => {
      const mainCategories = allCategories.filter((category) => category.parentId === 'null');
      dispatch(getCatalog(allCategories, mainCategories))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavbar);

Categories.propTypes = {
  chosenCategory: PropTypes.string,
  toggleSubCategories: PropTypes.func,
  onCategoryLeave: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.object)
};

Categories.defaultProps = {
  chosenCategory: '',
  toggleSubCategories: () => {
  },
  onCategoryLeave: () => {
  },
  categories: []
};
