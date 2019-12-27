import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-roboto';

import Header from './components/Header/header'
import CategoryList from './components/Category-list/category-list'
import Footer from './components/Footer/footer'
import Carousels from './components/Nuka-carousel/nukaCarousel';
import Catalog from './components/Catalog/catalog';
import ProductPage from './components/Product-page/product-page';
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';

export default function App(props) {
  return (
    <Container>
      <Router>
        <Header />
        <ScrollToAnchor />
        <Route path to="/" exact>
          <Carousels
            isProductSlider={false}
            autoPlay
            autoplayInterval={2000}
            wrapAround
            slideIndex={0}
            slidesToShow={1}
          />
        </Route>
        <Route path to="/" exact>
          <CategoryList />
        </Route>
        <Route path to="/" exact>
          <Carousels
            autoPlay
            autoplayInterval={2000}
            wrapAround
            slideIndex={0}
            slidesToShow={1}
          />
        </Route>
        <Route path="/products" exact component={Catalog} />
        <Route
          path="/products/:id"
          render={({ match, location }) => {
            const { id } = match.params;
            const { pathname: url } = location;
            return <ProductPage itemId={id} itemUrl={url} />
          }}
        />
      </Router>
      <Footer />
      <ScrollTop {...props} />
    </Container>
  )
}
