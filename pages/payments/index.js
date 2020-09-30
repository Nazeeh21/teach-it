import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import Payments from '../../views/Common/Payments'

const Index = () => {
  return (
    <LayoutProvider>
      <Payments />
    </LayoutProvider>
  )
};

export default Index;