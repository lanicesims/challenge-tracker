import React from 'react';
import { Container, Row, Col } from "reactstrap";

import SignInForm from './SignInForm';
import { SignUpLink } from '../SignUp/SignUpForm';
import { PasswordForgetLink } from '../PasswordForget/PasswordForgetForm';

const SignInPage = () => (
  <Container>
    <Row className="text-center">
      <Col sm="12">
        <h1>Sign In to Your Dashboard</h1>
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col sm="12" md="8">
        <p>Have an account? Sign in below.</p>
        <SignInForm />
        <SignUpLink />
        <PasswordForgetLink />
      </Col>
    </Row>
  </Container>
)

export default SignInPage;