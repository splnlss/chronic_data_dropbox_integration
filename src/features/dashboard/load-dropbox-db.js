import DropboxClient from '../../modules/dropbox'

export default function loadDropboxDb({ persistProviders, token, next }) {
  const dropbox = new DropboxClient(token)
  dropbox.db().then(response => {
    debugger
  })
  
  
}