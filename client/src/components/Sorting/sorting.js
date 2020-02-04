import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  FormControl,
  InputLabel,
  Select
} from '@material-ui/core';

import useStyles from './_sorting';
import { PropTypes } from 'prop-types';
import sendSortingProducts from '../../redux/actions/sorting';

const Sorting = (props) => {
  const { products, sendSorting, currentCategory } = props;

  const classes = useStyles();

  const inputLabel = useRef(null);

  const [state, setState] = useState({
    sort: '',
  });

  const sortedList = products;
  let sortedCategory = '';

  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    getCurrentCategory(currentCategory);
  }, [currentCategory]);

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const getCurrentCategory = (category) => {
    if (sortedCategory !== category || sortedCategory !== '') {
      handleChange('sort', '');
      sendSorting([], '');
    }
  };

  const getSortedList = (event) => {
    const type = event.target.value;

    handleChange('sort', type);
    sortedCategory = currentCategory;

    switch (type) {
      case 'low-to-high':
        sortedList.sort((a, b) => a.currentPrice - b.currentPrice)
        break;

      case 'high-to-low':
        sortedList.sort((a, b) => b.currentPrice - a.currentPrice);
        break;

      case 'sale-items':
        sortedList.sort((a) => {
          if (!a.previousPrice) {
            return 1;
          }
          return -1;
        })
        break;

      default:
        return sortedList;
    }
    return sendSorting(sortedList, type);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-sorting-filter" className={classes.root}>
                Sorting by:
      </InputLabel>
      <Select
        native
        value={state.sort}
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
  sortedProducts: state.sortingReducer.sortedProducts,
  currentCategory: state.categoriesReducer.catalogLocation
});

const mapDispatchToProps = (dispatch) => ({
  sendSorting: (list, type) => dispatch(sendSortingProducts(list, type))
});

Sorting.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendSorting: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
