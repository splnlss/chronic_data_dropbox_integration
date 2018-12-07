import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

const APP_ID = process.env.REACT_APP_DROPBOX_APP_ID

export default function Callback(props) {
  const [authCode, setAuthCode] = useState()
  const [token, setToken] = useState()

  useEffect(() => {
    setAuthCode(queryString.parse(document.location.search).code)
  }, [])

  useEffect(() => {
    const auth = Buffer.from(APP_ID).toString('base64')
    fetch("https://api.dropboxapi.com/oauth2/token", {
      body: `code=${authCode}&grant_type=authorization_code`,
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
        setToken(json.access_token)
      })
  }, [ authCode ])

  return <div>

  </div>
}