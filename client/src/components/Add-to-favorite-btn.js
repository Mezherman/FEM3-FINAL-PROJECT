import React from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { addFavoritesToDB, updateFavoriteProducts } from '../services/favorites';

export default function AddToFavoriteBtn ({ favorites, itemId, favoritesAdded }) {
  const isFavorite = favorites.find((product) => product._id === itemId);
  return (
    <IconButton onClick={() => {
      const favoritesArr = [...favorites]
      if (isFavorite) {
        const index = favoritesArr.findIndex((product) => product._id === itemId)
        // console.log('index=', index);
        favoritesArr.splice(index, 1);
        updateFavoriteProducts(favoritesArr).then((favoritesList) => {
          favoritesAdded(favoritesList.products)
        })
      } else {
        addFavoritesToDB(itemId).then((favoritesList) => {
          favoritesAdded(favoritesList.products)
        })
      }
    }}
    >

      {isFavorite ? (
        <FavoriteIcon color="primary" />)
        : (<FavoriteBorderIcon color="primary" />
        )}
    </IconButton>

  )
}
