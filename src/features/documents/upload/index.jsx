import React, {useState} from 'react'
import ProviderFinder from '../../provider-finder'

const initialState = {
  document: null,
  provider: null
}

export default function UploadDocument(){
  const [state, setState] = useState(initialState)
  
  function handleProviderChange(provider){
    setState(prevState => ({
      ...prevState,
      provider
    }))
  }

  return <div>
    <h1>Upload Document</h1>
    <ProviderFinder provider={state.provider} onProviderChange={handleProviderChange} />
  </div>

}