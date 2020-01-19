import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RoutesName from '../../../routes-list';

import useStyles from '../_header-navbar';

export default function Categories(props) {
  const classes = useStyles();
  const { chosenCategory, categories, toggleSubCategories, toggleCatalog } = props;
  const categoryList = categories.map((category) => {
    const classNames = `js_catalog-list-item ${classes.catalogListItem} ${category.id === chosenCategory ? classes.categoryHover : ''}`;
    return (
      <li
        key={category.id}
        id={category.id}
        onMouseEnter={(event) => toggleSubCategories(event)}
        onMouseLeave={(event) => toggleCatalog(event)}
        onClick={(event) => toggleCatalog(event)}
      >
        <Link
          to={`${RoutesName.products}/${category.id}`}
          key={category.id}
          className={classNames}
        >
          {category.name.toUpperCase()}
        </Link>
      </li>
    )
  });

  return (
    <ul className={`js_catalog-list ${classes.catalogList}`}>
      {categoryList}
    </ul>
  )
}

Categories.propTypes = {
  chosenCategory: PropTypes.string.isRequired,
  toggleSubCategories: PropTypes.func.isRequired,
  toggleCatalog: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};