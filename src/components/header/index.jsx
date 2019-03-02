import React from 'react'
import './index.css'
import { Link } from 'memfs/lib/node';

export default function Header(){
  const links = [
    {name: 'Documents', url: '/documents'},
    {name: 'Providers', url: '/providers'},
    {name: 'Account', url: '/account'},
    {name: 'Logout', url: '/logout'}
  ]

  const renderedLinks = links.map(link => {
    return (
      <li>
        <a href={link.url}>{link.name}</a>
      </li>
    )
  })

  return <div> 
    <header>
      <div className="headerContainer">
        <div className="siteHeader_section">
          <h1><a id="title">Chronic Data</a></h1>
        </div>
        <div className="siteHeader_section">
         <nav>
          <ul>
            {renderedLinks}
          </ul>
        </nav>
        </div>
      </div>
    </header>
  </div>
}