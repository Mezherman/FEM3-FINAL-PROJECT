import React, { useState, useEffect } from 'react';
import { Paper, Box, ClickAwayListener } from '@material-ui/core';
import { Link } from 'react-router-dom';

import getCategories from '../../services/getCategories';

import './header-navbar.scss';

export default function HeaderNavbar() {
  const [features, setFeatures] = useState({
    categoriesVisible: false,
    subCategoriesVisible: false,
    categories: {},
    chosenCategory: null,
    categoryListHeight: null
  });
  

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
    });
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
          <Link to="/products" className="header-menu-list-hyperlink">CATALOG</Link>
        </li>
        <li className="header-menu-list-item">
          <a href={process.env.PUBLIC_URL} className="header-menu-list-hyperlink">About us</a>
        </li>
        <li className="header-menu-list-item">
          <a href={process.env.PUBLIC_URL} className="header-menu-list-hyperlink">Delivery & Payment terms</a>
        </li>
        <li className="header-menu-list-item">
          <a href={process.env.PUBLIC_URL} className="header-menu-list-hyperlink">Contacts</a>
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
                categories={categories}
                chosenCategory={chosenCategory}
                onCategoryLeave={onCategoryLeave}
              />
            )}
          </Paper>
        </Box>
      </ClickAwayListener>
    </div>
  )
}

const Categories = (props) => {
  const { chosenCategory, toggleSubCategories, onCategoryLeave, categories } = props;
  const categoryList = Object.keys(categories).map((category) => {
    const classNames = `catalog-list-item ${category === chosenCategory ? ' _hover' : ''}`;
    return (
      <li
        key={category}
        className={classNames}
        onMouseEnter={(event) => toggleSubCategories(event)}
        onMouseLeave={(event) => onCategoryLeave(event)}
      >
        {category}
      </li>
    )
  });

  return (
    <ul className="catalog-list">
      {categoryList}
    </ul>
  )
};

