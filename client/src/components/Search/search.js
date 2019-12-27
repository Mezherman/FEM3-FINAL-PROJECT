import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import getAllCards from '../../services/dataBase'

export default function Search() {
  const useStyles = makeStyles({
    overrides: {
      MuiOutlinedInput: {
        root: {
          flexWrap: 'nowrap',
          backgroundColor: 'red'
        }
      }
    }
  });
  // state = {
  //   products: []
  // }

  // componentDidMount() {
  //   getAllCards()
  //     .then((data) => this.setState({
  //       products: data.products
  //     }))
  // }
  //
  // render () {
  //   const { products } = this.state;

  const classes = useStyles();

  return (

    <div style={{
      width: '500px',
      position: 'relative'
    }}
    >
      <SearchIcon style={{
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      />
      <Autocomplete
        freeSolo
        // options={products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            className={classes.overrides.MuiOutlinedInput}
            fullWidth
            {...params}
            variant="outlined"
            margin="normal"
            placeholder="Search..."
          />
        )}
      />

    </div>
  )
}
