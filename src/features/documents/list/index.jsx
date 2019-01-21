import React, { useState, useEffect } from 'react'
import DropboxClient from '../../../modules/dropbox'
import { Document, Page } from 'react-pdf';

export default function Documents({ token }) {
  const [documents, setDocuments] = useState([])
  const [preview, setPreview] = useState()
  const dropbox = new DropboxClient(token)
    
  useEffect(() => {
    dropbox.documents().then((response) => {
      setDocuments(response.entries)
    })
  }, [])

  function viewFileContents(path) {
    dropbox.document(path).then(response => {
      setPreview(response.currentTarget.result)

    })
  }

  return <div>
    <h1>Documents</h1>

    <iframe src={preview} />

    <table>
      <thead>
        <tr>
          <th>Filename</th>
        </tr>
      </thead>
      <tbody>
      
        {
          documents.map(document => <tr>
            <td>
              { document.lower_path }
            <Document
                  file={document.lower_path}
                >
                  <Page pageNumber={1} />
            </Document>
            {document.name}</td>
            {/* <td onClick={() => viewFileContents(document.path_lower)}>{document.name}</td> */}
          </tr>)
        }
      </tbody>
    </table>
  </div>
}