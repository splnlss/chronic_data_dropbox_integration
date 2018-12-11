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

  db() {
    return this.client.filesListFolder({path: ''})
  }

  document(name) {
    this.documents()
    .then(response => {
      response.entities.find(document => document.filename)
    })
  }

}

export default DropboxClient 