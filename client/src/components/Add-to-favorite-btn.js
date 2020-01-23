import React from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { addFavoritesToDB, updateFavoriteProducts } from '../services/favorites';

export default function AddToFavoriteBtn ({ favorites, itemId, favoritesAdded }) {
  // console.log('id', itemId);
  // console.log('from props', favorites);
  const isFavorite = favorites.find((product) => product._id === itemId);
  console.log('isFav', isFavorite);
  return (
    <IconButton onClick={() => {
      const favoritesArr = [...favorites]
      if (isFavorite) {
        // console.log(favoritesArr);
        const index = favoritesArr.findIndex((product) => product._id === itemId)
        // console.log('index=', index);
        favoritesArr.splice(index, 1);
        console.log('ARRAY', favoritesArr);
        updateFavoriteProducts(favoritesArr).then((favoritesList) => {
          console.log('favor list =', favoritesList);
          favoritesAdded(favoritesList.products)
        })
      } else {
        addFavoritesToDB(itemId).then((favoritesList) => {
          console.log('favor list =', favoritesList);
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
