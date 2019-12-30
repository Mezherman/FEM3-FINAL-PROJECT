import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog'
import ProductPage from './components/Product-page/product-page'
import NoMatch from './components/No-match/no-match'

export default function Routes() {
  return (
    <Switch>
      <Route path="/products" exact component={Catalog} />
      <Route
        path="/products/:id"
        render={({ match, location }) => {
          const { id } = match.params;
          const { pathname: url } = location;
          return <ProductPage itemId={id} itemUrl={url} />
        }}
      />
      <Route path to="/" exact>
        <Home />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}