import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import DropboxLogin from './features/dropbox/login'
import DropboxCallback from './features/dropbox/callback'
import Dashboard from './features/dashboard'
import requiresAuth from './components/requires-auth'

class App extends Component {
  render() {
    return <div>
      <Switch>
        <Route path={`/login`} component={DropboxLogin} />
        <Route path={`/auth/dropbox/callback`} component={DropboxCallback} />
        <Route path={`/dashboard`} component={requiresAuth(<Dashboard />)} />
      </Switch>
    </div>
  }
}

export default App;
