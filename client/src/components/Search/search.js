import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search'
import getAllCards from '../../services/dataBase';
import useStyles from './_search';
import search from '../../services/search';

export default function Search() {
  const classes = useStyles();
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, []);

  // const [value, setValue] = useState('');
  //
  // const handleChange = (event) => {
  //   setValue(event.target.value.toLowerCase());
  //   console.log('value => ', value)
  // };
  //
  // let searchItem = {
  //   "query": value
  // };
  //
  // useEffect(() => {
  //   search(searchItem)
  // })

  return (
    <div className={classes.container}>
      <SearchIcon
        className={classes.searchIcon}
      />
      <Autocomplete
        size="small"
        freeSolo
        options={data.products.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            className={classes.root}
            fullWidth
            {...params}
            variant="outlined"
            margin="none"
            placeholder="Search..."
            // onChange={handleChange}
          />
        )}
      />
    </div>
  )
}