import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Category from './Category/category';
import useStyles from './styles';

function CategoryList({ mainCategories }) {
  // console.log('PROPS =', props);
  const classes = useStyles();

  const Categories = ({ categories }) => (
    categories.map((category, index) => (
      <Category
        key={category.name}
        data={category}
        name={category.name}
        index={index}
      />
    ))
  );

  return (
    <section className={classes.categories_list}>
      {mainCategories && <Categories categories={mainCategories} />}
    </section>
  )
}

const mapStateToProps = (state) => ({
  mainCategories: state.categoriesReducer.catalog.mainCategories
});

export default connect(mapStateToProps)(CategoryList);

CategoryList.propTypes = {
  mainCategories: PropTypes.arrayOf(PropTypes.object).isRequired
};