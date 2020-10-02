import React from 'react'
import ExpertLayout from '../../layout/ExpertLayout/index'
import AppSettings from '../../views/Settings/App'
import GeneralSetting from '../../views/Settings/General'
import Service from '../../views/Settings/Service'

const Index = () => {
  return (<div>
    <ExpertLayout alternate>
      {/* <GeneralSetting /> */}
      {/* <ProfileSetting /> */}
      <AppSettings />
    </ExpertLayout>
  </div>)
}

export default Index