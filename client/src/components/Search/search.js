import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import { withRouter } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import { Collapse, Grow, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import useStyles from './_search';
import search from '../../services/search';
import getAllProducts from '../../services/getProducts'
import { productsLoaded } from '../../redux/actions/products'

function Search({ productsLoaded, history, searchIsShown }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setData(products);
      })
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    history.push('/products/search')
  };

  const searchItem = {
    query: value
  };

  if (value) {
    search(searchItem)
      .then((response) => {
        productsLoaded(response);
      })
      .then(() => setValue(''))
  }

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const inputBase = (
    <InputBase
      placeholder="Search…"
      type="search"
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
  )

  return (
    <>
      {isDesktop ? (
        <Grow in={searchIsShown} >
          <div className={classes.search}>
            <SearchIcon
              className={classes.searchIcon}
            />
            {inputBase}
          </div>
        </Grow>
      )
        : (
          <div className={classes.search}>
            <SearchIcon
              className={classes.searchIcon}
            />
            <Collapse in={searchIsShown} >
              {inputBase}
            </Collapse>
          </div>
        )}
    </>
  )
}

const mapStateToProps = () => {};

const mapDispatchToProps = {
  productsLoaded
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));