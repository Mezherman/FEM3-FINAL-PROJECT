import React, { useEffect, useState, useSelector } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Container, useTheme, SwipeableDrawer, Button, useMediaQuery } from '@material-ui/core';

import Filter from '../Filter/filter';
import ProductList from '../Product-list/product-list';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';

import useStyles from './_catalog';
import { productsError, productsLoaded, productsRequested } from '../../redux/actions/products';
import {
  topProductListRequested, topProductListLoaded, topProductsListError,
  topProductLoaded, topProductRequested, topProductsError
} from '../../redux/actions/carousel';

import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import { getCategory } from '../../services/getCategories';
import { catalogLocation } from '../../redux/actions/categories';
import { getFilteredProducts } from '../../services/filter';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';
import BackgroundCatalog from './Background-catalog/backgroundCatalog';

function Catalog({ assortment, fetchProducts, fetchTopProducts, fetchTopProductsList, catalogLocation, productsList }) {
  // console.log('productsList', productsList);
  const classes = useStyles();
  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    getCategory(assortment)
      .then((response) => setTopList(response.topSellers));
  }, [assortment]);

  const cardsToShowString = topList.toString();
  // console.log(cardsToShowString);
  //
  useEffect(() => {
    // const cardsToShowString = topList.toString();
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        setProductsToShow(response)
      })
  }, [topList]);

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const toggleFilter = (open) => {
    setFilterIsOpen(open);
  };

  useEffect(() => {
    // console.log(123456);
    catalogLocation(assortment);
    // fetchTopProductsList(assortment);
    // fetchTopProducts(productsList);
    fetchProducts(assortment);
  }, [assortment, catalogLocation, fetchTopProducts, fetchTopProductsList]);

  return (
    <>
      <Container maxWidth="xl">
        <ProductBreadcrumbs assortment={assortment} />
        {/*<BackgroundCatalog />*/}
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} md={4}>
            {isDesktop
              ? (
                <div className={classes.filterDesktop}>
                  <Filter />
                </div>
              )
              : (
                <div className={classes.filterMobile}>
                  <Button
                    onClick={toggleFilter}
                    className={classes.button}
                  >
                  Open Filter
                  </Button>

                  <SwipeableDrawer
                    onOpen={() => toggleFilter(true)}
                    anchor="bottom"
                    open={filterIsOpen}
                    onClose={() => toggleFilter(false)}
                  >
                    <Filter onClose={toggleFilter} />
                  </SwipeableDrawer>
                </div>
              )}

          </Grid>
          <Grid item xs={12} md={8}>
            <ProductList assortment={assortment} />
          </Grid>
          <Grid item xs={12}>
            <ProductCardCarousel
              products={productsToShow}
              label="most popular products"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => ({
  catalog: state.categoriesReducer.catalog,
  fetchProducts: state.productsReducer.fetchProducts,
  // fetchTopProductsList: state.carouselReducer.fetchTopProductsList,
  // fetchTopProducts: state.carouselReducer.fetchTopProducts,
  // productsList: state.carouselReducer.productsList
});

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
  },
  // fetchTopProductsList: (assortment) => {
  //   dispatch(topProductListRequested());
  //   getCategory(assortment)
  //     .then((productsList) => dispatch(topProductListLoaded(productsList)))
  //     .catch((err) => dispatch(topProductsListError(err)))
  // },
  // fetchTopProducts: (productsList) => {
  //   console.log(productsList);
  //   dispatch(topProductRequested());
  //   getFilteredProducts(`itemNo=${productsList.toString()}`)
  //     .then((products) => dispatch(topProductLoaded( products )))
  //     .catch((err) => dispatch(topProductsError(err)))
  // },
  catalogLocation: (assortment) => dispatch(catalogLocation(assortment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

Catalog.propTypes = {
  assortment: PropTypes.string.isRequired
};
