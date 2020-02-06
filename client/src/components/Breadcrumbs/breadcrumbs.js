import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Menu, MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { getProductsByItemNo } from '../../services/getProducts';

import useStyles from './_breadcrumbs';

import RoutesName from '../../routes-list';

function ProductBreadcrumbs({ assortment, catalog, products }) {
  const classes = useStyles();
  const { allCategories, mainCategories } = catalog;

  // console.log('assortment =', assortment);
  // console.log('products =', products);

  let level = '';

  if (assortment === 'search') {
    level = 'search'
  } else if (!isNaN(assortment)) {
    level = 'item';
  } else if (mainCategories.find((category) => category.id === assortment)) {
    level = 'category';
  } else {
    level = 'subCategory'
  }

  let category = '';
  let subCategory = '';
  let search = false;

  switch (level) {
    case 'item': {
      const subCategoryId = products[0].categories;
      subCategory = allCategories.find((category) => category.id === subCategoryId);
      category = mainCategories.find((category) => category.id === subCategory.parentId);
      break;
    }

    case 'subCategory': {
      subCategory = allCategories.find((category) => category.id === assortment);
      category = mainCategories.find((category) => category.id === subCategory.parentId);
      break;
    }

    case 'category':
      category = allCategories.find((category) => category.id === assortment);
      break;

    case 'search':
      search = true
  }

  // const hasSubCategory = allCategories.find((category) => category.id === assortment)
  //   ? allCategories.find((category) => category.id === assortment).level
  //   : false;

  // console.log('hasSubCategory =', hasSubCategory);
  // console.log('category =', category);
  // console.log('subCategory =', subCategory);
  // console.log('item =', item);

  return (
    <Breadcrumbs aria-label="breadcrumb" color="primary" className={classes.wrapper}>
      <Link to="/" className={classes.item}>
        <MenuItem className={classes.menuItem} component="span">
          <HomeIcon />
        </MenuItem>
      </Link>
      {category &&
      (
        <Link to={`${RoutesName.products}/${category.id}`} className={classes.item}>
          <MenuItem className={classes.menuItem} component="span">
            {category.name}
          </MenuItem>
        </Link>
      )}
      {subCategory &&
      (
        <Link
          to={`${RoutesName.products}/${category.id}/${subCategory.id}`}
          className={classes.item}
        >
          <MenuItem className={classes.menuItem} component="span">
            {subCategory.name}
          </MenuItem>
        </Link>
      )}
      {search &&
      (
        <MenuItem className={classes.menuItem} component="span">
          Search
        </MenuItem>
      )}
      {/* <Typography color="textPrimary">{currentPosition}</Typography> */}
    </Breadcrumbs>
  );
}

const mapStateToProps = (state) => ({
  catalog: state.categoriesReducer.catalog,
  products: state.productsReducer.products
});

export default connect(mapStateToProps)(ProductBreadcrumbs)

ProductBreadcrumbs.propTypes = {
  assortment: PropTypes.string.isRequired,
  catalog: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.bool])
  ).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};