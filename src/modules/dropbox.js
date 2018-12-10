import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch'

class DropboxClient {
  constructor(token) {
    this.token = token
    this.client = this.configureClient()
  }
  
  configureClient() {
    const client = new Dropbox({ clientId: process.env.REACT_APP_DROPBOX_APP_ID, fetch })
    client.setAccessToken(this.token)
    return client
  }

  documents() {
    return this.client.filesListFolder({path: '/documents'})
  }

  document(name) {
    this.documents().find(document => document.filename)
  }

  db() {

  }
}

export default DropboxClient 