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

function getFileContents(path, client) {
  return new Promise((resolve, reject) => {
    client.filesDownload({path})
    .then(function(response) {
        var blob = response.fileBlob;
        var reader = new FileReader();
        reader.addEventListener("loadend", function() {
            resolve(reader.result)
        });
        reader.readAsText(blob);
    })
    .catch(err => reject(err))
  })
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
    return getFileContents(path, this.client)
  }

}

export default DropboxClient 