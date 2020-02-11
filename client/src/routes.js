import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog'
import ProductPage from './components/Product-page/product-page'
import NoMatch from './components/No-match/no-match'
import SummaryCart from './components/Summary-cart/summary-cart'
import RoutesName from './routes-list';
import AboutUs from './components/About-us/about-us';
import Contacts from './components/Contacts/contacts';
import SignUp from './components/SignUp/sign-up'
import Delivery from './components/Delivery/delivery';
import PersonalData from './components/My-account/Personal-data/personal-data';
import LoginModal from './components/Login-modal-window/login-modal-window';
import Favorites from './components/Favorites/favorites'
import Checkout from './components/Checkout/checkout';
import CheckoutStatus from './components/Checkout/Status/status';
import CustomerOrders from './components/My-account/Customer-orders/customer-orders';

export default function Routes() {
  const { loggedIn } = useSelector((state) => state.user);
  const history = useHistory();
  const [modalIsVisible, setModalVisibility] = useState(!loggedIn);
  const { registration } = useSelector((state) => state.user);
  const closeModal = () => {
    setModalVisibility(false);
  };

  if (!loggedIn && !modalIsVisible) {
    if (registration) {
      setModalVisibility(true);
    } else {
      setModalVisibility(true);
      history.push(RoutesName.home);
    }
  }

  const loginForPrivatPages = () => (
    <div>
      <Home />
      <LoginModal
        isLoggedIn={loggedIn}
        onModalClose={closeModal}
        open={modalIsVisible}
      />
    </div>
  );

  return (
    <Switch>
      <Route path={RoutesName.signUp} component={SignUp} />
      <Route
        path={RoutesName.login}
        render={loginForPrivatPages}
      />
      <Route
        path={RoutesName.personalData}
        render={() => (loggedIn ? <PersonalData isLoggedIn={loggedIn} /> : loginForPrivatPages())}
      />
      <Route
        path={RoutesName.myOrders}
        render={() => (loggedIn ? <CustomerOrders isLoggedIn={loggedIn} /> : loginForPrivatPages())}
      />
      <Route
        path={`${RoutesName.products}/cooking/:subCategory`}
        exact
        render={({ match }) => {
          const { subCategory } = match.params;
          return <Catalog assortment={subCategory} />
        }}
      />
      <Route
        path={`${RoutesName.products}/preparing/:subCategory`}
        exact
        render={({ match }) => {
          const { subCategory } = match.params;
          return <Catalog assortment={subCategory} />
        }}
      />
      <Route
        path={`${RoutesName.products}/dining/:subCategory`}
        exact
        render={({ match }) => {
          const { subCategory } = match.params;
          return <Catalog assortment={subCategory} />
        }}
      />
      <Route
        path={`${RoutesName.products}/drinking/:subCategory`}
        exact
        render={({ match }) => {
          const { subCategory } = match.params;
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
        path={RoutesName.favorites}
        render={() => (loggedIn ? <Favorites /> : loginForPrivatPages())}
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
