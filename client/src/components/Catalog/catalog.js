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
import getSearchedProducts from '../../services/search';

const Catalog = (props) => {
  const classes = useStyles();
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
    resetFilters,
    searchedValue
  } = props;
  const { filterResults, filterPages, sort, filterType: queryString } = filter;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [filterIsOpenMobile, setFilterIsOpenMobile] = useState(false);
  const [productsResult, setProducts] = useState({ products: [], length: 0 });
  // const [searchedResult, setSearchedResult] = useState([]);
  const { allCategories } = catalog;

  const getCurrentCategory = () => {
    if (catalogLocation !== assortment) {
      resetFilters();
    }
  };

  getCurrentCategory();

  useEffect(() => {
    const request = assortment === 'search' ? 'cooking' : assortment;
    // console.log(request);
    getCategory(request)
      .then((response) => setTopList(response.topSellers));

    setCatalogLocation(assortment);
    handleProductsRequest();
  }, [assortment, sort, filterPages, searchedValue]);

  const cardsToShowString = topList.toString();

  useEffect(() => {
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        setProductsToShow(response)
      })
  }, [cardsToShowString, topList]);

  const handleProductsRequest = async () => {
    let searchedResult = [];
    if (assortment === 'search') {
      await getSearchedProducts(searchedValue)
        .then((products) => {
          searchedResult = products.map((product) => product.itemNo);
          setProducts({
            products,
            productsQuantity: products.length
          });
        })
    }
    // console.log('searchedResult =', searchedResult);

    const valToFilter = parseToFilterValue(
      searchedResult,
      filterResults,
      sort,
      filterPages,
      allCategories,
      assortment
    );
    console.log('valToFilter =', valToFilter);

    getInfinityFilteredProducts(valToFilter)
      .then((products) => {
        console.log('in infinity =', products);
        setProducts(products);
      });

    toggleFilterMobile(false);
  };

  const toggleFilterMobile = (open) => {
    setFilterIsOpenMobile(open);
  };

  const filterRender = (desktop) => {
    if (desktop) {
      return (
        <div className={classes.filterDesktop}>
          <Filter filterHandle={handleProductsRequest} />
        </div>
      )
    }

    return (
      <div className={classes.filterMobile}>
        <Button
          onClick={toggleFilterMobile}
          className={classes.button}
        >
          Open Filter
        </Button>

        <SwipeableDrawer
          onOpen={() => toggleFilterMobile(true)}
          anchor="bottom"
          open={Boolean(filterIsOpenMobile)}
          onClose={() => toggleFilterMobile(false)}
        >
          <Filter onClose={toggleFilterMobile} filterHandle={handleProductsRequest} />
        </SwipeableDrawer>
      </div>
    )
  };

  // console.log(productsResult);

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
            <ProductList productsResult={productsResult} />
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
  searchedValue: state.searchReducer.searchedValue
});

const mapDispatchToProps = (dispatch) => ({
  resetFilters: () => dispatch(resetFilters()),
  setCatalogLocation: (assortment) => dispatch(catalogLocation(assortment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

Catalog.propTypes = {
  assortment: PropTypes.string.isRequired
};
