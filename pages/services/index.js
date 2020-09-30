import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import MyServices from '../../views/Common/MyServices/MyServices'

const Index = () => {
  return (
    <LayoutProvider>
      <MyServices />
    </LayoutProvider>
  )
};

export default Index;