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
import Sorting from '../Sorting/sorting';

import useStyles from './_catalog';
import { productsError, productsLoaded, productsRequested } from '../../redux/actions/products';
import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import { getCategory } from '../../services/getCategories';
import { catalogLocation } from '../../redux/actions/categories';
import {
  getFilteredProducts,
  getInfinityFilteredProducts,
  parseToFilterValue
} from '../../services/filter';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';
import { filterType, resetFilters } from '../../redux/actions/filter';

import BackgroundCatalog from './Background-catalog/backgroundCatalog';
import search from '../../services/search';

const Catalog = (props) => {
  const {
    assortment,
    fetchProducts,
    setCatalogLocation,
    productsList,
    catalogLocation,
    catalog,
    filter,
    // products,
    filterType,
    productsLoaded,
    resetFilters
  } = props;
  const { filterResults, filterPages, sort, filterType: queryString } = filter;
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [productsResult, setProducts] = useState({ products: [], length: 0 });
  const { allCategories } = catalog;

  const getCurrentCategory = () => {
    if (catalogLocation !== assortment) {
      resetFilters();
    }
  };
  getCurrentCategory();
  useEffect(() => {
    getCategory(assortment)
      .then((response) => setTopList(response.topSellers));

    setCatalogLocation(assortment);
    filterHandle();
  }, [assortment, sort, filterPages]);

  const cardsToShowString = topList.toString();

  useEffect(() => {
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        setProductsToShow(response)
      })
  }, [cardsToShowString, topList]);

  const filterHandle = () => {
    const valToFilter = parseToFilterValue(filterResults, sort, filterPages, allCategories, assortment);
    console.log(valToFilter);
    getInfinityFilteredProducts(valToFilter)
      .then((newPoducts) => {
        console.log(newPoducts);
        setProducts(newPoducts);
      })
      .then(toggleFilter(false));
  }

  const toggleFilter = (open) => {
    setFilterIsOpen(open);
  };

  const filterRender = (desktop) => {
    if (desktop) {
      return (
        <div className={classes.filterDesktop}>
          <Filter filterHandle={filterHandle} />
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
          <Filter onClose={toggleFilter} filterHandle={filterHandle} />
        </SwipeableDrawer>
      </div>

    )
  };

  console.log(productsResult);

  return (
    <>
      <Container maxWidth="xl">
        <ProductBreadcrumbs assortment={assortment} />
        <Grid container spacing={2} className={classes.root}>
          <Grid item sm={12} md={4}>
            {filterRender(isDesktop)}
          </Grid>
          <Grid item xs={12} md={8}>
            <Sorting sort={sort} />
            <ProductList assortment={assortment} productsResult={productsResult} />
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
  catalogLocation: state.categoriesReducer.catalogLocation,
  filter: state.filterReducer,
  products: state.productsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  resetFilters: () => dispatch(resetFilters()),
  setCatalogLocation: (assortment) => dispatch(catalogLocation(assortment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

Catalog.propTypes = {
  assortment: PropTypes.string.isRequired
};
