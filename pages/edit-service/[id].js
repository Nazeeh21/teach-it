import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import EditService from '../../views/EditService'

const Index = () => {
  return (
    <LayoutProvider>
      <EditService />
    </LayoutProvider>
  )
}

export default Index
