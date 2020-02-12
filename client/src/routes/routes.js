import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';
import AdminRoute from './adminRoute';
import Home from '../components/Home/home';
import Catalog from '../components/Catalog/catalog'
import ProductPage from '../components/Product-page/product-page'
import NoMatch from '../components/No-match/no-match'
import SummaryCart from '../components/Summary-cart/summary-cart'
import RoutesName from '../routes-list';
import AboutUs from '../components/About-us/about-us';
import Contacts from '../components/Contacts/contacts';
import SignUp from '../components/SignUp/sign-up'
import Delivery from '../components/Delivery/delivery';
import PersonalData from '../components/My-account/Personal-data/personal-data';
import LoginModal from '../components/Login-modal-window/login-modal-window';
import Favorites from '../components/Favorites/favorites'
import Checkout from '../components/Checkout/checkout';
import CheckoutStatus from '../components/Checkout/Status/status';
import CustomerOrders from '../components/My-account/Customer-orders/customer-orders';
import Forbidden from '../components/Forbidden/forbidden'
import AdminHome from '../components/Admin/Home/home'

export default function Routes() {
  const { loggedIn, customer } = useSelector((state) => state.user);
  const mainCategory = useSelector((state) => state.categoriesReducer.catalog.mainCategories);
  const history = useHistory();
  const [modalIsVisible, setModalVisibility] = useState(!loggedIn);
  const closeModal = () => {
    setModalVisibility(false);
  };

  if (!loggedIn && !modalIsVisible) {
    setModalVisibility(true);
    history.push(RoutesName.home);
  }

  return (
    <Switch>
      <Route path={RoutesName.signUp} component={SignUp} />
      <Route
        path={RoutesName.login}
        render={() => (
          <div>
            <Home />
            <LoginModal
              isLoggedIn={loggedIn}
              onModalClose={closeModal}
              open={modalIsVisible}
            />
          </div>
        )}
      />
      <ProtectedRoute
        exact
        path={RoutesName.personalData}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={() => <PersonalData isLoggedIn={loggedIn} />}
      />
      <ProtectedRoute
        exact
        path={RoutesName.myOrders}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={CustomerOrders}
      />
      <ProtectedRoute
        exact
        path={RoutesName.favorites}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={Favorites}
      />

      <Route
        path={`${RoutesName.products}/:category/:subCategory`}
        exact
        render={({ match }) => {
          const { category, subCategory } = match.params;
          if (!mainCategory.find((el) => el.id === category)) {
            return <NoMatch />
          }
          return <Catalog assortment={subCategory} />
        }}
      />

      <Route
        path={`${RoutesName.products}/:categoryOrID`}
        render={({ match, location }) => {
          const { categoryOrID } = match.params;
          if (isNaN(categoryOrID)) {
            return <Catalog assortment={categoryOrID} />
          }
          const { pathname: url } = location;
          // console.log(url);
          return (
            <ProductPage
              itemNo={categoryOrID}
              itemUrl={url}
              assortment={categoryOrID}
            />
          )
        }}
      />
      <Route
        path={`${RoutesName.products}/search`}
        exact
        render={() => <Catalog assortment="cooking" />}
      />
      <Route path={RoutesName.orderConfirmation} component={CheckoutStatus} />
      <Route path={RoutesName.checkout} exact component={Checkout} />
      <Route path={RoutesName.cart} component={SummaryCart} />
      <Route path={RoutesName.aboutUs} component={AboutUs} />
      <Route path={RoutesName.delivery} component={Delivery} />
      <Route path={RoutesName.contacts} component={Contacts} />
      <AdminRoute
        exact
        path={RoutesName.adminHome}
        loggedIn={loggedIn}
        customer={customer}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={AdminHome}
      />
      <Route path={RoutesName.home} exact>
        <Home />
      </Route>
      <Route path={RoutesName.forbidden} exact>
        <Forbidden />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
