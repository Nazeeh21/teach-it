import React from 'react'
import ExpertLayout from '../../layout/ExpertLayout/index'
import GeneralSetting from '../../views/Settings/General'
import Service from '../../views/Settings/Service'

const Index = () => {
  return (<div>
    <ExpertLayout alternate>
      {/* <GeneralSetting /> */}
      <Service />
    </ExpertLayout>
  </div>)
}

export default Index