import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';
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
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const renderSearch = (mobile, desktop) => {
    if (mobile || desktop) {
      return (
        <Grow in={searchIsShown} >
          <div className={classes.search}>
            <SearchIcon
              className={classes.searchIcon}
            />
            {inputBase(true)}
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
          {inputBase(false)}
        </Collapse>
      </div>
    )
  };

  const inputBase = (autoFocus) => (
    <InputBase
      placeholder="Search…"
      type="search"
      autoFocus={autoFocus}
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
      {renderSearch(isMobile, isDesktop)}
    </>
  )
};

const mapDispatchToProps = {
  productsLoaded
};

Search.propTypes = {
  searchIsShown: PropTypes.bool.isRequired,
  productsLoaded: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(Search));