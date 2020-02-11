import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom';
import { Collapse, Grow, useTheme, InputBase } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

import search from '../../services/search';
import getAllProducts from '../../services/getProducts';
import { productsLoaded } from '../../redux/actions/products';

import useStyles from './_search';

const Search = ({ productsLoaded, history, searchIsShown }) => {
  const classes = useStyles();
  const [searchedValue, setSearchedValue] = useState('');

  // useEffect(() => {
  //   getAllProducts()
  //     .then((products) => products)
  // }, []);

  const handleChange = (event) => {
    setSearchedValue(event.target.value);
    history.push('/products/search')
  };

  if (searchedValue) {
    search(searchedValue)
      .then((searchedProducts) => {
        productsLoaded(searchedProducts);
      })
  }

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const renderSearch = (desktop) => {
    if (desktop) {
      return (
        <Grow in={searchIsShown} >
          <div className={classes.search}>
            <SearchIcon
              className={classes.searchIcon}
            />
            {inputBase}
          </div>
        </Grow>
      )
    }

    return (
      <div className={classes.search}>
        <SearchIcon
          className={classes.searchIcon}
        />
        <Collapse in={Boolean(searchIsShown)} >
          {inputBase}
        </Collapse>
      </div>
    )
  };

  const inputBase = (
    <InputBase
      placeholder="Search…"
      type="search"
      autoFocus
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          handleChange(event)
        }
      }}
    />
  );

  return (
    <>
      {renderSearch(isDesktop)}
    </>
  )
};

const mapDispatchToProps = {
  productsLoaded
};

Search.propTypes = {
  searchIsShown: PropTypes.bool.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(Search));