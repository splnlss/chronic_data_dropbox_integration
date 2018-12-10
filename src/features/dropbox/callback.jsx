import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'

const APP_ID = process.env.REACT_APP_DROPBOX_APP_ID
const APP_SECRET = process.env.REACT_APP_DROPBOX_APP_SECRET
const REDIRECT_URI = process.env.REACT_APP_DROPBOX_CALLBACK_URL

function Callback({ persistDropboxToken, history: { push } }) {
  useEffect(() => {
    const authCode = queryString.parse(document.location.search).code
    const auth = Buffer.from(`${APP_ID}:${APP_SECRET}`).toString('base64')
    fetch("https://api.dropboxapi.com/oauth2/token", {
      body: `code=${authCode}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`,
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST"
      })
      .then(response =>  response.json())
      .then(json => {
        if (json.error) {
          alert(json.error_description)
          return
        }
        persistDropboxToken(json.access_token)
        push('/dashboard')
      })
  }, [])

  return <div />
}

function mapDispatchToProps(dispatch) {
  return {
    persistDropboxToken: (token) => {
      dispatch({ type: 'DROPBOX_AUTH', payload: token })
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Callback))