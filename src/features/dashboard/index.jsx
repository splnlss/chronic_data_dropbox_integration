import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadDropboxDb, persistDropboxFiles } from './api'

function Dashboard({ persistProviders, persistFiles, token }) {
  loadDropboxDb({persistProviders, token, next: () => {}})
  persistDropboxFiles({token, persistFiles})
  

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
      dispatch({ type: 'PERSIST_PROVIDERS', payload: providers })
    },
    persistFiles: (files) => {
      dispatch({ type: 'PERSIST_FILES', payload: files })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToproviders)(Dashboard) 