import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Category from './Category/category';
import useStyles from './styles';

function CategoryList({ mainCategories }) {
  // console.log('PROPS =', props);
  const classes = useStyles();

  return (
    <section className={classes.categories_list}>
      {mainCategories.map((category, index) => (
        <Category
          key={category.name}
          data={category}
          name={category.name}
          index={index}
        />
      ))}
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