import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

import Category from './Category/category';

import useStyles from './_category-list';

function CategoryList() {
  const classes = useStyles();
  const mainCategories = useSelector((state) => state.categoriesReducer.catalog.mainCategories);
  let categoryList = [];
  if (mainCategories) {
    categoryList = mainCategories.map((category, index) => (
      <Category
        key={category.name}
        data={category}
        name={category.name}
        index={index}
      />
    ))
  }

  return (
    <Container maxWidth="xl" className={classes.categoriesList}>
      {categoryList}
    </Container>
  )
}

export default CategoryList;