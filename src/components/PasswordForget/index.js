import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import PasswordForgetForm from './PasswordForgetForm';

const PasswordForgetPage = () => (
  <Container>
    <Row className="text-center">
      <Col sm="12">
        <h1>Reset Your Password</h1>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col sm="12" md="8">
        <p>
          We've all been here before, forgetting passwords. Just put in your
          email below and we'll get you hooked up with a chance to put in a new
          password.
        </p>
        <PasswordForgetForm />
      </Col>
    </Row>
  </Container>
);

export default PasswordForgetPage;
