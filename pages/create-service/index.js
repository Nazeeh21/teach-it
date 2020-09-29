import React from 'react'
import ExpertLayout from '../../views/Expert/ExpertLayout'
import CreateService from '../../views/Expert/CreateService'
import Steps from '../../components/VerticalSteps'

const items = ['Details', 'Schedule', 'Fees', 'Audience']

const Index = () => {
  return (
    <ExpertLayout rightContent={<Steps items={items} activeStep={3} />}>
      <CreateService />
    </ExpertLayout>
  )
};

export default Index;