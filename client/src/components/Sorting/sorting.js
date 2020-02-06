import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  FormControl,
  InputLabel,
  Select
} from '@material-ui/core';

import { PropTypes } from 'prop-types';
import useStyles from './_sorting';
import { sortingProducts, sortingReset } from '../../redux/actions/products';
import { resetFilterType } from '../../redux/actions/filter';

const Sorting = (props) => {
  const {
    products, currentCategory, sendSortingProducts, sorting, reset, filter, resetFilterType
  } = props;
  const classes = useStyles();
  const inputLabel = useRef(null);
  let sortedCategory = '';
  let filterType = '';

  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    getCurrentCategory();
    getCurrentFilterType();
  }, [currentCategory, filter]);

  const getCurrentCategory = () => {
    if (!sortedCategory && (sortedCategory !== currentCategory)) {
      reset();
    }
  };

  const getCurrentFilterType = () => {
    if (!filterType && (filterType !== filter)) {
      resetFilterType();
      reset();
    }
  };

  const getSortedList = (event) => {
    const type = event.target.value;
    sortedCategory = currentCategory;
    filterType = filter;

    switch (type) {
      case 'low-to-high':
        products.sort((a, b) => a.currentPrice - b.currentPrice);
        break;

      case 'high-to-low':
        products.sort((a, b) => b.currentPrice - a.currentPrice);
        break;

      case 'sale-items':
        products.sort((a) => {
          if (!a.previousPrice) {
            return 1;
          }
          return -1;
        });
        break;

      default:
        return products;
    }
    return sendSortingProducts(products, type);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-sorting-filter" className={classes.root}>
                Sorting by:
      </InputLabel>
      <Select
        native
        value={sorting}
        // value={state.sort}
        onChange={getSortedList}
        labelWidth={labelWidth}
        inputProps={{
          name: 'sorting',
          id: 'outlined-sorting-filter',
        }}
      >
        <option value="" />
        <option value="low-to-high">Price: low to high</option>
        <option value="high-to-low">Price: high to low</option>
        <option value="sale-items">Sale items first</option>
      </Select>
    </FormControl>
  )
};

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  sorting: state.productsReducer.sorting,
  currentCategory: state.categoriesReducer.catalogLocation,
  filter: state.filterReducer.filterType,
});

const mapDispatchToProps = (dispatch) => ({
  sendSortingProducts: (sortingList, sortingType) => dispatch(sortingProducts(sortingList, sortingType)),
  reset: () => dispatch(sortingReset()),
  resetFilterType: () => dispatch(resetFilterType())
});

Sorting.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendSorting: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
