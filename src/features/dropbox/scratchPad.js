get auth code: https://www.dropbox.com/oauth2/authorize?client_id=kn35fecyl6o0oyw&response_type=code&redirect_uri=http://127.0.0.1:3000/auth/dropbox/callback

get bearer token: 
curl -X POST curl https://api.dropboxapi.com/oauth2/token \
  -d code=72PUt06Us90AAAAAAAGGdmB-0fRopKRUzzz-JBgqPuo \
  -d grant_type=authorization_code \
  -d redirect_uri=http://127.0.0.1:3000/auth/dropbox/callback \
  -u kn35fecyl6o0oyw:kptqnjxbmkg457s

curl -X POST https://api.dropboxapi.com/2/files/create_folder_v2 \
  --header 'Authorization: Bearer 72PUt06Us90AAAAAAAGGdIuo45v6SL-4J-mVPJF6Hi5WjlsOjOR1s2WPeV0ULQBQ' \
  --header 'Content-Type: application/json' \
  --data '{"path":"/my-chronic-data-2","autorename":false}'
  