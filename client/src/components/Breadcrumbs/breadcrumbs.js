import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import useStyles from './_breadcrumbs';

import RoutesName from '../../routes-list';

function ProductBreadcrumbs({ assortment, catalog, products }) {
  const classes = useStyles();
  const { allCategories, mainCategories } = catalog;

  // console.log('assortment =', assortment);
  // console.log('products =', products);

  let level = '';

  if (!isNaN(assortment)) {
    level = 'item';
  } else if (mainCategories.find((category) => category.id === assortment)) {
    level = 'category';
  } else {
    level = 'subCategory'
  }

  let category = '';
  let subCategory = '';

  switch (level) {
    case 'item': {
      const subCategoryId = products.find((product) => product.itemNo === assortment).categories;
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
        <MenuItem className={classes.menuItem}>
          <HomeIcon />
        </MenuItem>
      </Link>
      {category &&
      (
        <Link to={`${RoutesName.products}/${category.id}`} className={classes.item}>
          <MenuItem className={classes.menuItem}>
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
          <MenuItem className={classes.menuItem}>
            {subCategory.name}
          </MenuItem>
        </Link>
      )}
      {/*<Typography color="textPrimary">{currentPosition}</Typography>*/}
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