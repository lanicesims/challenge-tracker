import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

// We need to initialize the state so the form knows where to start
const INITIAL_STATE = {
  email:'',
  password:'',
  error: null,
}

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

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

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </FormGroup>

        {/* If there are any errors from sign up we need to hadle that */}
        { error &&
          <Alert color="danger">
          {error.message}
          </Alert>
        }

        <Button className="mt-2" disabled={isInvalid} type="submit">
          Sign In
        </Button>
      </Form>
    );
  }
}


const SignInLink = () => (
  <p className="mt-2">
    Already have an account? Dope! <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInForm;

export { SignInLink };
