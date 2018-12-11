import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import loadDropboxDb from './load-dropbox-db'

function Dashboard({ persistProviders, token }) {
  loadDropboxDb({persistProviders, token, next: () => {}})
  return <div>
    Welcome to Chronic Data!
    <div>auth token: { token }</div>
    <ul>
      <li><Link to={`/documents`}>Documents</Link></li>
    </ul>
  </div>
}

function mapStateToProps(state) {
  return {
    token: state.dropbox.token
  }
}

function mapDispatchToproviders(dispatch) {
  return {
    persistProviders: (providers) => {
      dispatch({ type: 'SAVE_PROVIDERS', payload: providers })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToproviders)(Dashboard) 