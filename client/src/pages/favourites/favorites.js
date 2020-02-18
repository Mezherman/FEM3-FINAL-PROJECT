import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

import ProductList from '../../components/Product-list/product-list';

export default function Favorites() {
  const { favorites } = useSelector((state) => state.favoritesReducer);

  return (
    <Container maxWidth="xl">
    {/*<Container maxWidth="xl" style={{ minHeight: '52vh' }}>*/}
      {
        !favorites.length
          ? <h2>NOTHING ADDED TO FAVORITES.</h2>
          : <ProductList productsResult={{ products: favorites, length: favorites.length }} />
      }
    </Container>
  )
}
