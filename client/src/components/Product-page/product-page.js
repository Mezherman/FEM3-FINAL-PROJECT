import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Container, Box } from '@material-ui/core';
import { getProductsByItemNo } from '../../services/getProducts';
import ProductDetail from '../Product-detail/product-detail';
import { productsRequested, productsLoaded } from '../../redux/actions/products';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';

import Spinner from '../Spinner/spinner';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';
import { getFilteredProducts } from '../../services/filter';
import Comment from '../Comment/comment';
import getCurrentProduct from '../../redux/actions/currentProduct';
import { getCategory } from '../../services/getCategories';

function ProductPage(props) {
  // console.log('PROPS =', props);
  const { assortment, itemNo, chosenProduct, fetchProduct, productsLoading, setProducts, getChosenProduct } = props;
  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    if (!chosenProduct) {
      fetchProduct(itemNo);
    } else {
      getChosenProduct(chosenProduct);
    }
  }, [chosenProduct, itemNo, fetchProduct]);

  useEffect(() => {
    getCategory(chosenProduct.categories)
      .then((response) => setTopList(response.topSellers));
  }, [assortment]);
  //
  const cardsToShowString = topList.toString();

  useEffect(() => {
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        // console.log('resp', response);
        setProductsToShow(response)
      })
  }, [cardsToShowString]);
  // console.log('products slider', productsToShow);

  return (
    <>
      {productsLoading
        ? <Spinner />
        : (
          <>
            <Container maxWidth="xl">
              <ProductBreadcrumbs assortment={assortment} />
              <div className="product-essential">
                <Grid key={chosenProduct.itemNo}>
                  <ProductDetail
                    product={chosenProduct}
                  />
                </Grid>
              </div>
              <ProductCardCarousel products={productsToShow} label="top" />
              <Comment />
            </Container>
          </>
        )}
    </>
  )
}

const mapStateToProps = (state, { itemNo }) => {
  // console.log('STATE =', state);
  const chosenProduct = state.productsReducer.products.find((product) => (
    product.itemNo === itemNo
  ));

  // console.log('chosen prod MSTP =', chosenProduct);
  return {
    chosenProduct,
    productsLoading: state.productsReducer.productsLoading
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (itemNo) => {
    dispatch(productsRequested());
    getProductsByItemNo(itemNo)
      .then((response) => {
        dispatch(productsLoaded([response.data]));
      })
  },
  getChosenProduct: (product) => dispatch(getCurrentProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
