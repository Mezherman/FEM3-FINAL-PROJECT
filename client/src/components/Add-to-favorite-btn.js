import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react';

export default function AddToFavoriteBtn ({favorites, itemNo, favoritesAdded}) {
  const isFavorite = favorites.includes(itemNo);

  return (
    <IconButton onClick={() => {
      // console.log('!!!!!', favorites);
      const favoritesArr = [...favorites]
      if (favoritesArr.includes(itemNo)) {
        // console.log(favoritesArr);
        const index = favoritesArr.findIndex((item) => item === itemNo)
        // console.log('index=', index);
        favoritesArr.splice(index, 1)
      } else {
        favoritesArr.push(itemNo)
      }
      // console.log(favoritesArr);
      favoritesAdded(favoritesArr)
    }}
    >

      {isFavorite ? (
        <FavoriteIcon color="primary" />)
        : (<FavoriteBorderIcon color="primary" />
        )}
    </IconButton>

  )
}
