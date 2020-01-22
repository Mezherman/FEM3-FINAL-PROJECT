import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RoutesName from '../../../routes-list';

import useStyles from '../_header-navbar';

export default function Categories(props) {
  const classes = useStyles();
  const { chosenCategory, mainCategories, toggleSubCategories, toggleCatalog } = props;
  const categoryList = mainCategories.map((category) => {
    const classNames = `js_catalog-list-item ${classes.catalogListItem} 
      ${category.id === chosenCategory
      ? classes.categoryHover
      : ''}`;
    return (
      <Link
        to={`${RoutesName.products}/${category.id}`}
        key={category.id}
        id={category.id}
        className={classNames}
        onClick={toggleCatalog}
        onMouseEnter={(event) => toggleSubCategories(event)}
      >
        <div>
          {category.name.toUpperCase()}
        </div>
      </Link>
    )
  });

  return (
    <div className={`js_catalog-list ${classes.catalogList}`}>
      {categoryList}
    </div>
  )
}

Categories.propTypes = {
  chosenCategory: PropTypes.string,
  toggleSubCategories: PropTypes.func.isRequired,
  toggleCatalog: PropTypes.func.isRequired,
  mainCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Categories.defaultProps = {
  chosenCategory: null
};