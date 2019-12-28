import React, { useState, useEffect } from 'react';
import Category from './Category/category'
import getCategories from '../../services/getCategories';
import useStyles from './styles'

function CategoryList(props) {
  const classes = useStyles();
  const [categories, updateCategories] = useState([]);

  const setCategoriesToState = () => {
    getCategories().then((categoryList) => {
      updateCategories(categoryList);
    });
  };

  useEffect(() => {
    setCategoriesToState();
  }, []);

  return (
    <section className={classes.categories_list}>
      {
        Object.keys(categories).map((categoryName, index) => (
          <Category data={categories[categoryName]} name={categoryName} index={index} />
        ))
      }
    </section>
  )
}

export default CategoryList;
