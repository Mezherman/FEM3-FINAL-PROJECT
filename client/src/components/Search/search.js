import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import { withRouter } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './_search';
import search from '../../services/search';
import getAllProducts from '../../services/getProducts'
import { productsLoaded } from '../../redux/actions/products'

function Search({ productsLoaded, history }) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => {
      setData(products);
    })
  }, []);

  const [value, setValue] = useState('');

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
      });
  }

  return (
    <>
      <div className={classes.search}>
        <SearchIcon
          className={classes.searchIcon}
        />
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
      </div>
    </>
  )
}

const mapStateToProps = () => {};

const mapDispatchToProps = {
  productsLoaded
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));