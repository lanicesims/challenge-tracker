import React from 'react';
import { Container, Row, Col } from "reactstrap";

import SignUpForm from './SignUpForm';
import { SignInLink } from '../SignIn/SignInForm';

const SignUpPage = () => (
  <Container>
    <Row className="text-center">
      <Col sm="12">
        <h1>Sign Up for the Challenge Tracker</h1>
      </Col>
      <Col sm="12">
        <p>Create an account below by choosing a username, password and entering your email address.</p>
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col sm="12" md="6">
        <SignUpForm />
        <SignInLink />
      </Col>
    </Row>
  </Container>
);

export default SignUpPage;