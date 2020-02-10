import { IconButton, MenuItem } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../_header';

const SearchIcon = ({ toggleSearch }) => {
  const classes = useStyles();
  return (
    <MenuItem className={classes.headerMenuItem}>
      <IconButton onClick={toggleSearch} edge="end" className={classes.iconButton}>
        <SearchIcon fontSize="large" className={classes.iconsStyle} />
        <span className={classes.menuTitle}>Search</span>
      </IconButton>
    </MenuItem>
  )
};

export default SearchIcon;

SearchIcon.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
};
