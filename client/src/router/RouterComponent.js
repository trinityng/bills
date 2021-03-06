import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import RoutesComponent from './RoutesComponent';
import history from './History';

class RouterComponent extends Component {
  render() {
    const { user, plaid } = this.props || {};
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ''} history={history}>
        <div>
          <RoutesComponent user={user} plaid={plaid} />
        </div>
      </Router>
    );
  }
}
export default connect()(RouterComponent);
