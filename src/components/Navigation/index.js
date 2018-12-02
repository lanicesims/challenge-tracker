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

export default class Navigation extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to={ROUTES.LANDING}>
            Challenge Tracker
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to={ROUTES.SIGN_IN}>
                  Sign In
                </NavLink>
              </NavItem>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
