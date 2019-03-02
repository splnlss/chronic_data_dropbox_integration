import React, { useEffect } from 'react'
import { withRouter, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

export default function Logout(){
  Cookies.set('dropboxToken', '')
  return <Redirect to='/login' /> 
}