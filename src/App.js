import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import DropboxLogin from './features/dropbox/login'
import DropboxCallback from './features/dropbox/callback'
import Dashboard from './features/dashboard'
import Documents from './features/documents/list'
import requiresAuth from './components/requires-auth'

class App extends Component {
  render() {
    return <div>
      <Switch>
        <Route path={`/login`} component={DropboxLogin} />
        <Route path={`/auth/dropbox/callback`} component={DropboxCallback} />
        <Route path={`/dashboard`} component={requiresAuth(<Dashboard />)} />
        <Route path={`/documents`} component={requiresAuth(<Documents token={this.props.dropboxToken} />)} />
      </Switch>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    dropboxToken: state.dropbox.token
  }
}

export default withRouter(connect(mapStateToProps)(App))
