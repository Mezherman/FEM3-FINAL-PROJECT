import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import RoutesName from '../../routes-list';

function ProductBreadcrumbs({ assortment, catalog }) {
  // console.log('assortment =', assortment);
  // console.log('catalog =', catalog);

  const { allCategories } = catalog;
  // console.log('allCategories =', allCategories);

  const hasSubCategory = allCategories.filter((category) => category.id === assortment)[0].level;
  let category = '';
  let subCategory = '';
  let item = '';

  if (!isNaN(assortment)) {
    item = assortment;
  } else if (hasSubCategory) {
    subCategory = allCategories.filter((category) => category.id === assortment)[0].id;
    category = allCategories.filter((category) => category.id === assortment)[0].parentId;
  } else {
    category = allCategories.filter((category) => category.id === assortment)[0].id;
  }

  console.log('category =', category);
  console.log('subCategory =', subCategory);
  console.log('item =', item);

  return (
    <Breadcrumbs aria-label="breadcrumb" color="primary" style={{margin: '10px 0'}}>
      <Link to="/">
        Home
      </Link>
      {category &&
      <Link to={`${RoutesName.products}/${category}`}>
        {category}
      </Link>}
      {!!hasSubCategory &&
      <Link to={`${RoutesName.products}/${category}/${subCategory}`}>
        {subCategory}
      </Link>}
      {item &&
      <Link to={`${RoutesName.products}/${category}/${subCategory}/${item}`}>
        {item}
      </Link>}
      {/*<Typography color="textPrimary">{currentPosition}</Typography>*/}
    </Breadcrumbs>
  );
}

function mapStateToProps(state) {
  return {
    catalog: state.categoriesReducer,
  }
}

export default connect(mapStateToProps)(ProductBreadcrumbs)