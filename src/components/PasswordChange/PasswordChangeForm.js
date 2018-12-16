import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class PasswordChangeFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '' || passwordTwo === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="passwordOne">New Password</Label>
          <Input
            type="password"
            name="passwordOne"
            id="passwordOne"
            placeholder="Enter New Password"
            value={passwordOne}
            onChange={this.onChange}
            valid={isInvalid}
          />
        </FormGroup>

        <FormGroup>
          <Label for="passwordTwo">Confirm New Password</Label>
          <Input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            placeholder="Confirm New Password"
            value={passwordTwo}
            onChange={this.onChange}
          />
        </FormGroup>

        {/* If there are any errors from sign up we need to hadle that */}
        {error && <Alert color="danger">{error.message}</Alert>}

        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>
      </Form>
    );
  }
}

const PasswordChangeForm = withFirebase(PasswordChangeFormBase);

export default PasswordChangeForm;
