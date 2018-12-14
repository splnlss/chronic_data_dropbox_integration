import React, {Fragment, useState} from 'react'

function ProviderRow({ provider }){
  return <Fragment>
    <td>{ provider.name }</td>
    <td>{ provider.type }</td>
    <td>{ provider.phone }</td>
    <td>{ provider.address }</td>
    <td>{ provider.email }</td>
  </Fragment>

}

export default function ProviderFinder({ providers, onProviderChange }){
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState()

  function handleChange(e){
    const field = e.target
    setSearch(field.value)
  }

  function filterResults(providers) {
    return providers.filter(provider => provider.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
  }

  function selectProvider(i) {
    setSelectedIndex(i)
    onProviderChange(providers[i])
  }
  
  return <div>
    <div>
      <input type="text" name="search" value={search} onChange={handleChange} placeholder="Search for providers here" style={{ width: "100%", padding: '8px'}} />
    </div>
    <table width="100%" cellSpacing={0}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {
        filterResults(providers).map((provider, i) => <tr
          onClick={() => selectProvider(i)}
          style={{ backgroundColor: i === selectedIndex ? 'lightgreen' : 'transparent' }}
        >
          <ProviderRow provider={provider} />
        </tr>)
      }
      </tbody>
    </table>
  </div>

}