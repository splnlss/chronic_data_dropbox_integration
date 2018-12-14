import DropboxClient from '../../modules/dropbox'

export function loadDropboxDb({ persistProviders, token, next }) {
  const dropbox = new DropboxClient(token)
  dropbox.db().then(response => {
    debugger
  })
}

export function persistDropboxFiles({ token, persistFiles }) {
  const dropbox = new DropboxClient(token)
  dropbox.documents().then((response) => {
    persistFiles(response.entries.map(entry => ({
      type: entry['.tag'],
      id: entry.id.replace(/^id:/, ""),
      name: entry.name,
      path: entry.path_lower,
    })))
  }).catch(err => {
    debugger
  })
}
