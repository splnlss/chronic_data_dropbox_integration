import React from 'react'
import './index.css'

export default function Header(){

  return <div> 
    <header>
      <div class="headerContainer">
        <div class="siteHeader_section">
          <h1><a id="title">Chronic Data</a></h1>
        </div>
        <div class="siteHeader_section">
         <nav>
          <ul>
           <li>
              <h4>
                <a href="/documents">Documents</a>
              </h4>
            </li>
            <li>
              <h4>
                <a href="/providers">Providers</a>
              </h4>
            </li>
            <li>
              <h4>
                <a href="/account">Account</a>
              </h4>
            </li>
            <li>
              <h4>
                <a href="/logout">Logout</a>
              </h4>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  </div>
}