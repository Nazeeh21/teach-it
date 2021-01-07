import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import RegisterProvider from '../../views/RegisterProvider'

const Index = () => {
  return (
    <LayoutProvider>
      <RegisterProvider />
    </LayoutProvider>
  )
}

export default Index
