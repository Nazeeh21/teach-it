import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import ViewService from '../../views/Common/ViewService/ViewService'

const Index = () => {
  return (
    <LayoutProvider>
      <ViewService />
    </LayoutProvider>
  )
};

export default Index;