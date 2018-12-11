export default function authorize({authCode, credentials, redirectUri, persistDropboxToken, next}) {
  fetch("https://api.dropboxapi.com/oauth2/token", {
    body: `code=${authCode}&grant_type=authorization_code&redirect_uri=${redirectUri}`,
    headers: {
      Authorization: `Basic ${credentials}`,
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
      next()
    })
  }