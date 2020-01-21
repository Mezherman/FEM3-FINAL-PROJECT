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
  const { assortment, products, productsLoading, fetchProducts } = props;
  // console.log('products =', products);
  // console.log('PROPS =', props);
  const classes = useStyles();

  const [favorites, setFavorites] = useState([]);

  const getFavorites = (data) => {
    // setFavorites({ favorites: favorites })
    console.log('favor from card')
    console.log(data)
  }
  useEffect(() => {
    fetchProducts(assortment);
  }, [assortment, fetchProducts]);

  return (
    <div className={classes.productList}>
      {productsLoading && <Spinner />}
      {!productsLoading &&
      products.map((product) => (
        <Grid item md={6} lg={4} key={product.itemNo}>
          <ProductCard
            product={product}
            getFavorites={getFavorites}
          />
        </Grid>
      ))}
    </div>
  )
}


const mapStateToProps = (state) => state.productsReducer;

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (assortment) => {
    dispatch(productsRequested());
    if (assortment === 'all') {
      getAllProducts()
        .then((products) => dispatch(productsLoaded(products)))
        .catch((err) => dispatch(productsError(err)));
    } else {
      getProductsByCategory(assortment)
        .then((products) => {
          dispatch(productsLoaded(products));
        })
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

ProductList.propTypes = {
  assortment: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsLoading: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired
};