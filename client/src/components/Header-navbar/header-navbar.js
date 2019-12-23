import React, { Component } from 'react';
import { Paper, Box, ClickAwayListener } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import getCategories from '../../services/getCategories';

import './header-navbar.scss';

export default class HeaderNavbar extends Component {
  state = {
    categoriesVisible: false,
    subCategoriesVisible: false,
    categories: null,
    chosenCategory: null,
    categoryListHeight: null
  };

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState(() => (
          { categories }
        ))
      })
  }

  toggleCatalog = (e) => {
    // console.log('target = ', e.target);
    // console.log('relatedTarget = ', e.relatedTarget.textContent);
    if (!e.relatedTarget.textContent ||
      e.relatedTarget.classList.contains('catalog-list-item')) {
      return;
    }

    const { categoriesVisible } = this.state;
    this.setState(() => (
      {
        categoriesVisible: !categoriesVisible,
        subCategoriesVisible: !categoriesVisible
      }
    ))
  };

  toggleSubCategories = (e) => {
    const chosenCategory = e.currentTarget.textContent;
    this.setState(() => ({
      subCategoriesVisible: true,
      chosenCategory
    }))
  };

  onCategoryLeave = (e) => {
    if (!e.relatedTarget.textContent ||
      e.relatedTarget.classList.contains('catalog-list-item') ||
      e.relatedTarget.classList.contains('catalog-list')) {
      return;
    }

    this.setState(() => ({
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
    }))
  };

  onSubCategoryLeave = (e) => {
    if (!e.relatedTarget.textContent ||
      e.relatedTarget.classList.contains('catalog-list-item')) {
      return;
    }

    this.setState(() => ({
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
    }))
  };

  showCategories = () => {
    const { categories, chosenCategory } = this.state;
    return (
      Object.keys(categories).map((category) => {
        const classNames = `catalog-list-item ${category === chosenCategory ? ' _hover' : ''}`;
        return (
          <li
            key={category}
            className={classNames}
            onMouseEnter={(e) => {
              // e.currentTarget.classList.add('_hover');
              this.toggleSubCategories(e)
            }}
            onMouseLeave={(e) => {
              // e.currentTarget.classList.remove('_hover');
              this.onCategoryLeave(e)
            }}
          >
            {category}
          </li>
        )
      })
    )
  };

  showSubCategories = () => {
    const { categories, chosenCategory } = this.state;
    const { subCategories } = categories[chosenCategory];
    return (
      subCategories.map((subCategory) => (
        <span
          key={subCategory}
          className="catalog-list-item sub-category"
        >
          <div className="square">img</div>
          {subCategory}
        </span>
      ))
    )
  };

  handleClickAwayCatalog = (e) => {
    if (e.target.textContent.toLowerCase() === 'catalog') return;

    this.setState(() => ({
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null,
      categoryListHeight: null
    }))
  };

  render() {
    const { categoriesVisible, subCategoriesVisible, categoryListHeight } = this.state;
    return (
      <div className="temp-wrapper">
        <div className="header-menu-wrapper">
          <ul className="header-menu-list">
            <li
              className="header-menu-list-item"
              onMouseEnter={() => this.setState({ categoriesVisible: true })}
              onMouseLeave={this.toggleCatalog}
              // onMouseLeave={(e) => this.onMouseLeave(e)}
            >
              <a href="#" className="header-menu-list-hyperlink">
                CATALOG
              </a>
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
          <ClickAwayListener onClickAway={this.handleClickAwayCatalog}>
            <Box
              className="catalog-wrapper"
              onMouseEnter={(e) => {
                const height = e.currentTarget.offsetHeight;
                this.setState(() => ({
                  categoryListHeight: height
                }))
              }}
              onMouseLeave={this.toggleCatalog}
            >
              <Paper className="header-menu-catalog">
                <ul className="catalog-list">
                  {categoriesVisible &&
                  this.showCategories()}
                </ul>
                {subCategoriesVisible &&
                (
                  <div
                    className="catalog-list sub-category"
                    style={{
                      height: categoryListHeight
                    }}
                    onMouseLeave={this.onSubCategoryLeave}
                  >
                    {this.showSubCategories()}
                  </div>
                )}
              </Paper>
            </Box>
          </ClickAwayListener>
        </div>
      </div>
    )
  }
}
