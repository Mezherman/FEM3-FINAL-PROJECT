import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search'
import { Link, Redirect, Route, withRouter } from 'react-router-dom';
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
    <div className={classes.container}>
      <SearchIcon
        className={classes.searchIcon}
      />

      <Autocomplete
        size="small"
        freeSolo
        options={data.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            className={classes.root}
            fullWidth
            {...params}
            variant="outlined"
            margin="none"
            placeholder="Search..."
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                handleChange(event);
                // setSearching(true)
              }
            }}
          />
        )}
      />
    </div>
  )
}

const mapStateToProps = () => {};

const mapDispatchToProps = {
  productsLoaded
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));