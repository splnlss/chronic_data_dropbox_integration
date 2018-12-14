import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch'


function getPreviewer(path, client) { 
  const ext = `.${path.split('.').reverse()[0]}`
  const extensions = ".csv, .ods, .xls, .xlsm, .xlsx, .ai, .doc, .docm, .docx, .eps, .odp, .odt, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .rtf".split(', ')
  if (extensions.includes(ext)) {
    return client.filesGetPreview({path})
  } else {
    return client.filesGetThumbnail({path})
  }
}
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

  document(path) {
    return getPreviewer(path, this.client).then(response => {
      var blob = response.fileBlob
      return new Promise((resolve, reject) => {
        var reader = new FileReader()
        reader.onload = resolve
        reader.readAsDataURL(blob)
      })
    })
  }

}

export default DropboxClient 