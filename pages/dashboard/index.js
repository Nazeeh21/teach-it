import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import ExpertDashboard from '../../views/ExpertDashboard'

const Index = () => {
  return (
    <LayoutProvider>
      <ExpertDashboard />
    </LayoutProvider>
  )
}

export default Index
