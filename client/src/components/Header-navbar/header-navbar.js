import React, { useState, useEffect } from 'react';
import { Paper, Box, ClickAwayListener } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import getCategories from '../../services/getCategories';

import './header-navbar.scss';

export default function HeaderNavbar() {
  const [features, setFeatures] = useState({
    categoriesVisible: false,
    subCategoriesVisible: false,
    categories: null,
    chosenCategory: null,
    categoryListHeight: null
  });

  const { categoriesVisible, subCategoriesVisible, categories } = features;

  useEffect(() => {
    getCategories()
      .then((categoriesData) => {
        setFeatures({
          categories: categoriesData
        })
      })
  }, []);

  const toggleCatalog = (e) => {
    if (!e.relatedTarget.classList ||
      e.relatedTarget.classList.contains('catalog-list-item')) {
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

  const toggleSubCategories = (e) => {
    const chosenCategory = e.currentTarget.textContent;
    setFeatures({
      ...features,
      subCategoriesVisible: !!categories[chosenCategory].subCategories.length,
      chosenCategory
    })
  };

  const onCategoryLeave = (e) => {
    // console.log('target = ', e.target);
    // console.log('relatedTarget = ', e.relatedTarget);
    if (!e.relatedTarget.classList ||
      e.relatedTarget.classList.contains('catalog-list-item') ||
      e.relatedTarget.classList.contains('catalog-list')) {
      return;
    }

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null
    });
  };

  const onSubCategoryLeave = (e) => {
    if (!e.relatedTarget.classList ||
      e.relatedTarget.classList.contains('catalog-list-item')) {
      return;
    }

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
    })
  };

  const handleClickAwayCatalog = (e) => {
    if (e.target.textContent.toLowerCase() === 'catalog') return;

    setFeatures({
      ...features,
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
      categoryListHeight: null
    })
  };

  const Categories = () => {
    const { chosenCategory } = features;
    const categoryList = Object.keys(categories).map((category) => {
      const classNames = `catalog-list-item ${category === chosenCategory ? ' _hover' : ''}`;
      return (
        <li
          key={category}
          className={classNames}
          onMouseEnter={(e) => toggleSubCategories(e)}
          onMouseLeave={(e) => onCategoryLeave(e)}
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

  const SubCategories = () => {
    const { chosenCategory, categoryListHeight } = features;
    const { subCategories } = categories[chosenCategory];
    const subCategoriesList = subCategories.map((subCategory) => (
      <span
        key={subCategory}
        className="catalog-list-item sub-category"
      >
        <div className="square">img</div>
        {subCategory}
      </span>
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
          <a href="#" className="header-menu-list-hyperlink">CATALOG</a>
        </li>
        <li className="header-menu-list-item">
          <a href="#" className="header-menu-list-hyperlink">About us</a>
        </li>
        <li className="header-menu-list-item">
          <a href="#" className="header-menu-list-hyperlink">Delivery & Payment terms</a>
        </li>
        <li className="header-menu-list-item">
          <a href="#" className="header-menu-list-hyperlink">Contacts</a>
        </li>
      </ul>
    )
  );

  return (
    <div className="header-menu-wrapper">
      {NavBar()}
      <ClickAwayListener onClickAway={handleClickAwayCatalog}>
        <Box
          className="catalog-wrapper"
          onMouseEnter={(e) => {
            const height = e.currentTarget.offsetHeight;
            setFeatures({
              ...features,
              categoryListHeight: height
            });
          }}
          onMouseLeave={toggleCatalog}
        >
          <Paper className="header-menu-catalog">
            {categoriesVisible && Categories()}
            {subCategoriesVisible && SubCategories()}
          </Paper>
        </Box>
      </ClickAwayListener>
    </div>
  )
}
