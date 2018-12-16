import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import PasswordChangeForm from './PasswordChangeForm';

const PasswordChangePage = () => (
  <Container>
    <Row className="text-center">
      <Col sm="12">
        <h1>Change your Password</h1>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col sm="12" md="8">
        <p>
          <strong>New password, who dis?</strong>
          <br/>
          Change your password below and be on your way
        </p>
        <PasswordChangeForm />
      </Col>
    </Row>
  </Container>
);

export default PasswordChangePage;
