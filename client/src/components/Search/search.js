import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import { Collapse, Grow, useTheme, InputBase } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import search from '../../services/search';
import storeSearchedValue from '../../redux/actions/search';

import useStyles from './_search';

const Search = ({ history, searchIsShown }) => {
  const classes = useStyles();
  const [searchedValue, setSearchedValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchedValue(event.target.value);
    history.push('/products/search')
  };

  dispatch(storeSearchedValue(searchedValue));

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

Search.propTypes = {
  searchIsShown: PropTypes.bool.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(Search);