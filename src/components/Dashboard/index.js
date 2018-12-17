import React from 'react';

import { withAuthorization } from '../Session';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);