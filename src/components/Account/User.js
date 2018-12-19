import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { withFirebase } from '../Firebase';

// We need to initialize the state so the form knows where to start
const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  error: null,
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { firstName, lastName } = this.state;

    this.props.firebase.db
      .collection('users')
      .add({
        firstName: firstName,
        lastName: lastName
      })
      .then((docRef) => {
        console.log('Document written at ID: ', docRef.id);
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
    const { firstName, lastName, error } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        {/* If there are any errors from sign up we need to hadle that */}
        {error && <Alert color="danger">{error.message}</Alert>}

        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.onChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.onChange}
          />
        </FormGroup>

        <Button className="mt-2" type="submit">
          Update Profile
        </Button>
      </Form>
    );
  }
}

const User = compose(
  withRouter,
  withFirebase
)(UserForm);

export default User;
