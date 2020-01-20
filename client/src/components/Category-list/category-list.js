import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Category from './Category/category';
import useStyles from './styles';
import { setMainCategories } from '../../redux/actions/categories';

function CategoryList(props) {
  // console.log('PROPS =', props);
  const { mainCategories, setMainCategories } = props;
  const classes = useStyles();

  useEffect(() => {
    setMainCategories(mainCategories)
  });

  return (
    <section className={classes.categories_list}>
      {mainCategories &&
      mainCategories.map((category, index) => (
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

function mapStateToProps(state) {
  // console.log('STORE STATE =', state);
  return {
    mainCategories: state.categoriesReducer.mainCategories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMainCategories: (mainCategories) => dispatch(setMainCategories(mainCategories))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
