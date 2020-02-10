import { Link } from 'react-router-dom';
import { Badge, IconButton, MenuItem } from '@material-ui/core';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector } from 'react-redux';
import RoutesName from '../../../routes-list';
import useStyles from '../_header';

const FavouritesIcon = () => {
  const classes = useStyles();
  const totalFavoritesQty = useSelector((state) => state.favoritesReducer.favorites.length);
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
