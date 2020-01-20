import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RoutesName from '../../../routes-list';

import useStyles from '../_header-navbar';

export default function SubCategories({ allCategories, chosenCategory, toggleCatalog }) {
  const classes = useStyles();
  const subCategories = allCategories.filter((category) => category.parentId === chosenCategory);
  const subCategoriesList = subCategories.map((subCategory) => (
    <Link
      to={`${RoutesName.products}/${chosenCategory}/${subCategory.id}`}
      key={subCategory.id}
      className={`js_catalog-list-item ${classes.subCategoryListItem}`}
      onClick={toggleCatalog}
    >
      <div className={classes.subCategoryItemContent}>
        <img className={classes.subCategoryItemImg} src={`/img/products/${chosenCategory}/${subCategory.id}/${subCategory.id}.png`} alt={`img: ${subCategory.name}`} />
        {subCategory.name}
      </div>
    </Link>
  ));

  return (
    <div className={`js_catalog-list ${classes.subCategoryList}`}>
      {subCategoriesList}
    </div>
  )
}

SubCategories.propTypes = {
  allCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  chosenCategory: PropTypes.string.isRequired,
  toggleCatalog: PropTypes.func.isRequired,
};