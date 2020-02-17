import React, { useRef, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  Grid
} from '@material-ui/core';

import { sortingProducts, sortingReset } from '../../redux/actions/products';

import useStyles from './_sorting';

const Sorting = (props) => {
  const {
    products, currentCategory, sendSortingProducts, sorting, reset, filter
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
      filterType = filter;
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
    <Grid container justify="flex-end">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-sorting-filter" className={classes.label}>
          Sorting by:
        </InputLabel>
        <Select
          native
          value={sorting}
          onChange={getSortedList}
          labelWidth={labelWidth}
          inputProps={{
            name: 'sorting',
            id: 'outlined-sorting-filter',
            className: classes.input
          }}
        >
          <option value="" />
          <option value="low-to-high">Price: low to high</option>
          <option value="high-to-low">Price: high to low</option>
          <option value="sale-items">Sale items first</option>
        </Select>
      </FormControl>
    </Grid>
  )
};

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  sorting: state.productsReducer.sorting,
  currentCategory: state.categoriesReducer.catalogLocation,
  filter: state.filterReducer.filterType,
});

const mapDispatchToProps = (dispatch) => ({
  sendSortingProducts:
    (sortingList, sortingType) => dispatch(sortingProducts(sortingList, sortingType)),
  reset: () => dispatch(sortingReset()),
});

Sorting.propTypes = {
  products: PropTypes.arrayOf([PropTypes.object]).isRequired,
  currentCategory: PropTypes.string.isRequired,
  sendSortingProducts: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
