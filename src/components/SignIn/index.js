import React from 'react';
import { Container, Row, Col } from "reactstrap";

import SignInForm from './SignInForm';
import { SignUpLink } from '../SignUp/SignUpForm';

const SignInPage = () => (
  <Container>
    <Row className="text-center">
      <Col sm="12">
        <h1>Sign In to Your Dashboard</h1>
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col sm="12" md="6">
        <p>Have an account? Sign in below.</p>
        <SignInForm />
        <SignUpLink />
      </Col>
    </Row>
  </Container>
)

export default SignInPage;