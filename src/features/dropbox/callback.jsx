import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'
import Cookies from 'js-cookie'

import authorize from './authorize'

const APP_ID = process.env.REACT_APP_DROPBOX_APP_ID
const APP_SECRET = process.env.REACT_APP_DROPBOX_APP_SECRET
const REDIRECT_URI = process.env.REACT_APP_DROPBOX_CALLBACK_URL

function Callback({ persistDropboxToken, history: { push } }) {
  useEffect(() => {
    const authCode = queryString.parse(document.location.search).code
    const credentials = Buffer.from(`${APP_ID}:${APP_SECRET}`).toString('base64')
    authorize({
      authCode,
      credentials,
      redirectUri: REDIRECT_URI, 
      persistDropboxToken,
      next: () => push('/dashboard')
    })
  }, [])

  return <div />
}

function mapDispatchToProps(dispatch) {
  return {
    persistDropboxToken: (token) => {
      Cookies.set('dropboxToken', token)
      dispatch({ type: 'DROPBOX_AUTH', payload: token })
    },
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Callback))