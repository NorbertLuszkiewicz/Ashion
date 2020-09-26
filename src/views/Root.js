import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import { routes } from 'routes';
import HomePage from './HomePage';
import CartPage from './CartPage';
import WomenPage from './WomenPage';
import ContactPage from './ContactPage';

const Root = () => (
  <BrowserRouter>
    <UserPageTemplate>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.cart} component={CartPage} />
        <Route exact path={routes.women} component={WomenPage} />
        <Route exact path={routes.contact} component={ContactPage} />
      </Switch>
    </UserPageTemplate>
  </BrowserRouter>
);

export default Root;
