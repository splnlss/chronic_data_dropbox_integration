import React, {useState} from 'react'

export default function ProviderFinder({ provider, onProviderChange }){
  const [search, setSearch] = useState('')

  function handleChange(e){
    const field = e.target
    setSearch(field.value)
  }
  
  return <div>
    <div>
      <input type="text" name="search" value={search} onChange={handleChange} />
    </div>
    <div>
      {
        results.map(result => <div>
          { result }
        </div>)
      }
    </div>
  </div>

}