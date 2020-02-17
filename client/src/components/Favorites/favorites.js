import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import RoutesName from '../../routes-list'
import ProductList from '../Product-list/product-list';

export default function Favorites() {
  const { loggedIn } = useSelector((state) => state.user);
  const { favorites } = useSelector((state) => state.favoritesReducer);

  if (loggedIn) {
    return (
      <Container maxWidth="xl" style={{ minHeight: '52vh' }}>
        {
          !favorites.length
            ? <h2>NOTHING ADDED TO FAVORITES LIST.</h2>
            : <ProductList productsResult={{ products: favorites, length: favorites.length }} />
        }
      </Container>
    )
  }

  return <Redirect to={RoutesName.home} />
}
