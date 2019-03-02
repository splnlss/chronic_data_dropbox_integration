import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import DropboxLogin from './features/dropbox/login'
import DropboxLogout from './features/dropbox/logout'
import DropboxCallback from './features/dropbox/callback'
import Dashboard from './features/dashboard'
import Documents from './features/documents/list'
import Providers from './features/providers'
import requiresAuth from './components/requires-auth'

import Header from './components/header/'

import './app.css'
class App extends Component {
  render() {
    return <div>
      <Header />
      <main>
      <Switch>
        <Route path={`/login`} component={DropboxLogin} />
        <Route path={`/logout`} component={DropboxLogout} />
        <Route path={`/auth/dropbox/callback`} component={DropboxCallback} />
        <Route path={`/dashboard`} component={requiresAuth(<Dashboard />)} />
        <Route path={`/documents`} component={requiresAuth(<Documents token={this.props.dropboxToken} />)} />
        <Route path={`/providers`} component={requiresAuth(<Providers />)} />
      </Switch>
      </main>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    dropboxToken: state.dropbox.token
  }
}

export default withRouter(connect(mapStateToProps)(App))
