import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import ProviderInvite from '../../views/Invite/Provider'

const Index = () => {
  return (
    <LayoutProvider>
      <ProviderInvite />
    </LayoutProvider>
  )
}

export default Index
