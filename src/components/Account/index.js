import React from 'react';

import PasswordChange from '../PasswordChange';

class AccountPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Account</h1>
        <PasswordChange />
      </div>
    );
  }
}

export default AccountPage;