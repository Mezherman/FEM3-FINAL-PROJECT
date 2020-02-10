import { Link } from 'react-router-dom';
import { Badge, IconButton, MenuItem } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RoutesName from '../../../routes-list';
import useStyles from '../_header';

const FavouritesIcon = ({ totalFavoritesQty }) => {
  const classes = useStyles();
  return (
    <MenuItem className={classes.headerMenuItem}>
      <Link to={RoutesName.favorites}>
        <IconButton edge="end" className={classes.iconButton}>
          <Badge badgeContent={totalFavoritesQty.toString()} color="error">
            <FavoriteBorderIcon fontSize="large" className={classes.iconsStyle} />
          </Badge>
        </IconButton>
        <span className={classes.menuTitle}>Favorites</span>
      </Link>
    </MenuItem>
  )
};

export default FavouritesIcon;

FavouritesIcon.propTypes = {
  totalFavoritesQty: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};
