import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Container,
  useTheme,
  SwipeableDrawer,
  Button,
  useMediaQuery
} from '@material-ui/core';

import Filter from '../Filter/filter';
import ProductList from '../Product-list/product-list';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';

import useStyles from './_catalog';
import { productsError, productsLoaded, productsRequested } from '../../redux/actions/products';
import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import { getCategory } from '../../services/getCategories';
import { catalogLocation } from '../../redux/actions/categories';
import { getFilteredProducts } from '../../services/filter';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';
import BackgroundCatalog from './Background-catalog/backgroundCatalog';
import search from '../../services/search';

const Catalog = (props) => {
  const classes = useStyles();
  const {
    assortment,
    fetchProducts,
    fetchTopProducts,
    fetchTopProductsList,
    catalogLocation,
    productsList,
    searchedValue,
    fetchSearchedProducts
  } = props;
  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  useEffect(() => {
    const request = assortment === 'search' ? 'cooking' : assortment;
    getCategory(request)
      .then((response) => setTopList(response.topSellers));
  }, [assortment]);

  useEffect(() => {
    catalogLocation(assortment);
    console.log('Searched val =', searchedValue);
    if (searchedValue) {
      fetchSearchedProducts(searchedValue);
      return
    }
    fetchProducts(assortment);
  }, [assortment, catalogLocation, fetchProducts, fetchTopProducts, fetchTopProductsList, searchedValue]);

  const cardsToShowString = topList.toString();

  useEffect(() => {
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        setProductsToShow(response)
      })
  }, [cardsToShowString, topList]);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const toggleFilter = (open) => {
    setFilterIsOpen(open);
  };

  const filterRender = (desktop) => {
    if (desktop) {
      return (
        <div className={classes.filterDesktop}>
          <Filter />
        </div>
      )
    }
    return (
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
          open={Boolean(filterIsOpen)}
          onClose={() => toggleFilter(false)}
        >
          <Filter onClose={toggleFilter} />
        </SwipeableDrawer>
      </div>

    )
  }

  return (
    <>
      <Container maxWidth="xl">
        <ProductBreadcrumbs assortment={assortment} />
        {/* <BackgroundCatalog /> */}
        <Grid container spacing={2} className={classes.root}>
          <Grid item sm={12} md={4}>
            {filterRender(isDesktop)}
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
};

const mapStateToProps = (state) => ({
  catalog: state.categoriesReducer.catalog,
  // fetchProducts: state.productsReducer.fetchProducts,
  searchedValue: state.searchReducer ? state.searchReducer.searchedValue : '',
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (assortment, searchedValue) => {
    dispatch(productsRequested());
    getProductsByCategory(assortment)
      .then((products) => {
        dispatch(productsLoaded(products));
      })
  },
  fetchSearchedProducts: (searchedValue) => {
    console.log('Searched val =', searchedValue);
    // dispatch(productsRequested());
    search(searchedValue)
      .then((searchedProducts) => {
        console.log('WORKS');
        dispatch(productsLoaded(searchedProducts));
      })
      .catch((err) => {
        console.log('DOESNT WORK');
        dispatch(productsError(err))
      });
  },
  catalogLocation: (assortment) => dispatch(catalogLocation(assortment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

Catalog.propTypes = {
  assortment: PropTypes.string.isRequired
};
