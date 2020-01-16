import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog'
import ProductPage from './components/Product-page/product-page'
import NoMatch from './components/No-match/no-match'
import SummaryCart from './components/Summary-cart/summary-cart'
import RoutesName from './routes-list';
import AboutUs from './components/About-us/about-us';
import Contacts from './components/Contacts/contacts';
import SignUp from './components/SignUp/sign-up'

export default function Routes() {
  return (
    <Switch>
      <Route path={RoutesName.signUp} component={SignUp} />
      <Route path={RoutesName.products} exact component={Catalog} />
      <Route
        path={`${RoutesName.products}/cooking/:subCategory`}
        exact
        render={({ match, location }) => {
          const { subCategory } = match.params;
          const { pathname: url } = location;
          return <Catalog category={subCategory} />
        }}
      />
      <Route
        path={`${RoutesName.products}/preparing/:subCategory`}
        exact
        render={({ match, location }) => {
          const { subCategory } = match.params;
          const { pathname: url } = location;
          return <Catalog category={subCategory} />
        }}
      />
      <Route
        path={`${RoutesName.products}/dining/:subCategory`}
        exact
        render={({ match, location }) => {
          const { subCategory } = match.params;
          const { pathname: url } = location;
          return <Catalog category={subCategory} />
        }}
      />
      <Route
        path={`${RoutesName.products}/drinking/:subCategory`}
        exact
        render={({ match, location }) => {
          const { subCategory } = match.params;
          const { pathname: url } = location;
          return <Catalog category={subCategory} />
        }}
      />
      <Route
        path={`${RoutesName.products}/:category`}
        render={({ match, location }) => {
          const { category } = match.params;
          const { pathname: url } = location;
          console.log('category =', category);
          console.log(url);
          return <Catalog category={category} />
        }}
      />
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
      <Route path={RoutesName.aboutUs} component={AboutUs} />
      <Route path={RoutesName.contacts} component={Contacts} />

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