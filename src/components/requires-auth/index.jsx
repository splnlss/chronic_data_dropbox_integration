import React from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

function NotAuthorized() {
  return <div>
    <h1>You are not authorized to see this page</h1>
    <Link to={`/login`}>Please log in with Dropbox first!</Link>
  </div>
}

export default function requiresAuth(WrappedComponent) {
  const token = Cookies.get('dropboxToken')
  return function() {
    return token ? WrappedComponent : <NotAuthorized />
  }
}