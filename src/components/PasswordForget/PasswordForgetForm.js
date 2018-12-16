import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  error: null
};

class PasswordForgetFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email Address"
          />
        </FormGroup>

        {/* If there are any errors from sign up we need to hadle that */}
        { error &&
          <Alert color="danger">
          {error.message}
          </Alert>
        }

        <Button disabled={isInvalid} type="submit">Reset My Password</Button>
      </Form>
    );
  }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForgetForm;

const PasswordForgetLink = () => (
  <p className="mt-2">
    Uh oh, forget your password? Pesky little things, that's ok. <Link to={ROUTES.PASSWORD_FORGET}>Reset it here.</Link>
  </p>
);

export { PasswordForgetLink };