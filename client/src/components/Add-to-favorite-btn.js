import React from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { addFavoritesToDB } from '../services/favorites';

export default function AddToFavoriteBtn ({favorites, itemId, favoritesAdded}) {
  console.log(favorites);
  const isFavorite = favorites.includes(itemId);

  return (
    <IconButton onClick={() => {
      // console.log('!!!!!', favorites);
      // const favoritesArr = [...favorites]
      // if (favoritesArr.includes(itemNo)) {
      //   // console.log(favoritesArr);
      //   const index = favoritesArr.findIndex((item) => item === itemNo)
      //   // console.log('index=', index);
      //   favoritesArr.splice(index, 1)
      // } else {
      //   favoritesArr.push(itemNo)
      // }
      // console.log(favoritesArr);
      addFavoritesToDB(itemId).then((favoritesList) => {
        console.log('favor list =', favoritesList);
        favoritesAdded(favoritesList.data.products)
      })

    }}
    >

      {isFavorite ? (
        <FavoriteIcon color="primary" />)
        : (<FavoriteBorderIcon color="primary" />
        )}
    </IconButton>

  )
}
