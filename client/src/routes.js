import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog'
import ProductPage from './components/Product-page/product-page'
import NoMatch from './components/No-match/no-match'
import SummaryCart from './components/Summary-cart/summary-cart'
import RoutesName from './routes-list';

function Routes() {
  return (
    <Switch>
      <Route path={RoutesName.products} exact component={Catalog} />
      <Route
        path={`${RoutesName.products}/:id`}
        render={({ match, location }) => {
          const { id } = match.params;
          const { pathname: url } = location;
          console.log(id);
          console.log(url);
          return <ProductPage itemId={id} itemUrl={url} />
        }}
      />
      <Route path={RoutesName.cart} component={SummaryCart} />

      /*in the end*/
      <Route path={RoutesName.home} exact>
        <Home />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
export default Routes;