import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import CreateService from '../../views/Expert/CreateService'
import Steps from '../../components/VerticalSteps'
import { useSelector } from 'react-redux'

const items = ['Details', 'Schedule', 'Fees', 'Audience']

const Index = () => {
  let activeStep = useSelector((state) => state.createService.activeStep)

  return (
    <LayoutProvider
      rightContent={<Steps items={items} activeStep={activeStep} />}
    >
      <CreateService />
    </LayoutProvider>
  )
}

export default Index
