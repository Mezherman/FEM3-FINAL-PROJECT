import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import getAllCards from '../../services/dataBase';
import ProductDetail from '../Product-detail/product-detail';
import { getProductsByItemNo } from '../../services/getProducts';

export default function ProductPage({ itemId }) {
  const [data, setData] = useState({ imageUrls: [] });

  useEffect(() => {
    getProductsByItemNo(itemId)
      .then((response) => {
        console.log('resp =', response);
        setData(response.data)
      })
  }, [itemId])
  // useEffect(() => {
  //   getAllCards()
  //     .then((response) => {
  //       setData({ products: response.products })
  //     })
  // }, []);
  console.log('id from product-page', itemId);
  console.log('product from product-page', data);
  // const filteredProduct = data.products.filter((product) => itemUrl.indexOf(product._id) !== -1);
  return (
    <div className="product-essential">
      <Grid >
        <ProductDetail
          product={data}
        />
      </Grid>
      {/* { data.map((product) => ( */}
      {/*  <Grid key={product.id}> */}
      {/*    <ProductDetail */}
      {/*      product={product} */}
      {/*    /> */}
      {/*  </Grid> */}
      {/* ))} */}
    </div>
  )
}
ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
