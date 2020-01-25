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
import RoutesName from '../../routes-list';

function Search({ productsLoaded, history }) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => {
      setData(products);
    })
  }, []);

  const a = { test: 1 };
  let b = { ...a };
  b = { xyz: 3 };
  console.log('a =', a);
  console.log('b =', b);

  const [value, setValue] = useState('');
  const [isSearching, setSearching] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    history.push('/products/search')
    // console.log('value => ', value)
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
      {/*<input type="search" placeholder="search" />*/}
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

const mapStateToProps = (state) => {
};

const mapDispatchToProps = {
  productsLoaded
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
