import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import Dashboard from '../Dashboard';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles';

const App = () => (
  <Router>
    <React.Fragment >
      <Navigation />

      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
     
    </React.Fragment>
  </Router>
);

export default App;