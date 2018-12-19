import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

// We need to initialize the state so the form knows where to start
const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        // route the user to their dashboard once the sign in is successful
        this.props.history.push(ROUTES.DASHBOARD);
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
    const { email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={this.onChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="passwordOne">Password</Label>
          <Input
            type="password"
            name="passwordOne"
            id="passwordOne"
            placeholder="Password"
            value={passwordOne}
            onChange={this.onChange}
            valid={isInvalid}
          />
        </FormGroup>

        <FormGroup>
          <Label for="passwordTwo">Confirm Password</Label>
          <Input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            placeholder="Confirm Password"
            value={passwordTwo}
            onChange={this.onChange}
          />
        </FormGroup>

        {/* If there are any errors from sign up we need to hadle that */}
        { error &&
          <Alert color="danger">
          {error.message}
          </Alert>
        }

        <Button className="mt-2" disabled={isInvalid} type="submit">
          Sign Up
        </Button>
      </Form>
    );
  }
}

const SignUpLink = () => (
  <p className="mt-2">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpForm;

export { SignUpLink };
