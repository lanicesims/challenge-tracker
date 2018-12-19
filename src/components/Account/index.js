import React from 'react';
import { Container, Row, Col } from "reactstrap";

import { AuthUserContext, withAuthorization } from '../Session';
import PasswordChange from '../PasswordChange';
import User from './User';

class AccountPage extends React.Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Container>
            <Row className="text-center">
              <Col sm="12">
                <h1>Hey {authUser.email}! Your Account</h1>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col sm="12" md="8">
                <User />
                <PasswordChange />
              </Col>
            </Row>
          </Container>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
