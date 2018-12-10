import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return <div>
    Welcome to Chronic Data!
    <ul>
      <li><Link to={`/documents`}>Documents</Link></li>
    </ul>
  </div>
}