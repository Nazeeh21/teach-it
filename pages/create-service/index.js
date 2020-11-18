import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import CreateService from '../../views/Expert/CreateService'
import Steps from '../../components/VerticalSteps'

const items = ['Details', 'Schedule', 'Fees', 'Audience']

const Index = () => {
  return (
    <LayoutProvider rightContent={<Steps items={items} activeStep={3} />}>
      <CreateService />
    </LayoutProvider>
  )
}

export default Index
