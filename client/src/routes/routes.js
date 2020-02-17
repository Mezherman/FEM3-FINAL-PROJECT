import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';
import AdminRoute from './adminRoute';
import Home from '../pages/home/home';
import Catalog from '../components/Catalog/catalog'
import ProductPage from '../components/Product-page/product-page'
import NoMatch from '../components/No-match/no-match'
import Cart from '../pages/cart/cart'
import RoutesName from '../routes-list';
import AboutUs from '../pages/about-us/about-us';
import Contacts from '../pages/contacts/contacts';
import SignUp from '../pages/registration/sign-up'
import Delivery from '../pages/delivery/delivery';
import Profile from '../pages/profile/profile';
import Favorites from '../pages/favourites/favorites'
import Checkout from '../pages/checkout/checkout';
import CheckoutStatus from '../components/Checkout/Status/status';
import Orders from '../pages/orders/orders';
import Forbidden from '../pages/forbidden/forbidden'
import AdminHome from '../components/Admin/Home/home'
import Login from '../pages/login/login';
import PaymentForm from '../components/Payment-form/payment-form';

export default function Routes() {
  const { loggedIn, customer } = useSelector((state) => state.user);
  const [protectedClosing, setProtectedClosing] = useState(false);
  const mainCategory = useSelector((state) => state.categoriesReducer.catalog.mainCategories);
  const [modalIsVisible, setModalVisibility] = useState(!loggedIn);
  const closeModal = () => {
    setModalVisibility(false);
  };

  if (!loggedIn && !modalIsVisible) {
    setModalVisibility(true);
    setProtectedClosing(true)
  }

  useEffect(() => () => setProtectedClosing(false));

  return (
    <Switch>
      <Route path={RoutesName.signUp} component={SignUp} />
      <Route
        path={RoutesName.login}
        render={() => <Login visible={modalIsVisible} close={closeModal} />}
      />
      {protectedClosing && <Redirect to={RoutesName.home} />}
      <ProtectedRoute
        exact
        path={RoutesName.personalData}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={Profile}
      />
      <ProtectedRoute
        exact
        path={RoutesName.myOrders}
        loggedIn={loggedIn}
        closeModal={closeModal}
        modalIsVisible={modalIsVisible}
        component={Orders}
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
          return (
            <ProductPage
              itemNo={categoryOrID}
              itemUrl={url}
              assortment={categoryOrID}
            />
          )
        }}
      />
      <Route path={RoutesName.orderConfirmation} component={CheckoutStatus} />
      <Route path={RoutesName.checkout} exact component={Checkout} />
      <Route path={RoutesName.cart} component={Cart} />
      <Route path={RoutesName.aboutUs} component={AboutUs} />
      <Route path={RoutesName.delivery} component={Delivery} />
      <Route path={RoutesName.contacts} component={Contacts} />
      {/*<Route path={RoutesName.payment} component={PaymentForm} />*/}
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
