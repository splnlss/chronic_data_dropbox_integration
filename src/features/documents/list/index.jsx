import React, { useState, useEffect } from 'react'
import DropboxClient from '../../../modules/dropbox'
import { Document } from 'react-pdf'

export default function Documents({ token }) {
  const [documents, setDocuments] = useState([])
  const dropbox = new DropboxClient(token)
    
  useEffect(() => {
    dropbox.documents().then((response) => {
      response.entries.forEach(entry => {
          return dropbox.document(entry.path_lower).then(response => {
            setDocuments(prevState => ([
              ...prevState,
              {
                name: entry.name,
                path: entry.path_lower,
                contents: response
              }
            ]))
          })
       })
    })
  }, [])


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
            <td>
              { document.path } - {document.name}
              <iframe src={document.contents} />
            </td>
  
          </tr>)
        }
      </tbody>
    </table>
  </div>
}