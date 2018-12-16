import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const NavigationAuth = () => (
  <React.Fragment>
    <NavItem>
      <NavLink tag={Link} to={ROUTES.DASHBOARD}>
        Dashboard
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to={ROUTES.ACCOUNT}>
        Account
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to={ROUTES.ADMIN}>
        ADMIN
      </NavLink>
    </NavItem>
    <NavItem>
      <SignOutButton />
    </NavItem>
  </React.Fragment>
);

const NavigationNonAuth = () => (
  <React.Fragment>
    <NavItem>
      <NavLink tag={Link} to={ROUTES.SIGN_IN}>
        Sign In
      </NavLink>
    </NavItem>
  </React.Fragment>
);

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to={ROUTES.LANDING}>
          Challenge Tracker
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <AuthUserContext.Consumer>
              {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
              }
            </AuthUserContext.Consumer>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
