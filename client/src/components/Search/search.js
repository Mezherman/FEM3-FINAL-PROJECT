import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import getAllCards from '../../services/dataBase'

export default class Search extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    getAllCards()
      .then((data) => this.setState({
        products: data.products
      }))
  }

  render () {
    const { products } = this.state;
    return (
      <div style={{
        position: 'relative'
      }}
      >
        <Autocomplete
          freeSolo
          options={products.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
              }}

              variant="outlined"
              margin="normal"
              placeholder="Search..."
            />
          )}
        />

        <Autocomplete
          freeSolo
          options={products.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              InputProps={{
                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              }}
              fullWidth
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
}