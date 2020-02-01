import React from 'react';
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { addFavoriteProduct, deleteFavoriteProduct, deleteFavoritesList } from '../../services/favorites';
import { favoritesCleared, favoritesUpdated } from '../../redux/actions/favorites';

function AddToFavoriteBtn({ favorites, itemId, favoritesUpdated, favoritesCleared, loggedIn }) {
  const isFavorite = favorites.find((product) => product._id === itemId);
  // console.log('isFav', !!isFavorite);

  const handleClick = () => {
    if (!loggedIn) return;
    if (isFavorite) {
      if (favorites.length === 1) {
        deleteFavoritesList().then(() => {
          favoritesCleared();
        });
      } else {
        deleteFavoriteProduct(itemId).then((favoritesList) => {
          favoritesUpdated(favoritesList.products)
        })
      }
    } else {
      addFavoriteProduct(itemId).then((favoritesList) => {
        favoritesUpdated(favoritesList.products)
      })
    }
  };

  return (
    <IconButton onClick={handleClick}>
      {isFavorite
        ? <FavoriteIcon color="primary" />
        : <FavoriteBorderIcon color="primary" />}
    </IconButton>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = {
  favoritesUpdated,
  favoritesCleared
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteBtn)
