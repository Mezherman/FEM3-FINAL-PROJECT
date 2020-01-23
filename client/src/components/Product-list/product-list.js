import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ProductCard from '../Product-card/product-card';
import Spinner from '../Spinner/spinner';

import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import { productsRequested, productsLoaded, productsError } from '../../redux/actions/products';

import useStyles from './_product-list';

function ProductList(props) {
  const { assortment, products, productsLoading } = props;
  console.log('products =', products);
  // console.log('PROPS =', props);
  const classes = useStyles();

  // const [favorites.js, setFavorites] = useState([1, 2, 3]);

  // useEffect(() => {
  //   setFavorites([1, 2, 3])
  // }, [])

  // const addToFavorite = (id) => {
  //   setFavorites(favorites.js.concat(id))
  // };


  return (
    <div className={classes.productList}>
      {productsLoading && <Spinner />}
      {!productsLoading &&
      products.map((product) => (
        <Grid item md={6} lg={4} key={product.itemNo}>
          <ProductCard
            product={product}
          />
        </Grid>
      ))}
    </div>
  )
}


const mapStateToProps = (state) => state.productsReducer;

export default connect(mapStateToProps)(ProductList)

ProductList.propTypes = {
  assortment: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsLoading: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired
};