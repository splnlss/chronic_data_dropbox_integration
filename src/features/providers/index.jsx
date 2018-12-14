import React, { useState } from 'react'
import {connect} from 'react-redux'


import ProviderFinder from "../../components/provider-finder"


function Providers({providers}){
  const [selectedProvider, setSelectedProvider] = useState()

  function onProviderChange(provider) {
    setSelectedProvider(provider)
  }

  if (selectedProvider) {
    document.location.href=`mailto:${selectedProvider.email}`
  }
  return <div>
    <ProviderFinder providers={providers} onProviderChange={onProviderChange} />
  </div>
}

function mapStateToProps(state){
  return {
    providers: state.providers
  }
}

export default connect(mapStateToProps)(Providers)