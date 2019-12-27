import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import getAllCards from '../../services/dataBase'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative'
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Search() {
  const classes = useStyles();
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, []);

  return (
    <div className={classes.container}>
      <Autocomplete
        freeSolo
        options={data.products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
            {...params}
            variant="outlined"
            margin="none"
            placeholder="Search..."
          />
        )}
      />
    </div>
  )
}
