import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
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
          options={products.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
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