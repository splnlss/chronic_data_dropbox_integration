import React from 'react'

const APP_ID = process.env.REACT_APP_DROPBOX_APP_ID

export default function Login(props) {
  return <div>
    <a
      href={`https://www.dropbox.com/oauth2/authorize?client_id=${APP_ID}&response_type=code&redirect_uri=http://127.0.0.1:3000/auth/dropbox/callback`}
    >Log in to dropbox</a>
  </div>
}