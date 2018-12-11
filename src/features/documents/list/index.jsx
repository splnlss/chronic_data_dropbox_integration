import React, { useState } from 'react'
import DropboxClient from '../../../modules/dropbox'

export default function Documents({ token }) {
  const [documents, setDocuments] = useState([])
  const dropbox = new DropboxClient(token)
  
  dropbox.documents().then((response) => {
    setDocuments(response.entries)
  }).catch(err => {
    debugger
  })

  return <div>
    <h1>Documents</h1>

    <table>
      <thead>
        <tr>
          <th>Filename</th>
        </tr>
      </thead>
      <tbody>
        {
          documents.map(document => <tr>
            <td>{document.name}</td>
            </tr>)
        }
      </tbody>
    </table>
  </div>
}