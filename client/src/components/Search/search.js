import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom';
import useStyles from './_search';
import search from '../../services/search';
import getAllProducts from '../../services/getProducts'
import RoutesName from '../../routes-list'

export default function Search() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => {
      setData(products);
    })
  }, []);

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase());
    // console.log('value => ', value)
  };

  const searchItem = {
    query: value
  };

  // search(searchItem)

  return (
    <div className={classes.container}>
      <SearchIcon
        className={classes.searchIcon}
      />
      <input type="search" placeholder="search" />
      {/*<Autocomplete*/}
      {/*  size="small"*/}
      {/*  freeSolo*/}
      {/*  options={data.map((option) => option.name)}*/}
      {/*  renderInput={(params) => (*/}
      {/*    <TextField*/}
      {/*      className={classes.root}*/}
      {/*      fullWidth*/}
      {/*      {...params}*/}
      {/*      variant="outlined"*/}
      {/*      margin="none"*/}
      {/*      placeholder="Search..."*/}
      {/*      onChange={handleChange}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*/>*/}
    </div>
  )
}