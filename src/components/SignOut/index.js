import React from 'react';
import { Button } from 'reactstrap';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => {
  return <Button onClick={firebase.doSignOut}>Sign Out</Button>;
};

export default withFirebase(SignOutButton);
