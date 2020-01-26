import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
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
import EditPersonalData from './components/My-account/edit-personal-data';
import PersonalData from './components/My-account/personal-data';
import LoginModal from './components/Login-modal-window/login-modal-window';
import EditFormWithValidation from './components/My-account/edit-form-with-validation'
import MyForm from './components/My-account/form-mui-valid'

export default function Routes() {
  // const history = useHistory();
  // const user = useSelector((state) => state.userReducer);
  // const [modalIsVisible, setModalVisibility] = useState(true);
  // const { loggedIn } = useSelector((state) => state.userReducer);
  // let closeModal = null;
  // if(ifloggedIn){
  //    const closeModal = () => {
  //     console.log('close modal');
  //     setModalVisibility(false);
  //   };
  const { loggedIn } = useSelector((state) => state.userReducer);
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
      <Route
        path={RoutesName.personalData}
        render={() => (
          loggedIn
            ? (
              <PersonalData isLoggedIn={loggedIn} />
            )
          //
            : (
              <div>
                <Home />
                <LoginModal
                  isLoggedIn={loggedIn}
                  // isLoggedIn={()=>{loggedIn(loggedIn)}}
                  // onSuccessLogin={onSuccessLogin}
                  onModalClose={closeModal}
                  // onModalClose={ closeModal}
                  // onModalCloseBack={closeModalFromBack}
                  open={modalIsVisible}
                />
              </div>
            )
        )}
      />

      {/* <Route */}
      {/*  path={RoutesName.products} */}
      {/*  exact */}
      {/*  render={() => { */}
      {/*    return <Catalog category='all' /> */}
      {/*  }} */}
      {/* /> */}
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
          // console.log(id);
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
      <Route path={RoutesName.cart} component={SummaryCart} />
      <Route path={RoutesName.editPersonalData} component={EditPersonalData} />
      <Route path={RoutesName.aboutUs} component={AboutUs} />
      <Route path={RoutesName.delivery} component={Delivery} />
      <Route path={RoutesName.contacts} component={Contacts} />
      <Route path="/edit" component={EditFormWithValidation} />
      <Route path="/edit-mui" component={MyForm} />

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
