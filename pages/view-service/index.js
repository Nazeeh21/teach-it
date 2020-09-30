import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import ViewService from '../../views/Common/ViewService/ViewService'
import ExpertOverview from '../../views/Common/ViewService/ExpertOverview/ExpertOverview'

const Index = () => {
  return (
    <LayoutProvider rightContent={<ExpertOverview />}>
      <ViewService />
    </LayoutProvider>
  )
}

export default Index
